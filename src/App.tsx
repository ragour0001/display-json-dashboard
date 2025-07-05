import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHelmet from '@/components/SEO/SEOHelmet';
import useSEO from '@/hooks/useSEO';
import ScrollToTop from '@/components/ScrollToTop';

import HomePage from '@/features/home/pages/HomePage';
import LoginPage from '@/features/user-login/pages/LoginPage';
import SignUpPage from '@/features/user-login/pages/SignUpPage';
import SetNewPassword from '@/features/user-login/components/set-new-password/SetNewPassword';
import VerificationPage from '@/features/user-login/pages/VerificationPage';
import ResetPasswordPage from '@/features/user-login/pages/ResetPasswordPage';

import DashboardPage from '@/features/dashboard/pages/DashboardPage';

// Import new pages
import OrganizationsPage from '@/features/main/pages/OrganizationsPage';
import IndividualsPage from '@/features/main/pages/IndividualsPage';
import CareProvidersPage from '@/features/main/pages/CareProvidersPage';
import InsurersPage from '@/features/main/pages/InsurersPage';
import OurApproachPage from '@/features/main/pages/OurApproachPage';
import OurImpactPage from '@/features/main/pages/OurImpactPage';
import DiscoverYourselfPage from '@/features/main/pages/DiscoverYourselfPage';
import AdvancedOrganizationalAuditsPage from '@/features/main/pages/AdvancedOrganizationalAuditsPage';
import ResearchAndAnalyticsPage from '@/features/main/pages/ResearchAndAnalyticsPage';
import RefillHealthEAP360Page from '@/features/main/pages/RefillHealthEAP360Page';
import PsychologicalSafetyWorkplaceFearSolutionsPage from '@/features/main/pages/PsychologicalSafetyWorkplaceFearSolutionsPage';
import POSHComplianceServicesPage from '@/features/main/pages/POSHComplianceServicesPage';
import CustomizedOrganizationalWellnessSolutionsPage from '@/features/main/pages/CustomizedOrganizationalWellnessSolutionsPage';
import EquityDiversityInclusionSolutionsPage from '@/features/main/pages/EquityDiversityInclusionSolutionsPage';
import TherapyHubPage from '@/features/main/pages/TherapyHubPage';
import TrainingDevelopmentProgramsPage from '@/features/main/pages/TrainingDevelopmentProgramsPage';
import CrisisInterventionRecoveryProgramPage from '@/features/main/pages/CrisisInterventionRecoveryProgramPage';
import LeadershipDevelopmentSolutionPage from '@/features/main/pages/LeadershipDevelopmentSolutionPage';
import SelfHelpToolsDigitalProgramsPage from '@/features/main/pages/SelfHelpToolsDigitalProgramsPage';
import BehaviorChangeWorkforceOptimizationSolutionPage from '@/features/main/pages/BehaviorChangeWorkforceOptimizationSolutionPage';
import WorkLifeBalanceServicesPage from '@/features/main/pages/WorkLifeBalanceServicesPage';
import ResearchAndAnalyticsServicesPage from '@/features/main/pages/ResearchAndAnalyticsServicesPage';
import RefillHealthInsightXPage from '@/features/main/pages/RefillHealthInsightXPage';
import TailoredOrganizationalWellnessSolutionsPage from '@/features/main/pages/TailoredOrganizationalWellnessSolutionsPage';
import POSHComplianceSafeWorkplaceSolutionsPage from '@/features/main/pages/POSHComplianceSafeWorkplaceSolutionsPage';
import FeelBetterInUnder90SecondsToolkitPage from '@/features/main/pages/FeelBetterInUnder90SecondsToolkitPage';
import SelfHelpProToolkitPage from '@/features/main/pages/SelfHelpProToolkitPage';
import MeditationMasterySuitePage from '@/features/main/pages/MeditationMasterySuitePage';
import FreeAssessmentsPage from '@/features/main/pages/FreeAssessmentsPage';
import AboutUsPage from '@/features/main/pages/AboutUsPage';
import ContactUsPage from '@/features/main/pages/ContactUsPage';
import ProviderNetworkPage from '@/features/main/pages/ProviderNetworkPage';
import PrivacyPolicyPage from '@/features/main/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/features/main/pages/TermsOfServicePage';
import EmployeesPage from '@/features/main/pages/EmployeesPage';
// User Dashboard import...
import UserDashboardApp from "@/features/user-dashboard/UserDashboardApp";

import {
  ApplicationForm,
  ApplicationSubmitted,
  PersonalInfo,
  ProfessionalBackground,
  Specializations,
  RoleAlignment,
  LanguageProficiency,
  AdditionalInfo,
  CredentialsUpload,
  MiscellaneousInfo,
  PracticeDetails,
  ThankYouSubmission,
  InterviewScheduling,
  ProfileReview,
  FinalSteps,
  ApplicationReview,
  InterviewInvitation,
  InterviewInvitationNew,
  InterviewCompleted,
  ScheduleInterview,
  OnboardingComplete
} from '@/features/therapist-onboarding';
import Form from './features/therapist-onboarding/Form';

const App: React.FC = () => {
  const location = useLocation();
  const seoData = useSEO();
  const isHomePage = location.pathname === '/';
  const isOnboardingPage = location.pathname.startsWith('/onboarding');
  const isUserDashboard = location.pathname === '/user-dashboard';
  
  if (isUserDashboard) {
    // Render only UserDashboardApp for /user-dashboard route
    return <UserDashboardApp />;
  }

  return (
    <>
      <HelmetProvider>
        <SEOHelmet
          title={seoData.title}
          description={seoData.description}
          keywords={seoData.keywords}
          url={seoData.url}
          canonicalUrl={seoData.canonicalUrl}
          type={seoData.type}
          noIndex={seoData.noIndex}
          structuredData={seoData.structuredData}
        />
      </HelmetProvider>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <ScrollToTop />
        <main className={`flex-grow ${
          isHomePage 
            ? 'w-full m-0 p-0' 
            : isOnboardingPage 
              ? 'pt-32 pb-8' 
              : 'container mx-auto px-4 py-8 pt-24'
        }`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/set-new-password" element={<SetNewPassword />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/admin-dashboard" element={<div>Admin Dashboard - Coming Soon</div>} />
            <Route path="/personal-dashboard" element={<div>Personal Dashboard - Coming Soon</div>} />

            {/* New Routes */}
            <Route path="/organizations" element={<OrganizationsPage />} />
            <Route path="/individuals" element={<IndividualsPage />} />
            <Route path="/care-providers" element={<CareProvidersPage />} />
            <Route path="/insurers" element={<InsurersPage />} />
            <Route path="/our-approach" element={<OurApproachPage />} />
            <Route path="/our-impact" element={<OurImpactPage />} />
            <Route path="/discover-yourself" element={<DiscoverYourselfPage />} />
            <Route path="/advanced-organizational-audits" element={<AdvancedOrganizationalAuditsPage />} />
            <Route path="/research-and-analytics" element={<ResearchAndAnalyticsPage />} />
            <Route path="/refill-health-eap-360" element={<RefillHealthEAP360Page />} />
            <Route path="/psychological-safety-workplace-fear-solutions" element={<PsychologicalSafetyWorkplaceFearSolutionsPage />} />
            <Route path="/posh-compliance-services" element={<POSHComplianceServicesPage />} />
            <Route path="/customized-organizational-wellness-solutions" element={<CustomizedOrganizationalWellnessSolutionsPage />} />
            <Route path="/equity-diversity-inclusion-solutions" element={<EquityDiversityInclusionSolutionsPage />} />
            <Route path="/therapy-hub" element={<TherapyHubPage />} />
            <Route path="/training-development-programs" element={<TrainingDevelopmentProgramsPage />} />
            <Route path="/crisis-intervention-recovery-program" element={<CrisisInterventionRecoveryProgramPage />} />
            <Route path="/leadership-development-solution" element={<LeadershipDevelopmentSolutionPage />} />
            <Route path="/self-help-tools-digital-programs" element={<SelfHelpToolsDigitalProgramsPage />} />
            <Route path="/behavior-change-workforce-optimization-solution" element={<BehaviorChangeWorkforceOptimizationSolutionPage />} />
            <Route path="/work-life-balance-services" element={<WorkLifeBalanceServicesPage />} />
            <Route path="/research-and-analytics-services" element={<ResearchAndAnalyticsServicesPage />} />
            <Route path="/refill-health-insightx" element={<RefillHealthInsightXPage />} />
            <Route path="/tailored-organizational-wellness-solutions" element={<TailoredOrganizationalWellnessSolutionsPage />} />
            <Route path="/posh-compliance-safe-workplace-solutions" element={<POSHComplianceSafeWorkplaceSolutionsPage />} />
            <Route path="/feel-better-in-under-90-seconds-toolkit" element={<FeelBetterInUnder90SecondsToolkitPage />} />
            <Route path="/self-help-pro-toolkit" element={<SelfHelpProToolkitPage />} />
            <Route path="/meditation-mastery-suite" element={<MeditationMasterySuitePage />} />
            <Route path="/free-assessments" element={<FreeAssessmentsPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/provider-network" element={<ProviderNetworkPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/employees" element={<EmployeesPage />} />

            {/* Onboarding Routes */}
            <Route path="/onboarding/application-form" element={<ApplicationForm />} />
            <Route path="/onboarding/application-submitted" element={<ApplicationSubmitted />} />
            <Route path="/onboarding/personal-info" element={<Form />} />
            {/* <Route path="/onboarding/professional-background" element={<ProfessionalBackground />} />
            <Route path="/onboarding/specializations" element={<Specializations />} />
            <Route path="/onboarding/role-alignment" element={<RoleAlignment />} />
            <Route path="/onboarding/language-proficiency" element={<LanguageProficiency />} />
            <Route path="/onboarding/additional-info" element={<AdditionalInfo />} />
            <Route path="/onboarding/credentials-upload" element={<CredentialsUpload />} />
            <Route path="/onboarding/miscellaneous-info" element={<MiscellaneousInfo />} />
            <Route path="/onboarding/practice-details" element={<PracticeDetails />} /> */}
            <Route path="/onboarding/thank-you" element={<ThankYouSubmission />} />
            <Route path="/onboarding/interview-scheduling" element={<InterviewScheduling />} />
            <Route path="/onboarding/profile-review" element={<ProfileReview />} />
            <Route path="/onboarding/final-steps" element={<FinalSteps />} />
            <Route path="/onboarding/application-review" element={<ApplicationReview />} />
            <Route path="/onboarding/interview-invitation" element={<InterviewInvitation />} />
            <Route path="/onboarding/interview-invitation-new" element={<InterviewInvitationNew />} />
            <Route path="/onboarding/interview-completed" element={<InterviewCompleted />} />
            <Route path="/onboarding/schedule-interview" element={<ScheduleInterview />} />
            <Route path="/onboarding/complete" element={<OnboardingComplete />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default App;
