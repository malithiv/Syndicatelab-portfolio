import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/AboutSection.css';
import aboutImage from '../assets/about-image.jpg'; // Add this to your assets

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  const [activeTab, setActiveTab] = useState('mission');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-accent">Us</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Learn about our journey, mission, and the values that drive us to create exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="about-content">
          <motion.div 
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-image-wrapper">
              <img src={aboutImage} alt="Syndicate Digital Labs Team" className="about-image" />
              <div className="about-image-shape"></div>
            </div>
            <div className="about-experience">
              <div className="experience-years">8+</div>
              <div className="experience-text">Years of<br/>Experience</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-tabs">
              <button 
                className={`about-tab ${activeTab === 'mission' ? 'active' : ''}`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button 
                className={`about-tab ${activeTab === 'story' ? 'active' : ''}`}
                onClick={() => setActiveTab('story')}
              >
                Our Story
              </button>
              <button 
                className={`about-tab ${activeTab === 'values' ? 'active' : ''}`}
                onClick={() => setActiveTab('values')}
              >
                Our Values
              </button>
            </div>
            
            <div className="about-tab-content">
              {activeTab === 'mission' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="about-subtitle">Driving Digital Transformation</h3>
                  <p className="about-description">
                    At Syndicate Digital Labs, our mission is to empower businesses through technology, 
                    creating innovative digital solutions that solve complex problems and drive growth. 
                    We're dedicated to delivering excellence in every project, combining technical expertise 
                    with strategic thinking to help our clients thrive in the digital landscape.
                  </p>
                  <p className="about-description">
                    We believe in building lasting partnerships with our clients, understanding their unique 
                    challenges, and crafting tailored solutions that exceed expectations. Our goal is to be 
                    more than just a service provider – we aim to be a trusted technology partner that helps 
                    businesses achieve their full potential.
                  </p>
                  <div className="mission-highlights">
                    <div className="mission-highlight-item">
                      <div className="highlight-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="highlight-text">Innovative Solutions</div>
                    </div>
                    <div className="mission-highlight-item">
                      <div className="highlight-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div className="highlight-text">Trusted Partnership</div>
                    </div>
                    <div className="mission-highlight-item">
                      <div className="highlight-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div className="highlight-text">Global Expertise</div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'story' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="about-subtitle">Our Journey</h3>
                  <p className="about-description">
                    Syndicate Digital Labs was founded in 2015 by a group of passionate technologists 
                    with a shared vision: to create a digital agency that prioritizes quality, innovation, 
                    and client success. Starting with a small team of five developers, we've grown into a 
                    full-service digital solutions provider with over 50 experts across design, development, 
                    and strategy.
                  </p>
                  <p className="about-description">
                    Throughout our journey, we've stayed true to our core belief that technology should 
                    solve real problems and create meaningful impact. We've partnered with businesses 
                    ranging from innovative startups to established enterprises, helping them navigate 
                    the complexities of digital transformation and achieve remarkable results.
                  </p>
                  <div className="story-timeline">
                    <div className="timeline-item">
                      <div className="timeline-year">2015</div>
                      <div className="timeline-content">Founded in San Francisco</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2018</div>
                      <div className="timeline-content">Expanded service offerings</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2020</div>
                      <div className="timeline-content">Opened international offices</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-year">2023</div>
                      <div className="timeline-content">Launched AI solutions division</div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === 'values' && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="about-subtitle">Core Principles</h3>
                  <p className="about-description">
                    Our values are the foundation of everything we do at Syndicate Digital Labs. 
                    They guide our decision-making, shape our culture, and define how we interact 
                    with our clients and each other.
                  </p>
                  
                  <div className="values-grid">
                    <div className="value-card">
                      <div className="value-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h4 className="value-card-title">Innovation</h4>
                      <p className="value-card-text">We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
                    </div>
                    <div className="value-card">
                      <div className="value-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="value-card-title">Collaboration</h4>
                      <p className="value-card-text">We believe in the power of teamwork, both internally and with our clients.</p>
                    </div>
                    <div className="value-card">
                      <div className="value-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <h4 className="value-card-title">Excellence</h4>
                      <p className="value-card-text">We're committed to delivering the highest quality in everything we do.</p>
                    </div>
                    <div className="value-card">
                      <div className="value-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="value-card-title">Adaptability</h4>
                      <p className="value-card-text">We embrace change and continuously evolve to stay ahead in a dynamic industry.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;