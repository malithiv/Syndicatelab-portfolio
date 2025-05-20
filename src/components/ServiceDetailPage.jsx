import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/ServiceDetailPage.css';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define service data - in a real app, this might come from an API
  const serviceData = {
    "call-center": {
      title: "Call Center Service",
      heroImage: "/images/services/call-center-hero.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      introduction: "Our professional Call Center Support services are designed to keep your customers engaged and satisfied. As a leading call center service provider, we consistently deliver exceptional customer experiences that build and maintain healthy client relationships.",
      features: [
        {
          title: "Inbound Service",
          description: "Our inbound call center service handles incoming customer inquiries, providing information, resolving issues, and processing orders with efficiency and professionalism.",
          icon: "phone-incoming"
        },
        {
          title: "Outbound Service",
          description: "Our outbound services proactively reach customers for telemarketing, lead generation, appointment setting, market research, and follow-up calls.",
          icon: "phone-outgoing"
        },
        {
          title: "Answering Service",
          description: "Our answering service ensures your business never misses a call, with 24/7 availability, message taking, call routing, and emergency dispatch capabilities.",
          icon: "message-circle"
        }
      ],
      benefits: [
        "24/7 availability to support your customers",
        "Multilingual support capabilities",
        "Reduced operational costs",
        "Scalable solutions to match your business needs",
        "Advanced call analytics and reporting",
        "Quality monitoring and continuous improvement"
      ],
      process: [
        {
          title: "Needs Assessment",
          description: "We begin by thoroughly understanding your business needs, customer demographics, and service expectations."
        },
        {
          title: "Custom Solution Design",
          description: "Our team creates a tailored call center solution aligned with your business objectives and customer service strategy."
        },
        {
          title: "Implementation",
          description: "We set up the necessary infrastructure, train our agents on your products/services, and establish workflow processes."
        },
        {
          title: "Quality Assurance",
          description: "Continuous monitoring and evaluation ensure consistent service excellence and customer satisfaction."
        },
        {
          title: "Optimization",
          description: "We analyze performance metrics and customer feedback to continuously improve and optimize our service delivery."
        }
      ],
      testimonials: [
        {
          quote: "Their call center services have transformed our customer support capabilities. Our satisfaction ratings have increased by 35% since we partnered with them.",
          author: "Sarah Johnson",
          company: "RetailMax Inc."
        },
        {
          quote: "The professionalism and efficiency of their call center team have been outstanding. They truly represent our brand as if they were our own employees.",
          author: "Michael Chen",
          company: "TechSolutions Group"
        }
      ],
      faqs: [
        {
          question: "How quickly can you implement call center services for our business?",
          answer: "Typically, we can set up and launch call center services within 2-4 weeks, depending on the complexity of your requirements. Our streamlined onboarding process ensures minimal disruption to your operations."
        },
        {
          question: "Can you handle seasonal fluctuations in call volume?",
          answer: "Yes, our services are fully scalable. We can quickly adjust staffing levels to accommodate seasonal peaks or sudden increases in call volume, ensuring consistent service quality regardless of demand."
        },
        {
          question: "How do you ensure quality control in your call center operations?",
          answer: "We implement a comprehensive quality control system that includes call monitoring, customer satisfaction surveys, performance metrics analysis, and regular agent training. This multi-faceted approach ensures consistent service excellence."
        },
        {
          question: "Can your agents represent multiple brands simultaneously?",
          answer: "Our agents are trained to seamlessly transition between different clients and brands. We ensure thorough training on each brand's voice, products, and policies to provide authentic representation."
        }
      ]
    },
    "data-entry": {
      title: "Data Entry Services",
      heroImage: "/images/services/data-entry-hero.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      introduction: "Our data entry services focus on providing accurate and reliable information processing with quick turnaround times and high quality standards. With our 100% client retention ratio, we've successfully earned the trust and satisfaction of our customers across various industries.",
      features: [
        {
          title: "Product Data Entry Services",
          description: "We provide comprehensive product data entry services, including catalog creation, product description writing, attribute entry, and SKU management for e-commerce and retail businesses.",
          icon: "shopping-bag"
        },
        {
          title: "Invoice Data Entry Services",
          description: "Our invoice data entry services include processing invoices, receipts, and financial documents with high accuracy to support your accounting and financial operations.",
          icon: "file-text"
        },
        {
          title: "Document Data Entry Services",
          description: "We convert physical documents into digital formats, organizing and indexing them for easy retrieval and management within your document management systems.",
          icon: "file"
        },
        {
          title: "Image Data Entry Services",
          description: "Our team extracts and processes data from images, charts, and graphs, converting visual information into structured, usable data formats.",
          icon: "image"
        },
        {
          title: "Medical Data Entry Services",
          description: "We offer specialized medical data entry services, including patient records, medical billing, and healthcare documentation with strict adherence to privacy regulations.",
          icon: "activity"
        }
      ],
      benefits: [
        "Cost-effective alternatives to in-house data processing",
        "Highly accurate data entry with multiple quality checks",
        "Quick turnaround times even for large volume projects",
        "Secure data handling procedures and confidentiality",
        "Scalable resources to accommodate varying workloads",
        "Advanced data validation techniques"
      ],
      process: [
        {
          title: "Project Analysis",
          description: "We analyze your data entry requirements, volume, and preferred formats to develop an appropriate approach."
        },
        {
          title: "Workflow Setup",
          description: "We establish efficient workflows and assign specialized teams based on your project's specific needs."
        },
        {
          title: "Data Processing",
          description: "Our trained professionals carefully input and process your data according to established procedures and quality standards."
        },
        {
          title: "Quality Assurance",
          description: "Multiple verification stages ensure data accuracy, with both automated and manual quality checks."
        },
        {
          title: "Delivery",
          description: "Processed data is delivered in your required format, with options for secure file transfer and integration."
        }
      ],
      testimonials: [
        {
          quote: "Their attention to detail and accuracy in data entry has been invaluable for our business. We've seen a significant reduction in errors since outsourcing to them.",
          author: "David Wilson",
          company: "Financial Services Inc."
        },
        {
          quote: "The team's ability to handle large volumes of product data with consistent quality has helped us scale our e-commerce operations efficiently.",
          author: "Jennifer Lopez",
          company: "GlobalMart"
        }
      ],
      faqs: [
        {
          question: "What accuracy rate can we expect for data entry services?",
          answer: "We maintain a minimum accuracy rate of 99.95% for all data entry projects through our multi-tiered quality control process. For critical projects, we can implement additional verification steps to achieve even higher accuracy."
        },
        {
          question: "How do you handle sensitive or confidential information?",
          answer: "We follow strict data security protocols, including NDAs with all staff, secure access controls, data encryption, and compliance with relevant regulations such as GDPR and HIPAA when applicable."
        },
        {
          question: "What is your typical turnaround time for data entry projects?",
          answer: "Turnaround times vary based on project complexity and volume. For standard projects, we typically process between 5,000-10,000 records per day. We can provide specific timelines after reviewing your project requirements."
        },
        {
          question: "Can you handle data in multiple languages?",
          answer: "Yes, we offer multilingual data entry services across major global languages. Our team includes language specialists who ensure accurate processing of content in various languages."
        }
      ]
    },
    "technical-support": {
      title: "Technical Support",
      heroImage: "/images/services/technical-support-hero.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      introduction: "Our technical support services provide comprehensive assistance for your customers' technology-related issues. Our skilled representatives offer solutions for troubleshooting, equipment usage, and system maintenance, ensuring your customers receive expert assistance whenever they need it.",
      features: [
        {
          title: "Service Desk Support",
          description: "Our service desk provides centralized support for incident management, service requests, and problem resolution with defined SLAs and escalation procedures.",
          icon: "clipboard"
        },
        {
          title: "Help Desk Support",
          description: "Our help desk offers front-line technical assistance for common issues, with multi-channel support options including phone, email, chat, and self-service portals.",
          icon: "headphones"
        },
        {
          title: "Technical Support",
          description: "We provide specialized technical troubleshooting and problem resolution for hardware, software, network issues, and system configurations.",
          icon: "tool"
        }
      ],
      benefits: [
        "Round-the-clock technical assistance",
        "Reduced resolution times for technical issues",
        "Escalation management for complex problems",
        "Detailed technical documentation and knowledge base development",
        "Regular reporting on support metrics and performance",
        "Continuous technical training and certification"
      ],
      process: [
        {
          title: "Technical Assessment",
          description: "We evaluate your technical environment, products, and common support scenarios to develop an effective support strategy."
        },
        {
          title: "Knowledge Transfer",
          description: "Our team undergoes comprehensive training on your technical products, systems, and support procedures."
        },
        {
          title: "Support Implementation",
          description: "We establish the necessary technical infrastructure, support channels, and incident management systems."
        },
        {
          title: "Quality Monitoring",
          description: "Ongoing evaluation of technical resolution accuracy, efficiency, and customer satisfaction ensures high-quality support."
        },
        {
          title: "Continuous Improvement",
          description: "We analyze support trends and common issues to develop proactive solutions and improve overall technical support effectiveness."
        }
      ],
      testimonials: [
        {
          quote: "Their technical support team has significantly reduced our average resolution time and improved our customer satisfaction rates. They consistently deliver expert support that our customers value.",
          author: "Robert Taylor",
          company: "CloudSystems Inc."
        },
        {
          quote: "The depth of technical knowledge their team possesses is impressive. They've been able to resolve complex issues that previously challenged our internal team.",
          author: "Amanda Lewis",
          company: "Digital Solutions Ltd."
        }
      ],
      faqs: [
        {
          question: "What levels of technical support do you offer?",
          answer: "We provide tiered technical support services, from Level 1 (basic troubleshooting and known issue resolution) through Level 3 (expert technical assistance for complex problems requiring in-depth analysis). Our support structure can be customized based on your product complexity and customer needs."
        },
        {
          question: "How do you handle technical support for new product releases?",
          answer: "We implement a comprehensive onboarding process for new products that includes advance training, documentation development, and knowledge base creation. Our technical team is prepared to support new releases before they reach your customers."
        },
        {
          question: "What technical certifications do your support staff hold?",
          answer: "Our technical support specialists hold various industry certifications including CompTIA A+, Network+, Security+, Microsoft certifications, Cisco certifications, and other product-specific credentials relevant to your technologies."
        },
        {
          question: "Can you support multiple technical platforms simultaneously?",
          answer: "Yes, our technical support team is cross-trained on various platforms including Windows, macOS, Linux, mobile operating systems, cloud services, and networking technologies. We can tailor our technical support structure to match your specific technology stack."
        }
      ]
    },
    "customer-support": {
      title: "Customer Support",
      heroImage: "/images/services/customer-support-hero.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      introduction: "Customer service is the cornerstone of any successful company. Our comprehensive customer support solutions help maintain your business's reputation in the market while strengthening relationships with your customers. Our dedicated team provides effective and responsive support that enhances customer satisfaction and loyalty.",
      features: [
        {
          title: "Direct Customer Support",
          description: "We provide personalized customer assistance across multiple channels, handling inquiries, addressing concerns, and ensuring positive customer experiences.",
          icon: "users"
        },
        {
          title: "Product Related Customer Service",
          description: "Our team offers specialized support for product information, usage guidance, troubleshooting, and warranty or return processing.",
          icon: "package"
        },
        {
          title: "Service Related Customer Service",
          description: "We handle service inquiries, subscription management, account assistance, and service troubleshooting to ensure customer satisfaction with your service offerings.",
          icon: "briefcase"
        }
      ],
      benefits: [
        "Enhanced customer satisfaction and loyalty",
        "Personalized customer interaction strategies",
        "Omnichannel support capabilities",
        "Customer feedback collection and analysis",
        "Proactive customer engagement",
        "Customer relationship management"
      ],
      process: [
        {
          title: "Customer Experience Analysis",
          description: "We assess your current customer service processes, identify improvement areas, and develop a tailored support strategy."
        },
        {
          title: "CX Training",
          description: "Our team receives comprehensive training on your products, services, and customer experience standards."
        },
        {
          title: "Support Channel Setup",
          description: "We establish effective customer support channels aligned with your customers' preferences and communication habits."
        },
        {
          title: "Satisfaction Monitoring",
          description: "Continuous evaluation of customer interactions, feedback, and satisfaction metrics guides our service quality."
        },
        {
          title: "Experience Enhancement",
          description: "We implement ongoing improvements to support processes based on customer feedback and performance analysis."
        }
      ],
      testimonials: [
        {
          quote: "Their customer support team has transformed our customer experience. The personalized approach and consistency have resulted in higher retention rates and increased customer lifetime value.",
          author: "Elizabeth Brown",
          company: "Lifestyle Brands Inc."
        },
        {
          quote: "The proactive approach to customer service has helped us identify and address potential issues before they affect our customers. Their team truly understands the value of preventative customer care.",
          author: "James Peterson",
          company: "ServicePro Ltd."
        }
      ],
      faqs: [
        {
          question: "What customer support channels do you offer?",
          answer: "We provide omnichannel customer support including phone, email, live chat, social media, SMS, and self-service knowledge bases. Our approach can be customized to include the channels most relevant to your customer base."
        },
        {
          question: "How do you measure customer satisfaction?",
          answer: "We use multiple metrics to measure customer satisfaction, including Net Promoter Score (NPS), Customer Satisfaction Score (CSAT), Customer Effort Score (CES), first contact resolution rates, and qualitative feedback analysis."
        },
        {
          question: "Can your customer support team handle emotional or difficult customers?",
          answer: "Absolutely. Our customer service representatives receive specialized training in emotional intelligence, de-escalation techniques, and handling challenging situations. We focus on turning difficult interactions into positive experiences."
        },
        {
          question: "How do you approach customers from different cultural backgrounds?",
          answer: "Our customer support team includes cultural awareness training as part of their core skills development. We can provide multilingual support and culturally appropriate communication strategies tailored to your global customer base."
        }
      ]
    }
  };

  useEffect(() => {
    // In a real app, this might be an API call
    const fetchServiceData = () => {
      setLoading(true);
      // Check if the service exists
      if (serviceData[serviceId]) {
        setService(serviceData[serviceId]);
      } else {
        // If service not found, redirect to services
        navigate('/services', { replace: true });
      }
      setLoading(false);
    };

    fetchServiceData();
  }, [serviceId, navigate]);

  // Loading state
  if (loading) {
    return (
      <div className="service-detail-loading">
        <div className="spinner"></div>
        <p>Loading service details...</p>
      </div>
    );
  }

  // Error state - service not found
  if (!service) {
    return (
      <div className="service-detail-error">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist or has been removed.</p>
        <Link to="/services" className="btn btn-primary">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <div className="service-detail-hero" style={{ backgroundImage: `url(${service.heroImage || '/images/services/default-hero.jpg'})` }}>
        <div className="container">
          <motion.div 
            className="service-detail-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="back-link">
              <svg xmlns="http://www.w3.org/2000/svg" className="back-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Services
            </Link>
            <div className="service-detail-icon-container">
              {service.icon}
            </div>
            <h1 className="service-detail-title">{service.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <section className="service-detail-section service-introduction">
        <div className="container">
          <motion.div
            className="service-detail-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="service-detail-intro">{service.introduction}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="service-detail-section service-features">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Key <span className="text-accent">Features</span></h2>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="features-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <div className="feature-icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" className="feature-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="service-detail-section service-benefits">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Key <span className="text-accent">Benefits</span></h2>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="benefits-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="benefit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="service-detail-section service-process">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our <span className="text-accent">Process</span></h2>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="process-timeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.process.map((step, index) => (
              <motion.div 
                key={index}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="service-detail-section service-testimonials">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Client <span className="text-accent">Testimonials</span></h2>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="testimonials-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <svg className="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.company}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="service-detail-section service-faqs">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Frequently Asked <span className="text-accent">Questions</span></h2>
            <div className="section-divider"></div>
          </motion.div>

          <motion.div 
            className="faqs-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {service.faqs.map((faq, index) => (
              <motion.div 
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-detail-section service-cta">
        <div className="container">
          <motion.div
            className="cta-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Ready to get started?</h2>
            <p className="cta-description">
              Contact us today to discuss how our {service.title} can help your business grow.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Explore Other Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;