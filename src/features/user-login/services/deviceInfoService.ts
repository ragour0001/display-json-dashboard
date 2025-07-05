export interface DeviceInfo {
  latitude: number | null;
  longitude: number | null;
  ipAddress: string;
  deviceName: string;
  userAgent: string;
}


class DeviceInfoService {

  async getDeviceInfo(): Promise<DeviceInfo> {
    try {
      const ipAddress = await this.getIpAddress();
      const position = await this.getCurrentPosition().catch(() => null);
      
      return {
        latitude: position?.coords.latitude || null,
        longitude: position?.coords.longitude || null,
        ipAddress: ipAddress || '',
        deviceName: navigator.userAgent,
        userAgent: navigator.userAgent
      };
    } catch (error) {
      console.warn('Error getting device info:', error);
      // Return default device info when there's an error
      return {
        latitude: null,
        longitude: null,
        ipAddress: '',
        deviceName: navigator.userAgent,
        userAgent: navigator.userAgent
      };
    }
  }

  // async getDeviceInfo(): Promise<DeviceInfo> {
  //   try {
  //     const position = await this.getCurrentPosition();
  //     const ipAddress = await this.getIpAddress();
      
  //     return {
  //       latitude: position?.coords.latitude || null,
  //       longitude: position?.coords.longitude || null,
  //       ipAddress: ipAddress || '',
  //       deviceName: navigator.userAgent,
  //       userAgent: navigator.userAgent
  //     };
  //   } catch (error) {
  //     console.error('Error getting device info:', error);
  //     return {
  //       latitude: null,
  //       longitude: null,
  //       ipAddress: '',
  //       deviceName: navigator.userAgent,
  //       userAgent: navigator.userAgent
  //     };
  //   }
  // }

  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }

      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => {
          console.warn('Geolocation error:', error.message);
          reject(error);
        },
        options
      );
    });
  }

  private async getIpAddress(): Promise<string> {
    try {
      // Try multiple IP address services in case one fails
      const services = [
        'https://api.ipify.org?format=json',
        'https://api.ipify.org/?format=json',
        'https://api64.ipify.org?format=json'
      ];

      for (const service of services) {
        try {
          const response = await fetch(service);
          if (response.ok) {
            const data = await response.json();
            return data.ip;
          }
        } catch (error) {
          console.warn(`Failed to fetch IP from ${service}:`, error);
          continue;
        }
      }
      
      // If all services fail, return empty string
      return '';
    } catch (error) {
      console.warn('All IP address services failed:', error);
      return '';
    }
  }
}

export const deviceInfoService = new DeviceInfoService(); 