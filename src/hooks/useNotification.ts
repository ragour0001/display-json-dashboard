import { toast, ToastOptions } from 'react-toastify';

interface NotificationConfig extends ToastOptions {
  duration?: number;
}

export const useNotification = () => {
  const defaultConfig: NotificationConfig = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  };

  const success = (message: string, options?: NotificationConfig) => {
    toast.success(message, {
      ...defaultConfig,
      ...options,
      className: 'toast-success',
    });
  };

  const error = (message: string, options?: NotificationConfig) => {
    toast.error(message, {
      ...defaultConfig,
      ...options,
      className: 'toast-error',
    });
  };

  const warning = (message: string, options?: NotificationConfig) => {
    toast.warning(message, {
      ...defaultConfig,
      ...options,
      className: 'toast-warning',
    });
  };

  const info = (message: string, options?: NotificationConfig) => {
    toast.info(message, {
      ...defaultConfig,
      ...options,
      className: 'toast-info',
    });
  };

  const dismiss = () => {
    toast.dismiss();
  };

  return {
    success,
    error,
    warning,
    info,
    dismiss,
  };
}; 