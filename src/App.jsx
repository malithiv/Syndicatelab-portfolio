import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BlogPost from './components/BlogPost';
import './styles/App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(window.location.pathname);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Clean up
    return () => clearTimeout(timer);
  }, []);

  const handleRouteChange = () => {
    setLocation(window.location.pathname);
    window.scrollTo(0, 0);
  };

  return (
    <Router>
      {loading && <Preloader />}
      <div className="app-container">
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes key={location} onChange={handleRouteChange}>
            <Route path="/" element={
              <main className="main-content">
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <PortfolioSection />
                <TestimonialsSection />
                <TeamSection />
                <BlogSection />
                <ContactSection />
                <Footer />
              </main>
            } />
            <Route path="/blog/:id" element={
              <main className="main-content">
                <BlogPost />
                <Footer />
              </main>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;