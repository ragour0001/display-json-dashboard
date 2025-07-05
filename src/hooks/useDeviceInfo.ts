import { useState, useEffect } from 'react';

export interface DeviceInfo {
  latitude: number | null;
  longitude: number | null;
  ipAddress: string;
  deviceName: string;
  userAgent: string;
}

export const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getDeviceName = (): string => {
    const userAgent = navigator.userAgent;
    let deviceName = 'Unknown';

    if (userAgent.match(/Windows/i)) {
      deviceName = 'Windows';
    } else if (userAgent.match(/Macintosh/i)) {
      deviceName = 'Mac';
    } else if (userAgent.match(/Linux/i)) {
      deviceName = 'Linux';
    } else if (userAgent.match(/iPhone/i)) {
      deviceName = 'iPhone';
    } else if (userAgent.match(/iPad/i)) {
      deviceName = 'iPad';
    } else if (userAgent.match(/Android/i)) {
      deviceName = 'Android';
    }

    return deviceName;
  };

  const fetchDeviceInfo = async (): Promise<DeviceInfo> => {
    return new Promise((resolve, reject) => {
      const info: DeviceInfo = {
        latitude: null,
        longitude: null,
        ipAddress: '',
        deviceName: getDeviceName(),
        userAgent: navigator.userAgent
      };

      // Get IP Address
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then((data: any) => {
          info.ipAddress = data.ip;

          // Get Geolocation
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                info.latitude = position.coords.latitude;
                info.longitude = position.coords.longitude;
                resolve(info);
              },
              (error) => {
                console.log('Geolocation error:', error);
                resolve(info);
              }
            );
          } else {
            resolve(info);
          }
        })
        .catch((error) => {
          console.error('IP fetch error:', error);
          reject(error);
        });
    });
  };

  const getDeviceInfo = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const info = await fetchDeviceInfo();
      setDeviceInfo(info);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to get device info');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeviceInfo();
  }, []);

  return {
    deviceInfo,
    loading,
    error,
    refetch: getDeviceInfo
  };
}; 