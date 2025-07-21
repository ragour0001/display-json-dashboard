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
    console.log('🎯 DynamicContentRenderer: handleSectionChange called with:', section, data);

    if (section === 'goals-completed') {
      setGoalsCompleted(true);

      // Update unsure section options when goals are completed
      if (unsureSectionProps) {
        const updatedOptions = unsureSectionProps.options?.map((option: any) => ({
          ...option,
          disabled: option.id === 'wellness-goals', // Disable wellness goals option
          selected: option.id === 'assessment' // Select assessment as next step
        }));

        setUnsureSectionProps({
          ...unsureSectionProps,
          options: updatedOptions
        });
      }

      // Pass 'goals-completed' with data to parent to save selected goals
      if (onSectionChange) {
        console.log('🎯 DynamicContentRenderer: Passing goals-completed to parent with data:', data);
        onSectionChange(section, data);
      }
      return;
    }

    // Pass through to parent for other section changes
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
                  onSectionChange={handleSectionChange}
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
      return <UnsureSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'let-us-help-you':
      return <LetUsHelpYou {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'something-for-you':
      return <SomethingForYou {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    // case 'progress-getting-started':
    //   return <ProgressGettingStarted {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'therapist-section':
      return <TherapistSection {...props} className={className} style={style} />;

    case 'first-chat-section':
      return <FirstChatSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'main-tabs-section':
      return <MainTabsSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'progress-journey-section':
      return <ProgressJourneySection {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'home-your-care-plan-section':
      return <HomeYourCarePlanSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'care-plan-section':
      return <CarePlanSection {...props} className={className} style={style} />;

    case 'micro-learnings-section':
      return <MicroLearningsSection {...props} className={className} style={style} />;

    case 'refer-earn-happiness-coins-section':
      return <ReferEarnHappinessCoinsSection {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'new-platform-section':
      return <NewPlatformSection {...props} className={className} style={style} />;

    case 'chat-empty-state':
      return <ChatEmptyState {...props} className={className} style={style} onSectionChange={onSectionChange} />;

    case 'welcome-header':
      return <WelcomeHeader {...props} className={className} style={style} />;

    case 'onboarding-banner':
      return <OnboardingBanner {...props} className={className} style={style} onSectionChange={onSectionChange} />;

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
                <path d="M1 1L4 4.5L1 8" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        // Add goal with proper structure for status section using borderColor from config
        const newGoal = {
          ...goal,
          color: goal.borderColor ? `${goal.borderColor}20` : getGoalColor(prev.length >= maxGoals ? maxGoals - 1 : prev.length), // Use borderColor with 20% opacity for background
          lockColor: goal.borderColor || getGoalLockColor(prev.length >= maxGoals ? maxGoals - 1 : prev.length), // Use borderColor for lock color
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
      console.log('🎯 GoalsSelection: Sending goals-completed with goals:', localSelectedGoals);
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
              style={isGoalSelected(goal) ? {
                borderColor: goal.borderColor || '#006A63',
                backgroundColor: goal.borderColor ? `${goal.borderColor}20` : '#E0F7F5'
              } : {}}
            >
              <div className="goal-emoji">{goal.emoji}</div>
              <span>{goal.title}</span>
              {isGoalSelected(goal) && (
                <div className="selected-indicator">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 4.5L6 12L2.5 8.5" stroke={goal.borderColor || "#006A63"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

function UnsureSection({ title, description, steps, currentStep, options, ctaText, actions, illustrationUrl, className, style, onSectionChange }: any) {
  const [selectedOptions, setSelectedOptions] = React.useState(
    options?.reduce((acc: any, option: any) => {
      acc[option.id] = option.selected;
      return acc;
    }, {}) || {}
  );

  // Update local state when props change (from parent component updates)
  React.useEffect(() => {
    if (options) {
      const newSelection = options.reduce((acc: any, option: any) => {
        acc[option.id] = option.selected;
        return acc;
      }, {});
      setSelectedOptions(newSelection);
    }
  }, [options]);

  const handleOptionChange = (optionId: string) => {
    // Check if the option is disabled
    const option = options.find((opt: any) => opt.id === optionId);
    if (option?.disabled) return;

    // For radio buttons, only one option should be selected at a time
    const newSelection: any = {};
    options.forEach((option: any) => {
      newSelection[option.id] = option.id === optionId;
    });
    setSelectedOptions(newSelection);
  };

  const handleDiscoverClick = () => {
    // Navigate to Goals & Assessment tab
    if (onSectionChange) {
      onSectionChange('goals-assessment');
    }
  };

  const handleActionClick = (action: string) => {
    if (onSectionChange) {
      onSectionChange(action);
    }
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
              <label key={option.id} className={`option-item ${option.disabled ? 'disabled' : ''}`}>
                <input
                  type="radio"
                  name="unsure-options"
                  checked={selectedOptions[option.id]}
                  onChange={() => handleOptionChange(option.id)}
                  disabled={option.disabled}
                  className="option-radio"
                />
                <span className="option-text">{option.text}</span>

              </label>
            ))}
          </div>
          {/* Render new actions format if available, otherwise fallback to old ctaText */}
          {actions && actions.length > 0 ? (
            <div className="actions-container">
              {actions.map((actionItem: any, index: number) => (
                <button
                  key={index}
                  className={`discover-btn-new ${actionItem.className || ''}`}
                  onClick={() => handleActionClick(actionItem.action)}
                >
                  <span>{actionItem.text}</span>
                  {actionItem.className !== 'btn-secondary' && (
                    <div className="arrow-icon-new">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="white" />
                        <path
                          d="M10.6669 10.0001L7.55566 6.8889L8.44457 6L12.4446 10.0001L8.44457 14.0001L7.55566 13.1112L10.6669 10.0001Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          ) : (
            <button className="discover-btn-new" onClick={handleDiscoverClick}>
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
          )}
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
        <button className="discover-btn" onClick={handleDiscoverClick}>
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

function LetUsHelpYou({ title, helpCards, className, style, onSectionChange }: any) {
  const defaultHelpCards = [
    {
      icon: (
        <img
          src="/src/assets/images/icons/target.svg"
          alt="Target icon"
          width="56"
          height="56"
        />
      ),
      title: 'Set Your Wellness Goals',
      description: 'Choose up to 3 goals to personalize your experience.',
      buttonText: 'Set goals',
      action: 'set-goals'
    },
    {
      icon: (
        <img
          src="src/assets/images/icons/diagnosis.svg"
          alt="Assessment icon"
          width="56"
          height="56"
        />
      ),
      title: 'Take a Short Assessment',
      description: 'Help us understand your mental health needs better.',
      buttonText: 'Take assessment',
      action: 'take-assessment'
    },
    {
      icon: (
        <img
          src="src/assets/images/icons/psychology_alt.svg"
          alt="Assessment icon"
          width="56"
          height="56"
        />
      ),
      title: 'Tell Us Your Therapist Preferences',
      description: 'We\'ll match you with the right therapist based on your background and comfort.',
      buttonText: 'Set Preferences',
      action: 'set-preferences'
    }
  ];

  const cardsToRender = helpCards || defaultHelpCards;

  const handleButtonClick = (action: string, title: string) => {
    console.log(`Clicked: ${title} with action: ${action}`);
    if (onSectionChange) {
      onSectionChange(action);
    }
  };

  return (
    <section className={className || "let-us-help-you"} style={style}>
      <div className="help-container">
        <h2 className="help-title">{title || "Let us Help You"}</h2>

        <div className="help-cards">
          {cardsToRender.map((card: any, index: number) => (
            <div key={index} className="help-card">
              <div className="help-card-icon">
                {card.icon}
              </div>

              <div className="help-card-content">
                <h3 className="help-card-title">{card.title}</h3>
                <p className="help-card-description">{card.description}</p>
              </div>

              <button
                className="help-card-button"
                onClick={() => handleButtonClick(card.action, card.title)}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SomethingForYou({ title, subtitle, items, backgroundColor, className, style, onSectionChange }: any) {
  const defaultItems = [
    {
      icon: (
        <div className="free-star-badge">
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <path d="M32 4L38.8564 14.1436L51.3137 11.3137L48.4838 23.7711L60.6274 26.6009L50.4838 36.7446L53.3137 49.2019L40.8564 46.372L34 56.5157L27.1436 46.372L14.6863 49.2019L17.5162 36.7446L5.37258 33.9147L15.5162 23.7711L12.6863 11.3137L25.1436 14.1436L32 4Z" fill="#006B5F" />
          </svg>
          <span className="free-badge-text">Free</span>
        </div>
      ),
      title: 'Congratulations! We\'ve got you a free Discovery Session',
      description: 'Connect with a therapist today at no Cost..',
      buttonText: 'Book Now',
      action: 'book-discovery-session'
    }
  ];

  const itemsToRender = items || defaultItems;

  const handleButtonClick = (action: string, title: string) => {
    console.log(`SomethingForYou clicked: ${title} with action: ${action}`);
    if (onSectionChange) {
      onSectionChange(action);
    }
  };

  return (
    <section
      className={className || "something-for-you"}
      style={{
        backgroundColor: backgroundColor || '#f8f9fa',
        ...style
      }}
    >
      <div className="something-container">
        <div className="something-header">
          <h2 className="something-title">{title || "Here's Something For You"}</h2>
          {subtitle && <p className="something-subtitle">{subtitle}</p>}
        </div>

        <div className="something-items">
          {itemsToRender.map((item: any, index: number) => (
            <div key={index} className="something-item">
              <div className="something-item-icon">
                {item.icon}
              </div>

              <div className="something-item-content">
                <h3 className="something-item-title">{item.title}</h3>
                <p className="something-item-description">{item.description}</p>
              </div>

              <button
                className="something-item-button"
                onClick={() => handleButtonClick(item.action, item.title)}
              >
                {item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressGettingStarted({ title, progressPercentage, showProgressIndicators, ctaText, faqLink, onCtaClick, showIcon, completionText, iconColor, className, style, onSectionChange }: any) {
  return (
    <div className={className || "progress-getting-started-section"} style={style}>
      <div className="wellness-banner-content">
        <div className="wellness-header">
          {showIcon && (
            <svg
              className="progress-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 0C12.4504 0 12.8944 0.0244001 13.332 0.0732001C13.4886 0.0905346 13.6403 0.138552 13.7784 0.214511C13.9165 0.290469 14.0383 0.392882 14.1368 0.515901C14.2353 0.63892 14.3086 0.780137 14.3525 0.931487C14.3964 1.08284 14.4101 1.24136 14.3928 1.398C14.3755 1.55464 14.3274 1.70633 14.2515 1.84442C14.1755 1.9825 14.0731 2.10427 13.9501 2.20278C13.8271 2.30128 13.6859 2.37459 13.5345 2.41852C13.3832 2.46245 13.2246 2.47613 13.068 2.4588C11.0905 2.23757 9.09303 2.63633 7.35201 3.59991C5.61099 4.56349 4.21243 6.04427 3.34976 7.83744C2.48709 9.6306 2.20296 11.6475 2.53667 13.6092C2.87038 15.5709 3.80543 17.3805 5.21249 18.7875C6.61955 20.1946 8.42907 21.1296 10.3908 21.4633C12.3525 21.797 14.3694 21.5129 16.1626 20.6502C17.9557 19.7876 19.4365 18.389 20.4001 16.648C21.3637 14.907 21.7624 12.9095 21.5412 10.932C21.5239 10.7754 21.5376 10.6168 21.5815 10.4655C21.6254 10.3141 21.6987 10.1729 21.7972 10.0499C21.9962 9.80145 22.2857 9.64221 22.602 9.6072C22.9184 9.57219 23.2357 9.66429 23.4841 9.86322C23.6071 9.96173 23.7095 10.0835 23.7855 10.2216C23.8615 10.3597 23.9095 10.5114 23.9268 10.668C23.9748 11.1056 23.9992 11.5496 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM11.9616 7.0524C12.0407 7.36047 11.9942 7.68733 11.8325 7.96117C11.6707 8.23501 11.4068 8.43342 11.0988 8.5128C10.2526 8.73445 9.51604 9.2564 9.02645 9.98125C8.53685 10.7061 8.3277 11.5843 8.43804 12.452C8.54838 13.3198 8.97066 14.1177 9.62609 14.6969C10.2815 15.2762 11.1253 15.5972 12 15.6C12.7984 15.6003 13.5742 15.3353 14.2055 14.8465C14.8367 14.3578 15.2876 13.673 15.4872 12.9C15.5723 12.598 15.7722 12.3414 16.0442 12.185C16.3162 12.0287 16.6386 11.985 16.9423 12.0635C17.2461 12.1419 17.507 12.3362 17.6693 12.6047C17.8316 12.8732 17.8822 13.1946 17.8104 13.5C17.4423 14.9111 16.573 16.1399 15.365 16.9569C14.157 17.7739 12.6928 18.1231 11.2461 17.9394C9.79939 17.7557 8.46904 17.0515 7.50361 15.9585C6.53817 14.8655 6.00368 13.4583 6 12C5.99979 10.6697 6.44172 9.37699 7.2563 8.32521C8.07088 7.27342 9.21191 6.52218 10.5 6.1896C10.6526 6.15026 10.8115 6.14138 10.9676 6.16345C11.1236 6.18552 11.2738 6.23812 11.4095 6.31824C11.5452 6.39836 11.6639 6.50444 11.7586 6.6304C11.8533 6.75637 11.9223 6.89977 11.9616 7.0524ZM19.8048 0.1524C20.0238 0.243215 20.2111 0.396884 20.3428 0.594011C20.4746 0.791138 20.545 1.02289 20.5452 1.26C20.5452 2.47216 21.5278 3.456 22.74 3.456C22.9773 3.45605 23.2093 3.52646 23.4066 3.65832C23.6038 3.79018 23.7576 3.97757 23.8484 4.19681C23.9392 4.41605 23.963 4.65729 23.9167 4.89004C23.8704 5.12278 23.7562 5.33658 23.5884 5.5044L19.344 9.744C19.119 9.96906 18.8138 10.0955 18.4956 10.0956C16.6416 10.0956 14.8637 10.8323 13.5531 12.1437L13.4064 12.2904C13.1812 12.5156 12.8758 12.6421 12.5574 12.6421C12.239 12.6421 11.9336 12.5156 11.7084 12.2904C11.4832 12.0652 11.3567 11.7598 11.3567 11.4414C11.3567 11.123 11.4832 10.8176 11.7084 10.5924L11.8537 10.4472C13.1659 9.13649 13.9032 7.35788 13.9032 5.5032C13.9033 5.18497 14.0297 4.87979 14.2548 4.6548L18.4968 0.4116C18.6646 0.243681 18.8785 0.12931 19.1113 0.0829577C19.3441 0.0366053 19.5855 0.0603541 19.8048 0.1512M18.1452 4.6548C18.1452 4.47069 17.9225 4.37855 17.7924 4.50882L16.5725 5.73032C16.4001 5.90301 16.3032 6.13708 16.3032 6.38114V6.49682C16.3032 7.15955 16.8405 7.6968 17.5032 7.6968H17.6187C17.8628 7.6968 18.097 7.59985 18.2697 7.42726L19.4909 6.20682C19.6209 6.07696 19.5289 5.8548 19.3452 5.8548C19.0269 5.8548 18.7217 5.72837 18.4967 5.50333C18.2716 5.27828 18.1452 4.97306 18.1452 4.6548Z"
                fill={iconColor || "#006B5F"}
              />
            </svg>
          )}
          <div className="wellness-title">{title}</div>
        </div>

        {showProgressIndicators && (
          <div className="progress-section">
            <div className="progress-indicator">
              <svg
                width="1051"
                height="20"
                viewBox="0 0 1051 20"
                fill="none"
                className="progress-bar-svg"
              >
                <rect width="1051" height="20" rx="10" fill="#E0E0E0" />
                <circle cx="39" cy="10" r="2" fill="#A8A8A8" />
                <circle cx="179" cy="10" r="2" fill="#A8A8A8" />
                <circle cx="345" cy="10" r="2" fill="#A8A8A8" />
                <circle cx="588" cy="10" r="2" fill="#A8A8A8" />
              </svg>
            </div>
            <div className="completion-status">{completionText || `${progressPercentage}% Completed`}</div>
          </div>
        )}

        <div className="banner-actions">
          <button className="faq-link">{faqLink}</button>
          <button className="assessment-btn" onClick={() => onCtaClick && onSectionChange?.(onCtaClick)}>
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}

function TherapistSection({ title, showSearchFilters, showTherapistGrid, activeFilters, searchPlaceholder, therapists, className, style }: any) {
  const [currentFilters, setCurrentFilters] = React.useState(activeFilters || []);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(3); // Show only 3 initially
  const [activeTab, setActiveTab] = React.useState("therapist"); // Default to therapist tab
  const [showBanner, setShowBanner] = React.useState(true); // Banner visibility

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
      {title && (
        <div className="therapist-section-header">
          <h2 className="therapist-section-title">{title}</h2>
        </div>
      )}
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

      {/* Therapist/Coaches Tabs */}
      <div className="therapist-tabs-section">
        <div className="therapist-tabs">
          <button
            className={`therapist-tab ${activeTab === 'therapist' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('therapist');
              setShowBanner(true); // Show banner when switching to therapist tab
            }}
          >
            Therapist
            {activeTab === 'therapist' && (
              <div className="info-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#006B5F" strokeWidth="1" />
                  <path d="M8 7v4" stroke="#006B5F" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="8" cy="5" r="1" fill="#006B5F" />
                </svg>
              </div>
            )}
          </button>
          <button
            className={`therapist-tab ${activeTab === 'coaches' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('coaches');
              setShowBanner(true); // Show banner when switching to coaches tab
            }}
          >
            Coaches
            {activeTab === 'coaches' && (
              <div className="info-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#006B5F" strokeWidth="1" />
                  <path d="M8 7v4" stroke="#006B5F" strokeWidth="1" strokeLinecap="round" />
                  <circle cx="8" cy="5" r="1" fill="#006B5F" />
                </svg>
              </div>
            )}
          </button>
        </div>

        {/* Banner for active tab */}
        {showBanner && (
          <div className="therapist-banner">
            {activeTab === 'therapist' ? (
              <div className="banner-content">
                {/* <div className="banner-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#006B5F" strokeWidth="1.5" />
                    <path d="M10 6v8M6 10h8" stroke="#006B5F" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div> */}
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#006B5F" strokeWidth="1" />
                    <path d="M8 7v4" stroke="#006B5F" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="8" cy="5" r="1" fill="#006B5F" />
                  </svg>
                </div>
                <div className="banner-text">
                  <p>Therapists are licensed mental health professionals who help with conditions like anxiety, depression, trauma, and more. They provide evidence-based therapy and clinical support tailored to your emotional well-being.</p>
                </div>
                <button className="banner-close" onClick={() => setShowBanner(false)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="#006B5F" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="banner-content">
                {/* <div className="banner-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#006B5F" strokeWidth="1.5" />
                    <path d="M10 6v8M6 10h8" stroke="#006B5F" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div> */}
                <div className="info-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#006B5F" strokeWidth="1" />
                    <path d="M8 7v4" stroke="#006B5F" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="8" cy="5" r="1" fill="#006B5F" />
                  </svg>
                </div>
                <div className="banner-text">
                  <p>Coaches are trained professionals who focus on personal development, goal achievement, and life skills. They provide guidance, motivation, and accountability to help you reach your full potential.</p>
                </div>
                <button className="banner-close" onClick={() => setShowBanner(false)}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4l8 8" stroke="#006B5F" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showTherapistGrid && (
        <div className="therapist-grid">
          <div className="therapist-row">
            {therapists?.slice(0, Math.min(3, visibleCount)).map((therapist: any, index: number) => (
              <TherapistCard key={index} {...therapist} />
            ))}
          </div>
          {visibleCount > 3 && (
            <div className="therapist-row">
              {therapists?.slice(3, visibleCount).map((therapist: any, index: number) => (
                <TherapistCard key={index + 3} {...therapist} />
              ))}
            </div>
          )}

          {therapists && visibleCount < therapists.length && (
            <div className="load-more-container">
              {/* Load More  */}
              <div className="load-more-all">
                <button
                  className="load-more-all-button"
                  onClick={() => setVisibleCount(therapists.length)}
                >
                  Load More
                </button>
              </div>
              {/* <button
                className="load-more-btn"
                onClick={() => setVisibleCount(therapists.length)}
              >
                Load More
              </button> */}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function FirstChatSection({ title, subtitle, buttonText, buttonAction, backgroundColor, className, style, onSectionChange }: any) {
  const handleButtonClick = () => {
    if (onSectionChange && buttonAction) {
      onSectionChange(buttonAction);
    }
  };

  return (
    <section
      className={className || "first-chat-section"}
      style={{ backgroundColor: backgroundColor || '#F5F3FF', ...style }}
    >
      <div className="first-chat-container">
        {/* Chat Icon */}
        <div className="chat-icon-container">
          <img
            src="/src/assets/images/icons/Illustrations.svg"
            alt="Illustrations icon"
            width="100"
            height="100"
          />
        </div>

        {/* Content */}
        <div className="first-chat-content">
          <h2 className="first-chat-title">
            Start Your first <span className="highlight-text">Chat</span> with your Therapist
          </h2>
          <p className="first-chat-subtitle">{subtitle || "To begin, Click the chat button"}</p>
        </div>

        {/* Button */}
        <div className="first-chat-button-container">
          <button className="first-chat-button" onClick={handleButtonClick}>
            {buttonText || "Go to chat"}
          </button>
        </div>
      </div>
    </section>
  );
}

function ProgressJourneySection({ title, subtitle, buttonText, buttonAction, backgroundColor, className, style, onSectionChange }: any) {
  const handleButtonClick = () => {
    if (onSectionChange && buttonAction) {
      onSectionChange(buttonAction);
    }
  };

  return (
    <section
      className={className || "progress-journey-section"}
      style={{ backgroundColor: backgroundColor || '#F5F3FF', ...style }}
    >
      <div className="progress-journey-container">
        {/* Progress Chart Icon */}
        <div className="progress-chart-icon-container">
          <img
            src="/src/assets/images/icons/bar_chart.svg"
            alt="bar_chart icon"
            width="100"
            height="100"
          />
          {/* <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="60" width="15" height="30" fill="#006B5F" rx="2"/>
            <rect x="30" y="40" width="15" height="50" fill="#006B5F" rx="2"/>
            <rect x="50" y="20" width="15" height="70" fill="#006B5F" rx="2"/>
            <rect x="70" y="50" width="15" height="40" fill="#006B5F" rx="2"/>
          </svg> */}
        </div>

        {/* Content */}
        <div className="progress-journey-content">
          <h2 className="progress-journey-title">
            Your <span className="highlight-text">Progress</span> Journey Starts Here
          </h2>
          <p className="progress-journey-subtitle">{subtitle || "You'll be able to track your emotional growth and wellness after taking your second assessment."}</p>
        </div>

        {/* Button */}
        <div className="progress-journey-button-container">
          <button className="progress-journey-button" onClick={handleButtonClick}>
            {buttonText || "Go to Progress"}
          </button>
        </div>
      </div>
    </section>
  );
}

function HomeYourCarePlanSection({ title, subtitle, unlockCard, benefitsCard, className, style, onSectionChange }: any) {
  const handleUnlockButtonClick = () => {
    if (onSectionChange && unlockCard?.buttonAction) {
      onSectionChange(unlockCard.buttonAction);
    }
  };

  return (
    <section className={className || "home-your-care-plan-section"} style={style}>
      <div className="home-care-plan-container">
        {/* Header */}
        <div className="home-care-plan-header">
          <h2 className="home-care-plan-title">{title || "Your Care Plan"}</h2>
          <p className="home-care-plan-subtitle">
            {subtitle || "To get personalized self-care actions, complete your first assessment. Your plan will be generated based on your mental health goals and responses."}
          </p>
        </div>

        {/* Main Content */}
        <div className="home-care-plan-content">
          {/* Unlock Card */}
          <div className="home-unlock-care-plan-card">
            <img
              src="/src/assets/images/icons/unlock-care-plan.png"
              alt="unlock care plan"
              className="unlock-card-background-image"
            />
            <div className="unlock-card-overlay">
              {/* <div className="lock-icon-container">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M12 18H36C37.1046 18 38 18.8954 38 20V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V20C10 18.8954 10.8954 18 12 18Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 18V14C16 10.6863 18.6863 8 22 8H26C29.3137 8 32 10.6863 32 14V18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div> */}
              <div className="unlock-card-content">
                <h3 className="home-unlock-card-title">{unlockCard?.title || "Unlock your Personalized care plan"}</h3>
                <p className="home-unlock-card-subtitle">{unlockCard?.subtitle || "Take a quick assessment to unlock your Care Plan"}</p>
                <button className="home-unlock-card-button" onClick={handleUnlockButtonClick}>
                  {unlockCard?.buttonText || "Take Assessment"}
                </button>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="benefits-care-plan-card">
            <h3 className="benefits-card-title">
              What You'll Get with <span className="mycare-plan-highlight">MyCarePlan</span>
            </h3>
            <div className="benefits-list">
              {benefitsCard?.benefits?.map((benefit: any, index: number) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-checkmark">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="#006B5F" />
                      <path d="M6 10L8.5 12.5L14 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="benefit-text">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
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
    case 'recommended-therapist':
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

    case 'recommended-coach':
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

    case 'self-care-tools':
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

    case 'therapist-matches':
      return <TherapistMatchesCard content={content} />;

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
        <div className="micro-learnings-section-title">{title}</div>
        <div className="micro-learnings-section-description">{description}</div>
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
                        {/* <div className="card-button">
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
                        </div> */}
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
                    {/* <button className="take-assessment-button">{card.secondaryCta}</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore All Button */}
      <div className="micro-learnings-explore-all">
        <button className="explore-all-button">
          Explore All
        </button>
      </div>
    </div>
  );
}

function ReferEarnHappinessCoinsSection({ title, referralCard, howItWorks, className, style, onSectionChange }: any) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCard?.copyCode?.code || '');
    onSectionChange?.('copy-referral-code', { code: referralCard?.copyCode?.code });
  };

  const handleShareInvite = () => {
    onSectionChange?.('share-invite', referralCard?.shareButton);
  };

  const handleSocialShare = (platform: string, action: string) => {
    onSectionChange?.(action, { platform });
  };

  return (
    <div className={className || "refer-earn-happiness-coins-section"} style={style}>
      <div className="refer-earn-section-header">
        <h2 className="refer-earn-title">{title}</h2>
      </div>

      <div className="refer-earn-content">
        {/* Referral Card */}
        <div className="referral-card">
          <div className="referral-card-header">
            <span className="referral-label">{referralCard?.label}</span>
            <div className="handshake-icon">
              🤝
            </div>
          </div>

          <h3 className="referral-card-title">{referralCard?.title}</h3>

          <div className="copy-code-section">
            <div className="copy-code-container">
              <span className="copy-label">{referralCard?.copyCode?.label}</span>

              <div className="code-display">
                <svg width="5" height="5" viewBox="0 0 16 16" fill="none" className="copy-icon">
                  <path d="M13.5 6.5H7.5C6.94772 6.5 6.5 6.94772 6.5 7.5V13.5C6.5 14.0523 6.94772 14.5 7.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V7.5C14.5 6.94772 14.0523 6.5 13.5 6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.5 9.5H2.5C2.23478 9.5 1.98043 9.39464 1.79289 9.20711C1.60536 9.01957 1.5 8.76522 1.5 8.5V2.5C1.5 2.23478 1.60536 1.98043 1.79289 1.79289C1.98043 1.60536 2.23478 1.5 2.5 1.5H8.5C8.76522 1.5 9.01957 1.60536 9.20711 1.79289C9.39464 1.98043 9.5 2.23478 9.5 2.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="code-text">{referralCard?.copyCode?.code}</span>
                <button className="share-invite-button" onClick={handleShareInvite}>
                  {referralCard?.shareButton?.text}
                </button>
              </div>


            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="how-it-works-section">
          <h3 className="how-it-works-title">{howItWorks?.title}</h3>
          <p className="how-it-works-description">{howItWorks?.description}</p>

          <div className="social-icons-container">
            {howItWorks?.socialIcons?.map((social: any, index: number) => (
              <div key={index} className="social-icon-wrapper" onClick={() => handleSocialShare(social.name, social.action)}>
                <div className="social-icon" style={{ backgroundColor: social.color }}>
                  {social.iconType === 'whatsapp' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                    </svg>
                  )}
                  {social.iconType === 'facebook' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </div>
                <span className="social-icon-label">{social.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatEmptyState({ illustration, title, subtitle, buttonText, buttonAction, footerText, className, style, onSectionChange }: any) {
  const handleBookSession = () => {
    if (onSectionChange && buttonAction) {
      onSectionChange(buttonAction);
    }
  };

  return (
    <div className={className || "chat-empty-state-section"} style={style}>
      <div className="chat-empty-state-container">
        {/* Chat Illustration */}
        <div className="chat-illustration-container">
          <div className="chat-bubble-icon">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
              {/* Main chat bubble */}
              <circle cx="60" cy="50" r="35" fill="#006B5F" />
              {/* Eyes */}
              <circle cx="50" cy="45" r="3" fill="white" />
              <circle cx="70" cy="45" r="3" fill="white" />
              {/* Mouth */}
              <path d="M50 55 Q60 65 70 55" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Chat tail */}
              <path d="M35 70 Q25 75 30 85 Q35 80 40 75" fill="#006B5F" />
              {/* Decorative elements */}
              <circle cx="95" cy="25" r="4" fill="#8B5CF6" />
              <path d="M25 25 L30 20 L35 25 L30 30 Z" fill="#8B5CF6" />
              <path d="M90 75 L95 70 L100 75 L95 80 Z" fill="#8B5CF6" />
              {/* Chat lines */}
              <path d="M25 90 Q30 85 35 90" stroke="#333" strokeWidth="2" strokeLinecap="round" />
              <path d="M15 95 Q20 90 25 95" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="chat-empty-content">
          <h2 className="chat-empty-title">{title}</h2>
          <p className="chat-empty-subtitle">{subtitle}</p>
          
          <button className="book-session-button" onClick={handleBookSession}>
            {buttonText}
          </button>
        </div>

        {/* Footer */}
        {footerText && (
          <div className="chat-footer">
            <p className="chat-footer-text">{footerText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function NewPlatformSection({ showNewPlatform, label, title, downloadTitle, downloadButtons, phoneImages, className, style }: any) {
  if (!showNewPlatform) return null;

  return (
    // <div className={className || "main-new-platform-section"} style={style}>
    <div className="main-new-platform-section">
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

function TherapistMatchesCard({ content }: any) {
  const { title, description, therapists = [], showMatchDetails = true, showBookingOptions = true, matchingBadge = "AI Matched", confidenceScore = 0.7 } = content;

  const getBookingUrl = (name: string) => {
    const cleanName = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "");
    const parts = cleanName.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
    const urlName = [firstName, lastName].filter(Boolean).join("+");
    const email = firstName ? `${firstName.toLowerCase()}@refillhealth.com` : "";
    return `https://bookings.refillhealth.com/sreeja/therapy-session?name=${urlName}&email=${encodeURIComponent(email)}`;
  };

  const TherapistMatchCard = ({ therapist }: { therapist: any }) => {
    const [modalOpen, setModalOpen] = React.useState(false);
    const bookingUrl = getBookingUrl(therapist.name);

    return (
      <div className="therapist-card">
        <div className="therapist-card-image">
          <img src={therapist.imageUrl || "/assets/images/dr-image.png"} alt={therapist.name} />
          <div className="availability-badge">
            <div className="availability-dot"></div>
            <span>{therapist.availability || "Available Today"}</span>
          </div>
          {matchingBadge && (
            <div className="matching-badge">
              <span>{matchingBadge}</span>
            </div>
          )}
        </div>
        <div className="therapist-card-content">
          <div className="therapist-profile-section">
            <div className="therapist-info">
              <h3 className="therapist-name">{therapist.name}</h3>
              <p className="therapist-title">{therapist.title}</p>
              {therapist.yearsExperience && (
                <p className="therapist-experience">{therapist.yearsExperience} years experience</p>
              )}
            </div>
            <div className="therapist-rating">
              <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
                <path
                  d="M9.04894 0.925099C9.3483 0.00378799 10.6517 0.0037868 10.9511 0.925097L12.4697 5.59886C12.6035 6.01088 12.9875 6.28984 13.4207 6.28984H18.335C19.3037 6.28984 19.7065 7.52946 18.9228 8.09886L14.947 10.9874C14.5966 11.242 14.4499 11.6934 14.5838 12.1054L16.1024 16.7792C16.4017 17.7005 15.3472 18.4666 14.5635 17.8972L10.5878 15.0087C10.2373 14.754 9.7627 14.754 9.41221 15.0087L5.43648 17.8972C4.65276 18.4666 3.59828 17.7005 3.89763 16.7792L5.41623 12.1054C5.55011 11.6934 5.40345 11.242 5.05296 10.9874L1.07722 8.09886C0.293507 7.52946 0.696283 6.28984 1.66501 6.28984H6.57929C7.01252 6.28984 7.39647 6.01088 7.53035 5.59886L9.04894 0.925099Z"
                  fill="#FFB063"
                />
              </svg>
              <span className="rating-value">{therapist.rating}</span>
            </div>
          </div>

          <div className="therapist-details">
            <div className="specializations">
              {therapist.specializations?.map((spec: string, index: number) => (
                <span key={index} className="specialization-tag">
                  {spec}
                </span>
              ))}
            </div>

            {showMatchDetails && (
              <div className="match-details">
                <div className="match-scores">
                  <div className="match-score">
                    <span className="score-label">Match Score</span>
                    <span className="score-value">{Math.round(therapist.matchScore * 100)}%</span>
                  </div>
                  <div className="match-score">
                    <span className="score-label">Effectiveness</span>
                    <span className="score-value">{Math.round(therapist.matchEffectiveness * 100)}%</span>
                  </div>
                </div>
                <div className="clinical-fit">
                  <span className="clinical-fit-label">Clinical Fit: </span>
                  <span className="clinical-fit-value">{therapist.clinicalFit}</span>
                </div>
              </div>
            )}

            <div className="session-booking">
              <div className="session-info">
                <div className="session-label">Sessions</div>
                <div className="session-time-info">
                  <span className="session-time">{therapist.sessionTime}</span>
                  <span className="session-day">{therapist.sessionDay}</span>
                </div>
              </div>
              {showBookingOptions && (
                <button className="book-now-btn" onClick={() => setModalOpen(true)}>
                  Book Now
                </button>
              )}
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
    <div className="therapist-matches-card">
      <div className="therapist-matches-header">
        <h3 className="therapist-matches-title">{title}</h3>
        {description && <p className="therapist-matches-description">{description}</p>}
        {confidenceScore && (
          <div className="confidence-score">
            <span>Confidence Score: {Math.round(confidenceScore * 100)}%</span>
          </div>
        )}
      </div>

      <div className="therapist-matches-grid">
        {therapists.map((therapist: any, index: number) => (
          <TherapistMatchCard key={index} therapist={therapist} />
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