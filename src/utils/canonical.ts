interface CanonicalConfig {
  baseUrl: string;
  pathname: string;
  preserveParams?: string[];
  removeParams?: string[];
  forceTrailingSlash?: boolean;
  removeTrailingSlash?: boolean;
}

/**
 * Generates a canonical URL based on the current location and configuration
 */
export const generateCanonicalUrl = ({
  baseUrl,
  pathname,
  preserveParams = [],
  removeParams = [],
  forceTrailingSlash = false,
  removeTrailingSlash = true
}: CanonicalConfig): string => {
  // Clean the base URL (remove trailing slash)
  const cleanBaseUrl = baseUrl.replace(/\/$/, '');
  
  // Clean the pathname
  let cleanPathname = pathname;
  
  // Handle trailing slash based on configuration
  if (removeTrailingSlash && cleanPathname !== '/') {
    cleanPathname = cleanPathname.replace(/\/$/, '');
  } else if (forceTrailingSlash && cleanPathname !== '/' && !cleanPathname.endsWith('/')) {
    cleanPathname = `${cleanPathname}/`;
  }
  
  // Handle query parameters if any need to be preserved
  let queryString = '';
  if (preserveParams.length > 0) {
    const urlParams = new URLSearchParams(window.location.search);
    const paramsToKeep = new URLSearchParams();
    
    preserveParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        paramsToKeep.append(param, value);
      }
    });
    
    if (paramsToKeep.toString()) {
      queryString = `?${paramsToKeep.toString()}`;
    }
  }
  
  return `${cleanBaseUrl}${cleanPathname}${queryString}`;
};

/**
 * Get environment-specific base URL
 */
export const getBaseUrl = (): string => {
  // In production, use the production URL
  if (process.env.NODE_ENV === 'production') {
    return 'https://refillhealth.com';
  }
  
  // For development, you might want to use localhost
  // but for SEO purposes, we'll use the production URL
  return 'https://refillhealth.com';
};

/**
 * Route-specific canonical configurations
 */
export const getCanonicalConfig = (pathname: string): Partial<CanonicalConfig> => {
  const routeConfigs: { [key: string]: Partial<CanonicalConfig> } = {
    '/': {
      // Home page - simple canonical
    },
    '/login': {
      // Login page - remove all parameters for security
      removeParams: ['*'],
    },
    '/sign-up': {
      // Sign up page - might preserve referral or utm parameters
      preserveParams: ['ref', 'utm_source', 'utm_medium', 'utm_campaign'],
    },
    '/onboarding/application-form': {
      // Application form - clean URL
      removeParams: ['*'],
    },
    '/dashboard': {
      // Dashboard - clean URL, no parameters
      removeParams: ['*'],
    },
    '/reset-password': {
      // Reset password - might need to preserve token
      preserveParams: ['token', 'email'],
    },
    '/verify': {
      // Verification - preserve verification parameters
      preserveParams: ['token', 'email', 'code'],
    }
  };

  // Handle dynamic onboarding routes
  if (pathname.startsWith('/onboarding/')) {
    return {
      removeParams: ['*'], // Clean URLs for onboarding steps
    };
  }

  return routeConfigs[pathname] || {};
};

/**
 * Main function to get canonical URL for current page
 */
export const getCanonicalUrl = (pathname: string): string => {
  const baseUrl = getBaseUrl();
  const routeConfig = getCanonicalConfig(pathname);
  
  return generateCanonicalUrl({
    baseUrl,
    pathname,
    ...routeConfig
  });
}; 