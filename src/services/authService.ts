import axios from 'axios';

const API_URL = 'https://api.refillhealth.com/api';
// const API_URL = 'http://localhost:8080/api';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  },
  withCredentials: false
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Remove any duplicate headers that might be causing CORS issues
    if (config.headers['Access-Control-Allow-Origin']) {
      delete config.headers['Access-Control-Allow-Origin'];
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Handle successful response
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle specific error status codes
      switch (error.response.status) {
        case 401:
          console.error('Unauthorized access');
          break;
        case 403:
          console.error('Access forbidden');
          break;
        case 404:
          console.error('Resource not found');
          break;
        case 500:
          console.error('Server error');
          break;
        default:
          console.error('API Error:', error.response.data);
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Error in request configuration
      console.error('Request configuration error:', error.message);
    }
    return Promise.reject(error);
  }
);

export interface SigninRequest {
  email: string;
  password: string;
  latitude: number | null;
  longitude: number | null;
  ipAddress: string;
  device: string;
  isTempPassword: string;
}

export interface SignupData {
  email: string;
  password: string;
  fullName: string;
  latitude: number | null;
  longitude: number | null;
  ipAddress: string;
  device: string;
  agreeToTerms: boolean;
  userAgent: string;
  userType: string;
}

export interface ValidateOtpRequest {
  email: string;
  otpCode: string;
  purpose: string;
}

export interface ResendOtpRequest {
  email: string;
}

class AuthService {
  private user: any | null = null;

  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any | null {
    return this.user;
  }

  clearUser(): void {
    this.user = null;
  }

  async signIn(requestData: SigninRequest) {
    this.setUser(requestData);
    const response = await axiosInstance.post('/v1/users/login', requestData);
    return response.data;
  }

  async signUp(signupData: SignupData) {
    this.setUser(signupData);
    const response = await axiosInstance.post('/v1/users/signup', signupData);
    return response.data;
  }

  async resetPassword(requestData: any) {
    const response = await axiosInstance.post('/v1/users/password/forgot', requestData);
    return response.data;
  }

  async newPassword(requestData: any) {
    const response = await axiosInstance.post('/v1/users/password/update', requestData);
    return response.data;
  }

  async validateOtp(request: ValidateOtpRequest) {
    const response = await axiosInstance.post('/v1/users/otp/validate', request);
    return response.data;
  }

  async resendOtp(request: ResendOtpRequest) {
    const response = await axiosInstance.post('/v1/users/otp/generate', request);
    return response.data;
  }
}

export const authService = new AuthService(); 