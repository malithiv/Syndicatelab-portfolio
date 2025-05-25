import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/BlogPost.css';

// Mock blog data - in a real-world application, this would be fetched from an API
const blogData = [
  {
    id: 1,
    title: "The Future of AI in Business: Beyond the Hype",
    category: "Artificial Intelligence",
    author: "Alex Morgan",
    date: "May 10, 2023",
    image: "/blog-img1.jpg",
    readTime: "5 min read",
    content: `
      <p>Artificial Intelligence (AI) has been a buzzword in business technology for years, but we're now entering an era where the practical applications are beginning to match the hype. Companies across industries are moving beyond experimentation to implement AI solutions that drive genuine business value.</p>
      
      <h2>From Hype to Reality</h2>
      <p>In 2023, we're seeing a significant shift from theoretical AI applications to practical implementations that solve real business problems. Organizations are leveraging AI for everything from customer service automation to predictive maintenance in manufacturing facilities. The key difference between today's AI implementations and those of five years ago is the focus on measurable ROI rather than adopting AI simply for the sake of innovation.</p>
      
      <p>The democratization of AI tools has played a crucial role in this transition. With platforms offering pre-built models and no-code interfaces, businesses of all sizes can now implement AI solutions without requiring specialized data science teams. This accessibility has accelerated adoption across sectors that were previously slow to embrace AI technology.</p>
      
      <h2>Key Business Applications</h2>
      <p>Several AI applications are proving particularly valuable in today's business landscape:</p>
      
      <h3>1. Intelligent Process Automation</h3>
      <p>Beyond basic RPA (Robotic Process Automation), AI-enhanced process automation can handle complex workflows that require judgment and decision-making. These systems learn from human operators and continuously improve their performance over time.</p>
      
      <h3>2. Personalization at Scale</h3>
      <p>AI is enabling businesses to deliver highly personalized customer experiences without the prohibitive costs traditionally associated with customization. From e-commerce recommendations to content delivery, AI algorithms can analyze vast amounts of data to predict individual preferences with remarkable accuracy.</p>
      
      <h3>3. Advanced Forecasting</h3>
      <p>Machine learning models are revolutionizing forecasting across business functions. From sales projections to resource planning, these models can identify complex patterns in historical data to predict future trends more accurately than traditional statistical methods.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>Despite the progress, organizations implementing AI still face significant challenges:</p>
      
      <p><strong>Data Quality:</strong> AI systems are only as good as the data they're trained on. Many businesses struggle with fragmented, inconsistent, or incomplete data that limits AI effectiveness.</p>
      
      <p><strong>Integration Complexity:</strong> Connecting AI systems with existing enterprise software can be technically challenging and resource-intensive.</p>
      
      <p><strong>Ethical Considerations:</strong> As AI becomes more prevalent, businesses must navigate complex ethical questions around bias, privacy, and transparency.</p>
      
      <h2>Looking Ahead</h2>
      <p>In the coming years, we expect to see AI becoming increasingly embedded in core business operations rather than existing as standalone projects. The focus will shift from implementation to optimization as organizations work to maximize the value of their AI investments.</p>
      
      <p>The businesses that will gain the most competitive advantage won't necessarily be those with the most advanced AI technology, but rather those that most effectively integrate AI into their strategic objectives and operational workflows.</p>
      
      <p>At Syndicate Digital Labs, we're helping organizations navigate this transition by developing AI solutions that are practical, scalable, and aligned with business goals. The future of AI in business isn't about futuristic moonshots—it's about pragmatic applications that deliver real value today while building the foundation for more advanced capabilities tomorrow.</p>
    `,
    tags: ["Artificial Intelligence", "Business Strategy", "Technology Trends", "Digital Transformation"]
  },
  {
    id: 2,
    title: "Building Scalable Web Applications with Modern Architecture",
    category: "Web Development",
    author: "Sophia Chen",
    date: "April 28, 2023",
    image: "/blog-img2.jpg",
    readTime: "7 min read",
    content: `
      <p>In today's digital landscape, building applications that can scale effectively is no longer a luxury but a necessity. A well-architected web application can handle growth in users, data, and complexity without requiring complete rewrites or causing performance degradation. This article explores key architectural patterns and approaches for building truly scalable web applications.</p>
      
      <h2>Microservices vs. Monoliths</h2>
      <p>The debate between microservices and monolithic architectures continues, but the reality is that both approaches have their place depending on your specific requirements. Monoliths offer simplicity and are often the right choice for smaller applications or those in early stages of development. Microservices provide flexibility and independent scalability but introduce complexity in deployment and service communication.</p>
      
      <p>A pragmatic approach is to start with a well-designed monolith that uses clean architecture principles with clearly defined boundaries between components. This makes it easier to refactor into microservices later if needed. Remember, even companies like Amazon and Netflix started with monoliths before gradually transitioning to microservices as their needs evolved.</p>
      
      <h2>Statelessness and Horizontal Scaling</h2>
      <p>Building stateless services is fundamental to horizontal scalability. When application servers don't store session data locally, you can add more instances to handle increasing load without worrying about session consistency. This approach enables you to scale out rather than up, which is typically more cost-effective and reliable.</p>
      
      <p>Key strategies for maintaining statelessness include:</p>
      <ul>
        <li>Storing session data in distributed caches like Redis</li>
        <li>Using JWTs or similar mechanisms for authentication</li>
        <li>Implementing idempotent API designs</li>
        <li>Following RESTful principles with proper use of HTTP methods</li>
      </ul>
      
      <h2>Database Considerations</h2>
      <p>Database design often becomes the bottleneck in scaling applications. Several patterns can help address this challenge:</p>
      
      <h3>1. Database Sharding</h3>
      <p>Horizontal partitioning of data across multiple database instances can significantly improve performance for large datasets. Sharding requires careful planning of partition keys and strategies for handling cross-shard queries.</p>
      
      <h3>2. Read Replicas</h3>
      <p>For read-heavy applications, implementing read replicas can offload pressure from your primary database. This pattern works particularly well for content-based applications where data is read far more frequently than it's written.</p>
      
      <h3>3. CQRS Pattern</h3>
      <p>Command Query Responsibility Segregation separates read and write operations, allowing each to be optimized independently. This approach can be particularly effective when combined with event sourcing for complex domains.</p>
      
      <h2>Caching Strategies</h2>
      <p>Effective caching is perhaps the most immediate way to improve application scalability. A multi-tiered caching strategy might include:</p>
      
      <p><strong>Browser Caching:</strong> Proper HTTP cache headers can significantly reduce server load for static assets and even semi-dynamic content.</p>
      
      <p><strong>CDN Caching:</strong> Content Delivery Networks can cache assets closer to users, reducing latency and server load.</p>
      
      <p><strong>Application Caching:</strong> In-memory caches like Redis can store frequently accessed data, computed results, and session information.</p>
      
      <p><strong>Database Query Caching:</strong> Many databases offer query caching mechanisms that can be tuned for optimal performance.</p>
      
      <h2>Infrastructure as Code and DevOps</h2>
      <p>Scalable applications require not just good architecture but also robust operational practices. Infrastructure as Code (IaC) tools like Terraform, CloudFormation, or Pulumi enable consistent, version-controlled infrastructure deployment. Combined with CI/CD pipelines, these tools allow you to scale your operations alongside your application.</p>
      
      <h2>Conclusion</h2>
      <p>Building scalable web applications requires thoughtful consideration of architecture, infrastructure, and operational practices. The most successful approaches typically combine established patterns with pragmatic decision-making based on specific business requirements.</p>
      
      <p>At Syndicate Digital Labs, we help organizations design and implement scalable web architectures that balance immediate needs with long-term growth potential. By focusing on clean architecture, appropriate technology choices, and operational excellence, we build systems that can grow seamlessly with your business.</p>
    `,
    tags: ["Web Development", "Architecture", "Scalability", "Microservices", "Cloud Computing"]
  },
  {
    id: 3,
    title: "The Importance of UX Research in Product Development",
    category: "UX Design",
    author: "Marcus Johnson",
    date: "April 15, 2023",
    image: "/blog-img3.jpg",
    readTime: "6 min read",
    content: `
      <p>User Experience (UX) research is often sidelined in the rush to launch new products, but this oversight can lead to costly mistakes. Effective UX research isn't just about creating aesthetically pleasing interfaces; it's about developing deep insights into user needs, behaviors, and pain points that inform every aspect of product development.</p>
      
      <h2>The Cost of Skipping UX Research</h2>
      <p>Companies that bypass proper UX research often pay the price later. According to industry studies, fixing a usability problem after development is up to 100 times more expensive than addressing it during the design phase. Beyond the financial impact, poor UX design can damage brand reputation, increase customer support costs, and ultimately lead to product failure.</p>
      
      <p>The classic example of IBM's Finding 1:10:100 rule illustrates this concept well: it costs $1 to fix a problem in the design phase, $10 in development, and $100 after release. Despite this well-established principle, many organizations still treat UX research as an optional extra rather than a fundamental component of the product development process.</p>
      
      <h2>Integrating UX Research Throughout the Product Lifecycle</h2>
      <p>Effective UX research isn't a one-time activity but should be integrated throughout the entire product lifecycle:</p>
      
      <h3>1. Discovery Research</h3>
      <p>Before development begins, exploratory research helps identify user needs, market gaps, and potential opportunities. Methods include stakeholder interviews, competitive analysis, and contextual inquiry to understand the problem space thoroughly.</p>
      
      <h3>2. Concept Validation</h3>
      <p>Early concepts and prototypes should be tested with users to validate assumptions and refine directions. Low-fidelity prototypes and concept testing can provide critical insights before significant resources are invested in development.</p>
      
      <h3>3. Iterative Testing</h3>
      <p>Throughout development, ongoing usability testing helps refine the product. Techniques such as moderated testing, A/B testing, and unmoderated remote testing can identify usability issues that might not be apparent to the development team.</p>
      
      <h3>4. Post-Launch Evaluation</h3>
      <p>After launch, continued research helps understand how users interact with the product in real-world conditions. Analytics, user feedback, and follow-up studies can inform future iterations and improvements.</p>
      
      <h2>Choosing the Right Research Methods</h2>
      <p>UX research encompasses a wide range of methodologies, each appropriate for different stages and questions:</p>
      
      <p><strong>Qualitative Methods:</strong> Interviews, usability testing, and contextual inquiry provide rich insights into user thinking, behaviors, and needs. These approaches answer "why" and "how" questions that quantitative data cannot address.</p>
      
      <p><strong>Quantitative Methods:</strong> Surveys, analytics, and A/B testing provide numerical data that can validate hypotheses across larger user populations. These methods are particularly valuable for measuring performance and comparing design alternatives.</p>
      
      <p><strong>Hybrid Approaches:</strong> Many successful research strategies combine both qualitative and quantitative methods. For example, analytics might identify problem areas, which can then be explored through user interviews.</p>
      
      <h2>Overcoming Common Challenges</h2>
      <p>Organizations often face several challenges when implementing UX research:</p>
      
      <p><strong>Resource Constraints:</strong> Limited budgets and tight timelines can make comprehensive research seem unfeasible. The solution is often to start small with focused research questions and lightweight methods like guerrilla testing or remote unmoderated studies.</p>
      
      <p><strong>Stakeholder Skepticism:</strong> Decision-makers may not understand the value of UX research. Demonstrating ROI through case studies and early wins can help build support over time.</p>
      
      <p><strong>Research Integration:</strong> Findings from UX research need to be effectively communicated and integrated into development processes. Close collaboration between researchers, designers, and developers is essential.</p>
      
      <h2>Building a Research-Driven Culture</h2>
      <p>The most successful product companies don't just conduct UX research; they build cultures where user insights drive decision-making at all levels. This requires:</p>
      
      <p><strong>Leadership Support:</strong> Executive champions who understand and advocate for the value of UX research.</p>
      
      <p><strong>Integrated Processes:</strong> Research activities that are built into product development workflows rather than added as an afterthought.</p>
      
      <p><strong>Shared Ownership:</strong> A mindset where everyone in the organization feels responsibility for understanding users, not just dedicated researchers.</p>
      
      <h2>Conclusion</h2>
      <p>UX research is not a luxury or a nice-to-have; it's a critical component of successful product development. By investing in understanding users early and continuously throughout the product lifecycle, organizations can create solutions that truly meet user needs, reduce development costs, and build products that stand out in increasingly competitive markets.</p>
      
      <p>At Syndicate Digital Labs, we integrate UX research into every aspect of our product development process, ensuring that the solutions we build are not just technically sound but also deliver exceptional user experiences that drive adoption and satisfaction.</p>
    `,
    tags: ["UX Design", "User Research", "Product Development", "Design Thinking"]
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  const contentRef = useRef(null);
  
  useEffect(() => {
    // Simulate fetching data
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      const postId = parseInt(id);
      const foundPost = blogData.find(post => post.id === postId);
      
      if (foundPost) {
        setPost(foundPost);
        
        // Find related posts (different from current post, same category or shared tags)
        const related = blogData
          .filter(item => item.id !== postId)
          .filter(item => 
            item.category === foundPost.category || 
            item.tags.some(tag => foundPost.tags.includes(tag))
          )
          .slice(0, 2);
        
        setRelatedPosts(related);
      }
      
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  // Set up reading progress for scroll indicator
  const [readingProgress, setReadingProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const element = contentRef.current;
      const totalHeight = element.scrollHeight - element.clientHeight;
      const windowScrollTop = window.scrollY - element.offsetTop;
      
      if (windowScrollTop >= 0) {
        const scrolled = Math.min(100, Math.max(0, (windowScrollTop / totalHeight) * 100));
        setReadingProgress(scrolled);
      } else {
        setReadingProgress(0);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="spinner"></div>
        <p>Loading article...</p>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/blog')} 
          className="btn btn-primary"
        >
          Back to Blog
        </button>
      </div>
    );
  }
  
  return (
    <div className="blog-post-page" ref={contentRef}>
      <div className="reading-progress-bar" style={{ width: `${readingProgress}%` }}></div>
      
      <div className="blog-post-hero">
        <img src={post.image} alt={post.title} className="blog-post-hero-image" />
        <div className="blog-post-hero-overlay"></div>
        <div className="container">
          <motion.div 
            className="blog-post-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="blog-post-category">{post.category}</div>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-meta">
              <div className="blog-post-author">By {post.author}</div>
              <div className="blog-post-date">{post.date}</div>
              <div className="blog-post-read-time">{post.readTime}</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="blog-post-container">
        <div className="container">
          <div className="blog-post-layout">
            <motion.div 
              className="blog-post-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></motion.div>
            
            <div className="blog-post-sidebar">
              <div className="blog-post-share">
                <h3>Share This Article</h3>
                <div className="share-buttons">
                  <a href="#" className="share-button" aria-label="Share on Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                  </a>
                  <a href="#" className="share-button" aria-label="Share on Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                    </svg>
                  </a>
                  <a href="#" className="share-button" aria-label="Share on LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="blog-post-tags">
                <h3>Tags</h3>
                <div className="tag-list">
                  {post.tags.map((tag, index) => (
                    <a key={index} href="#" className="tag">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
              
              {relatedPosts.length > 0 && (
                <div className="blog-post-related">
                  <h3>Related Articles</h3>
                  <div className="related-posts">
                    {relatedPosts.map((relatedPost) => (
                      <a 
                        key={relatedPost.id} 
                        href={`/blog/${relatedPost.id}`} 
                        className="related-post-card"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(`/blog/${relatedPost.id}`);
                        }}
                      >
                        <div className="related-post-image">
                          <img src={relatedPost.image} alt={relatedPost.title} />
                        </div>
                        <div className="related-post-content">
                          <h4>{relatedPost.title}</h4>
                          <span className="related-post-date">{relatedPost.date}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="blog-post-navigation">
            <button 
              onClick={() => navigate('/blog')} 
              className="btn btn-outline blog-back-button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
              Back to Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;