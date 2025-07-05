export default function FAQSection() {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    },
  ];

  return (
    <>
      <style>{`
        .faq-link {
          color: #006b5f;
          font-family: Inter, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 140%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .faq-link:hover {
          text-decoration: underline;
        }

        .faq-section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;
          background: #fff;
          padding-bottom: 96px;
        }

        .faq-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 48px;
          align-self: stretch;
          padding: 0px 32px;
        }

        .faq-header h2 {
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
          font-style: normal;
          font-weight: 600;
          line-height: 44px;
          letter-spacing: -0.72px;
          margin: 0;
        }

        .faq-grid {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 64px;
          align-self: stretch;
          padding: 0px 32px;
        }

        .faq-row {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
        }

        .faq-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .faq-question {
          align-self: stretch;
          color: #181d27;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
          margin: 0 0 8px 0;
        }

        .faq-question-medium {
          font-size: 20px;
          font-weight: 500;
          line-height: 30px;
        }

        .faq-answer {
          align-self: stretch;
          color: #535862;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          margin: 0;
        }

        .still-questions-section {
          display: flex;
          padding: 0px 32px;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
        }

        .still-questions-content {
          display: flex;
          padding: 40px 32px;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          align-self: stretch;
          border-radius: 16px;
          background: #fafafa;
        }

        .avatar-group {
          width: 120px;
          height: 56px;
          position: relative;
        }

        .avatar {
          display: flex;
          width: 48px;
          height: 48px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          border-radius: 200px;
          border: 1.5px solid #fff;
          position: absolute;
          background: #006b5f;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
        }

        .avatar-1 {
          left: 0px;
          top: 8px;
        }

        .avatar-2 {
          left: 72px;
          top: 8px;
        }

        .avatar-3 {
          width: 56px;
          height: 56px;
          left: 32px;
          top: 0px;
        }

        .still-questions-text {
          display: flex;
          width: 768px;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }

        .still-questions-text h3 {
          align-self: stretch;
          color: #181d27;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 30px;
          margin: 0;
        }

        .still-questions-text p {
          width: 768px;
          color: #535862;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          margin: 0;
        }

        .still-questions-actions {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .get-in-touch-button {
          display: flex;
          width: 163px;
          justify-content: center;
          align-items: center;
          padding: 10px 16px;
          border-radius: 12px;
          background: #006a63;
          border: none;
          color: #fff;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0.1px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .get-in-touch-button:hover {
          background: #005951;
        }
      `}</style>
      <div className="faq-section">
        <div className="faq-header">
          <h2>FAQs</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-row">
            <div className="faq-item">
              <h3 className="faq-question">Is there a free trial available?</h3>
              <p className="faq-answer">
                Yes, you can try us for free for 30 days. If you want, we'll
                provide you with a free, personalized 30-minute onboarding call to
                get you up and running as soon as possible.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I change my plan later?</h3>
              <p className="faq-answer">
                Of course. Our pricing scales with your company. Chat to our
                friendly team to find a solution that works for you.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What is your cancellation policy?</h3>
              <p className="faq-answer">
                We understand that things change. You can cancel your plan at any
                time and we'll refund you the difference already paid.
              </p>
            </div>
          </div>
          <div className="faq-row">
            <div className="faq-item">
              <h3 className="faq-question">
                Can other info be added to an invoice?
              </h3>
              <p className="faq-answer">
                Yes, you can try us for free for 30 days. If you want, we'll
                provide you with a free, personalized 30-minute onboarding call to
                get you up and running as soon as possible.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question faq-question-medium">
                How does billing work?
              </h3>
              <p className="faq-answer">
                Plans are per workspace, not per account. You can upgrade one
                workspace, and still have any number of free workspaces.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question faq-question-medium">
                How do I change my account email?
              </h3>
              <p className="faq-answer">
                You can change the email address associated with your account by
                going to untitled.com/account from a laptop or desktop.
              </p>
            </div>
          </div>
        </div>

        <div className="still-questions-section">
          <div className="still-questions-content">
            <div className="avatar-group">
              <div className="avatar avatar-1"></div>
              <div className="avatar avatar-2"></div>
              <div className="avatar avatar-3"></div>
            </div>
            <div className="still-questions-text">
              <h3>Still have questions?</h3>
              <p>
                Can't find the answer you're looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <div className="still-questions-actions">
              <button className="get-in-touch-button">Get In Touch</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
