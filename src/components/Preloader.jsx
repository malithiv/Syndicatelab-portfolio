import React from 'react';
import { motion } from 'framer-motion';
import sdlLogo from '../assets/sdl-logo.png'; // Make sure to add the logo to assets folder
import '../styles/Preloader.css';

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            duration: 0.8 
          }}
        >
          <img src={sdlLogo} alt="Syndicate Digital Labs" className="preloader-logo" />
        </motion.div>
        
        <div className="preloader-spinner-container">
          <div className="preloader-spinner">
            <div className="preloader-spinner-dot dot-1"></div>
            <div className="preloader-spinner-dot dot-2"></div>
            <div className="preloader-spinner-dot dot-3"></div>
          </div>
        </div>
        
        <motion.p 
          className="preloader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading Experience
        </motion.p>
      </div>
    </div>
  );
};

export default Preloader;