# Multi-stage build for Vite React application
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vite React application for production
RUN npm run build

# Use Nginx to serve the application
# Use the official Nginx image as the base image for the production stage
FROM nginx:alpine

# Set the working directory in the container
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application from the build stage to the Nginx HTML directory
# The dist folder is created during the Vite build process
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Build the Docker image using the following command:
# docker build -t mvp-web-ui .
# Run the Docker container using the following command:
# docker run -d -p 3000:80 mvp-web-ui
# The application will be accessible at http://localhost:3000

