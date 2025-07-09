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