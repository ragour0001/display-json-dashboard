/**
 * Configuration for CSS files to load specifically for the user-dashboard route
 * Add or remove CSS files based on which components you want to include
 */

export const USER_DASHBOARD_CSS_FILES = {
  // Core dashboard CSS
  globals: '/src/features/user-dashboard/globals.css',
  
  // Component CSS files (ONLY user-dashboard specific ones)
  components: [
    // Only add CSS files that are specifically for user-dashboard components
    // DO NOT add external component CSS files like Navbar.scss, etc.
    // '/src/features/user-dashboard/components/Sidebar.css', // Add if you have specific component CSS
    // '/src/features/user-dashboard/components/MainContent.css',
    // Add more user-dashboard component CSS files as needed
  ]
};

/**
 * Utility function to load CSS dynamically
 */
export const loadCssFile = (href: string, id: string): HTMLLinkElement => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.id = id;
  document.head.appendChild(link);
  return link;
};

/**
 * Utility function to remove CSS file
 */
export const removeCssFile = (link: HTMLLinkElement): void => {
  if (link.parentNode) {
    link.parentNode.removeChild(link);
  }
}; 