import React from 'react';
import { Link } from 'react-router-dom';

interface FooterColumnProps {
  title: string;
  items: string[];
  className?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items, className = "" }) => {
  const getItemLink = (item: string) => {
    // Map each item to appropriate routes/sections
    const linkMap: { [key: string]: string } = {
      'Advanced Organizational Audits': '/advanced-organizational-audits',
      'Research and Analytics': '/research-and-analytics',
      'Refill Health EAP 360°': '/refill-health-eap-360',
      'Psychological Safety & Workplace Fear Solutions': '/psychological-safety-workplace-fear-solutions',
      'POSH (Prevention of Sexual Harassment) Compliance Services': '/posh-compliance-services',
      'POSH Compliance Services': '/posh-compliance-services',
      'Customized Organizational Wellness Solutions': '/customized-organizational-wellness-solutions',
      'Equity, Diversity & Inclusion Solutions': '/equity-diversity-inclusion-solutions',
      'Equity, Diversity, and Inclusion (EDI) Solutions': '/equity-diversity-inclusion-solutions',
      'Therapy Hub': '/therapy-hub',
      'Training & Development Programs': '/training-development-programs',
      'Crisis Intervention & Recovery Program': '/crisis-intervention-recovery-program',
      'Leadership Development Solution': '/leadership-development-solution',
      'Self-Help Tools & Digital Programs': '/self-help-tools-digital-programs',
      'Behavior Change & Workforce Optimization Solution': '/behavior-change-workforce-optimization-solution',
      'Work-Life Balance Services': '/work-life-balance-services',
      'Research & Analytics Services': '/research-and-analytics-services',
      'Research and Analytics Services': '/research-and-analytics-services',
      'Refill Health InsightX – Advanced Organizational Diagnostics Suite': '/refill-health-insightx',
      'Tailored Organizational Wellness Solutions': '/tailored-organizational-wellness-solutions',
      'POSH Compliance & Safe Workplace Solutions': '/posh-compliance-safe-workplace-solutions',
      'Discover Yourself': '/discover-yourself',
      'Feel Better in Under 90 Seconds Toolkit': '/feel-better-in-under-90-seconds-toolkit',
      'Self-Help Pro Toolkit': '/self-help-pro-toolkit',
      'Meditation Mastery Suite': '/meditation-mastery-suite',
      'Organizations': '/organizations',
      'For Organizations': '/organizations',
      'Employees': '/employees',
      'For Employees': '/employees',
      'Individuals': '/individuals',
      'For Individuals': '/individuals',
      'Care Providers': '/care-providers',
      'For Care Providers': '/care-providers',
      'Insurers': '/insurers',
      'For Insurers': '/insurers',
      'Free Assessments': '/free-assessments',
      'About Us': '/about-us',
      'Contact Us!': '/contact-us',
      'Want to join our provider network?': '/provider-network',
      'Privacy Policy': '/privacy-policy',
      'Terms of Service': '/terms-of-service'
    };
    
    return linkMap[item] || '/#';
  };

  return (
    <nav className={`text-sm font-bold text-neutral-800 ${className}`}>
      <h3 className="text-2xl font-bold leading-10 mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => {
          const link = getItemLink(item);
          const isInternal = link.startsWith('/');
          return (
            <li key={index} className="text-sm font-bold leading-6">
              {isInternal ? (
                <Link to={link} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {item}
                </Link>
              ) : (
                <a href={link} className="hover:text-blue-600 transition-colors cursor-pointer">
                  {item}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex gap-5 items-center w-full">
      <a href="https://www.facebook.com/profile.php?id=61575893715300" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/fa1a3db5b0c08d69d8638fc43e648b92dae11518?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-10 aspect-square cursor-pointer hover:opacity-80 transition-opacity"
          alt="Facebook"
        />
      </a>
      <a href="https://www.linkedin.com/company/refillhealth/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/cfab446d11d53b59f5d3ca74ca190c5def6fea06?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-10 aspect-square cursor-pointer hover:opacity-80 transition-opacity"
          alt="LinkedIn"
        />
      </a>
      <a href="https://x.com/refillhealth?s=21" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/b2a667e24f4e512c776419e240554e7a4612f09e?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-10 aspect-square cursor-pointer hover:opacity-80 transition-opacity"
          alt="Twitter"
        />
      </a>
      <a href="https://www.instagram.com/refillhealth?igsh=N3ZwdmN6NHIxcGJ5" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/0813977b5cc42c717044eaec61cfd3f2b4c83ce8?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-10 aspect-square cursor-pointer hover:opacity-80 transition-opacity"
          alt="Instagram"
        />
      </a>
    </div>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <div className="mt-4 text-sm font-bold text-neutral-800">
      Contact us:<br/>
      <a href="mailto:contact@refillhealth.com" className="underline hover:text-blue-600 transition-colors">
        contact@refillhealth.com
      </a>
    </div>
  );
};

const FooterBrand: React.FC = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="text-sm font-bold text-neutral-800 w-[173px]">
      <div className="w-full">
        <img
          src="/assets/images/logo.png"
          className="object-contain aspect-[3] w-[216px] mb-6 cursor-pointer hover:opacity-80 transition-opacity"
          alt="Refill Health Logo"
          onClick={handleLogoClick}
        />
        <nav className="space-y-3">
          <Link to="/login" className="text-base font-bold leading-6 text-black hover:text-blue-600 transition-colors block">
            Already a member?
          </Link>
          <Link to="/login" className="text-base font-bold leading-6 text-black hover:text-blue-600 transition-colors block">
            Sign in or sign up
          </Link>
          <Link to="/provider-network" className="text-base font-bold leading-6 text-black hover:text-blue-600 transition-colors block">
            Want to join our provider network?
          </Link>
          <Link to="/onboarding/application-form" className="text-base font-bold leading-6 text-black hover:text-blue-600 transition-colors block">
            Apply Here
          </Link>
          <Link to="/contact-us" className="text-base font-bold leading-6 text-black hover:text-blue-600 transition-colors block">
            Contact Us!
          </Link>
        </nav>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/550fe28ec0f489610e4b097f7328e8edfb4b16f7?placeholderIfAbsent=true"
        className="object-contain mt-7 max-w-full aspect-[2.16] w-[216px]"
        alt="Secondary logo"
      />
    </section>
  );
};

export const Footer: React.FC = () => {
  const solutionsItems = [
    "Advanced Organizational Audits",
    "Research and Analytics",
    "Refill Health EAP 360°",
    "Psychological Safety & Workplace Fear Solutions",
    "POSH (Prevention of Sexual Harassment) Compliance Services",
    "Customized Organizational Wellness Solutions",
    "Equity, Diversity, and Inclusion (EDI) Solutions"
  ];

  const servicesItems = [
    "Therapy Hub",
    "Training & Development Programs",
    "Crisis Intervention & Recovery Program",
    "Leadership Development Solution",
    "Self-Help Tools & Digital Programs",
    "Behavior Change & Workforce Optimization Solution",
    "Work-Life Balance Services",
    "Research and Analytics Services"
  ];

  const usefulLinksItems = [
    "Psychological Safety & Workplace Fear Solutions",
    "Refill Health InsightX – Advanced Organizational Diagnostics Suite",
    "Tailored Organizational Wellness Solutions",
    "POSH Compliance & Safe Workplace Solutions",
    "Discover Yourself",
    "Feel Better in Under 90 Seconds Toolkit",
    "Self-Help Pro Toolkit",
    "Meditation Mastery Suite"
  ];

  const whoWeServeItems = [
    "For Organizations",
    "For Employees",
    "For Individuals",
    "For Care Providers",
    "For Insurers"
  ];

  const refillEssentialsItems = [
    { label: 'Free Assessments', to: '/free-assessments' },
    { label: 'Discover Yourself', to: '/discover-yourself' },
    { label: 'About us', to: '/about-us' }
  ];

  const getRefillEssentialsLink = (item: string) => {
    const linkMap: { [key: string]: string } = {
      'Free Assessments': '/#assessments',
      'Discover Yourself': '/#discover',
      'About us': '/#about'
    };
    return linkMap[item] || '/#';
  };

  return (
    <div className="w-full bg-white">
      <footer className="flex flex-wrap gap-10 items-start w-full max-w-[1393px] max-md:max-w-full mx-auto px-4 pt-8 pb-4">
        <FooterBrand />

        <div className="flex flex-wrap grow shrink gap-4 items-start min-w-60 w-[1080px] max-md:max-w-full">
          <FooterColumn
            title="Our Solutions"
            items={solutionsItems}
            className="grow shrink w-[184px]"
          />

          <FooterColumn
            title="Our Services"
            items={servicesItems}
            className="grow shrink w-[174px]"
          />

          <FooterColumn
            title="Useful Links"
            items={usefulLinksItems}
            className="grow shrink w-[174px]"
          />

          <div className="flex gap-0 items-start min-w-60">
            <FooterColumn
              title="Who We Serve"
              items={whoWeServeItems}
              className="w-[218px]"
            />

            <section className="w-[218px]">
              <h3 className="text-2xl font-bold leading-10 text-neutral-800 mb-6">
                Refill  Essentials
              </h3>
              <div className="flex flex-col max-w-full w-[220px]">
                <nav className="space-y-3 mb-6">
                  {refillEssentialsItems.map((item, index) => (
                    <Link key={index} to={item.to} className="text-base font-bold text-black leading-6 ml-0 pl-0 hover:text-blue-600 transition-colors block">
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-col items-start w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/d06f8bd6fcbac40f9076fd5b33d4605f8dd55c86?placeholderIfAbsent=true"
                    className="object-contain max-w-full aspect-[3.03] w-[185px]"
                    alt="Certification badge"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/c0b2df4621b145408292acbe66e8b02f/1d82477ad4e29d5c10892c33195e2ea4763d2c3c?placeholderIfAbsent=true"
                    className="object-contain mt-10 max-w-full aspect-[3.56] w-[185px]"
                    alt="Award badge"
                  />
                  <div className="mt-10">
                    <SocialMediaIcons />
                  </div>
                  <ContactInfo />
                </div>
              </div>
            </section>
          </div>
        </div>
      </footer>
      
      {/* Copyright Section */}
      <div className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-[1393px] mx-auto px-4 py-4">
          <p className="text-center text-sm text-gray-500">
            © 2025 Refill Health. | All rights reserved. | <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer; 