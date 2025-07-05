pipeline {
    agent any

    options {
        timeout(time: 20, unit: 'MINUTES')
        timestamps()
    }

    environment {
        DOCKER_IMAGE = "refillhealth/mvp-web-ui"
        DOCKER_TAG = "latest"
        DEPLOY_HOST = "159.65.147.52"
        CONTAINER_NAME = "mvp-web-ui"
        HOST_PORT = "3000"
    }

    tools {
        nodejs "nodejs-18"
    }

    stages {
        stage('Setup') {
            steps {
                sh '''
                    echo "Node.js version:"
                    node --version
                    echo "NPM version:"
                    npm --version
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    npm ci
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                    npm run build
                    ls -la dist/
                '''
            }
        }

        stage('Docker Build & Push') {
            environment {
                DOCKER_CREDS = credentials('dockerhub-credentials')
            }
            steps {
                sh '''
                    echo "$DOCKER_CREDS_PSW" | docker login -u "$DOCKER_CREDS_USR" --password-stdin
                    docker build -t $DOCKER_IMAGE:$DOCKER_TAG .
                    docker push $DOCKER_IMAGE:$DOCKER_TAG
                    docker logout
                '''
            }
        }

        stage('Deploy') {
            environment {
                DOCKER_CREDS = credentials('dockerhub-credentials')
                DEPLOY_CREDS = credentials('deploy-server-credentials')
            }
            steps {
                script {
                    writeFile file: 'deploy.sh', text: '''#!/bin/bash
set -e
docker login -u $1 -p $2
docker pull $3:$4
docker stop $5 || true
docker rm $5 || true
docker run -d --name $5 -p $6:80 --restart unless-stopped $3:$4
docker logout
'''
                    sh '''
                        chmod +x deploy.sh
                        sshpass -p "$DEPLOY_CREDS_PSW" scp -o StrictHostKeyChecking=no deploy.sh $DEPLOY_CREDS_USR@$DEPLOY_HOST:/tmp/
                        sshpass -p "$DEPLOY_CREDS_PSW" ssh -o StrictHostKeyChecking=no $DEPLOY_CREDS_USR@$DEPLOY_HOST \
                            "bash /tmp/deploy.sh '$DOCKER_CREDS_USR' '$DOCKER_CREDS_PSW' '$DOCKER_IMAGE' '$DOCKER_TAG' '$CONTAINER_NAME' '$HOST_PORT' && rm /tmp/deploy.sh"
                    '''
                }
            }
        }
    }

    post {
        always {
            sh 'rm -f deploy.sh || true'
        }
        success {
            echo '=== Pipeline Succeeded ==='
            echo "Application should be available at http://${DEPLOY_HOST}:${HOST_PORT}"
        }
        failure {
            echo '=== Pipeline Failed ==='
        }
    }
} 