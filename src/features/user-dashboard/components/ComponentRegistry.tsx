import React from 'react';
import MainContent from './MainContent';
import GoalsAssessment from './GoalsAssessment';
import MyCarePlan from './MyCarePlan';
import Progress from './Progress';
import TherapistCoach from './TherapistCoach';
import MicroLearnings from './MicroLearnings';
import Resources from './Resources';
import Profile from './Profile';
import Settings from './Settings';
import NeedHelp from './NeedHelp';
import DynamicContentRenderer from './DynamicContentRenderer';
import { DisplayConfig } from '../hooks/useDisplayConfig';

// Dedicated ChatEmptyPage component
function ChatEmptyPage() {
  // These props match the design and the config for the empty state
  return (
    <DynamicContentRenderer
      content={[
        {
          type: 'breadcrumb-welcome',
          props: {
            breadcrumbItems: [
              { label: 'Global Dashboard', active: false },
              { label: 'Chat', active: true }
            ],
            welcomeTitle: 'Chat',
            showUserName: false
          },
          className: 'chat-breadcrumb-section'
        },
        {
          type: 'chat-empty-state',
          props: {
            illustration: '/assets/images/chat-illustration.svg',
            title: "Looks like you haven't booked a session yet",
            subtitle: 'Book a session to start chatting with your fav Therapist',
            buttonText: 'Book a Session',
            buttonAction: 'book-session',
            footerText: 'Refill your Mental Health with us ❤️'
          },
          className: 'chat-empty-state-section'
        }
      ]}
    />
  );
}

function AssignmentsEmptyPage() {
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 40
      }}>
        <h1 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '2.2rem', margin: 0, textAlign: 'center' }}>Your Assignments</h1>
        <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1.1rem', color: '#232a3d', margin: '8px 0 32px 0', textAlign: 'center' }}>
          Complete these tasks to get the most from your sessions.
        </p>
        <div style={{ margin: '32px 0 24px 0' }}>
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
            <circle cx="80" cy="80" r="80" fill="#F5F7FA" />
            <rect x="55" y="50" width="50" height="60" rx="10" fill="#006B5F" />
            <rect x="65" y="60" width="30" height="8" rx="2" fill="#fff" />
            <rect x="65" y="75" width="20" height="6" rx="2" fill="#fff" />
            <rect x="65" y="87" width="20" height="6" rx="2" fill="#fff" />
            <rect x="65" y="99" width="20" height="6" rx="2" fill="#fff" />
            <circle cx="80" cy="55" r="8" fill="#fff" />
            <rect x="77" y="52" width="6" height="6" rx="3" fill="#006B5F" />
          </svg>
        </div>
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: '1.3rem', color: '#232a3d', marginBottom: 4 }}>
            No assignments yet !!
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '1rem', color: '#6b7280', marginBottom: 24 }}>
            Once your therapist shares tasks for you to work on, they'll appear here.<br />Check back after your next session!
          </div>
          <button style={{ background: '#006b5f', color: '#fff', border: 'none', borderRadius: 24, padding: '14px 36px', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s', boxShadow: '0 2px 8px rgba(0, 107, 95, 0.10)' }}>
            Book a Session
          </button>
        </div>
      </div>
      {/* New Platform Section */}
      <div style={{ background: '#fafbfc', borderRadius: 16, margin: '40px auto 0 auto', maxWidth: 700, padding: 32, display: 'flex', alignItems: 'center', gap: 32 }}>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#6B46C1', fontFamily: 'Inter', fontWeight: 600, fontSize: 16, marginBottom: 8 }}>New Platform</div>
          <div style={{ color: '#232323', fontFamily: 'Inter', fontWeight: 700, fontSize: 24, marginBottom: 12 }}>
            Get one of our Refill Health apps, which is only available on
          </div>
          <div style={{ color: '#232323', fontFamily: 'Inter', fontWeight: 500, fontSize: 16, marginBottom: 16 }}>
            Download Apps:
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <img src="/assets/images/appstore.png" alt="App Store" style={{ height: 40 }} />
            <img src="/assets/images/playstore.png" alt="Google Play" style={{ height: 40 }} />
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img src="/assets/images/assignments-app-mockup.png" alt="App Mockup" style={{ height: 120, borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
        </div>
      </div>
    </div>
  );
}

export interface ComponentProps {
  config?: DisplayConfig;
  onSectionChange?: (section: string, data?: any) => void;
  [key: string]: unknown;
}

// Dynamic wrapper function to handle content-driven components
function createDynamicComponent(
  componentType: string, 
  FallbackComponent: React.ComponentType<ComponentProps>
) {
  return function DynamicComponent(props: ComponentProps) {
    const { config, onSectionChange } = props;
    
    // Only use dynamic rendering for 'home' component to preserve existing functionality
    if (componentType === 'home') {
      // Find the component configuration
      const componentConfig = config?.layout.components.find(comp => comp.type === componentType);
      
      // If we have content blocks, use DynamicContentRenderer
      if (componentConfig && 'content' in componentConfig && Array.isArray(componentConfig.content)) {
        return (
          <DynamicContentRenderer
            content={componentConfig.content}
            config={config}
            onSectionChange={onSectionChange}
          />
        );
      }
    }
    
    // For all other components, always use the original component with all props
    return <FallbackComponent {...props} />;
  };
}

// Component registry mapping componentType to dynamic components
export const ComponentRegistry: Record<string, React.ComponentType<ComponentProps>> = {
  'home': createDynamicComponent('home', MainContent),
  'goals-assessment': createDynamicComponent('goals-assessment', GoalsAssessment),
  'my-care-plan': createDynamicComponent('my-care-plan', MyCarePlan),
  'progress': createDynamicComponent('progress', Progress),
  'therapist-coach': createDynamicComponent('therapist-coach', TherapistCoach),
  'micro-learnings': createDynamicComponent('micro-learnings', MicroLearnings),
  'resources': createDynamicComponent('resources', Resources),
  'profile': createDynamicComponent('profile', Profile),
  'settings': createDynamicComponent('settings', Settings),
  'need-help': createDynamicComponent('need-help', NeedHelp),
  'chat': ChatEmptyPage, // Always show the empty state for Chat
  'assignments': AssignmentsEmptyPage,
};

export interface DynamicComponentRendererProps {
  componentType: string;
  config?: DisplayConfig;
  onSectionChange?: (section: string, data?: any) => void;
  additionalProps?: Record<string, unknown>;
}

export function DynamicComponentRenderer({ 
  componentType, 
  config, 
  onSectionChange,
  additionalProps = {}
}: DynamicComponentRendererProps) {
  console.log(`🎯 DynamicComponentRenderer: Rendering component type "${componentType}"`);
  const Component = ComponentRegistry[componentType];
  
  if (!Component) {
    console.warn(`Component type "${componentType}" not found in registry`);
    
    // Fallback to MainContent for unknown components to maintain layout
    const FallbackComponent = ComponentRegistry['home'];
    if (FallbackComponent) {
      return (
        <FallbackComponent 
          config={config} 
          onSectionChange={onSectionChange} 
          {...additionalProps} 
        />
      );
    }
    
    return (
      <div className="component-error" style={{ 
        padding: '40px', 
        textAlign: 'center', 
        color: '#666',
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif'
      }}>
        <h2 style={{ color: '#d32f2f', marginBottom: '16px' }}>Component not found</h2>
        <p>The component type "{componentType}" is not registered.</p>
      </div>
    );
  }

  // Get component-specific configuration from the display config
  const componentConfig = config?.layout.components.find(comp => comp.type === componentType);
  const componentProps = componentConfig?.props || {};

  // Merge all props, ensuring existing component interfaces are maintained
  const mergedProps = {
    config,
    onSectionChange,
    ...componentProps,
    ...additionalProps,
  };

  return <Component {...mergedProps} />;
}

// Helper function to register new components dynamically
export function registerComponent(componentType: string, component: React.ComponentType<ComponentProps>) {
  ComponentRegistry[componentType] = component;
}

// Helper function to get available component types
export function getAvailableComponentTypes(): string[] {
  return Object.keys(ComponentRegistry);
}

// Helper function to check if a component type is registered
export function isComponentRegistered(componentType: string): boolean {
  return componentType in ComponentRegistry;
} 