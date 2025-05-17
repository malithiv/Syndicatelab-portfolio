import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/TestimonialsSection.css';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO, FinanceHub Inc.",
      avatar: "/avatar-1.jpg",
      content: "Syndicate Digital Labs transformed our outdated systems into a streamlined digital platform that has dramatically improved our operational efficiency. Their team's technical expertise and strategic approach to problem-solving made them invaluable partners in our digital transformation journey.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Founder, TechStart",
      avatar: "/avatar-2.jpg",
      content: "Working with Syndicate Digital Labs was a game-changer for our startup. They helped us build an MVP that secured our next round of funding. Their ability to translate our vision into a robust, scalable solution exceeded our expectations.",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      position: "Director of Innovation, Healthcare Solutions",
      avatar: "/avatar-3.jpg",
      content: "The AI solution developed by Syndicate Digital Labs has revolutionized how we process patient data, leading to faster diagnoses and improved patient outcomes. Their deep understanding of both technology and healthcare challenges set them apart from other providers we've worked with.",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      position: "VP of E-commerce, RetailNow",
      avatar: "/avatar-4.jpg",
      content: "Our e-commerce platform redevelopment with Syndicate Digital Labs resulted in a 40% increase in conversion rates and a significant improvement in customer satisfaction scores. Their attention to UX details and performance optimization was impressive.",
      rating: 5
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section className="testimonials-section" ref={ref}>
      <div className="testimonials-background"></div>
      
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client <span className="text-accent">Testimonials</span></h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Hear what our clients have to say about their experience working with Syndicate Digital Labs.
          </p>
        </motion.div>
        
        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
            >
              <div className="testimonial-content">
                <div className="quote-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p className="testimonial-text">{testimonial.content}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="star-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="testimonials-brands"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="brands-title">Trusted by Leading Companies</h3>
          <div className="brands-grid">
            <div className="brand-logo">
              <img src="/brand-logo1.png" alt="Brand Logo" />
            </div>
            <div className="brand-logo">
              <img src="/brand-logo2.png" alt="Brand Logo" />
            </div>
            <div className="brand-logo">
              <img src="/brand-logo3.png" alt="Brand Logo" />
            </div>
            <div className="brand-logo">
              <img src="/brand-logo4.png" alt="Brand Logo" />
            </div>
            <div className="brand-logo">
              <img src="/brand-logo5.png" alt="Brand Logo" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;