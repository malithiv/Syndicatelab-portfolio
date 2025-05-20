import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServiceDetailPage from './components/ServiceDetailPage';
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
  
  // Update location when route changes
  useEffect(() => {
    const handleLocationChange = () => {
      setLocation(window.location.pathname);
      window.scrollTo(0, 0);
    };

    // Listen for route changes
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <Router>
      {loading && <Preloader />}
      <div className="app-container">
        <NavBar />
        <AnimatePresence mode="wait">
          <Routes key={location}>
            {/* Home Page Route */}
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
            
            {/* Service Detail Page Route */}
            <Route path="/services/:serviceId" element={
              <main className="main-content">
                <ServiceDetailPage />
                <Footer />
              </main>
            } />
            
            {/* Blog Post Route */}
            <Route path="/blog/:id" element={
              <main className="main-content">
                <BlogPost />
                <Footer />
              </main>
            } />
            
            {/* Services Page Route (if you want a separate services page) */}
            <Route path="/services" element={
              <main className="main-content">
                <ServicesSection />
                <Footer />
              </main>
            } />

            {/* Contact Page Route (for the "Discuss Your Project" link) */}
            <Route path="/contact" element={
              <main className="main-content">
                <ContactSection />
                <Footer />
              </main>
            } />
            
            {/* 404 Route - Redirect to home or show a Not Found page */}
            <Route path="*" element={
              <main className="main-content">
                <div className="not-found-container">
                  <h1>Page Not Found</h1>
                  <p>The page you are looking for does not exist.</p>
                </div>
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