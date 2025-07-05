import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageBackground from '@/components/shared/PageBackground';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      title: 'The Invisible Backpack: What Are You Carrying Emotionally?',
      date: 'May 12, 2025',
      author: 'Dr. Sarah Johnson',
      category: 'Mental Health',
      readTime: '5 min read',
      excerpt: 'Discover the unseen emotional weight we all carry — stress, memories, expectations — and how to gently release what no longer serves you.',
      content: 'Every day, we carry invisible backpacks filled with emotional weight. Some items are light and helpful, while others weigh us down without us even realizing it. This emotional baggage can manifest as stress, anxiety, or even physical symptoms. In this comprehensive guide, we explore the concept of emotional backpacks and provide practical strategies for identifying and releasing what no longer serves your well-being.',
      tags: ['Emotional Wellness', 'Stress Management', 'Self-Care', 'Mental Health']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
      title: 'Your Brain Is a Garden: What Are You Growing?',
      date: 'May 20, 2025',
      author: 'Dr. Michael Chen',
      category: 'Neuroscience',
      readTime: '7 min read',
      excerpt: 'Every thought you feed shapes your inner world — are you nurturing growth or letting self-doubt take root?',
      content: 'Your mind is like a garden where every thought is a seed. The thoughts you nurture grow into beliefs, habits, and ultimately shape your reality. Understanding this powerful metaphor can transform how you approach mental health and personal growth. Learn how to cultivate positive neural pathways and weed out negative thought patterns that may be holding you back.',
      tags: ['Neuroscience', 'Positive Psychology', 'Mindfulness', 'Personal Growth']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2070&auto=format&fit=crop',
      title: 'The Soundtrack of Your Mental Health: What\'s Playing in Your Head?',
      date: 'May 21, 2025',
      author: 'Dr. Emily Rodriguez',
      category: 'Mindfulness',
      readTime: '6 min read',
      excerpt: 'Your thoughts are like background music — always playing, often unnoticed, but deeply powerful.',
      content: 'Just as music can influence our mood and behavior, our internal dialogue creates a soundtrack that shapes our mental health. This article explores how to become aware of your mental soundtrack and learn to change the tune when it\'s not serving you. Discover practical techniques for cultivating a more positive and supportive inner voice.',
      tags: ['Mindfulness', 'Inner Dialogue', 'Self-Compassion', 'Mental Health']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
      title: 'Workplace Wellness: Building Resilience in High-Stress Environments',
      date: 'May 15, 2025',
      author: 'Dr. James Wilson',
      category: 'Workplace Wellness',
      readTime: '8 min read',
      excerpt: 'Learn how to thrive in demanding work environments while maintaining your mental health and well-being.',
      content: 'Modern workplaces can be breeding grounds for stress, burnout, and mental health challenges. This comprehensive guide provides evidence-based strategies for building resilience, managing workplace stress, and creating a healthier work-life balance. Discover how organizations and individuals can work together to foster mental wellness in the workplace.',
      tags: ['Workplace Wellness', 'Stress Management', 'Burnout Prevention', 'Leadership']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2068&auto=format&fit=crop',
      title: 'The Science of Sleep: How Quality Rest Transforms Mental Health',
      date: 'May 18, 2025',
      author: 'Dr. Lisa Thompson',
      category: 'Sleep & Wellness',
      readTime: '9 min read',
      excerpt: 'Explore the profound connection between sleep quality and mental health, and learn strategies for better rest.',
      content: 'Sleep is not just a passive state of rest—it\'s an active process that plays a crucial role in mental health, emotional regulation, and cognitive function. This article delves into the science behind sleep and mental health, offering practical tips for improving sleep quality and establishing healthy sleep habits.',
      tags: ['Sleep Science', 'Mental Health', 'Wellness', 'Habits']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
      title: 'Digital Detox: Reclaiming Your Mental Space in a Connected World',
      date: 'May 25, 2025',
      author: 'Dr. Alex Kim',
      category: 'Digital Wellness',
      readTime: '6 min read',
      excerpt: 'In our hyperconnected world, learn how to create healthy boundaries with technology for better mental health.',
      content: 'Technology has revolutionized our lives, but constant connectivity can take a toll on our mental health. This guide explores the concept of digital wellness and provides practical strategies for creating healthy relationships with technology. Learn how to use digital tools mindfully while protecting your mental space.',
      tags: ['Digital Wellness', 'Technology', 'Mindfulness', 'Mental Health']
    }
  ];

  const categories = ['All', 'Mental Health', 'Neuroscience', 'Mindfulness', 'Workplace Wellness', 'Sleep & Wellness', 'Digital Wellness'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#6C5CE7' }}>
            Latest from Refill Health
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover insights, research, and practical strategies for mental wellness, workplace health, and personal growth.
          </p>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80 px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {post.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Read More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-500 text-lg">
              No articles found matching your criteria.
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}
              className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Refill Health</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Get the latest insights on mental health, workplace wellness, and personal growth delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </PageBackground>
  );
};

export default BlogPage; 