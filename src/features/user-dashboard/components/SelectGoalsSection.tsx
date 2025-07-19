"use client";

import { useState } from "react";

interface SelectGoalsSectionProps {
  onGoalsChange?: (selectedGoals: string[]) => void;
}

interface Goal {
  id: string;
  emoji: string;
  text: string;
  borderColor: string;
}

const goals: Goal[] = [
  { id: "manage-stress", emoji: "😌", text: "Manage stress", borderColor: "#FF8A65" },
  { id: "boost-mood", emoji: "😊", text: "Boost mood & feel positive", borderColor: "#FFB74D" },
  { id: "sleep-better", emoji: "💤", text: "Sleep better", borderColor: "#E91E63" },
  { id: "prevent-burnout", emoji: "🥬", text: "Prevent burnout", borderColor: "#4CAF50" },
  { id: "manage-anxiety", emoji: "😟", text: "Manage anxiety", borderColor: "#FFB74D" },
  { id: "improve-focus", emoji: "🎯", text: "Improve focus & productivity", borderColor: "#FF5722" },
  { id: "strengthen-relationships", emoji: "🤝", text: "Strengthen personal or work relationships", borderColor: "#FFC107" },
  { id: "build-confidence", emoji: "💪", text: "Build self-confidence", borderColor: "#FFB74D" },
  { id: "work-life-balance", emoji: "⚖️", text: "Improve work-life balance", borderColor: "#90A4AE" },
  { id: "feel-calm", emoji: "🧘", text: "Feel calm", borderColor: "#FFB74D" },
  { id: "reduce-habits", emoji: "🚭", text: "Reduce unhealthy habits", borderColor: "#A1887F" },
  { id: "healthy-routines", emoji: "📅", text: "Develop healthy routines", borderColor: "#FF8A65" },
  { id: "build-resilience", emoji: "🌱", text: "Build resilience", borderColor: "#4CAF50" },
  { id: "navigate-transitions", emoji: "🔄", text: "Navigate life transitions", borderColor: "#2196F3" }
];

export default function SelectGoalsSection({ onGoalsChange }: SelectGoalsSectionProps) {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleGoalClick = (goalId: string) => {
    let newSelectedGoals;
    
    if (selectedGoals.includes(goalId)) {
      // Remove goal if already selected
      newSelectedGoals = selectedGoals.filter(id => id !== goalId);
    } else if (selectedGoals.length < 3) {
      // Add goal if under limit
      newSelectedGoals = [...selectedGoals, goalId];
    } else {
      // Don't add if at limit
      return;
    }
    
    setSelectedGoals(newSelectedGoals);
    onGoalsChange?.(newSelectedGoals);
  };

  return (
    <>
      <style>{`
        .select-goals-section {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 40px;
        }

        .goals-header {
          color: #000000;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.3;
          margin: 0;
        }

        .goals-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          max-width: 100%;
        }

        .goal-card {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 24px;
          border-radius: 50px;
          border: 2px solid #E5E7EB;
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          min-height: 56px;
          box-sizing: border-box;
        }

        .goal-card:hover {
          border-color: #D1D5DB;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .goal-card.selected {
          border-width: 2px;
          background: #FFFFFF;
        }

        .goal-emoji {
          font-size: 24px;
          line-height: 1;
          flex-shrink: 0;
        }

        .goal-text {
          color: #374151;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.2;
        }

        .notification-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          background: #F8FAFC;
          margin-top: 8px;
        }

        .notification-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .notification-icon {
          width: 24px;
          height: 24px;
          color: #10B981;
          flex-shrink: 0;
        }

        .notification-text {
          color: #374151;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
        }

        .notification-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .need-help-link {
          color: #06B6D4;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          text-decoration: none;
          cursor: pointer;
          letter-spacing: 0.05em;
        }

        .need-help-link:hover {
          text-decoration: underline;
        }

        .close-button {
          background: none;
          border: none;
          color: #9CA3AF;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
        }

        .close-button:hover {
          background: #F3F4F6;
          color: #6B7280;
        }
      `}</style>
      
      <div className="select-goals-section">
        <h2 className="goals-header">
          Select up to 3 goals (Remember you can reset goals after 14 days)
        </h2>
        
        <div className="goals-grid">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`goal-card ${selectedGoals.includes(goal.id) ? 'selected' : ''}`}
              style={{
                borderColor: selectedGoals.includes(goal.id) ? goal.borderColor : '#E5E7EB'
              }}
              onClick={() => handleGoalClick(goal.id)}
            >
              <span className="goal-emoji">{goal.emoji}</span>
              <span className="goal-text">{goal.text}</span>
            </div>
          ))}
        </div>

        {selectedGoals.length > 0 && (
          <div className="notification-banner">
            <div className="notification-content">
              <svg className="notification-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <span className="notification-text">
                Great choice!. You can only select up to 3 goals.
              </span>
            </div>
            <div className="notification-actions">
              <a href="#" className="need-help-link">NEED HELP?</a>
              <button className="close-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 