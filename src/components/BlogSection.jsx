import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import '../styles/BlogSection.css';

const BlogSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const blogPosts = [
    {
      id: 1,
      image: "src/assets/blog-img1.jpg",
      date: "March 15, 2023",
      author: "Alex Mitchell",
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build and maintain software applications."
    },
    {
      id: 2,
      image: "src/assets/blog-img2.jpg",
      date: "February 22, 2023",
      author: "Sarah Johnson",
      title: "Building Scalable Web Applications with React and Vite",
      excerpt: "Learn the best practices for creating high-performance web applications using modern frontend technologies."
    },
    {
      id: 3,
      image: "src/assets/blog-img3.jpg",
      date: "February 10, 2023",
      author: "Michael Chen",
      title: "Securing Your Cloud Infrastructure: Essential Strategies",
      excerpt: "Discover effective approaches to protect your cloud-based applications and data from security threats."
    }
  ];

  return (
    <section id="blog" className="blog-section" ref={ref}>
      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Latest from our <span className="text-accent">Blog</span>
          </motion.h2>
          <motion.div 
            className="section-divider"
            initial={{ width: 0 }}
            animate={{ width: inView ? '5rem' : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="section-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Stay updated with our latest articles, tutorials, and insights on software development and technology trends.
          </motion.p>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: inView ? 1 : 0, 
                y: inView ? 0 : 30 
              }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + (index * 0.1) 
              }}
            >
              <div className="blog-image-container">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="blog-image"
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-author">By {post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="blog-read-more"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
