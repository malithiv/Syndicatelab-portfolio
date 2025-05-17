import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/BlogSection.css';

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Beyond the Hype",
      excerpt: "Explore how artificial intelligence is moving beyond buzzwords to deliver real business value across industries and what to expect in the coming years.",
      category: "Artificial Intelligence",
      author: "Alex Morgan",
      date: "May 10, 2023",
      image: "/blog-img1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Modern Architecture",
      excerpt: "Learn key architectural approaches for creating web applications that can scale to millions of users while maintaining performance and reliability.",
      category: "Web Development",
      author: "Sophia Chen",
      date: "April 28, 2023",
      image: "/blog-img2.jpg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Importance of UX Research in Product Development",
      excerpt: "Discover why user experience research is a critical component of successful product development and how to implement it effectively in your process.",
      category: "UX Design",
      author: "Marcus Johnson",
      date: "April 15, 2023",
      image: "/blog-img3.jpg",
      readTime: "6 min read"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section id="blog" className="blog-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Latest <span className="text-accent">Insights</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Stay updated with our latest articles, tutorials, and insights on technology and digital innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogPosts.map((post) => (
            <motion.article 
              key={post.id}
              className="blog-card"
              variants={itemVariants}
            >
              <div className="blog-card-inner">
                <Link to={`/blog/${post.id}`} className="blog-image-link">
                  <div className="blog-image-wrapper">
                    <img src={post.image} alt={post.title} className="blog-image" />
                    <div className="blog-category">{post.category}</div>
                  </div>
                </Link>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} className="blog-title-link">
                    <h3 className="blog-title">{post.title}</h3>
                  </Link>
                  
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-footer">
                    <div className="blog-author">
                      <span className="author-by">By</span>
                      <span className="author-name">{post.author}</span>
                    </div>
                    
                    <Link to={`/blog/${post.id}`} className="blog-read-more">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
        
        <motion.div 
          className="blog-view-all"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;