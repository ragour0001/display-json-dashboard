import React, { useEffect } from 'react';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';
import './Pricing.scss';

interface Plan {
  name: string;
  price: string;
  billing: string;
  buttonText: string;
  features: string[];
}

const Pricing: React.FC = () => {
  const { trackSectionView, trackEvent } = useGoogleAnalytics();

  const plans: Plan[] = [
    {
      name: 'Basic',
      price: '$9.99',
      billing: 'per user/month',
      buttonText: 'Start Free Trial',
      features: [
        'Access to basic mental health resources',
        'Daily mood tracking',
        'Guided meditation sessions',
        'Basic progress reports',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$19.99',
      billing: 'per user/month',
      buttonText: 'Start Free Trial',
      features: [
        'All Basic features',
        'Advanced analytics',
        'Custom wellness programs',
        'Priority support',
        'Team progress tracking'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing: 'Contact for pricing',
      buttonText: 'Contact Sales',
      features: [
        'All Professional features',
        'Custom integration',
        'Dedicated account manager',
        'Advanced security features',
        'Custom reporting'
      ]
    }
  ];

  useEffect(() => {
    // Track section view
    trackSectionView('pricing');
  }, [trackSectionView]);

  const onPlanClick = (planName: string) => {
    trackEvent('view', 'pricing_plan', planName);
  };

  const onSelectPlan = (planName: string) => {
    trackEvent('select', 'pricing_plan', planName);
  };

  const onContactSales = () => {
    trackEvent('click', 'contact_sales', 'pricing_page');
  };

  return (
    <section className="pricing-section">
      <div className="content-container">
        <h2>Simple, Transparent Pricing</h2>
        <p className="subtitle">Choose the plan that works best for you or your organization</p>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className="pricing-card" onClick={() => onPlanClick(plan.name)}>
              <div className="plan-header">
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p className="billing">{plan.billing}</p>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="select-plan" onClick={() => onSelectPlan(plan.name)}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="enterprise-section">
          <h3>Enterprise Solutions</h3>
          <p>Need a custom solution? Let's talk about your specific needs.</p>
          <button className="contact-sales" onClick={onContactSales}>Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 