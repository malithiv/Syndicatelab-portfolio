import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/ServicesSection.css';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const services = [
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //     </svg>
    //   ),
    //   title: "Web Development",
    //   description: "We create custom web applications and responsive websites using modern frameworks and cutting-edge technologies.",
    //   features: ["React & Vue.js", "Progressive Web Apps", "E-commerce Solutions", "Performance Optimization"]
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    //     </svg>
    //   ),
    //   title: "Mobile App Development",
    //   description: "We build native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
    //   features: ["iOS & Android Apps", "React Native", "Flutter", "App Store Optimization"]
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    //     </svg>
    //   ),
    //   title: "Cloud Solutions",
    //   description: "We design and implement scalable cloud infrastructure that optimizes performance, reliability, and cost-efficiency.",
    //   features: ["AWS & Azure", "Serverless Architecture", "DevOps Integration", "Cloud Migration"]
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    //     </svg>
    //   ),
    //   title: "AI Solutions",
    //   description: "We develop artificial intelligence and machine learning solutions that drive innovation and business intelligence.",
    //   features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
    //     </svg>
    //   ),
    //   title: "Data Analytics",
    //   description: "We transform raw data into actionable insights through advanced analytics, visualization, and reporting tools.",
    //   features: ["Business Intelligence", "Data Visualization", "Big Data Processing", "Custom Dashboards"]
    // },
    // {
    //   icon: (
    //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    //     </svg>
    //   ),
    //   title: "Cybersecurity",
    //   description: "We protect your digital assets with comprehensive security solutions that safeguard against evolving threats.",
    //   features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "Security Training"]
    // },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Center Service",
      description: "We provide professionally dedicated Call Center Support services which help us to keep your customers on track. Our Solution is one of the leading call center service providers and is consistently offering our services to our customers and maintaining a healthy relation with them.",
      features: ["Inbound Service", "Outbound Service", "Answering Service"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Data Entry Services",
      description: "We mainly focus at providing accurate and reliable data entry services to our customers with a short span of time & high quality standards. With 100% client retention ratio we are well successful in accomplishing the satisfaction of our customer.",
      features: ["Product Data Entry Services", "Invoice Data Entry Services", "Document Data Entry Services", "Image Data Entry Services", "Medical Data Entry Services"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Technical Support",
      description: "Technical support is the process where we provide support to your customers for their technical issues related to their electronic devices. Here our representatives provide answers to queries from your customers regarding the use and trouble-shooting of any equipment.",
      features: ["Service Desk Support", "Help Desk Support", "Technical Support"]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Customer Support",
      description: "Customer service is the main and most important part of any company. Providing best services to your customers will help you in maintaining the best image of your business in the market and among your customers. Our customer service team provides the effective and active support to your customers which helps to strengthen and customer relationship.",
      features: ["Direct Customer Support", "Product Related Customer Service", "Service Related Customer Service"]
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="services-background"></div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-accent">Services</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            We offer a comprehensive range of technology solutions to help businesses 
            innovate, scale, and thrive in today's digital landscape.
          </p>
        </motion.div>
        
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, featIndex) => (
                  <li key={featIndex} className="service-feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="service-action">
                <a href="#contact" className="service-link">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="arrow-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="cta-title">Looking for a custom solution?</h3>
          <p className="cta-description">
            We specialize in developing tailored solutions to meet your unique business needs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;