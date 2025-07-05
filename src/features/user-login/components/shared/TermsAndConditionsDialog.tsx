import React from 'react';
import './TermsAndConditionsDialog.scss';

interface TermsAndConditionsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsAndConditionsDialog: React.FC<TermsAndConditionsDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="terms-dialog-overlay" onClick={onClose}>
      <div className="terms-dialog-content" onClick={e => e.stopPropagation()}>
        <div className="terms-dialog-header">
          <h2>Terms and Conditions</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="terms-dialog-body">
          <h3>1. Acceptance of Terms</h3>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

          <h3>2. Use License</h3>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only.</p>

          <h3>3. Privacy Policy</h3>
          <p>Your use of our website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>

          <h3>4. Disclaimer</h3>
          <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h3>5. Limitations</h3>
          <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.</p>
        </div>
        <div className="terms-dialog-footer">
          <button className="accept-button" onClick={onClose}>I Understand</button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsDialog; 