import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import sdlLogo from '../assets/sdl-logo.png'; // Add this to your assets

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const navbarBackground = useTransform(
    scrollYProgress,
    [0, 0.05],
    ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.95)"]
  );
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <motion.div className="scroll-indicator" style={{ scaleX: scrollYProgress }} />
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={{ backgroundColor: navbarBackground }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container">
          <Link to="/" className="logo">
            <img src={sdlLogo} alt="Syndicate Digital Labs" className="logo-image" />
          </Link>
          
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link to="/work" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Work</Link>
            <Link to="/team" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Team</Link>
            <Link to="/blog" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
            <Link to="/contact" className="nav-link contact-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Get in Touch</span>
            </Link>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            <div className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;