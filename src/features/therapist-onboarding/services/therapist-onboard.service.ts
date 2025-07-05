// Types for therapist onboarding
export interface TherapistDocument {
  documentType: string;
  documentName: string;
  degreeAssociated: string;
  filePath: string;
  blobId: string;
  fileSize: string;
  contentType: string;
  uploadDate: string;
}

export interface TherapistApplication {
  name: string;
  email: string;
  country: string;
  countryCode: string;
  phoneNumber: string;
  state: string;
  city: string;
  linkedinProfile?: string;
  howDidYouHear?: string;
}

export interface UploadResponse {
  filename: string;
  size: string;
  objectKey: string;
  expirationTime: string;
  presignedUrl: string;
  'original-filename': string;
  'upload-timestamp': string;
  accessDomain: string;
}

export interface DocumentUploadResponse {
  data: UploadResponse[];
  message: string;
  success: boolean;
  status: number;
  timestamp: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Base API configuration
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api/v1';
const API_BASE_URL = 'http://localhost:8080/api/v1';

// Helper function for API calls
const apiCall = async <T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    };
  }
};

// Helper function to upload file to S3 using presigned URL
const uploadToS3 = async (
  presignedUrl: string,
  file: File,
  metadata: {
    filename: string;
    originalFilename: string;
    size: string;
    'upload-timestamp': string;
    objectKey: string;
  }
): Promise<boolean> => {
  try {
    const response = await fetch(presignedUrl, {
      method: 'PUT',
      headers: {
        'content-type': file.type,
        'x-amz-meta-filename': metadata.filename,
        'x-amz-meta-original-filename': metadata.originalFilename,
        'x-amz-meta-size': metadata.size,
        'x-amz-meta-upload-timestamp': metadata['upload-timestamp'],
        'x-amz-meta-objectkey': metadata.objectKey,
      },
      body: file,
    });

    return response.ok;
  } catch (error) {
    console.error('Error uploading to S3:', error);
    return false;
  }
};

// Therapist onboarding service
export class TherapistOnboardService {
  /**
   * Upload documents for a therapist (two-step process)
   * @param therapistId - The therapist ID
   * @param documents - Array of documents to upload
   * @param files - Array of actual files to upload
   */
  static async uploadDocuments(
    therapistId: string | number,
    documents: TherapistDocument[],
    files: File[]
  ): Promise<ApiResponse<DocumentUploadResponse>> {
    try {
      // Step 1: Get presigned URLs from the API
      const presignedResponse = await apiCall<DocumentUploadResponse>(`/therapists/upload/${therapistId}`, {
        method: 'POST',
        body: JSON.stringify(documents),
      });

      if (!presignedResponse.success || !presignedResponse.data) {
        return presignedResponse;
      }

      // Step 2: Upload each file to S3 using the presigned URLs
      const uploadPromises = presignedResponse.data.data.map(async (uploadInfo, index) => {
        const file = files[index];
        if (!file) {
          throw new Error(`File not found for document ${index}`);
        }
console.log(uploadInfo)
        const metadata = {
          filename: uploadInfo.filename,
          originalFilename: uploadInfo['original-filename'],
          size: uploadInfo.size,
          'upload-timestamp': uploadInfo['upload-timestamp'],
          objectKey: uploadInfo.objectKey,
        };

        const uploadSuccess = await uploadToS3(uploadInfo.presignedUrl, file, metadata);
        
        if (!uploadSuccess) {
          throw new Error(`Failed to upload file ${uploadInfo['original-filename']} to S3`);
        }

        return uploadInfo;
      });

      await Promise.all(uploadPromises);

      return {
        success: true,
        data: presignedResponse.data,
        message: 'All documents uploaded successfully',
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to upload documents',
      };
    }
  }

  /**
   * Submit therapist application
   * @param application - The therapist application data
   */
  static async submitApplication(
    application: TherapistApplication
  ): Promise<ApiResponse<any>> {
    return apiCall('/therapists', {
      method: 'POST',
      body: JSON.stringify(application),
    });
  }

  /**
   * Get therapist application status
   * @param applicationId - The application ID
   */
  static async getApplicationStatus(
    applicationId: string
  ): Promise<ApiResponse<any>> {
    return apiCall(`/therapists/application/${applicationId}`, {
      method: 'GET',
    });
  }

  /**
   * Update therapist application
   * @param applicationId - The application ID
   * @param updates - The updates to apply
   */
  static async updateApplication(
    applicationId: string,
    updates: Partial<TherapistApplication>
  ): Promise<ApiResponse<any>> {
    return apiCall(`/therapists/application/${applicationId}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  /**
   * Delete uploaded document
   * @param therapistId - The therapist ID
   * @param documentId - The document ID
   */
  static async deleteDocument(
    therapistId: string | number,
    documentId: string
  ): Promise<ApiResponse<any>> {
    return apiCall(`/therapists/upload/${therapistId}/document/${documentId}`, {
      method: 'DELETE',
    });
  }

  /**
   * Get uploaded documents for a therapist
   * @param therapistId - The therapist ID
   */
  static async getDocuments(
    therapistId: string | number
  ): Promise<ApiResponse<TherapistDocument[]>> {
    return apiCall(`/therapists/upload/${therapistId}/documents`, {
      method: 'GET',
    });
  }

  /**
   * Get therapist by email
   * @param email - The therapist's email address
   */
  static async getTherapistByEmail(
    email: string
  ): Promise<ApiResponse<any>> {
    return apiCall(`/therapists?email=${encodeURIComponent(email)}`, {
      method: 'GET',
    });
  }
}

// Export default instance
export default TherapistOnboardService; 