import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../../../components/shared/BackButton';
import './Dashboard.scss';

interface DashboardOption {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  route: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredOption, setHoveredOption] = useState<DashboardOption | null>(null);
  
  // This should come from your auth service
  const userName = 'Imdad';

  const dashboardOptions: DashboardOption[] = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ffe67978bf6496bbbdc81e1b8a4e3ed192937431',
      title: 'Admin Dashboard',
      description: 'Manage employees, subscription,<br/>invites, and reports',
      buttonText: 'Go to Admin Dashboard',
      route: '/admin-dashboard'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a089b104c0543c7aabe68b3a5be75611d7142d79',
      title: 'Personal Dashboard',
      description: 'Track your mood, book sessions,<br/>and explore selfcare tools',
      buttonText: 'Go to Personal Dashboard',
      route: '/personal-dashboard'
    }
  ];

  const handleCardHover = (option: DashboardOption) => {
    setHoveredOption(option);
  };

  const handleCardLeave = () => {
    setHoveredOption(null);
  };

  const navigateTo = (route: string) => {
    navigate(route);
  };

  return (
    <main className="dashboard-selection-container">
      <section className="content-wrapper">
        <div className="header-container">
          <BackButton showText={false} size="large" />
          <header className="header-section">
            <h2 className="greeting-title">
              Hi {userName}
              <br />
              Where would you like to go today?
            </h2>
            <p className="instruction-text">
              Choose how you'd like to use Refill Health today
            </p>
          </header>
        </div>

        <section className="options-container">
          {dashboardOptions.map((option, index) => (
            <article 
              key={index}
              className={`dashboard-card ${option === hoveredOption ? 'hovered' : ''}`}
              onMouseEnter={() => handleCardHover(option)}
              onMouseLeave={handleCardLeave}
            >
              <img 
                src={option.icon} 
                alt={`${option.title} icon`} 
                className="dashboard-icon" 
              />
              <div className="dashboard-content">
                <h2 className="dashboard-title">{option.title}</h2>
                <p 
                  className="dashboard-description" 
                  dangerouslySetInnerHTML={{ __html: option.description }}
                />
              </div>
              <button 
                className="dashboard-button"
                onClick={() => navigateTo(option.route)}
                aria-label={`Navigate to ${option.title}`}
              >
                <span className="button-text">{option.buttonText}</span>
              </button>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Dashboard; 