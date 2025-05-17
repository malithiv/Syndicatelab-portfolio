import React from 'react';
import { motion } from 'framer-motion';
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image.jpg'; // Add a suitable image to assets

const HeroSection = () => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1, delay: 0.3, ease: "easeOut" }
    }
  };
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-blob"></div>
      <div className="hero-bg-grid"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Digital Excellence. <br/>
              <span className="hero-title-gradient">Transforming Ideas</span> into Reality
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial="hidden"
              animate="visible"
              variants={subtitleVariants}
            >
              Syndicate Digital Labs is a premier technology partner helping businesses innovate and 
              grow through cutting-edge digital solutions and strategic IT consulting.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <a href="#contact" className="btn btn-primary">
                Start Your Project
              </a>
              <a href="#portfolio" className="btn btn-outline">
                View Our Work
              </a>
            </motion.div>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">8+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-image"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <div className="hero-image-container">
              <div className="hero-image-border"></div>
              <img 
                src={heroImage} 
                alt="Syndicate Digital Labs Solutions" 
                className="hero-img"
              />
              <div className="hero-tech-stack">
                <div className="tech-badge">React</div>
                <div className="tech-badge">Node.js</div>
                <div className="tech-badge">AI</div>
                <div className="tech-badge">Cloud</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-line">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;