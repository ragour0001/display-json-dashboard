import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, getBaseUrl } from '../utils/canonical';

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  url: string;
  canonicalUrl: string;
  type?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const useSEO = (): SEOData => {
  const location = useLocation();
  
  const seoData = useMemo(() => {
    const baseUrl = getBaseUrl();
    const canonicalUrl = getCanonicalUrl(location.pathname);
    
    const routeConfig: { [key: string]: Partial<SEOData> } = {
      '/': {
        title: 'Mental Wellness Solutions for All | Refill Health',
        description: 'AI-driven mental health support, employee wellness programs, stress management tools for organisations, teams and individuals. Start with Refill Health.',
        keywords: 'mental health, employee wellness, therapy, EAP, workplace mental health, online therapy, stress management, burnout prevention, psychological safety, mental health coaching, corporate wellness',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Refill Health',
          'description': 'AI-driven mental health support, employee wellness programs, stress management tools for organisations, teams and individuals.',
          'url': baseUrl,
          'potentialAction': {
            '@type': 'SearchAction',
            'target': `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
      },
      '/login': {
        title: 'Sign In - Access Your Mental Health Dashboard',
        description: 'Sign in to your Refill Health account to access personalized therapy sessions, mental health resources, and wellness programs tailored for you.',
        keywords: 'login, sign in, mental health dashboard, therapy access, employee wellness login',
        noIndex: true
      },
      '/sign-up': {
        title: 'Sign Up - Start Your Mental Health Journey',
        description: 'Create your Refill Health account and begin your personalized mental health journey with licensed therapists and comprehensive wellness programs.',
        keywords: 'sign up, register, mental health account, therapy signup, employee wellness registration',
        noIndex: true
      },
      '/dashboard': {
        title: 'Dashboard - Your Mental Health Hub',
        description: 'Access your personalized mental health dashboard with therapy sessions, wellness tracking, and comprehensive mental health resources.',
        keywords: 'mental health dashboard, therapy hub, wellness tracking, personal dashboard',
        noIndex: true
      },
      '/onboarding/application-form': {
        title: 'Therapist Application - Join Our Mental Health Team',
        description: 'Apply to become a licensed therapist with Refill Health. Join our team of mental health professionals helping employees and individuals achieve better mental wellness.',
        keywords: 'therapist application, mental health jobs, therapy careers, licensed therapist, join therapy team',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          'title': 'Licensed Therapist',
          'description': 'Join Refill Health as a licensed therapist providing mental health services to individuals and corporate clients.',
          'hiringOrganization': {
            '@type': 'Organization',
            'name': 'Refill Health'
          },
          'employmentType': 'CONTRACTOR',
          'workHours': 'Flexible'
        }
      },
      '/onboarding/application-submitted': {
        title: 'Application Submitted - Thank You for Your Interest',
        description: 'Thank you for applying to join our team of mental health professionals. We\'ll review your application and get back to you soon.',
        keywords: 'application submitted, therapist application, mental health careers',
        noIndex: true
      },
      '/reset-password': {
        title: 'Reset Password - Recover Your Account',
        description: 'Reset your Refill Health account password to regain access to your mental health dashboard and therapy sessions.',
        keywords: 'password reset, account recovery, login help',
        noIndex: true
      },
      '/verify': {
        title: 'Email Verification - Secure Your Account',
        description: 'Verify your email address to secure your Refill Health account and access all mental health features.',
        keywords: 'email verification, account security, verify account',
        noIndex: true
      }
    };

    // Handle dynamic onboarding routes
    if (location.pathname.startsWith('/onboarding/')) {
      const defaultOnboarding = {
        title: 'Therapist Onboarding - Join Refill Health',
        description: 'Complete your therapist onboarding process to start helping clients with their mental health journey through Refill Health.',
        keywords: 'therapist onboarding, mental health careers, therapy application process',
        noIndex: true
      };
      
      return {
        ...defaultOnboarding,
        ...routeConfig[location.pathname],
        url: canonicalUrl,
        canonicalUrl
      };
    }

    const pageConfig = routeConfig[location.pathname] || {
      title: 'Refill Health - Mental Health & Employee Wellness',
      description: 'Professional mental health services and employee wellness programs designed to support your mental health journey.',
      keywords: 'mental health, therapy, employee wellness, psychological support'
    };

    return {
      ...pageConfig,
      url: canonicalUrl,
      canonicalUrl
    } as SEOData;
  }, [location.pathname]);

  return seoData;
};

export default useSEO; 