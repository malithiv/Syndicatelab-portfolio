import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/WorkDetails.css';


const WorkDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch the project details
    const fetchProjectDetails = () => {
      setIsLoading(true);
      
      // Using the projects data from PortfolioSection.jsx
      // In a real application, this would be an API call
      const projects = [
        {
          id: 1,
          image: "src/assets/projectimg1.jpg",
          category: "Web Application",
          client: "Fintech Solutions Inc.",
          title: "Advanced Analytics Dashboard",
          description: "A comprehensive financial analytics platform with real-time data visualization, custom reporting, and predictive insights.",
          technologies: ["React", "Node.js", "D3.js", "AWS"],
          fullDescription: "This cutting-edge analytics dashboard provides financial institutions with powerful tools to visualize complex data sets, identify trends, and make data-driven decisions. The platform features customizable dashboards, interactive charts, and AI-powered forecasting.",
          challenge: "The client needed a solution that could handle massive amounts of financial data in real-time while providing intuitive visualizations accessible to non-technical stakeholders.",
          solution: "We developed a scalable architecture using AWS services for real-time data processing and a React frontend with D3.js for interactive visualizations. The solution includes custom algorithms for predictive analytics.",
          results: "The platform reduced report generation time by 85% and improved decision-making accuracy by 34% according to client metrics.",
          testimonial: {
            text: "The analytics dashboard has transformed how we process and interpret financial data. The intuitive interface and powerful features have become essential tools for our entire organization.",
            author: "Sarah Johnson",
            position: "CTO, Fintech Solutions Inc."
          },
          gallery: [
            "src/assets/project1-detail1.jpg",
            "src/assets/project1-detail2.jpg",
            "src/assets/project1-detail3.jpg",
            "src/assets/project1-detail4.jpg"
          ],
          timeline: "12 weeks",
          website: "https://example.com/project"
        },
        // Other projects with similar detailed information
        {
          id: 2,
          image: "src/assets/project-img2.jpg",
          category: "Mobile Application",
          client: "HealthCare Connect",
          title: "Telehealth Platform",
          description: "A HIPAA-compliant telehealth solution enabling secure video consultations, appointment scheduling, and medical record access.",
          technologies: ["React Native", "Firebase", "WebRTC", "FHIR API"]
        },
        {
          id: 3,
          image: "src/assets/project-img3.jpg",
          category: "AI Solution",
          client: "RetailTech Innovations",
          title: "Inventory Optimization System",
          description: "An AI-driven inventory management system that predicts demand patterns, reduces stockouts, and optimizes supply chain operations.",
          technologies: ["Python", "TensorFlow", "Computer Vision", "Cloud ML"]
        }
      ];
      
      // Find the project with the matching id
      const projectData = projects.find(p => p.id === parseInt(id));
      setProject(projectData);
      
      // Find related projects (same category or sharing technologies)
      if (projectData) {
        const related = projects
          .filter(p => p.id !== projectData.id)
          .filter(p => 
            p.category === projectData.category || 
            p.technologies.some(tech => projectData.technologies.includes(tech))
          )
          .slice(0, 2); // Limit to 2 related projects
        
        setRelatedProjects(related);
      }
      
      setIsLoading(false);
    };
    
    fetchProjectDetails();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="error-container">
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/#portfolio" className="btn btn-primary">Back to Portfolio</Link>
      </div>
    );
  }
  
  return (
    <div className="work-details-page">
      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-background"></div>
        <div className="container">
          <motion.div 
            className="work-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="work-category">{project.category}</div>
            <h1 className="work-title">{project.title}</h1>
            <p className="work-client">Client: <span>{project.client}</span></p>
          </motion.div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="work-overview">
        <div className="container">
          <div className="work-overview-grid">
            <motion.div 
              className="work-overview-image"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>
            
            <motion.div 
              className="work-overview-content"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="section-subtitle">Project Overview</h2>
              <p className="overview-description">{project.fullDescription || project.description}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <h4>Timeline</h4>
                  <p>{project.timeline || "8-12 weeks"}</p>
                </div>
                <div className="meta-item">
                  <h4>Category</h4>
                  <p>{project.category}</p>
                </div>
                <div className="meta-item">
                  <h4>Client</h4>
                  <p>{project.client}</p>
                </div>
              </div>
              
              {project.website && (
                <a href={project.website} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Visit Live Project
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Challenge & Solution Section */}
      <section className="work-challenge-solution">
        <div className="container">
          <div className="challenge-solution-grid">
            <motion.div 
              className="challenge-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>The Challenge</h3>
              <p>{project.challenge || "The client faced significant challenges with their existing systems, requiring a modern solution that could handle complex requirements while maintaining scalability and user experience."}</p>
            </motion.div>
            
            <motion.div 
              className="solution-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Our Solution</h3>
              <p>{project.solution || "We developed a custom solution tailored to the client's specific needs, leveraging the latest technologies to create a robust, scalable system that exceeded their expectations."}</p>
            </motion.div>
            
            <motion.div 
              className="results-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>The Results</h3>
              <p>{project.results || "The implemented solution delivered significant improvements in efficiency, user satisfaction, and business metrics, providing a substantial return on investment for the client."}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      {project.gallery && (
        <section className="work-gallery">
          <div className="container">
            <h2 className="section-title">Project <span className="text-accent">Gallery</span></h2>
            <div className="section-divider"></div>
            
            <motion.div 
              className="gallery-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {project.gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} - Image ${index + 1}`} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Technologies Section */}
      <section className="work-technologies">
        <div className="container">
          <h2 className="section-title">Technologies <span className="text-accent">Used</span></h2>
          <div className="section-divider"></div>
          
          <motion.div 
            className="technologies-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {project.technologies.map((tech, index) => (
              <div key={index} className="technology-card">
                <h3>{tech}</h3>
                <p>{getTechnologyDescription(tech)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="work-testimonial">
          <div className="container">
            <motion.div 
              className="testimonial-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 15.5304 9.78929 16.0391 9.41421 16.4142C9.03914 16.7893 8.53043 17 8 17H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              <p className="testimonial-text">{project.testimonial.text}</p>
              
              <div className="testimonial-author">
                <p className="author-name">{project.testimonial.author}</p>
                <p className="author-position">{project.testimonial.position}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="related-projects">
          <div className="container">
            <h2 className="section-title">Related <span className="text-accent">Projects</span></h2>
            <div className="section-divider"></div>
            
            <motion.div 
              className="related-projects-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {relatedProjects.map((project) => (
                <div key={project.id} className="related-project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-category">{project.category}</div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-client">{project.client}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-actions">
                      <Link to={`/work/${project.id}`} className="project-link">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="work-cta">
        <div className="container">
          <motion.div 
            className="cta-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="cta-title">Ready to start your project?</h2>
            <p className="cta-description">
              Let's discuss how we can help you achieve your business goals with a custom solution tailored to your needs.
            </p>
            <Link to="#contact" className="btn btn-primary">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper function to get technology descriptions
const getTechnologyDescription = (tech) => {
  const descriptions = {
    "React": "A JavaScript library for building user interfaces with component-based architecture.",
    "React Native": "A framework for building native mobile applications using React.",
    "Node.js": "A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side applications.",
    "D3.js": "A JavaScript library for producing dynamic, interactive data visualizations.",
    "AWS": "Amazon Web Services providing on-demand cloud computing platforms and APIs.",
    "Firebase": "A platform for developing mobile and web applications with real-time database capabilities.",
    "WebRTC": "Web Real-Time Communication technology enabling direct peer-to-peer communication.",
    "FHIR API": "Fast Healthcare Interoperability Resources standard for exchanging healthcare information.",
    "Python": "A high-level programming language known for its readability and versatility.",
    "TensorFlow": "An open-source machine learning library for developing and training ML models.",
    "Computer Vision": "A field of AI that enables computers to derive meaningful information from visual inputs.",
    "Cloud ML": "Machine learning services hosted on cloud platforms for building ML applications.",
    "Shopify": "An e-commerce platform for online stores and retail point-of-sale systems.",
    "Stripe": "A payment processing platform for internet businesses.",
    "IoT Sensors": "Internet of Things devices that collect and transmit data from the physical environment.",
    "Azure IoT": "Microsoft's Internet of Things service for connecting and monitoring IoT assets.",
    "Power BI": "A business analytics service by Microsoft for visualizing data and sharing insights.",
    "Kubernetes": "An open-source system for automating deployment and scaling of containerized applications.",
    "Microservices": "An architectural style that structures an application as a collection of services.",
    "CI/CD": "Continuous Integration and Continuous Deployment practices for automating software delivery."
  };
  
  return descriptions[tech] || "Cutting-edge technology used to deliver exceptional results.";
};

export default WorkDetails;