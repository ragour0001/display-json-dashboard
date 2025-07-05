import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageBackground from '@/components/shared/PageBackground';

interface DiagnosticTool {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  color: string;
}

const DiagnosticsSuitePage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  const diagnosticTools: DiagnosticTool[] = [
    {
      id: 'cultura',
      icon: '/assets/images/diagnostics-suite/cultura.svg',
      title: 'CulturaScope',
      description: 'Organizational Culture & Psychosocial Climate Audit',
      features: [
        'Comprehensive culture assessment',
        'Psychosocial climate analysis',
        'Employee engagement metrics',
        'Cultural alignment evaluation',
        'Change readiness assessment'
      ],
      benefits: [
        'Identify cultural strengths and gaps',
        'Improve employee satisfaction',
        'Enhance organizational alignment',
        'Support change initiatives',
        'Foster inclusive workplace culture'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      color: '#6366F1'
    },
    {
      id: 'behav',
      icon: '/assets/images/diagnostics-suite/behav.svg',
      title: 'BehavSight',
      description: 'Team Dynamics & Behavioral Risk Mapping',
      features: [
        'Team dynamics analysis',
        'Behavioral risk assessment',
        'Communication pattern mapping',
        'Conflict resolution insights',
        'Leadership effectiveness evaluation'
      ],
      benefits: [
        'Improve team collaboration',
        'Reduce workplace conflicts',
        'Enhance communication effectiveness',
        'Identify potential risks early',
        'Optimize team performance'
      ],
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
      color: '#8B5CF6'
    },
    {
      id: 'thrive',
      icon: '/assets/images/diagnostics-suite/thrive.svg',
      title: 'ThriveSense Audit',
      description: 'Psychological Safety & Emotional Climate Diagnostic',
      features: [
        'Psychological safety measurement',
        'Emotional climate assessment',
        'Stress level monitoring',
        'Well-being indicators',
        'Mental health risk factors'
      ],
      benefits: [
        'Create safer work environments',
        'Improve employee well-being',
        'Reduce stress and burnout',
        'Enhance psychological safety',
        'Support mental health initiatives'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      color: '#06B6D4'
    },
    {
      id: 'humanedge',
      icon: '/assets/images/diagnostics-suite/humanedge.svg',
      title: 'HumanEdge Audit',
      description: 'Workforce Personality, Role-Fit & Leadership Potential Mapping',
      features: [
        'Personality assessment',
        'Role-fit analysis',
        'Leadership potential evaluation',
        'Career development insights',
        'Succession planning support'
      ],
      benefits: [
        'Optimize role assignments',
        'Identify future leaders',
        'Improve job satisfaction',
        'Enhance career development',
        'Support succession planning'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      color: '#10B981'
    },
    {
      id: 'deeproot',
      icon: '/assets/images/diagnostics-suite/deeproot.svg',
      title: 'DeepRoot Audit',
      description: 'Root Cause Diagnostics of Organizational Dysfunction',
      features: [
        'Root cause analysis',
        'Systemic issue identification',
        'Process optimization insights',
        'Efficiency gap analysis',
        'Performance bottleneck detection'
      ],
      benefits: [
        'Address underlying issues',
        'Improve organizational efficiency',
        'Reduce operational costs',
        'Enhance process effectiveness',
        'Drive sustainable improvements'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
      color: '#F59E0B'
    },
    {
      id: 'trustframe',
      icon: '/assets/images/diagnostics-suite/trustframe.svg',
      title: 'TrustFrame Audit',
      description: 'Trust, Transparency & Feedback Culture Mapping',
      features: [
        'Trust level assessment',
        'Transparency evaluation',
        'Feedback culture analysis',
        'Communication effectiveness',
        'Relationship quality measurement'
      ],
      benefits: [
        'Build stronger relationships',
        'Improve communication',
        'Enhance transparency',
        'Foster trust culture',
        'Strengthen feedback loops'
      ],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      color: '#EF4444'
    },
    {
      id: 'align',
      icon: '/assets/images/diagnostics-suite/alignaudit.svg',
      title: 'AlignAudit',
      description: 'Culture, Behavior & Experience Alignment Scan',
      features: [
        'Alignment assessment',
        'Behavioral consistency analysis',
        'Experience mapping',
        'Cultural coherence evaluation',
        'Integration effectiveness'
      ],
      benefits: [
        'Improve organizational coherence',
        'Enhance employee experience',
        'Strengthen cultural alignment',
        'Optimize behavioral consistency',
        'Drive unified performance'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
      color: '#EC4899'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const selectedToolData = diagnosticTools.find(tool => tool.id === selectedTool);

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#6C5CE7' }}>
            Advanced Organizational Diagnostics Suite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Unlock the power of comprehensive organizational insights with our cutting-edge diagnostic tools. 
            Discover hidden patterns, optimize performance, and drive sustainable growth.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact-us"
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {diagnosticTools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
              onClick={() => setSelectedTool(tool.id)}
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
            >
              {/* Tool Header */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ backgroundColor: tool.color }}
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-4 shadow-lg">
                    <img
                      src={tool.icon}
                      alt={`${tool.title} icon`}
                      className="w-16 h-16"
                    />
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTool === tool.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                >
                  <span className="text-white text-lg font-semibold">Learn More</span>
                </motion.div>
              </div>

              {/* Tool Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{tool.title}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                
                {/* Features Preview */}
                <div className="space-y-2">
                  {tool.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Tool Modal */}
        <AnimatePresence>
          {selectedTool && selectedToolData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedTool(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div 
                  className="h-64 relative overflow-hidden rounded-t-2xl"
                  style={{ backgroundColor: selectedToolData.color }}
                >
                  <img
                    src={selectedToolData.image}
                    alt={selectedToolData.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="bg-white rounded-full p-6 shadow-lg inline-block mb-4">
                        <img
                          src={selectedToolData.icon}
                          alt={`${selectedToolData.title} icon`}
                          className="w-20 h-20"
                        />
                      </div>
                      <h2 className="text-3xl font-bold mb-2">{selectedToolData.title}</h2>
                      <p className="text-xl opacity-90">{selectedToolData.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTool(null)}
                    className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
                  >
                    ×
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h3>
                      <div className="space-y-4">
                        {selectedToolData.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div 
                              className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0"
                              style={{ backgroundColor: selectedToolData.color }}
                            ></div>
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">Benefits</h3>
                      <div className="space-y-4">
                        {selectedToolData.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start"
                          >
                            <div 
                              className="w-3 h-3 rounded-full mr-4 mt-2 flex-shrink-0"
                              style={{ backgroundColor: selectedToolData.color }}
                            ></div>
                            <span className="text-gray-700">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="mt-12 text-center">
                    <Link
                      to="/contact-us"
                      className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-12 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how our Advanced Organizational Diagnostics Suite can help you unlock your organization's full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </PageBackground>
  );
};

export default DiagnosticsSuitePage; 