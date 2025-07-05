interface ContactCardProps {
  type: "email" | "chat";
  title: string;
  description: string;
  buttonText: string;
}

export default function ContactCard({
  type,
  title,
  description,
  buttonText,
}: ContactCardProps) {
  const getIcon = () => {
    if (type === "email") {
      return (
        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
          <path
            d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
            fill="#006B5F"
          />
        </svg>
      );
    } else {
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M0 20V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4L0 20ZM4 12H12V10H4V12ZM4 9H16V7H4V9ZM4 6H16V4H4V6Z"
            fill="#006B5F"
          />
        </svg>
      );
    }
  };

  return (
    <>
      <style>{`
        .contact-cards-section {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          align-self: stretch;
        }

        .contact-card {
          display: flex;
          padding-top: 24px;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          flex: 1;
        }

        .contact-card-content {
          display: flex;
          padding: 0px 24px 32px 24px;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          align-self: stretch;
          border-radius: 16px;
          background: #fafafa;
          position: relative;
        }

        .contact-icon-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: stretch;
          position: relative;
        }

        .contact-icon-background {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 107, 95, 0.1);
          border-radius: 50%;
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
        }

        .contact-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          text-align: center;
          align-self: stretch;
        }

        .contact-title {
          align-self: stretch;
          color: #181d27;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 28px;
          margin: 0;
        }

        .contact-description {
          align-self: stretch;
          color: #535862;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: 0.5px;
          margin: 0;
        }

        .contact-button {
          display: flex;
          align-items: flex-start;
          border-radius: 8px;
        }

        .contact-btn {
          display: flex;
          padding: 10px 18px;
          justify-content: center;
          align-items: center;
          gap: 8px;
          border-radius: 8px;
          border: 1px solid #d5d7da;
          background: #fff;
          box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
          color: #414651;
          text-align: center;
          font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .contact-btn:hover {
          background: #f8f9fa;
          border-color: #b8c4ce;
        }
      `}</style>
      <div className="contact-card">
        <div className="contact-card-content">
          <div className="contact-icon-wrapper">
            <div className="contact-icon-background">{getIcon()}</div>
          </div>
          <div className="contact-text">
            <h3 className="contact-title">{title}</h3>
            <p className="contact-description">{description}</p>
          </div>
          <div className="contact-button">
            <button className="contact-btn">{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
}
