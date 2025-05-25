import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import WhyChooseUsSection from '../components/WhyChooseUsSection';

const HomePage = () => {
  return (
    <main className="main-content">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomePage;