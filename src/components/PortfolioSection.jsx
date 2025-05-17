import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/PortfolioSection.css';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  
  const projects = [
    {
      id: 1,
      image: "/project-img1.jpg",
      category: "Web Application",
      client: "Fintech Solutions Inc.",
      title: "Advanced Analytics Dashboard",
      description: "A comprehensive financial analytics platform with real-time data visualization, custom reporting, and predictive insights.",
      technologies: ["React", "Node.js", "D3.js", "AWS"]
    },
    {
      id: 2,
      image: "/project-img2.jpg",
      category: "Mobile Application",
      client: "HealthCare Connect",
      title: "Telehealth Platform",
      description: "A HIPAA-compliant telehealth solution enabling secure video consultations, appointment scheduling, and medical record access.",
      technologies: ["React Native", "Firebase", "WebRTC", "FHIR API"]
    },
    {
      id: 3,
      image: "/project-img3.jpg",
      category: "AI Solution",
      client: "RetailTech Innovations",
      title: "Inventory Optimization System",
      description: "An AI-driven inventory management system that predicts demand patterns, reduces stockouts, and optimizes supply chain operations.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Cloud ML"]
    },
    {
      id: 4,
      image: "/project-img4.jpg",
      category: "E-Commerce",
      client: "FashionForward",
      title: "Omnichannel Shopping Experience",
      description: "A seamless shopping platform that integrates online and in-store experiences with personalized recommendations.",
      technologies: ["Shopify", "React", "Node.js", "Stripe"]
    },
    {
      id: 5,
      image: "/project-img5.jpg",
      category: "IoT Solution",
      client: "Smart Building Systems",
      title: "Connected Building Management",
      description: "An IoT ecosystem for commercial buildings that monitors energy usage, occupancy, and maintenance needs in real-time.",
      technologies: ["IoT Sensors", "Azure IoT", "React", "Power BI"]
    },
    {
      id: 6,
      image: "/project-img6.jpg",
      category: "Cloud Migration",
      client: "Global Logistics Corp",
      title: "Legacy System Modernization",
      description: "A complete digital transformation project migrating legacy systems to a modern, cloud-based architecture.",
      technologies: ["AWS", "Kubernetes", "Microservices", "CI/CD"]
    }
  ];
  
  const [filter, setFilter] = React.useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase().includes(filter.toLowerCase()));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="portfolio" className="portfolio-section" ref={ref}>
      <div className="portfolio-background"></div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our <span className="text-accent">Work</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Explore our portfolio of innovative solutions that have helped businesses across industries achieve digital excellence.
          </p>
        </motion.div>
        
        <motion.div 
          className="portfolio-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`filter-button ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-button ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI
          </button>
          <button 
            className={`filter-button ${filter === 'cloud' ? 'active' : ''}`}
            onClick={() => setFilter('cloud')}
          >
            Cloud
          </button>
        </motion.div>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-category">{project.category}</div>
              </div>
              
              <div className="project-content">
                <div className="project-client">{project.client}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-actions">
                  <a href={`#project-${project.id}`} className="project-link">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="portfolio-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="cta-title">Ready to start your project?</h3>
          <p className="cta-description">
            Let's discuss how we can help you achieve your business goals with a custom solution tailored to your needs.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;