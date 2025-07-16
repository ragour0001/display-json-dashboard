import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResetGoals: () => void;
  onContinue: () => void;
}

export default function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onResetGoals, 
  onContinue 
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="confirmation-modal-overlay" onClick={handleBackdropClick}>
      <div className="confirmation-modal">
        <div className="confirmation-modal-header">
          <h3 className="confirmation-modal-title">Confirmation</h3>
          <button className="confirmation-modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        
        <div className="confirmation-modal-content">
          <div className="confirmation-message">
            Would you like to Reset Goals or want to continue?
          </div>
          
          <div className="confirmation-buttons">
            <button 
              className="confirmation-btn reset-btn" 
              onClick={onResetGoals}
            >
              Reset Goals
            </button>
            <button 
              className="confirmation-btn continue-btn" 
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 