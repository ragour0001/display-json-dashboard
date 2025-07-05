import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

interface BlogPost {
  id: number;
  image: string;
  title: string;
  date: string;
  author: string;
  authorAvatar: string;
  authorBio: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  tags: string[];
  relatedPosts: number[];
}

const BlogPostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data - in a real app, this would come from an API
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop',
      title: 'The Invisible Backpack: What Are You Carrying Emotionally?',
      date: 'May 12, 2025',
      author: 'Dr. Sarah Johnson',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2070&auto=format&fit=crop',
      authorBio: 'Dr. Sarah Johnson is a licensed clinical psychologist with over 15 years of experience in mental health. She specializes in stress management, emotional wellness, and workplace mental health.',
      category: 'Mental Health',
      readTime: '5 min read',
      excerpt: 'Discover the unseen emotional weight we all carry — stress, memories, expectations — and how to gently release what no longer serves you.',
      content: `
        <p>Every day, we carry invisible backpacks filled with emotional weight. Some items are light and helpful, while others weigh us down without us even realizing it. This emotional baggage can manifest as stress, anxiety, or even physical symptoms.</p>
        
        <h2>Understanding Your Emotional Backpack</h2>
        <p>Your emotional backpack contains everything from childhood experiences to recent workplace stress. It includes:</p>
        <ul>
          <li>Unresolved conflicts and misunderstandings</li>
          <li>Expectations from family, friends, and society</li>
          <li>Past traumas and difficult experiences</li>
          <li>Self-imposed pressure and perfectionism</li>
          <li>Fear of failure and rejection</li>
        </ul>
        
        <h2>How to Lighten Your Load</h2>
        <p>Here are practical strategies to identify and release emotional weight:</p>
        
        <h3>1. Practice Self-Awareness</h3>
        <p>Take time each day to check in with yourself. Ask: "What am I carrying today that I don't need?"</p>
        
        <h3>2. Set Healthy Boundaries</h3>
        <p>Learn to say no to things that drain your energy and yes to what truly matters to you.</p>
        
        <h3>3. Practice Forgiveness</h3>
        <p>Forgive yourself and others. Holding onto resentment only adds weight to your backpack.</p>
        
        <h3>4. Seek Professional Support</h3>
        <p>Sometimes we need help unpacking our emotional baggage. Therapy can provide the tools and support you need.</p>
        
        <h2>The Power of Letting Go</h2>
        <p>When you release what no longer serves you, you create space for joy, peace, and new possibilities. Remember, you don't have to carry everything alone.</p>
      `,
      tags: ['Emotional Wellness', 'Stress Management', 'Self-Care', 'Mental Health'],
      relatedPosts: [2, 3, 4]
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop',
      title: 'Your Brain Is a Garden: What Are You Growing?',
      date: 'May 20, 2025',
      author: 'Dr. Michael Chen',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      authorBio: 'Dr. Michael Chen is a neuroscientist and mindfulness expert who combines cutting-edge brain research with ancient wisdom practices.',
      category: 'Neuroscience',
      readTime: '7 min read',
      excerpt: 'Every thought you feed shapes your inner world — are you nurturing growth or letting self-doubt take root?',
      content: `
        <p>Your mind is like a garden where every thought is a seed. The thoughts you nurture grow into beliefs, habits, and ultimately shape your reality.</p>
        
        <h2>The Science of Neuroplasticity</h2>
        <p>Your brain is constantly changing and adapting based on your thoughts, experiences, and behaviors. This phenomenon is called neuroplasticity.</p>
        
        <h2>What Are You Planting?</h2>
        <p>Every thought you have creates neural pathways in your brain. Positive thoughts strengthen positive pathways, while negative thoughts strengthen negative ones.</p>
        
        <h2>How to Cultivate a Healthy Mental Garden</h2>
        <ul>
          <li>Practice gratitude daily</li>
          <li>Challenge negative thoughts</li>
          <li>Surround yourself with positive influences</li>
          <li>Engage in activities that bring you joy</li>
          <li>Practice mindfulness and meditation</li>
        </ul>
      `,
      tags: ['Neuroscience', 'Positive Psychology', 'Mindfulness', 'Personal Growth'],
      relatedPosts: [1, 3, 5]
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2070&auto=format&fit=crop',
      title: 'The Soundtrack of Your Mental Health: What\'s Playing in Your Head?',
      date: 'May 21, 2025',
      author: 'Dr. Emily Rodriguez',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
      authorBio: 'Dr. Emily Rodriguez is a clinical psychologist specializing in cognitive behavioral therapy and mindfulness-based interventions.',
      category: 'Mindfulness',
      readTime: '6 min read',
      excerpt: 'Your thoughts are like background music — always playing, often unnoticed, but deeply powerful.',
      content: `
        <p>Just as music can influence our mood and behavior, our internal dialogue creates a soundtrack that shapes our mental health.</p>
        
        <h2>Becoming Aware of Your Mental Soundtrack</h2>
        <p>The first step is to notice what's playing in your head. Are you hearing encouraging, supportive messages, or critical, negative ones?</p>
        
        <h2>Changing the Tune</h2>
        <p>Once you're aware of your mental soundtrack, you can begin to change it. Here are some techniques:</p>
        <ul>
          <li>Practice self-compassion</li>
          <li>Use positive affirmations</li>
          <li>Challenge negative thoughts</li>
          <li>Practice mindfulness meditation</li>
        </ul>
      `,
      tags: ['Mindfulness', 'Inner Dialogue', 'Self-Compassion', 'Mental Health'],
      relatedPosts: [1, 2, 4]
    }
  ];

  const currentPost = blogPosts.find(post => post.id === parseInt(id || '1'));
  const relatedPosts = blogPosts.filter(post => 
    currentPost?.relatedPosts.includes(post.id)
  );

  if (!currentPost) {
    return (
      <PageBackground backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </PageBackground>
    );
  }

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
        >
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={currentPost.image}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {currentPost.category}
              </span>
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                {currentPost.title}
              </h1>
              <div className="flex items-center text-white/90 text-sm">
                <span>{currentPost.date}</span>
                <span className="mx-2">•</span>
                <span>{currentPost.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Author Info */}
            <div className="flex items-center mb-8 pb-8 border-b border-gray-200">
              <img
                src={currentPost.authorAvatar}
                alt={currentPost.author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{currentPost.author}</h3>
                <p className="text-gray-600 text-sm">{currentPost.authorBio}</p>
              </div>
            </div>

            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: currentPost.content }}
            />

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {currentPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-white text-center"
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

export default BlogPostDetailPage; 