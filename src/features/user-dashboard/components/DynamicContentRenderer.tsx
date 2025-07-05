import React, { useState, useEffect } from 'react';
import { DisplayConfig } from '../hooks/useDisplayConfig';
import './DynamicContentRenderer.css';

interface ContentBlock {
  type: string;
  props?: Record<string, any>;
  className?: string;
  style?: React.CSSProperties;
  children?: ContentBlock[];
}

interface DynamicContentRendererProps {
  content: ContentBlock[];
  config?: DisplayConfig;
  onSectionChange?: (section: string, data?: any) => void;
}

export default function DynamicContentRenderer({ 
  content, 
  config, 
  onSectionChange 
}: DynamicContentRendererProps) {
  const [goalsCompleted, setGoalsCompleted] = useState(false);
  const [unsureSectionProps, setUnsureSectionProps] = useState<any>(null);

  // Find the unsure-section props from content
  React.useEffect(() => {
    if (content && Array.isArray(content)) {
      const unsureSection = content.find(block => block.type === 'unsure-section');
      if (unsureSection) {
        setUnsureSectionProps(unsureSection.props);
      }
    }
  }, [content]);

  const handleSectionChange = (section: string, data?: any) => {
    if (section === 'goals-completed') {
      setGoalsCompleted(true);
    }
    
    // Pass through to parent
    if (onSectionChange) {
      onSectionChange(section, data);
    }
  };

  if (!content || !Array.isArray(content)) {
    return null;
  }

  return (
    <>
      {content.map((block, index) => {
        // Special handling for goals-flow-manager
        if (block.type === 'goals-flow-manager') {
          return (
            <React.Fragment key={index}>
              <ContentBlockRenderer
                block={block}
                config={config}
                onSectionChange={handleSectionChange}
              />
              {/* Show unsure-section right after goals-flow-manager when goals are completed */}
              {goalsCompleted && unsureSectionProps && (
                <UnsureSection
                  {...unsureSectionProps}
                  className="unsure-section-new"
                />
              )}
            </React.Fragment>
          );
        }
        
        // Hide the original unsure-section if goals are completed (to avoid duplication)
        if (block.type === 'unsure-section' && goalsCompleted) {
          return null;
        }
        
        return (
          <ContentBlockRenderer
            key={index}
            block={block}
            config={config}
            onSectionChange={handleSectionChange}
          />
        );
      })}
    </>
  );
}

function ContentBlockRenderer({ block, config, onSectionChange }: {
  block: ContentBlock;
  config?: DisplayConfig;
  onSectionChange?: (section: string, data?: any) => void;
}) {
  const { type, props = {}, className, style, children } = block;

  switch (type) {
    case 'breadcrumb-welcome':
      return <BreadcrumbWelcome {...props} className={className} style={style} />;
    
    case 'section-title':
      return <SectionTitle {...props} className={className} style={style} />;
    
    case 'goals-selection':
      return <GoalsSelection {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'goals-flow-manager':
      return <GoalsFlowManager {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'unsure-section':
      return <UnsureSection {...props} className={className} style={style} />;
    
    case 'progress-getting-started':
      return <ProgressGettingStarted {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'therapist-section':
      return <TherapistSection {...props} className={className} style={style} />;
    
    case 'main-tabs-section':
      return <MainTabsSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'care-plan-section':
      return <CarePlanSection {...props} className={className} style={style} />;
    
    case 'micro-learnings-section':
      return <MicroLearningsSection {...props} className={className} style={style} />;
    
    case 'new-platform-section':
      return <NewPlatformSection {...props} className={className} style={style} />;
    
    case 'welcome-header':
      return <WelcomeHeader {...props} className={className} style={style} />;
    
    case 'onboarding-banner':
      return <OnboardingBanner {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'assessment-reminder':
      return <AssessmentReminder {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'goals-section':
      return <GoalsSection {...props} className={className} style={style} config={config} />;
    
    case 'progress-overview':
      return <ProgressOverview {...props} className={className} style={style} />;
    
    case 'daily-streak':
      return <DailyStreak {...props} className={className} style={style} />;
    
    case 'care-plan-preview':
      return <CarePlanPreview {...props} className={className} style={style} />;
    
    case 'learning-progress':
      return <LearningProgress {...props} className={className} style={style} />;
    
    case 'therapist-matching':
      return <TherapistMatching {...props} className={className} style={style} />;
    
    case 'right-sidebar':
      return <RightSidebarContent {...props} className={className} style={style} config={config} />;
    
    case 'profile-overview':
      return <ProfileOverview {...props} className={className} style={style} />;
    
    case 'insights-card':
      return <InsightsCard {...props} className={className} style={style} />;
    
    case 'daily-streak-card':
      return <DailyStreakCard {...props} className={className} style={style} />;
    
    case 'rewards-card':
      return <RewardsCard {...props} className={className} style={style} />;
    
    case 'upcoming-events-card':
      return <UpcomingEventsCard {...props} className={className} style={style} />;
    
    case 'banner':
      return <Banner {...props} className={className} style={style} />;
    
    case 'goals-status-section':
      return <GoalsStatusSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;
    
    case 'goal-card-component':
      return <GoalCardComponent {...props} className={className} style={style} />;
    
    case 'container':
      return (
        <div className={className} style={style}>
          {children && <DynamicContentRenderer content={children} config={config} onSectionChange={onSectionChange} />}
        </div>
      );
    
    case 'card':
      return (
        <div className={className || 'card'} style={style}>
          {props?.title && <h3>{props.title}</h3>}
          {children && <DynamicContentRenderer content={children} config={config} onSectionChange={onSectionChange} />}
        </div>
      );
    
    default:
      console.warn(`Content block type "${type}" not recognized`);
      return null;
  }
}

// Content block components
function WelcomeHeader({ userName, welcomeMessage, title, className, style }: any) {
  return (
    <div className={className || "welcome-header"} style={style}>
      <h1>{title}</h1>
      <p>{welcomeMessage}, {userName}!</p>
    </div>
  );
}

function OnboardingBanner({ visible, progress, title, message, actions, className, style, onSectionChange }: any) {
  if (!visible) return null;
  
  return (
    <div className={className || "onboarding-banner"} style={style}>
      <h3>{title}</h3>
      {message && <p>{message}</p>}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      {actions && (
        <div className="banner-actions">
          {actions.map((action: any, index: number) => (
            <button 
              key={index}
              className={action.className}
              onClick={() => action.action && onSectionChange?.(action.action)}
            >
              {action.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function AssessmentReminder({ visible, isOverdue, nextDueAt, title, message, actions, className, style, onSectionChange }: any) {
  if (!visible) return null;
  
  return (
    <div className={`${className || 'assessment-reminder'} ${isOverdue ? 'overdue' : ''}`.trim()} style={style}>
      <h3>{title}</h3>
      {message && <p>{message}</p>}
      <p>Due: {new Date(nextDueAt).toLocaleDateString()}</p>
      {actions && (
        <div className="reminder-actions">
          {actions.map((action: any, index: number) => (
            <button 
              key={index}
              className={action.className}
              onClick={() => action.action && onSectionChange?.(action.action)}
            >
              {action.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function GoalsSection({ visible, goals, maxGoals, title, className, style, config }: any) {
  if (!visible) return null;
  
  const userGoals = config?.wellnessGoals || goals || [];
  
  return (
    <div className={className || "goals-section"} style={style}>
      <h3>{title}</h3>
      <div className="goals-grid">
        {userGoals.map((goal: any, index: number) => (
          <div key={index} className="goal-card">
            <h4>{goal.title}</h4>
            <p>Progress: {goal.progress}%</p>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${goal.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
      {userGoals.length < maxGoals && (
        <button className="add-goal-btn">Add Goal</button>
      )}
    </div>
  );
}

function ProgressOverview({ visible, title, className, style }: any) {
  if (!visible) return null;
  
  return (
    <div className={className || "progress-overview"} style={style}>
      <h3>{title}</h3>
      <div className="progress-content">
        <p>Track your wellness journey and insights</p>
      </div>
    </div>
  );
}

function DailyStreak({ currentStreak, longestStreak, streakGoal, className, style }: any) {
  return (
    <div className={className || "daily-streak"} style={style}>
      <h3>Daily Streak</h3>
      <div className="streak-stats">
        <div className="stat">
          <span className="number">{currentStreak}</span>
          <span className="label">Current</span>
        </div>
        <div className="stat">
          <span className="number">{longestStreak}</span>
          <span className="label">Best</span>
        </div>
        <div className="stat">
          <span className="number">{streakGoal}</span>
          <span className="label">Goal</span>
        </div>
      </div>
    </div>
  );
}

function CarePlanPreview({ planGenerated, showGetStarted, requiresAssessment, className, style }: any) {
  return (
    <div className={className || "care-plan-preview"} style={style}>
      <h3>Your Care Plan</h3>
      {!planGenerated ? (
        <div className="getting-started">
          <p>Let's create your personalized care plan</p>
          {requiresAssessment && (
            <p className="requirement">Complete your assessment first</p>
          )}
          {showGetStarted && (
            <button className="get-started-btn">Get Started</button>
          )}
        </div>
      ) : (
        <div className="plan-summary">
          <p>Your care plan is ready!</p>
        </div>
      )}
    </div>
  );
}

function LearningProgress({ completedLessons, totalLessons, currentCourse, className, style }: any) {
  return (
    <div className={className || "learning-progress"} style={style}>
      <h3>Learning Progress</h3>
      <div className="progress-stats">
        <p>{completedLessons} of {totalLessons} lessons completed</p>
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
          ></div>
        </div>
        {currentCourse && <p>Current course: {currentCourse}</p>}
      </div>
    </div>
  );
}

function TherapistMatching({ showMatching, hasActiveBookings, className, style }: any) {
  return (
    <div className={className || "therapist-matching"} style={style}>
      <h3>Find Your Therapist</h3>
      {!hasActiveBookings ? (
        <div className="matching-section">
          {showMatching && (
            <button className="find-match-btn">Find Your Match</button>
          )}
        </div>
      ) : (
        <div className="active-booking">
          <p>You have active sessions</p>
        </div>
      )}
    </div>
  );
}

// New content block components that match original MainContent structure
function BreadcrumbWelcome({ breadcrumbItems, welcomeTitle, className, style }: any) {
  return (
    <div className={className || "welcome-section"} style={style}>
      <div className="breadcrumb">
        {breadcrumbItems?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <span className={`breadcrumb-item ${item.active ? 'active' : ''}`}>
              {item.label}
            </span>
            {index < breadcrumbItems.length - 1 && (
              <svg className="breadcrumb-arrow" width="5" height="9" viewBox="0 0 5 9" fill="none">
                <path d="M1 1L4 4.5L1 8" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
      <h1 className="welcome-title">{welcomeTitle}</h1>
    </div>
  );
}

function SectionTitle({ title, level, className, style }: any) {
  const TitleTag = `h${level || 1}` as keyof JSX.IntrinsicElements;
  return (
    <TitleTag className={className || "goal-set-title"} style={style}>
      {title}
    </TitleTag>
  );
}

// Goals Flow Manager - Coordinates between selection and status sections
function GoalsFlowManager({ 
  sectionTitle, 
  goalsSelection, 
  goalsStatus, 
  className, 
  style, 
  onSectionChange 
}: any) {
  const [isGoalsSet, setIsGoalsSet] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState<any[]>([]);

  const handleGoalsCompleted = (goals: any[]) => {
    setSelectedGoals(goals);
    setIsGoalsSet(true);
    
    // Notify parent about goals completion to show unsure section
    if (onSectionChange) {
      onSectionChange('goals-completed', goals);
    }
  };

  const handleResetGoals = () => {
    setIsGoalsSet(false);
    setSelectedGoals([]);
  };

  return (
    <div className={className} style={style}>
      {/* Section Title - Hide when goals are set */}
      {!isGoalsSet && sectionTitle && (
        <SectionTitle {...sectionTitle} />
      )}
      
      {/* Goals Selection - Hide when goals are set */}
      {!isGoalsSet && goalsSelection && (
        <GoalsSelection 
          {...goalsSelection} 
          onSectionChange={(action: string, goals: any[]) => {
            if (action === 'goals-completed') {
              handleGoalsCompleted(goals);
            }
          }}
        />
      )}
      
      {/* Goals Status Section - Show when goals are set */}
      {isGoalsSet && goalsStatus && (
        <GoalsStatusSection 
          {...goalsStatus}
          selectedGoals={selectedGoals}
          onResetGoals={handleResetGoals}
        />
      )}
    </div>
  );
}

function GoalsSelection({ goalSet, selectedGoals = [], availableGoals, maxGoals, searchEnabled, showAllGoals = false, className, style, onSectionChange }: any) {
  const [localSelectedGoals, setLocalSelectedGoals] = useState(selectedGoals);
  const [localShowAllGoals, setLocalShowAllGoals] = useState(showAllGoals);

  if (goalSet) {
    return null; // Don't render if goals are already set
  }

  const visibleGoals = localShowAllGoals ? availableGoals : availableGoals?.slice(0, 9);

  const handleGoalSelect = (goal: any) => {
    setLocalSelectedGoals((prev: any[]) => {
      const isAlreadySelected = prev.some(g => g.title === goal.title);
      
      if (isAlreadySelected) {
        // Remove goal if already selected
        return prev.filter(g => g.title !== goal.title);
      } else {
        // Add goal with proper structure for status section
        const newGoal = {
          ...goal,
          color: getGoalColor(prev.length >= maxGoals ? maxGoals - 1 : prev.length), // Assign color based on position
          lockColor: getGoalLockColor(prev.length >= maxGoals ? maxGoals - 1 : prev.length),
          isLocked: true
        };
        
        if (prev.length < maxGoals) {
          // Add goal if under limit
          return [...prev, newGoal];
        } else {
          // Replace the first (oldest) goal with the new one if at max limit
          return [...prev.slice(1), newGoal];
        }
      }
    });
  };

  // Helper functions to assign colors to goals
  const getGoalColor = (index: number) => {
    const colors = ["#EDFFEF", "#FFF2EC", "#F4F2FF"];
    return colors[index % colors.length];
  };

  const getGoalLockColor = (index: number) => {
    const lockColors = ["#006B5F", "#FF5100", "#781FD1"];
    return lockColors[index % lockColors.length];
  };

  const handleDone = () => {
    if (localSelectedGoals.length > 0 && onSectionChange) {
      // Pass the selected goals to trigger the status section
      onSectionChange('goals-completed', localSelectedGoals);
    }
  };

  const isGoalSelected = (goal: any) => {
    return localSelectedGoals.some((g: any) => g.title === goal.title);
  };

  const isDoneEnabled = localSelectedGoals.length > 0;

  return (
    <div className={className || "goals-section"} style={style}>
      <div className="goals-content">
        <div className="goals-header">
          <h3>Select up to {maxGoals} goals</h3>
          <div className="goals-actions">
            {searchEnabled && (
              <div className="search-box">
                <svg className="search-icon" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.0998 5.29996C7.62052 5.29996 4.79996 8.12052 4.79996 11.5998C4.79996 15.0792 7.62052 17.8997 11.0998 17.8997C14.5792 17.8997 17.3997 15.0792 17.3997 11.5998C17.3997 8.12052 14.5792 5.29996 11.0998 5.29996ZM3 11.5998C3 7.12642 6.62642 3.5 11.0998 3.5C15.5733 3.5 19.1997 7.12642 19.1997 11.5998C19.1997 16.0733 15.5733 19.6997 11.0998 19.6997C6.62642 19.6997 3 16.0733 3 11.5998Z"
                    fill="#CCCCCC"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5488 16.0488C15.9002 15.6973 16.4701 15.6973 16.8215 16.0488L20.7364 19.9637C21.0879 20.3151 21.0879 20.885 20.7364 21.2364C20.385 21.5879 19.8151 21.5879 19.4637 21.2364L15.5488 17.3215C15.1973 16.9701 15.1973 16.4002 15.5488 16.0488Z"
                    fill="#CCCCCC"
                  />
                </svg>
                <span>Search</span>
              </div>
            )}
            <button 
              className={`done-btn ${!isDoneEnabled ? 'disabled' : ''}`} 
              onClick={handleDone}
              disabled={!isDoneEnabled}
            >
              Done
            </button>
          </div>
        </div>
        <div className="goals-grid">
          {visibleGoals?.map((goal: any, idx: number) => (
            <div 
              className={`goal-chip ${isGoalSelected(goal) ? 'selected' : ''}`} 
              key={goal.title + idx}
              onClick={() => handleGoalSelect(goal)}
            >
              <div className="goal-emoji">{goal.emoji}</div>
              <span>{goal.title}</span>
              {isGoalSelected(goal) && (
                <div className="selected-indicator">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#006A63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
          
          {/* Show More/See less button only if there are more than 9 goals */}
          {availableGoals && availableGoals.length > 9 && (
            <div 
              className="goal-chip more" 
              onClick={() => setLocalShowAllGoals((prev: boolean) => !prev)} 
              style={{ cursor: 'pointer' }}
            >
              <svg width="17" height="5" viewBox="0 0 17 5" fill="none">
                <path
                  d="M2.06641 4.5C1.51641 4.5 1.04557 4.30417 0.653906 3.9125C0.26224 3.52083 0.0664062 3.05 0.0664062 2.5C0.0664062 1.95 0.26224 1.47917 0.653906 1.0875C1.04557 0.695833 1.51641 0.5 2.06641 0.5C2.61641 0.5 3.08724 0.695833 3.47891 1.0875C3.87057 1.47917 4.06641 1.95 4.06641 2.5C4.06641 3.05 3.87057 3.52083 3.47891 3.9125C3.08724 4.30417 2.61641 4.5 2.06641 4.5ZM8.06641 4.5C7.51641 4.5 7.04557 4.30417 6.65391 3.9125C6.26224 3.52083 6.06641 3.05 6.06641 2.5C6.06641 1.95 6.26224 1.47917 6.65391 1.0875C7.04557 0.695833 7.51641 0.5 8.06641 0.5C8.61641 0.5 9.08724 0.695833 9.47891 1.0875C9.87057 1.47917 10.0664 1.95 10.0664 2.5C10.0664 3.05 9.87057 3.52083 9.47891 3.9125C9.08724 4.30417 8.61641 4.5 8.06641 4.5ZM14.0664 4.5C13.5164 4.5 13.0456 4.30417 12.6539 3.9125C12.2622 3.52083 12.0664 3.05 12.0664 2.5C12.0664 1.95 12.2622 1.47917 12.6539 1.0875C13.0456 0.695833 13.5164 0.5 14.0664 0.5C14.6164 0.5 15.0872 0.695833 15.4789 1.0875C15.8706 1.47917 16.0664 1.95 16.0664 2.5C16.0664 3.05 15.8706 3.52083 15.4789 3.9125C15.0872 4.30417 14.6164 4.5 14.0664 4.5Z"
                  fill="#00201C"
                />
              </svg>
              <span>{localShowAllGoals ? 'See less' : 'More'}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UnsureSection({ title, description, steps, currentStep, options, ctaText, illustrationUrl, className, style }: any) {
  const [selectedOptions, setSelectedOptions] = React.useState(
    options?.reduce((acc: any, option: any) => {
      acc[option.id] = option.selected;
      return acc;
    }, {}) || {}
  );

  const handleOptionChange = (optionId: string) => {
    // For radio buttons, only one option should be selected at a time
    const newSelection: any = {};
    options.forEach((option: any) => {
      newSelection[option.id] = option.id === optionId;
    });
    setSelectedOptions(newSelection);
  };

  // Handle both old steps format and new options format for backward compatibility
  const isNewFormat = options && options.length > 0;

  if (isNewFormat) {
    return (
      <div className={className || "unsure-section-new"} style={style}>
        <div className="decorative-shapes"></div>
        <div className="unsure-content">
          <h2 className="unsure-title">{title}</h2>
          <div className="unsure-options">
            {options.map((option: any) => (
              <label key={option.id} className="option-item">
                <input
                  type="radio"
                  name="unsure-options"
                  checked={selectedOptions[option.id]}
                  onChange={() => handleOptionChange(option.id)}
                  className="option-radio"
                />
                <span className="option-text">{option.text}</span>
              </label>
            ))}
          </div>
          <button className="discover-btn-new">
            <span>{ctaText}</span>
            <div className="arrow-icon-new">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="10" fill="white" />
                <path
                  d="M10.6669 10.0001L7.55566 6.8889L8.44457 6L12.4446 10.0001L8.44457 14.0001L7.55566 13.1112L10.6669 10.0001Z"
                  fill="black"
                />
              </svg>
            </div>
          </button>
        </div>
        {illustrationUrl && (
          <div className="unsure-illustration">
            <img src={illustrationUrl} alt="Illustration" className="unsure-img" />
          </div>
        )}
      </div>
    );
  }

  // Fallback to old format for backward compatibility
  return (
    <div className={className || "purple-section"} style={style}>
      <div className="purple-content">
        <div className="purple-text">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="steps-container">
            <div className="steps-visual">
              {steps?.map((_: any, index: number) => (
                <React.Fragment key={index}>
                  <div className="step-indicator">
                    <div className={`step-circle ${index < currentStep ? 'filled' : ''}`}></div>
                  </div>
                  {index < steps.length - 1 && <div className="step-line"></div>}
                </React.Fragment>
              ))}
            </div>
            <div className="steps-text">
              {steps?.map((step: string, index: number) => (
                <div key={index} className="step-item">{step}</div>
              ))}
            </div>
          </div>
        </div>
        <button className="discover-btn">
          <span>{ctaText}</span>
          <div className="arrow-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="white" />
              <path
                d="M10.6669 10.0001L7.55566 6.8889L8.44457 6L12.4446 10.0001L8.44457 14.0001L7.55566 13.1112L10.6669 10.0001Z"
                fill="black"
              />
            </svg>
          </div>
        </button>
      </div>
      {illustrationUrl && (
        <div className="purple-image">
          <img src={illustrationUrl} alt="Illustration" className="positive-img" />
        </div>
      )}
    </div>
  );
}

function ProgressGettingStarted({ title, progressPercentage, showProgressIndicators, ctaText, faqLink, onCtaClick, className, style, onSectionChange }: any) {
  return (
    <div className={className || "progress-getting-started-section"} style={style}>
      <div className="progress-icon">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="..." fill="#006B5F" />
        </svg>
      </div>
      <div className="progress-content">
        <div className="progress-title">{title}</div>
        {showProgressIndicators && (
          <div className="progress-indicator">
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
            </div>
          </div>
        )}
      </div>
      <div className="progress-actions">
        <div className="faq-link">{faqLink}</div>
        <button className="complete-assessment-btn" onClick={() => onCtaClick && onSectionChange?.(onCtaClick)}>
          {ctaText}
        </button>
      </div>
    </div>
  );
}

function TherapistSection({ showSearchFilters, showTherapistGrid, activeFilters, searchPlaceholder, therapists, className, style }: any) {
  const [currentFilters, setCurrentFilters] = React.useState(activeFilters || []);
  const [searchQuery, setSearchQuery] = React.useState("");

  const removeFilter = (filterToRemove: string) => {
    setCurrentFilters((prev: string[]) => prev.filter((filter: string) => filter !== filterToRemove));
  };

  const getBookingUrl = (name: string) => {
    const cleanName = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "");
    const parts = cleanName.trim().split(" ");
    const firstName = parts[1];
    const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
    const urlName = [firstName, lastName].filter(Boolean).join("+");
    const email = firstName ? `${firstName.toLowerCase()}@refillhealth.com` : "";
    return `https://bookings.refillhealth.com/sreeja/therapy-session?name=${urlName}&email=${encodeURIComponent(email)}`;
  };

  const TherapistCard = ({ name, title, rating, specializations, sessionTime, sessionDay, imageUrl, availability }: any) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const bookingUrl = getBookingUrl(name);

    return (
      <div className="therapist-card">
        <div className="therapist-card-image">
          <img src={imageUrl || "/assets/images/dr-image.png"} alt={name} />
          <div className="availability-badge">
            <div className="availability-dot"></div>
            <span>{availability || "Available Today"}</span>
          </div>
        </div>
        <div className="therapist-card-content">
          <div className="therapist-profile-section">
            <div className="therapist-info">
              <h3 className="therapist-name">{name}</h3>
              <p className="therapist-title">{title}</p>
            </div>
            <div className="therapist-rating">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path
                  d="M9.04894 0.925099C9.3483 0.00378799 10.6517 0.0037868 10.9511 0.925097L12.4697 5.59886C12.6035 6.01088 12.9875 6.28984 13.4207 6.28984H18.335C19.3037 6.28984 19.7065 7.52946 18.9228 8.09886L14.947 10.9874C14.5966 11.242 14.4499 11.6934 14.5838 12.1054L16.1024 16.7792C16.4017 17.7005 15.3472 18.4666 14.5635 17.8972L10.5878 15.0087C10.2373 14.754 9.7627 14.754 9.41221 15.0087L5.43648 17.8972C4.65276 18.4666 3.59828 17.7005 3.89763 16.7792L5.41623 12.1054C5.55011 11.6934 5.40345 11.242 5.05296 10.9874L1.07722 8.09886C0.293507 7.52946 0.696283 6.28984 1.66501 6.28984H6.57929C7.01252 6.28984 7.39647 6.01088 7.53035 5.59886L9.04894 0.925099Z"
                  fill="#FFB063"
                />
              </svg>
              <span className="rating-value">{rating}</span>
            </div>
          </div>

          <div className="therapist-details">
            <div className="specializations">
              {specializations.map((spec: string, index: number) => (
                <span key={index} className="specialization-tag">
                  {spec}
                </span>
              ))}
            </div>

            <div className="session-booking">
              <div className="session-info">
                <div className="session-label">Sessions</div>
                <div className="session-time-info">
                  <span className="session-time">{sessionTime}</span>
                  <span className="session-day">{sessionDay}</span>
                </div>
              </div>
              <button className="book-now-btn" onClick={() => setModalOpen(true)}>
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        {modalOpen && (
          <div className="booking-modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="booking-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="booking-modal-close" onClick={() => setModalOpen(false)}>&times;</button>
              <iframe
                src={bookingUrl}
                title="Book Now"
                className="booking-modal-iframe"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={className || "therapist-coach-section"} style={style}>
      {showSearchFilters && (
        <div className="search-filters-section-therapist">
          <div className="search-container-therapist">
            <div className="search-field-therapist">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0998 4.79801C7.62052 4.79801 4.79996 7.61856 4.79996 11.0979C4.79996 14.5772 7.62052 17.3978 11.0998 17.3978C14.5792 17.3978 17.3997 14.5772 17.3997 11.0979C17.3997 7.61856 14.5792 4.79801 11.0998 4.79801ZM3 11.0979C3 6.62447 6.62642 2.99805 11.0998 2.99805C15.5733 2.99805 19.1997 6.62447 19.1997 11.0979C19.1997 15.5713 15.5733 19.1977 11.0998 19.1977C6.62642 19.1977 3 15.5713 3 11.0979Z"
                  fill="#CCCCCC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5488 15.5468C15.9002 15.1953 16.4701 15.1953 16.8215 15.5468L20.7364 19.4617C21.0879 19.8132 21.0879 20.383 20.7364 20.7345C20.385 21.086 19.8151 21.086 19.4637 20.7345L15.5488 16.8196C15.1973 16.4681 15.1973 15.8983 15.5488 15.5468Z"
                  fill="#CCCCCC"
                />
              </svg>
              <input
                type="text"
                placeholder={searchPlaceholder || "Search By Names, Specialization or Language"}
                className="search-input-therapist"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="filter-button-therapist">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path
                    d="M1.19193 14.6022L0.417969 13.8283L6.58943 7.66471L3.13443 6.82971L6.6888 4.61346L6.37964 0.435547L9.58297 3.12471L13.4388 1.56055L11.8746 5.42909L14.5846 8.61971L10.4067 8.31055L8.19839 11.8858L7.35547 8.43076L1.19193 14.6022ZM1.62151 4.50117L0.417969 3.29763L1.62151 2.0943L2.82505 3.29763L1.62151 4.50117ZM11.7017 14.5814L10.4982 13.3778L11.7017 12.1743L12.9051 13.3778L11.7017 14.5814Z"
                    fill="#1C1B1F"
                  />
                </svg>
                <span>Filter</span>
              </button>
            </div>
          </div>

          {currentFilters.length > 0 && (
            <div className="active-filters">
              {currentFilters.map((filter: string, index: number) => (
                <div key={index} className="filter-chip">
                  <span className="filter-chip-label">{filter}</span>
                  <button 
                    className="filter-chip-remove" 
                    onClick={() => removeFilter(filter)}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M1.8 11.248L0.75 10.198L4.95 5.99805L0.75 1.79805L1.8 0.748047L6 4.94805L10.2 0.748047L11.25 1.79805L7.05 5.99805L11.25 10.198L10.2 11.248L6 7.04805L1.8 11.248Z"
                        fill="#3F4947"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {showTherapistGrid && (
        <div className="therapist-grid">
          <div className="therapist-row">
            {therapists?.slice(0, 3).map((therapist: any, index: number) => (
              <TherapistCard key={index} {...therapist} />
            ))}
          </div>
          <div className="therapist-row">
            {therapists?.slice(3, 6).map((therapist: any, index: number) => (
              <TherapistCard key={index + 3} {...therapist} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MainTabsSection({ activeTab, tabs, className, style, onSectionChange }: any) {
  const [currentTab, setCurrentTab] = React.useState(activeTab || tabs?.[0]?.id);
  
  const currentTabContent = tabs?.find((tab: any) => tab.id === currentTab);
  
  return (
    <div className={className || "goals-section"} style={style}>
      <div className="section-header">
        <div className="tabs">
          {tabs?.map((tab: any, index: number) => (
            <React.Fragment key={tab.id}>
              <div
                className={`tab ${currentTab === tab.id ? "active" : ""}`}
                onClick={() => setCurrentTab(tab.id)}
              >
                {tab.label}
              </div>
              {index < tabs.length - 1 && (
                <div className="tab-separator">|</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {currentTabContent?.content && renderTabContent(currentTabContent.content, onSectionChange)}
    </div>
  );
}

function renderTabContent(content: any, onSectionChange?: (section: string, data?: any) => void) {
  switch (content.type) {
    case 'assessment-prompt':
      return (
        <div className="progress-content">
          <div className="recommendation-tab-header">
            {content.gifUrl && (
              <img
                src={content.gifUrl}
                alt="Recommendation GIF"
                className="recomm-gif"
              />
            )}
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          </div>
          <div className="recommendation-tab-button">
            <button className="figma-button">
              <span className="figma-button-text">{content.ctaText}</span>
            </button>
          </div>
        </div>
      );
    
    case 'progress-insights':
      return <ProgressInsightsCard content={content} />;
    
    case 'goals-management':
      return <GoalsManagementCard content={content} />;
    
    default:
      return <div>Unknown tab content type</div>;
  }
}

function CarePlanSection({ showCarePlan, title, description, unlockCard, referralCard, className, style }: any) {
  if (!showCarePlan) return null;
  
  return (
    <div className={className || "care-plan"} style={style}>
      <div className="care-plan-section">
        <div className="care-plan-header">
          <h2 className="care-plan-title">{title}</h2>
          <p className="care-plan-description">{description}</p>
        </div>

        <div className="care-plan-cards">
          <div className="unlock-plan-card">
            <div className="card-overlay">
              <svg
                className="lock-icon"
                width="24"
                height="31"
                viewBox="0 0 24 31"
                fill="none"
              >
                <path
                  d="M3.4974 30.416C2.71823 30.416 2.05122 30.1386 1.49635 29.5837C0.941493 29.0289 0.664062 28.3618 0.664062 27.5827V13.416C0.664062 12.6368 0.941493 11.9698 1.49635 11.415C2.05122 10.8601 2.71823 10.5827 3.4974 10.5827H4.91406V7.74935C4.91406 5.78963 5.60469 4.11914 6.98594 2.73789C8.36719 1.35664 10.0377 0.666016 11.9974 0.666016C13.9571 0.666016 15.6276 1.35664 17.0089 2.73789C18.3901 4.11914 19.0807 5.78963 19.0807 7.74935V10.5827H20.4974C21.2766 10.5827 21.9436 10.8601 22.4984 11.415C23.0533 11.9698 23.3307 12.6368 23.3307 13.416V27.5827C23.3307 28.3618 23.0533 29.0289 22.4984 29.5837C21.9436 30.1386 21.2766 30.416 20.4974 30.416H3.4974ZM11.9974 23.3327C12.7766 23.3327 13.4436 23.0553 13.9984 22.5004C14.5533 21.9455 14.8307 21.2785 14.8307 20.4993C14.8307 19.7202 14.5533 19.0532 13.9984 18.4983C13.4436 17.9434 12.7766 17.666 11.9974 17.666C11.2182 17.666 10.5512 17.9434 9.99636 18.4983C9.44149 19.0532 9.16406 19.7202 9.16406 20.4993C9.16406 21.2785 9.44149 21.9455 9.99636 22.5004C10.5512 23.0553 11.2182 23.3327 11.9974 23.3327ZM7.7474 10.5827H16.2474V7.74935C16.2474 6.56879 15.8342 5.56532 15.0078 4.73893C14.1814 3.91254 13.178 3.49935 11.9974 3.49935C10.8168 3.49935 9.81337 3.91254 8.98698 4.73893C8.16059 5.56532 7.7474 6.56879 7.7474 7.74935V10.5827Z"
                  fill="white"
                />
              </svg>
              <div className="unlock-content">
                <h3 className="unlock-title">{unlockCard?.title}</h3>
                <p className="unlock-subtitle">{unlockCard?.subtitle}</p>
                <button className="complete-assessment-btn">{unlockCard?.buttonText}</button>
              </div>
            </div>
          </div>

          <div className="referral-card">
            <div className="referral-overlay">
              <div className="referral-header">
                <div className="referral-content">
                  <span className="referral-label">{referralCard?.label}</span>
                  <h3 className="referral-title">{referralCard?.title}</h3>
                </div>
                <div className="referral-icon">
                  <img
                    src={referralCard?.imageUrl}
                    alt="Handshake"
                  />
                </div>
              </div>
              <div className="referral-code-section">
                <div className="code-info">
                  <span className="code-label">{referralCard?.codeLabel}</span>
                  <div className="code-display">
                    <svg
                      className="copy-icon"
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                    >
                      <path
                        d="M16.875 3.25H6.875C6.70924 3.25 6.55027 3.31585 6.43306 3.43306C6.31585 3.55027 6.25 3.70924 6.25 3.875V7H3.125C2.95924 7 2.80027 7.06585 2.68306 7.18306C2.56585 7.30027 2.5 7.45924 2.5 7.625V17.625C2.5 17.7908 2.56585 17.9497 2.68306 18.0669C2.80027 18.1842 2.95924 18.25 3.125 18.25H13.125C13.2908 18.25 13.4497 18.1842 13.5669 18.0669C13.6842 17.9497 13.75 17.7908 13.75 17.625V14.5H16.875C17.0408 14.5 17.1997 14.4342 17.3169 14.3169C17.4342 14.1997 17.5 14.0408 17.5 13.875V3.875C17.5 3.70924 17.4342 3.55027 17.3169 3.43306C17.1997 3.31585 17.0408 3.25 16.875 3.25ZM12.5 17H3.75V8.25H12.5V17ZM16.25 13.25H13.75V7.625C13.75 7.45924 13.6842 7.30027 13.5669 7.18306C13.4497 7.06585 13.2908 7 13.125 7H7.5V4.5H16.25V13.25Z"
                        fill="black"
                      />
                    </svg>
                    <span className="code-text">{referralCard?.codeText}</span>
                  </div>
                </div>
                <button className="share-invite-btn">{referralCard?.buttonText}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MicroLearningsSection({ title, description, learningCards, className, style }: any) {
  return (
    <div className={className || "micro-learnings-main-section"} style={style}>
      <div className="section-header">
        <div className="section-title">{title}</div>
        <div className="section-description">{description}</div>
      </div>

      <div className="learning-cards-container">
        {learningCards?.map((card: any, index: number) => (
          <div key={index} className="learning-card">
            <div className="card-container">
              <div className="card-sub-container">
                <div className="card-content-wrapper">
                  <div className="card-content-section">
                    <div className="card-title-wrapper">
                      <div className="card-title-row">
                        <div className="card-name">{card.title}</div>
                        <div className="card-button">
                          <svg
                            className="card-arrow-icon"
                            width="26"
                            height="26"
                            viewBox="0 0 26 26"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.78557 19.2144C7.16633 19.5952 7.78367 19.5952 8.16443 19.2144L17.55 9.82886V17.225C17.55 17.7635 17.9865 18.2 18.525 18.2C19.0635 18.2 19.5 17.7635 19.5 17.225V7.475C19.5 6.93652 19.0635 6.5 18.525 6.5H8.775C8.23652 6.5 7.8 6.93652 7.8 7.475C7.8 8.01348 8.23652 8.45 8.775 8.45H16.1711L6.78557 17.8356C6.40481 18.2163 6.40481 18.8337 6.78557 19.2144Z"
                              fill="#00C7B2"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="card-tags-container">
                        <div className="card-tags-sub-container">
                          {card.tags?.map((tag: any, tagIndex: number) => (
                            <div key={tagIndex} className="card-tag">{tag}</div>
                          ))}
                          {card.readTime && (
                            <div className="card-tag-group">
                              <div className="card-tag-read">{card.readTime}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="card-name-description">{card.description}</div>
                  </div>
                </div>
                <div className="card-actions-section">
                  <div className="card-actions-wrapper">
                    <button className="take-look-button">{card.ctaText}</button>
                    <button className="take-assessment-button">{card.secondaryCta}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewPlatformSection({ showNewPlatform, label, title, downloadTitle, downloadButtons, phoneImages, className, style }: any) {
  if (!showNewPlatform) return null;
  
  return (
    <div className={className || "main-new-platform-section"} style={style}>
      <div className="platform-content">
        <div className="platform-info">
          <div className="platform-header">
            <span className="platform-label">{label || "New Platform"}</span>
            <h2 className="platform-title">
              {title || "Get one of our Refill Health apps, which is only available on"}
            </h2>
          </div>

          <div className="download-section">
            <h3 className="download-title">{downloadTitle || "Download Apps:"}</h3>
            <div className="download-buttons">
              {downloadButtons?.map((button: any, index: number) => (
                <img 
                  key={index}
                  src={button.imageUrl} 
                  alt={button.alt || "download-button"} 
                />
              ))}
            </div>
          </div>
        </div>

        <div className="phone-1-phone-2">
          {phoneImages?.map((image: any, index: number) => (
            <img 
              key={index}
              src={image.imageUrl} 
              alt={image.alt || "phone"} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressInsightsCard({ content }: any) {
  const [progressActiveTab, setProgressActiveTab] = React.useState("this-month");
  const [chartType, setChartType] = React.useState("bar");
  
  return (
    <div className="main-progress-content-tab">
      <div className="progress-insights-card">
        <div className="insights-header">
          <div className="insights-title-section">
            <h2 className="insights-title">{content.title}</h2>
            <button className="insights-menu-btn">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 4.5C9.82843 4.5 10.5 3.82843 10.5 3C10.5 2.17157 9.82843 1.5 9 1.5C8.17157 1.5 7.5 2.17157 7.5 3C7.5 3.82843 8.17157 4.5 9 4.5Z"
                  fill="#999999"
                />
                <path
                  d="M9 10.5C9.82843 10.5 10.5 9.82843 10.5 9C10.5 8.17157 9.82843 7.5 9 7.5C8.17157 7.5 7.5 8.17157 7.5 9C7.5 9.82843 8.17157 10.5 9 10.5Z"
                  fill="#999999"
                />
                <path
                  d="M9 16.5C9.82843 16.5 10.5 15.8284 10.5 15C10.5 14.1716 9.82843 13.5 9 13.5C8.17157 13.5 7.5 14.1716 7.5 15C7.5 15.8284 8.17157 16.5 9 16.5Z"
                  fill="#999999"
                />
              </svg>
            </button>
          </div>

          <div className="insights-controls">
            <div className="tabs-section">
              <div className="insights-tabs">
                {content.progressTabs?.map((tab: any) => (
                  <div
                    key={tab.id}
                    className={`progress-tab ${progressActiveTab === tab.id ? "progress-tab-active" : ""}`}
                    onClick={() => setProgressActiveTab(tab.id)}
                  >
                    <span>{tab.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="chart-controls">
              <div className="chart-type-toggles">
                <button
                  className={`chart-toggle ${chartType === "bar" ? "active" : ""}`}
                  onClick={() => setChartType("bar")}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M17.5 15.625H16.875V3.125C16.875 2.95924 16.8092 2.80027 16.6919 2.68306C16.5747 2.56585 16.4158 2.5 16.25 2.5H11.875C11.7092 2.5 11.5503 2.56585 11.4331 2.68306C11.3158 2.80027 11.25 2.95924 11.25 3.125V6.25H7.5C7.33424 6.25 7.17527 6.31585 7.05806 6.43306C6.94085 6.55027 6.875 6.70924 6.875 6.875V10H3.75C3.58424 10 3.42527 10.0658 3.30806 10.1831C3.19085 10.3003 3.125 10.4592 3.125 10.625V15.625H2.5C2.33424 15.625 2.17527 15.6908 2.05806 15.8081C1.94085 15.9253 1.875 16.0842 1.875 16.25C1.875 16.4158 1.94085 16.5747 2.05806 16.6919C2.17527 16.8092 2.33424 16.875 2.5 16.875H17.5C17.6658 16.875 17.8247 16.8092 17.9419 16.6919C18.0592 16.5747 18.125 16.4158 18.125 16.25C18.125 16.0842 18.0592 15.9253 17.9419 15.8081C17.8247 15.6908 17.6658 15.625 17.5 15.625ZM12.5 3.75H15.625V15.625H12.5V3.75ZM8.125 7.5H11.25V15.625H8.125V7.5ZM4.375 11.25H6.875V15.625H4.375V11.25Z"
                      fill={chartType === "bar" ? "#003A5D" : "#999999"}
                    />
                  </svg>
                </button>
                <div className="toggle-divider"></div>
                <button
                  className={`chart-toggle ${chartType === "line" ? "active" : ""}`}
                  onClick={() => setChartType("line")}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M18.125 16.25C18.125 16.4158 18.0592 16.5747 17.9419 16.6919C17.8247 16.8092 17.6658 16.875 17.5 16.875H2.5C2.33424 16.875 2.17527 16.8092 2.05806 16.6919C1.94085 16.5747 1.875 16.4158 1.875 16.25V3.75C1.875 3.58424 1.94085 3.42527 2.05806 3.30806C2.17527 3.19085 2.33424 3.125 2.5 3.125C2.66576 3.125 2.82473 3.19085 2.94194 3.30806C3.05915 3.42527 3.125 3.58424 3.125 3.75V12.2414L7.05781 8.30781C7.11586 8.2497 7.18479 8.2036 7.26066 8.17215C7.33654 8.1407 7.41787 8.12451 7.5 8.12451C7.58213 8.12451 7.66346 8.1407 7.73934 8.17215C7.81521 8.2036 7.88414 8.2497 7.94219 8.30781L10 10.3664L14.1164 6.25H12.5C12.3342 6.25 12.1753 6.18415 12.0581 6.06694C11.9408 5.94973 11.875 5.79076 11.875 5.625C11.875 5.45924 11.9408 5.30027 12.0581 5.18306C12.1753 5.06585 12.3342 5 12.5 5H15.625C15.7908 5 15.9497 5.06585 16.0669 5.18306C16.1842 5.30027 16.25 5.45924 16.25 5.625V8.75C16.25 8.91576 16.1842 9.07473 16.0669 9.19194C15.9497 9.30915 15.7908 9.375 15.625 9.375C15.4592 9.375 15.3003 9.30915 15.1831 9.19194C15.0658 9.07473 15 8.91576 15 8.75V7.13359L10.4422 11.6922C10.3841 11.7503 10.3152 11.7964 10.2393 11.8279C10.1635 11.8593 10.0821 11.8755 10 11.8755C9.91786 11.8755 9.83654 11.8593 9.76066 11.8279C9.68479 11.7964 9.61586 11.7503 9.55781 11.6922L7.5 9.63359L3.125 14.0086V15.625H17.5C17.6658 15.625 17.8247 15.6908 17.9419 15.8081C18.0592 15.9253 18.125 16.0842 18.125 16.25Z"
                      fill={chartType === "line" ? "#003A5D" : "#999999"}
                    />
                  </svg>
                </button>
              </div>

              <div className="plan-filter">
                <span>{content.chartControls?.planFilter || "No plan"}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.16737 6.16737C4.39052 5.94421 4.75233 5.94421 4.97549 6.16737L8 9.19188L11.0245 6.16737C11.2477 5.94421 11.6095 5.94421 11.8326 6.16737C12.0558 6.39052 12.0558 6.75233 11.8326 6.97549L8.40406 10.4041C8.1809 10.6272 7.8191 10.6272 7.59594 10.4041L4.16737 6.97549C3.94421 6.75233 3.94421 6.39052 4.16737 6.16737Z"
                    fill="#999999"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="chart-area">
          <div className="chart-y-axis">
            {content.chartData?.yAxisLabels?.map((label: string, index: number) => (
              <span key={index} className="y-label">{label}</span>
            ))}
          </div>

          <div className="chart-content">
            <div className="chart-grid">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="grid-line"></div>
              ))}
            </div>

            <div className="chart-bars-container">
              {content.chartData?.months?.map((month: string, index: number) => (
                <div key={month} className="month-bar-group">
                  <div className="bars-wrapper">
                    <div
                      className="bar expected-bar"
                      style={{ height: "2px" }}
                    ></div>
                    <div
                      className="bar reality-bar"
                      style={{ height: "2px" }}
                    ></div>
                  </div>
                  <span className="month-label">{month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="chart-legend">
          {content.chartData?.legendItems?.map((item: any, index: number) => (
            <div key={index} className="legend-item">
              <div className={`legend-color ${item.color}`}></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {content.showAssessmentWarning && (
        <div className="assessment-warning-banner">
          <div className="warning-content">
            <div className="warning-icon-text">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="warning-icon"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3429 4.80333C11.6961 4.60447 12.0947 4.5 12.5 4.5C12.9053 4.5 13.3039 4.60447 13.6571 4.80333C14.0103 5.0022 14.3063 5.28874 14.5165 5.63531L14.5188 5.63904L21.184 16.7662C21.39 17.1228 21.4988 17.5272 21.5 17.939C21.5011 18.3508 21.3944 18.7558 21.1905 19.1136C20.9866 19.4713 20.6925 19.7695 20.3376 19.9783C19.9827 20.1872 19.5792 20.2994 19.1674 20.304L19.1588 20.3041L5.83257 20.304C5.42077 20.2995 5.01734 20.1872 4.66241 19.9783C4.30748 19.7695 4.01342 19.4713 3.80949 19.1136C3.60555 18.7558 3.49886 18.3508 3.50001 17.939C3.50116 17.5272 3.61013 17.1229 3.81606 16.7662L3.82236 16.7553L10.4835 5.6353C10.6937 5.28873 10.9897 5.0022 11.3429 4.80333ZM12.5 6.07232C12.3649 6.07232 12.232 6.10715 12.1143 6.17344C11.9971 6.23942 11.8988 6.33437 11.8288 6.4492L5.17508 17.557C5.10812 17.6748 5.07271 17.8079 5.07233 17.9434C5.07194 18.0807 5.10751 18.2157 5.17549 18.3349C5.24346 18.4542 5.34149 18.5536 5.45979 18.6232C5.57707 18.6922 5.71023 18.7296 5.84623 18.7317H19.1538C19.2898 18.7296 19.4229 18.6922 19.5402 18.6232C19.6585 18.5536 19.7565 18.4542 19.8245 18.3349C19.8925 18.2157 19.9281 18.0807 19.9277 17.9434C19.9273 17.8079 19.8919 17.6748 19.8249 17.5571L13.1722 6.45076C13.1719 6.45024 13.1715 6.44972 13.1712 6.4492C13.1012 6.33437 13.0029 6.23942 12.8857 6.17344C12.768 6.10715 12.6351 6.07232 12.5 6.07232Z"
                  fill="#FFBF00"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.4971 9.29883C12.9313 9.29883 13.2833 9.6508 13.2833 10.085V13.2296C13.2833 13.6638 12.9313 14.0158 12.4971 14.0158C12.0629 14.0158 11.7109 13.6638 11.7109 13.2296V10.085C11.7109 9.6508 12.0629 9.29883 12.4971 9.29883Z"
                  fill="#FFBF00"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7109 16.3741C11.7109 15.9399 12.0629 15.5879 12.4971 15.5879H12.505C12.9391 15.5879 13.2911 15.9399 13.2911 16.3741C13.2911 16.8082 12.9391 17.1602 12.505 17.1602H12.4971C12.0629 17.1602 11.7109 16.8082 11.7109 16.3741Z"
                  fill="#FFBF00"
                />
              </svg>
              <p className="warning-text">
                You haven't taken the assessment yet – take it to set your goal and begin your journey.
              </p>
            </div>
            <button className="take-assessment-btn">Take Assessment</button>
          </div>
        </div>
      )}
    </div>
  );
}

function GoalsManagementCard({ content }: any) {
  const [showAllGoals, setShowAllGoals] = React.useState(false);
  
  const visibleGoals = showAllGoals 
    ? content.availableGoals 
    : content.availableGoals?.slice(0, 8);
  
  return (
    <div className="goals-content">
      <div className="goals-header">
        <h3>Select up to {content.maxGoals} goals</h3>
        <div className="goals-actions">
          {content.searchEnabled && (
            <div className="search-box">
              <svg
                className="search-icon"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0998 5.29996C7.62052 5.29996 4.79996 8.12052 4.79996 11.5998C4.79996 15.0792 7.62052 17.8997 11.0998 17.8997C14.5792 17.8997 17.3997 15.0792 17.3997 11.5998C17.3997 8.12052 14.5792 5.29996 11.0998 5.29996ZM3 11.5998C3 7.12642 6.62642 3.5 11.0998 3.5C15.5733 3.5 19.1997 7.12642 19.1997 11.5998C19.1997 16.0733 15.5733 19.6997 11.0998 19.6997C6.62642 19.6997 3 16.0733 3 11.5998Z"
                  fill="#CCCCCC"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5488 16.0488C15.9002 15.6973 16.4701 15.6973 16.8215 16.0488L20.7364 19.9637C21.0879 20.3151 21.0879 20.885 20.7364 21.2364C20.385 21.5879 19.8151 21.5879 19.4637 21.2364L15.5488 17.3215C15.1973 16.9701 15.1973 16.4002 15.5488 16.0488Z"
                  fill="#CCCCCC"
                />
              </svg>
              <span>Search</span>
            </div>
          )}
          <button className="done-btn">Done</button>
        </div>
      </div>

      <div className="goals-grid">
        {visibleGoals?.map((goal: any, idx: number) => (
          <div className="goal-chip" key={goal.title + idx}>
            <div className="goal-emoji">{goal.emoji}</div>
            <span>{goal.title}</span>
          </div>
        ))}
        <div 
          className="goal-chip more" 
          onClick={() => setShowAllGoals((prev: boolean) => !prev)} 
          style={{ cursor: 'pointer' }}
        >
          <svg width="17" height="5" viewBox="0 0 17 5" fill="none">
            <path
              d="M2.06641 4.5C1.51641 4.5 1.04557 4.30417 0.653906 3.9125C0.26224 3.52083 0.0664062 3.05 0.0664062 2.5C0.0664062 1.95 0.26224 1.47917 0.653906 1.0875C1.04557 0.695833 1.51641 0.5 2.06641 0.5C2.61641 0.5 3.08724 0.695833 3.47891 1.0875C3.87057 1.47917 4.06641 1.95 4.06641 2.5C4.06641 3.05 3.87057 3.52083 3.47891 3.9125C3.08724 4.30417 2.61641 4.5 2.06641 4.5ZM8.06641 4.5C7.51641 4.5 7.04557 4.30417 6.65391 3.9125C6.26224 3.52083 6.06641 3.05 6.06641 2.5C6.06641 1.95 6.26224 1.47917 6.65391 1.0875C7.04557 0.695833 7.51641 0.5 8.06641 0.5C8.61641 0.5 9.08724 0.695833 9.47891 1.0875C9.87057 1.47917 10.0664 1.95 10.0664 2.5C10.0664 3.05 9.87057 3.52083 9.47891 3.9125C9.08724 4.30417 8.61641 4.5 8.06641 4.5ZM14.0664 4.5C13.5164 4.5 13.0456 4.30417 12.6539 3.9125C12.2622 3.52083 12.0664 3.05 12.0664 2.5C12.0664 1.95 12.2622 1.47917 12.6539 1.0875C13.0456 0.695833 13.5164 0.5 14.0664 0.5C14.6164 0.5 15.0872 0.695833 15.4789 1.0875C15.8706 1.47917 16.0664 1.95 16.0664 2.5C16.0664 3.05 15.8706 3.52083 15.4789 3.9125C15.0872 4.30417 14.6164 4.5 14.0664 4.5Z"
              fill="#00201C"
            />
          </svg>
          <span>{showAllGoals ? 'See less' : 'More'}</span>
        </div>
      </div>

      {content.showAssessmentWarning && (
        <div className="assessment-warning">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8429 4.30333C11.1961 4.10447 11.5947 4 12 4C12.4053 4 12.8039 4.10447 13.1571 4.30333C13.5103 4.5022 13.8063 4.78874 14.0165 5.13531L14.0188 5.13904L20.684 16.2662C20.89 16.6228 20.9988 17.0272 21 17.439C21.0011 17.8508 20.8944 18.2558 20.6905 18.6136C20.4866 18.9713 20.1925 19.2695 19.8376 19.4783C19.4827 19.6872 19.0792 19.7994 18.6674 19.804L18.6588 19.8041L5.33257 19.804C4.92077 19.7995 4.51734 19.6872 4.16241 19.4783C3.80748 19.2695 3.51342 18.9713 3.30949 18.6136C3.10555 18.2558 2.99886 17.8508 3.00001 17.439C3.00116 17.0272 3.11013 16.6229 3.31606 16.2662L3.32236 16.2553L9.98348 5.1353C10.1937 4.78873 10.4897 4.5022 10.8429 4.30333Z"
              fill="#E94545"
            />
          </svg>
          <span>{content.warningText}</span>
          <svg
            className="close-icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15 5L5 15"
              stroke="black"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 5L15 15"
              stroke="black"
              strokeOpacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

// Right Sidebar Components
function RightSidebarContent({ content, className, style, config }: any) {
  const rightSidebarConfig = config?.rightSidebar;
  
  if (!rightSidebarConfig) return null;
  
  return (
    <div className={className || "figma-right-sidebar"} style={style}>
      {rightSidebarConfig.profileOverview && (
        <ProfileOverview {...rightSidebarConfig.profileOverview} />
      )}
      
      {rightSidebarConfig.insightsCard && rightSidebarConfig.insightsCard.showCard && (
        <InsightsCard {...rightSidebarConfig.insightsCard} />
      )}
      
      {rightSidebarConfig.dailyStreak && rightSidebarConfig.dailyStreak.showCard && (
        <DailyStreakCard {...rightSidebarConfig.dailyStreak} />
      )}
      
      {rightSidebarConfig.rewards && rightSidebarConfig.rewards.showCard && (
        <RewardsCard {...rightSidebarConfig.rewards} />
      )}
      
      {rightSidebarConfig.upcomingEvents && rightSidebarConfig.upcomingEvents.showCard && (
        <UpcomingEventsCard {...rightSidebarConfig.upcomingEvents} />
      )}
      
      {rightSidebarConfig.banner && rightSidebarConfig.banner.showBanner && (
        <Banner {...rightSidebarConfig.banner} />
      )}
    </div>
  );
}

function ProfileOverview({ title, showMoreOptions, profile, className, style }: any) {
  return (
    <>
      <div className={className || "figma-profile-header"} style={style}>
        <div className="figma-profile-title">{title}</div>
        {showMoreOptions && (
          <div className="figma-more-options">
            <svg
              width="4"
              height="16"
              viewBox="0 0 4 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 0.5C1.3125 0.5 0.75 1.0625 0.75 1.75C0.75 2.4375 1.3125 3 2 3C2.6875 3 3.25 2.4375 3.25 1.75C3.25 1.0625 2.6875 0.5 2 0.5ZM2 13C1.3125 13 0.75 13.5625 0.75 14.25C0.75 14.9375 1.3125 15.5 2 15.5C2.6875 15.5 3.25 14.9375 3.25 14.25C3.25 13.5625 2.6875 13 2 13ZM2 6.75C1.3125 6.75 0.75 7.3125 0.75 8C0.75 8.6875 1.3125 9.25 2 9.25C2.6875 9.25 3.25 8.6875 3.25 8C3.25 7.3125 2.6875 6.75 2 6.75Z"
                fill="#1F1F1F"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="figma-profile-content">
        <img
          src={profile.imageUrl}
          alt={profile.alt}
          width={73}
          height={72}
          style={{ borderRadius: '50%', objectFit: 'cover', display: 'block' }}
          className="figma-avatar"
        />
        <div className="figma-profile-text">{profile.text}</div>
      </div>
    </>
  );
}

function InsightsCard({ icon, text, className, style }: any) {
  return (
    <div className={className || "figma-card"} style={style}>
      <div className="figma-insights-content">
        <div className="figma-award-icon">{icon}</div>
        <div className="figma-insights-text">{text}</div>
      </div>
    </div>
  );
}

function DailyStreakCard({ title, showSeeMore, streakText, description, buttonText, currentStreak, longestStreak, className, style }: any) {
  return (
    <div className={className || "figma-card"} style={style}>
      <div className="figma-streak-header">
        <div className="figma-streak-title">{title}</div>
        {showSeeMore && <div className="figma-see-more">See More</div>}
      </div>
      <div className="figma-streak-content">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            alignSelf: "stretch",
          }}
        >
          <div className="figma-flame-container">
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_603_1304)">
                <ellipse
                  cx="17.3735"
                  cy="18.75"
                  rx="4.6875"
                  ry="6.5625"
                  fill="#FFCE51"
                />
                <path
                  d="M24.848 15.4387C22.8855 10.3387 15.898 10.0637 17.5855 2.65115C17.7105 2.10115 17.123 1.67615 16.648 1.96365C12.1105 4.63865 8.84805 10.0012 11.5855 17.0262C11.8105 17.6012 11.1355 18.1387 10.648 17.7637C8.38555 16.0512 8.14805 13.5887 8.34805 11.8262C8.42305 11.1762 7.57305 10.8637 7.21055 11.4012C6.36055 12.7012 5.49805 14.8012 5.49805 17.9637C5.97305 24.9637 11.8855 27.1137 14.0105 27.3887C17.048 27.7762 20.3355 27.2137 22.698 25.0512C25.298 22.6387 26.248 18.7887 24.848 15.4387ZM13.248 21.7262C15.048 21.2887 15.973 19.9887 16.223 18.8387C16.6355 17.0512 15.023 15.3012 16.1105 12.4762C16.523 14.8137 20.198 16.2762 20.198 18.8262C20.298 21.9887 16.873 24.7012 13.248 21.7262Z"
                  fill="#F37A1F"
                />
              </g>
              <defs>
                <clipPath id="clip0_603_1304">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="figma-streak-text">{streakText}</div>
          <div className="figma-streak-description">{description}</div>
        </div>
        <button className="figma-button">
          <span className="figma-button-text">{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

function RewardsCard({ title, subtitle, progressPercentage, buttonText, className, style }: any) {
  const progressWidth = progressPercentage ? (progressPercentage * 158 / 100) : 158;
  
  return (
    <div className={`${className || "figma-card"} figma-card-large`} style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div className="figma-medal-icon">
          <svg
            width="39"
            height="25"
            viewBox="0 0 39 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8449 2.52712C13.6487 2.2001 13.2953 2 12.9139 2H2.41767C1.57375 2 1.05249 2.92065 1.48668 3.64431L13.2124 23.1872C13.4086 23.5142 13.762 23.7143 14.1434 23.7143H24.6397C25.4836 23.7143 26.0048 22.7936 25.5707 22.07L13.8449 2.52712Z"
              fill="#C52229"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.914 0.914062H2.41768C0.729847 0.914062 -0.312685 2.75537 0.555702 4.20268L12.2814 23.7455C12.6738 24.3996 13.3807 24.7998 14.1434 24.7998H24.6397C26.3275 24.7998 27.37 22.9585 26.5017 21.5112L14.7759 1.9683C14.3835 1.31426 13.6767 0.914062 12.914 0.914062ZM12.914 1.99978C13.2953 1.99978 13.6487 2.19987 13.8449 2.5269L25.5707 22.0698C26.0049 22.7934 25.4836 23.7141 24.6397 23.7141H14.1434C13.762 23.7141 13.4086 23.514 13.2124 23.1869L1.48669 3.64409C1.0525 2.92043 1.57376 1.99978 2.41768 1.99978H12.914Z"
              fill="#9B0F15"
            />
            <path
              d="M25.1551 2.52712C25.3513 2.2001 25.7047 2 26.0861 2H36.5823C37.4262 2 37.9475 2.92065 37.5133 3.64431L25.7876 23.1872C25.5914 23.5142 25.238 23.7143 24.8566 23.7143H14.3603C13.5164 23.7143 12.9952 22.7936 13.4293 22.07L25.1551 2.52712Z"
              fill="#F1333B"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.0865 0.914062H36.5828C38.2706 0.914062 39.3132 2.75537 38.4448 4.20268L26.7191 23.7455C26.3266 24.3996 25.6198 24.7998 24.8571 24.7998H14.3608C12.673 24.7998 11.6304 22.9585 12.4988 21.5112L24.2245 1.9683C24.617 1.31426 25.3238 0.914062 26.0865 0.914062ZM26.0865 1.99978C25.7052 1.99978 25.3518 2.19987 25.1555 2.5269L13.4298 22.0698C12.9956 22.7934 13.5169 23.7141 14.3608 23.7141H24.8571C25.2385 23.7141 25.5919 23.514 25.7881 23.1869L37.5138 3.64409C37.948 2.92043 37.4267 1.99978 36.5828 1.99978H26.0865Z"
              fill="#9B0F15"
            />
          </svg>
          <div style={{ position: "absolute", left: "4px", top: "14px" }}>
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.1571 14.7704C30.1571 22.8653 23.5948 29.4276 15.4999 29.4276C7.405 29.4276 0.842773 22.8653 0.842773 14.7704C0.842773 6.67551 7.405 0.113281 15.4999 0.113281C23.5948 0.113281 30.1571 6.67551 30.1571 14.7704Z"
                fill="#BCCCD2"
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "218px",
            height: "68px",
            flexDirection: "column",
            alignItems: "center",
            gap: "7px",
          }}
        >
          <div className="figma-rewards-title">{title}</div>
          <div className="figma-rewards-subtitle">{subtitle}</div>
        </div>
      </div>

      <div className="figma-progress-container">
        <div className="figma-progress-track"></div>
        <div className="figma-progress-fill" style={{ width: `${progressWidth}px` }}></div>
        <div className="figma-progress-medal">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3286 8.46125C15.3286 12.5086 12.0475 15.7897 7.99998 15.7897C3.95251 15.7897 0.671387 12.5086 0.671387 8.46125C0.671387 4.41387 3.95251 1.13281 7.99998 1.13281C12.0475 1.13281 15.3286 4.41387 15.3286 8.46125Z"
              fill="#BCCCD2"
            />
          </svg>
        </div>
      </div>

      <button className="figma-claim-button">
        <span className="figma-claim-text">{buttonText}</span>
      </button>
    </div>
  );
}

function UpcomingEventsCard({ title, date, buttonText, className, style }: any) {
  return (
    <div className={`${className || "figma-card"} figma-card-large`} style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignSelf: "stretch",
        }}
      >
        <div className="figma-events-header">
          <div className="figma-events-title">{title}</div>
          <div
            style={{
              display: "flex",
              width: "24px",
              height: "24px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.9546 3.70281C2.50272 3.70281 2.1364 4.06913 2.1364 4.52101V15.9758C2.1364 16.4277 2.50272 16.794 2.9546 16.794H14.4094C14.8613 16.794 15.2276 16.4277 15.2276 15.9758V4.52101C15.2276 4.06913 14.8613 3.70281 14.4094 3.70281H2.9546ZM0.5 4.52101C0.5 3.16537 1.59896 2.06641 2.9546 2.06641H14.4094C15.765 2.06641 16.864 3.16537 16.864 4.52101V15.9758C16.864 17.3314 15.765 18.4304 14.4094 18.4304H2.9546C1.59896 18.4304 0.5 17.3314 0.5 15.9758V4.52101Z"
                fill="#003A5D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9549 0.429688C12.4068 0.429688 12.7731 0.796008 12.7731 1.24789V4.52069C12.7731 4.97257 12.4068 5.33889 11.9549 5.33889C11.503 5.33889 11.1367 4.97257 11.1367 4.52069V1.24789C11.1367 0.796008 11.503 0.429688 11.9549 0.429688Z"
                fill="#003A5D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.40902 0.429688C5.8609 0.429688 6.22722 0.796008 6.22722 1.24789V4.52069C6.22722 4.97257 5.8609 5.33889 5.40902 5.33889C4.95714 5.33889 4.59082 4.97257 4.59082 4.52069V1.24789C4.59082 0.796008 4.95714 0.429688 5.40902 0.429688Z"
                fill="#003A5D"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.5 7.79476C0.5 7.34288 0.866321 6.97656 1.3182 6.97656H16.0458C16.4977 6.97656 16.864 7.34288 16.864 7.79476C16.864 8.24664 16.4977 8.61296 16.0458 8.61296H1.3182C0.866321 8.61296 0.5 8.24664 0.5 7.79476Z"
                fill="#003A5D"
              />
            </svg>
          </div>
        </div>
        <div className="figma-events-date">{date}</div>
      </div>
      <button className="figma-button">
        <span className="figma-button-text">{buttonText}</span>
      </button>
    </div>
  );
}

function Banner({ activeDot, totalDots, className, style }: any) {
  return (
    <div className={className || "figma-banner"} style={style}>
      <div className="figma-banner-content"></div>
      <div className="figma-banner-dots">
        {Array.from({ length: totalDots }, (_, index) => (
          <div 
            key={index} 
            className={`figma-dot ${index === activeDot ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function GoalsStatusSection({ goalSet, selectedGoals, title, resetEnabled, resetText, onGoalSet, onResetGoals, className, style, onSectionChange }: any) {
  return (
    <div className={className || "goals-status-container"} style={style}>
      <div className="goals-status-header">
        <div>
          <div className="goals-status-info">
            <h3 className="goals-status-title">{title}</h3>
          </div>
          <div className="reset-goals-container">
            <button 
              className="reset-goals-btn" 
              onClick={() => onResetGoals?.()}
              disabled={!resetEnabled}
            >
              <div className="btn-content">
                <span className="btn-text">Reset Goals</span>
              </div>
            </button>
            <p className="reset-goals-text">{resetText}</p>
          </div>
        </div>
      </div>

      <div className="goals-cards-container">
        {selectedGoals?.map((goal: any, index: number) => (
          <GoalCardComponent
            key={index}
            emoji={goal.emoji}
            title={goal.title}
            color={goal.color}
            lockColor={goal.lockColor}
            isLocked={goal.isLocked}
          />
        ))}
      </div>
    </div>
  );
}

function GoalCardComponent({ emoji, title, color, lockColor, isLocked, className, style }: any) {
  return (
    <div 
      className={className || "goal-card"} 
      style={{
        ...style,
        backgroundColor: color,
        borderColor: lockColor,
        opacity: isLocked ? 0.7 : 1
      }}
    >
      <div className="goal-emoji">{emoji}</div>
      <h4>{title}</h4>
      {isLocked && (
        <div className="lock-indicator">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8H6C4.89543 8 4 8.89543 4 10V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10C20 8.89543 19.1046 8 18 8Z"
              stroke={lockColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 8V6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6V8"
              stroke={lockColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}