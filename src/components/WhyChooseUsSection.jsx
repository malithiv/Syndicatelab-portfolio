import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const reasons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Offshore and Cost Effective Services",
      description: "We offer our clients with the best offshore call center outsourcing services in which we are specialized in. We often offer our clients with highly cost effective technique which keeps you connected with us."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Customer Support",
      description: "We understand the importance of our relation with each other, when we rise you also rise with us. We believe in creating best opportunities, therefore we also believe in creating a long term relation with our clients."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "24 x 7 x 365 Availability",
      description: "We offer services to our clients 24*7*365. Whenever you want any help our team will be present for your support."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Multi Lingual Support",
      description: "We also provide you Multi lingual support team so that it would be easy to meet your requirements."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "In House IT Team",
      description: "We also have our In house IT Tech team which includes our professional programmers, developers and our support team."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Low Price",
      description: "We have very affordable pricing and flexible payment plans."
    }
  ];
  
  const qualityCommitments = [
    "100% Accuracy",
    "On time delivery with quality check",
    "Daily monitoring on quality report",
    "Daily driven update",
    "Client escalation handling"
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section id="why-choose-us" className="why-choose-us-section" ref={ref}>
      <div className="background-pattern"></div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Why Choose <span className="text-accent">Us</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Syndicate Digital Labs (Pvt) Ltd delivers exceptional services with dedication to quality and client satisfaction
          </p>
        </motion.div>
        
        <motion.div 
          className="reasons-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="reason-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="reason-icon-container">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="company-profile">
          <motion.div
            className="profile-left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="company-info">
              <h3>COMPANY PROFILE</h3>
              <div className="profile-divider"></div>
              <p className="tagline">OUR QUALITY SERVICE TO OUR CLIENT IS OUR PRIORITY</p>
              <ul className="quality-commitments">
                {qualityCommitments.map((commitment, index) => (
                  <li key={index} className="commitment-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
              <div className="company-website">
                <a href="https://www.syndicatedl.com" target="_blank" rel="noopener noreferrer">
                  www.syndicatedl.com
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="profile-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="quality-visual">
              <div className="quality-circle">
                <div className="quality-inner">
                  <span className="quality-number">100%</span>
                  <span className="quality-text">Client Satisfaction</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
