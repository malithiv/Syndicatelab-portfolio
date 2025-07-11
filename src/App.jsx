import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServiceDetailPage from './components/ServiceDetailPage';
import PortfolioSection from './components/PortfolioSection';
import WorkDetails from './components/WorkDetails';
import TestimonialsSection from './components/TestimonialsSection';
import TeamSection from './components/TeamSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BlogPost from './components/BlogPost';
import './styles/App.css';
import WhyChooseUsSection from './components/WhyChooseUsSection'


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
                <WhyChooseUsSection/>
                <PortfolioSection />
                <TestimonialsSection />
                <TeamSection />
                <BlogSection />
                <ContactSection />
                <Footer />
              </main>
            } />
            
            {/* About Page Route */}
            <Route path="/about" element={
              <main className="main-content">
                <AboutSection />
                <Footer />
              </main>
            } />
            
            {/* Services Page Route */}
            <Route path="/services" element={
              <main className="main-content">
                <ServicesSection />
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
            
            {/* Work/Portfolio Page Route */}
            <Route path="/work" element={
              <main className="main-content">
                <PortfolioSection />
                <Footer />
              </main>
            } />
            
            {/* Work Detail Page Route */}
            <Route path="/work/:id" element={
              <main className="main-content">
                <WorkDetails/>
                <Footer />
              </main>
            } />
            
            {/* Team Page Route */}
            <Route path="/team" element={
              <main className="main-content">
                <TeamSection />
                <Footer />
              </main>
            } />
            
            {/* Blog/Insights Page Route */}
            <Route path="/blog" element={
              <main className="main-content">
                <BlogSection />
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
            
            {/* Contact Page Route */}
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