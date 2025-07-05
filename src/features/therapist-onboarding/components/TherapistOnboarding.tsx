import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFileText, FiUser, FiTool, FiMessageSquare, FiVideo, FiFolder, FiCheckCircle, FiChevronRight, FiAward, FiCamera, FiGlobe, FiCalendar, FiBookOpen, FiLink } from 'react-icons/fi';

const tabs = [
  { id: 'welcome', label: 'Offer & Welcome', icon: FiFileText },
  { id: 'profile', label: 'Profile Setup', icon: FiUser },
  { id: 'platform', label: 'Platform Guide', icon: FiTool },
  { id: 'chat', label: 'Chat Preferences', icon: FiMessageSquare },
  { id: 'video', label: 'Intro Video', icon: FiVideo },
  { id: 'access', label: 'Dashboard Access', icon: FiFolder },
];

const WelcomeContent = () => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Offer & Welcome Documents</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
        <h4 className="font-semibold text-lg text-gray-700 mb-4">Welcome Aboard!</h4>
        <p className="text-gray-600 mb-4">We're thrilled to have you join the Refill Health team. This onboarding portal will guide you through everything you need to get started.</p>
        <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
          View Welcome Note <FiChevronRight className="ml-1" />
        </button>
      </div>
      <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
        <h4 className="font-semibold text-lg text-gray-700 mb-4">Therapist Agreement</h4>
        <p className="text-gray-600 mb-4">Please review and sign your therapist agreement to finalize your onboarding.</p>
        <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
          Review & Sign Contract <FiChevronRight className="ml-1" />
        </button>
      </div>
    </div>
    <div className="mt-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
      <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiCheckCircle className="mr-3 text-green-500" /> Document Checklist</h4>
      <p className="text-gray-600 mb-6">Please ensure you have the following documents ready for upload in the next steps.</p>
      <ul className="space-y-4">
        <li className="flex items-center text-gray-700"><FiFileText className="mr-3 text-blue-500" /> Govt. ID proof (PAN Card, Aadhaar, etc.)</li>
        <li className="flex items-center text-gray-700"><FiAward className="mr-3 text-blue-500" /> Educational certificates (Highest degree)</li>
        <li className="flex items-center text-gray-700"><FiFileText className="mr-3 text-blue-500" /> Professional license/certification</li>
        <li className="flex items-center text-gray-700"><FiFolder className="mr-3 text-blue-500" /> Bank details/UPI for payment setup</li>
        <li className="flex items-center text-gray-700"><FiCheckCircle className="mr-3 text-blue-500" /> Signed Consent Forms & Privacy Policy</li>
      </ul>
    </div>
  </motion.div>
);

const ProfileContent = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Profile Setup Essentials</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cal.com & Dashboard ID */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiCalendar className="mr-3 text-blue-500" /> Cal.com & Dashboard Credentials</h4>
                <p className="text-gray-600 mb-4">Your user IDs for Cal.com and the therapist dashboard have been generated. Please keep them safe.</p>
                <div className="space-y-2 text-sm">
                    <p><strong className="font-semibold">Cal.com ID:</strong> therapist-xy123</p>
                    <p><strong className="font-semibold">Dashboard ID:</strong> Refill-Th-987</p>
                </div>
            </div>

            {/* Email Setup */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiLink className="mr-3 text-blue-500" /> Email Setup (Zoho)</h4>
                <p className="text-gray-600 mb-4">You'll receive an invitation to set up your official Refill Health email address via Zoho Mail.</p>
                <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
                    Zoho Mail Guide <FiChevronRight className="ml-1" />
                </button>
            </div>

            {/* Therapist Bio Template */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft lg:col-span-2">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiBookOpen className="mr-3 text-blue-500" /> Therapist Bio Template</h4>
                <p className="text-gray-600 mb-4">Use our template to craft a compelling bio that connects with clients. A strong bio can significantly increase your booking rate.</p>
                <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
                    Download Bio Template <FiChevronRight className="ml-1" />
                </button>
            </div>

            {/* Photo Guidelines */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiCamera className="mr-3 text-blue-500" /> 📸 Photo Guidelines</h4>
                <p className="text-gray-600 mb-4">A professional headshot is crucial. Please follow our guidelines for the best results.</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                    <li>High-resolution (min. 1080px)</li>
                    <li>Neutral background</li>
                    <li>Professional attire</li>
                    <li>Warm, friendly expression</li>
                </ul>
            </div>

            {/* Sample Therapist Profile */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiUser className="mr-3 text-blue-500" /> ✨ Sample Therapist Profile</h4>
                <p className="text-gray-600 mb-4">See an example of a complete and effective therapist profile.</p>
                <div className="w-full h-32 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">Sample Profile Screenshot</span>
                </div>
            </div>

            {/* Language & Session Form */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft lg:col-span-2">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiGlobe className="mr-3 text-blue-500" /> Language & Session Type Form</h4>
                <p className="text-gray-600 mb-4">Please fill out this form to specify your language preferences and the types of sessions you'll offer (e.g., individual, couples).</p>
                <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
                    Access Form <FiChevronRight className="ml-1" />
                </button>
            </div>
        </div>
    </motion.div>
);

const PlatformGuideContent = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Platform & Process Guide</h3>
        
        {/* Dashboard Demo */}
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft mb-6">
            <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiVideo className="mr-3 text-blue-500" /> Demo of Dashboard Usage</h4>
            <p className="text-gray-600 mb-4">Watch this short video to familiarize yourself with the therapist dashboard and its key features.</p>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Dashboard Demo Video Placeholder</span>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Booking & Scheduling */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiCalendar className="mr-3 text-blue-500" /> Booking, Rescheduling & Cancellation</h4>
                <p className="text-gray-600 mb-4">Understand the process for managing client appointments through the dashboard.</p>
                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>Accept new booking requests</li>
                    <li>Reschedule appointments with client approval</li>
                    <li>Handle cancellations as per our policy</li>
                </ul>
            </div>

            {/* Calendar Setup */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiTool className="mr-3 text-blue-500" /> Calendar Setup</h4>
                <p className="text-gray-600 mb-4">Sync your professional calendar with our platform to keep your availability up-to-date.</p>
                <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
                    Calendar Sync Instructions <FiChevronRight className="ml-1" />
                </button>
            </div>
        </div>

        {/* Client Note Format */}
        <div className="mt-6 bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
            <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiBookOpen className="mr-3 text-blue-500" /> 📒 Client Note Format</h4>
            <p className="text-gray-600 mb-4">Please use our standardized format for all client notes to ensure consistency and quality of care. Download the template below.</p>
            <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
                Download Note Template <FiChevronRight className="ml-1" />
            </button>
        </div>
    </motion.div>
);

const ChatPreferencesContent = () => {
    const [chatAvailable, setChatAvailable] = useState(true);
    const [responseTime, setResponseTime] = useState('2-3');

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Chat Preferences</h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-lg text-gray-700">Availability for Chat</h4>
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" className="sr-only" checked={chatAvailable} onChange={() => setChatAvailable(!chatAvailable)} />
                            <div className={`block w-14 h-8 rounded-full ${chatAvailable ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                            <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${chatAvailable ? 'translate-x-full' : ''}`}></div>
                        </div>
                    </label>
                </div>
                <div className="mb-6">
                    <h4 className="font-semibold text-lg text-gray-700 mb-4">Response Time</h4>
                    <p className="text-gray-600 mb-2 text-sm">Set expectations for clients on your average response time.</p>
                    <select
                        value={responseTime}
                        onChange={(e) => setResponseTime(e.target.value)}
                        className="w-full md:w-1/2 bg-white border border-gray-300 rounded-lg px-4 py-2"
                    >
                        <option value="1-2">1-2 hours</option>
                        <option value="2-3">2-3 hours</option>
                        <option value="4-6">4-6 hours</option>
                        <option value="24">Within 24 hours</option>
                    </select>
                </div>
                <button className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Save Preferences
                </button>
            </div>
        </motion.div>
    );
}

const IntroVideoContent = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Intro Story Video (Optional)</h3>
        <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
            <p className="text-gray-600 mb-4">A short intro video can help clients connect with you on a personal level. It's optional but highly recommended.</p>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <span className="text-gray-500">Video Placeholder / Embed</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <button className="flex-1 bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                    Upload Video
                </button>
                <button className="flex-1 border border-blue-500 text-blue-500 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                    Link to Video (e.g., YouTube)
                </button>
            </div>
        </div>
    </motion.div>
);

const DashboardAccessContent = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Access Links & Folders</h3>
        <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                <h4 className="font-semibold text-lg text-gray-700 mb-4 flex items-center"><FiLink className="mr-3 text-blue-500" /> Therapist Dashboard</h4>
                <p className="text-gray-600 mb-4">This is your main hub for managing clients, appointments, and payments. Bookmark this link for easy access.</p>
                <a href="/therapist-dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:text-blue-600 transition-colors flex items-center">
                    Go to Dashboard <FiChevronRight className="ml-1" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft text-center">
                    <FiFolder className="text-3xl text-blue-500 mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-700 mb-2">Start Here</h5>
                    <p className="text-sm text-gray-600">Essential first steps and welcome materials.</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft text-center">
                    <FiFolder className="text-3xl text-blue-500 mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-700 mb-2">Legal & Docs</h5>
                    <p className="text-sm text-gray-600">Find all your contracts, policies, and legal forms.</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-soft text-center">
                    <FiFolder className="text-3xl text-blue-500 mx-auto mb-3" />
                    <h5 className="font-semibold text-gray-700 mb-2">How-to Guides</h5>
                    <p className="text-sm text-gray-600">Detailed guides and resources for using the platform.</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const TherapistOnboarding = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const renderContent = () => {
    switch (activeTab) {
      case 'welcome':
        return <WelcomeContent />;
      case 'profile':
        return <ProfileContent />;
      case 'platform':
        return <PlatformGuideContent />;
      case 'chat':
        return <ChatPreferencesContent />;
      case 'video':
        return <IntroVideoContent />;
      case 'access':
        return <DashboardAccessContent />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-gray-100/50 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-6 min-h-[600px] flex flex-col md:flex-row gap-6 md:gap-8">
      {/* Sidebar Navigation */}
      <nav className="w-full md:w-64 flex-shrink-0">
        <div className="sticky top-24">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-white/80 hover:text-blue-500'
                  }`}
                >
                  <tab.icon className="mr-4 flex-shrink-0" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-white/70 rounded-xl p-6 md:p-8 shadow-inner-soft">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default TherapistOnboarding; 