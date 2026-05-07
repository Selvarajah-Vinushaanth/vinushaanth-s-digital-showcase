import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web', 'AI/ML', 'Games', 'Tools'];

const projects = [
  {
    title: 'Research Compass',
    description:
      'Research Compass is an AI-powered research assistant that helps upload papers, generate summaries and insights, chat with documents, analyze research, manage collections, cluster topics, compare papers, export citations, and search Google Scholar — all in a responsive, intuitive interface.',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'Hugging Face'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/research-bd',
    live: '#',
    featured: true,
  },
  {
    title: 'Talksy',
    description:
      'A real-time communication app supporting one-to-one and group chats, along with audio and video calling. Features direct messaging, group conversations, single and group audio/video calls — all in one seamless platform.',
    tech: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/Talksy-frontend',
    live: '#',
    featured: true,
  },
  {
    title: 'YOLOvFeed',
    description:
      'A real-time object detection and monitoring platform using YOLO technology. Features live streaming with accurate object recognition, customizable confidence levels, analytics dashboard, AI chat assistance, and cloud storage through Firebase.',
    tech: ['React', 'TypeScript', 'FastAPI', 'YOLO', 'WebSocket'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/YolovFeed',
    live: '#',
    featured: true,
  },
  {
    title: 'Interview Prep',
    description:
      'An AI-powered mock interview platform where users practice HR, technical, system design, and behavioral interviews. The AI evaluates responses and provides scoring, strengths, improvement areas, and question-by-question feedback.',
    tech: ['React', 'AI', 'Node.js', 'TypeScript'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/interview-ace-frontend',
    live: '#',
    featured: true,
  },
  {
    title: 'LegalEase',
    description:
      'An AI-driven solution for automated real estate document generation using multi-agent workflows and Google Gemini AI with structured JSON outputs. Features geo-aware compliance for U.S. states and a credit-based system with API tracking.',
    tech: ['Google Gemini', 'Multi-agent', 'Python', 'API'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/legalease-frontend',
    live: '#',
    featured: true,
  },
  {
    title: 'OmniControl Dashboard',
    description:
      'A React-based web dashboard for remote system administration, offering real-time monitoring of CPU, memory, network, and processes. Features interactive terminal, live screen previews, file management, and AI-driven system insights.',
    tech: ['React', 'System Admin', 'Real-time', 'AI'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/omni-system',
    live: '#',
    featured: true,
  },
  {
    title: 'AdaptLearn',
    description:
      'AdaptLearn is a full-stack AI-powered learning platform that generates personalized courses on any topic. It features adaptive quizzes, practice tasks evaluated by AI, spaced repetition for long-term retention, a skill dependency graph, daily challenges, an AI tutor chat, XP-based gamification with levels and streaks, and a community leaderboard — all adapting to each learner\'s unique progress.',
    tech: ['Next.js 14', 'FastAPI', 'PostgreSQL', 'Gemini AI', 'Docker'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/Adapt-Learn-FD',
    live: '#',
    featured: true,
  },
  {
    title: 'Smart Parking Camera System',
    description:
      'Built a real-time smart parking assistant that uses your smartphone as an IP webcam. The system continuously analyzes the camera feed to detect proximity, classifies risk into four zones, and fires instant audio alerts — all streamed live to a web dashboard. Sessions and alerts are logged automatically so you can review parking history and patterns over time.',
    tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Alembic', 'WebSocket', 'IP Webcam', 'OpenCV'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/ParkGuard',
    live: '#',
    featured: false,
  },
  {
    title: 'Semantic Image Search',
    description:
      'A web app that lets users upload images and search using natural language descriptions. Uses OpenAI CLIP model for content understanding with a React frontend and FastAPI backend with FAISS vector search.',
    tech: ['React', 'FastAPI', 'CLIP', 'FAISS', 'Python'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/Semantic-Image-Search/',
    live: '#',
    featured: true,
  },
  {
    title: 'VerseMind',
    description:
      'A Tamil Songwriting Assistant platform leveraging cutting-edge AI to help users create, analyze, and enhance Tamil literary content. Provides intelligent assistance for professional songwriters, poets, and enthusiasts.',
    tech: ['AI', 'NLP', 'React', 'Python'],
    category: 'AI/ML',
    github: 'https://github.com/aaivu/tamil-songwriting-assistant',
    live: '#',
    featured: false,
  },
  {
    title: 'Neura AI Chat Build',
    description:
      'A chat interface for text, file, and image analysis with text generation, image recognition, and real-time responses. Users can choose models, toggle themes, use voice input, and manage chats with prompt templates.',
    tech: ['React', 'AI', 'Image Recognition', 'TTS'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/Neura-AI',
    live: '#',
    featured: false,
  },
  {
    title: 'SecureVision Pro',
    description:
      'A modern web-based CCTV monitoring solution with real-time low-latency streaming, intelligent motion detection with auto-recording, and a fully responsive mobile-ready interface with stats dashboard.',
    tech: ['FastAPI', 'OpenCV', 'JavaScript', 'Streaming'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/SecureVision',
    live: '#',
    featured: false,
  },
  {
    title: 'AI Vision Assistant Pro',
    description:
      'A real-time object detection tool using OpenCV. Tracks selected objects through a live camera feed, estimates distance, and alerts users. Features customizable tracking, adjustable settings, detection logs, and dark mode.',
    tech: ['Python', 'OpenCV', 'Object Detection', 'Real-time'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/AI-Vision-Assistant-Pro',
    live: '#',
    featured: false,
  },
  {
    title: 'AI-Powered Medical Chatbot',
    description:
      'An AI chatbot answering medical questions based on a medical book using vector embeddings. Features semantic search for accurate responses, ensuring reliability by restricting answers to book content.',
    tech: ['Python', 'Vector DB', 'Embeddings', 'NLP'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/medibot',
    live: '#',
    featured: false,
  },
  {
    title: 'Cloud-Sync',
    description:
      'A cloud-based file management system for uploading, organizing, and managing files. Features recent folders, file details, list/icon views, star and delete functionality for quick access.',
    tech: ['React', 'Cloud Storage', 'Node.js', 'File Mgmt'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/cloud-sync',
    live: '#',
    featured: false,
  },
  {
    title: 'Money Manager',
    description:
      'An advanced web application for personal finance management. Enables tracking income and expenses, visualizing financial data through charts, and managing personal budgets securely in real time.',
    tech: ['React', 'Charts', 'Node.js', 'MongoDB'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/moneymanager',
    live: '#',
    featured: false,
  },
  {
    title: 'Credit Score Predictor',
    description:
      'A machine learning web app that predicts credit score categories — Good, Standard, or Bad — based on financial and behavioral inputs using a trained Random Forest model with proper preprocessing.',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Random Forest'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/Credit_Score_Predcitor',
    live: '#',
    featured: false,
  },
  {
    title: 'Landmark Location Finder',
    description:
      'An AI-powered web app that identifies landmarks from images, showing names, locations, and history. Integrated with Google Vision and Gemini APIs for real-time recognition with a mobile-friendly interface.',
    tech: ['Flask', 'Google Vision', 'Gemini AI', 'Python'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/Location-Finder/',
    live: '#',
    featured: false,
  },
  {
    title: 'EMNIST Character Recognition',
    description:
      'An interactive web app using deep learning to identify handwritten letters and digits. Users draw on a canvas or upload images, and a trained CNN model predicts characters with real-time recognition.',
    tech: ['Python', 'CNN', 'Deep Learning', 'Canvas'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/EMNIST-Character-Recognition-Web-App',
    live: '#',
    featured: false,
  },
  {
    title: 'BookSky Web',
    description:
      'A simple to-do list application for managing and tracking books. Users can add, edit, and mark books as read, helping them stay organized with their reading goals.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/booksky',
    live: '#',
    featured: false,
  },
  {
    title: 'E-Commerce Platform',
    description:
      'An online platform with real-time product management enabling businesses to track and update product information instantly, ensuring accurate inventory, pricing, and order management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Real-time'],
    category: 'Web',
    github: 'https://github.com/trinith01/ecommerce',
    live: '#',
    featured: false,
  },
  {
    title: 'Private Cloud-Drive',
    description:
      'A personal cloud storage system using MongoDB Atlas for file database management (especially PDFs) and Cloudinary for efficient image and video storage.',
    tech: ['Node.js', 'MongoDB Atlas', 'Cloudinary', 'Express'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/Private-Cloud-Drive',
    live: '#',
    featured: false,
  },
  {
    title: 'Weather World App',
    description:
      'A sleek, responsive weather app for mobile and web. Get real-time weather updates, accurate forecasts, and location-based conditions in a beautifully designed, easy-to-use interface.',
    tech: ['React', 'Weather API', 'Responsive', 'CSS'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/Weather-with-api',
    live: '#',
    featured: false,
  },
  {
    title: 'Interest Hub',
    description:
      'A chat interface enabling real-time messaging with a sleek design. Includes text, media sharing, and reactions for an interactive and dynamic messaging experience.',
    tech: ['React', 'Socket.io', 'Node.js', 'Real-time'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/InterestHub',
    live: '#',
    featured: false,
  },
  {
    title: 'Sri Lanka Conductor Portal',
    description:
      'A mobile/web application for bus conductors in Sri Lanka to issue digital tickets. Manages routes, passenger counts, daily trips, income, and passenger details automatically.',
    tech: ['React', 'Mobile', 'Node.js', 'MongoDB'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/bus-ticket-system-frontend',
    live: '#',
    featured: false,
  },
  {
    title: 'Talk Bot',
    description:
      'An interactive chatbot using the LLaMA 2 model, hosted on the Ollama server and designed to run locally. Provides intelligent and responsive conversations for various applications.',
    tech: ['Python', 'LLaMA 2', 'Ollama', 'NLP'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/chat-bot-using-ollama',
    live: '#',
    featured: false,
  },
  {
    title: 'News Aggregator',
    description:
      'A responsive news aggregator displaying real-time articles from multiple sources. Allows users to filter news by categories for easy browsing and updates.',
    tech: ['React', 'News API', 'Responsive', 'JavaScript'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/newaggregator',
    live: '#',
    featured: false,
  },
  {
    title: 'Voicify',
    description:
      'Converts text into natural-sounding speech using TTS technology. Allows users to add effects, download audio, and analyze word/character counts for accessibility, narration, and automation.',
    tech: ['JavaScript', 'TTS', 'Web Audio', 'React'],
    category: 'Tools',
    github: 'https://github.com/Selvarajah-Vinushaanth/Text-To-Voice-Converter',
    live: '#',
    featured: false,
  },
  {
    title: 'QuickPing',
    description:
      'Measures internet connection speed by sending data packets to a server and calculating travel time. Displays download speed, upload speed, and ping latency results.',
    tech: ['JavaScript', 'Network', 'API', 'React'],
    category: 'Tools',
    github: 'https://github.com/Selvarajah-Vinushaanth/QuickPing',
    live: '#',
    featured: false,
  },
  {
    title: 'MailFlow-Automator',
    description:
      'A user-friendly email sending interface connected to an automated n8n workflow. Allows quick email composition with optional attachments and seamless sending through automation.',
    tech: ['n8n', 'Automation', 'React', 'Email API'],
    category: 'Tools',
    github: 'https://github.com/Selvarajah-Vinushaanth/MailFlow-Automator',
    live: '#',
    featured: false,
  },
  {
    title: 'AutoFlow Assistant',
    description:
      'An intelligent automation workflow for analyzing Google Sheets data, sending personalized emails, and summarizing calendar events. Streamlines data-driven communication and scheduling.',
    tech: ['Google Sheets', 'Automation', 'AI', 'API'],
    category: 'Tools',
    github: 'https://drive.google.com/file/d/1CK_rZCZU1vHjky53AKUBV-ioAths-sp2/view',
    live: '#',
    featured: false,
  },
  {
    title: 'Benchmarking',
    description:
      'Conducted benchmarking analysis across different laptop devices to evaluate performance variations, focusing on speed, processing power, and efficiency under various workloads.',
    tech: ['Analysis', 'Performance', 'Testing', 'Metrics'],
    category: 'Tools',
    github: 'https://github.com/Selvarajah-Vinushaanth/Benchmarking',
    live: '#',
    featured: false,
  },
  {
    title: 'Mini Bus Reservation System',
    description:
      'A bus reservation system using HTML, CSS, and JavaScript. Manages seat availability, lets users select routes, and calculates total fare for convenient online ticket booking.',
    tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/bus-basic-project',
    live: '#',
    featured: false,
  },
  {
    title: 'Pong Game',
    description:
      'A simple two-player arcade game replicating the classic Pong. Players control paddles to bounce a ball back and forth with real-time player interaction and basic physics simulation.',
    tech: ['JavaScript', 'Canvas', 'Physics', 'Game Dev'],
    category: 'Games',
    github: 'https://github.com/Selvarajah-Vinushaanth/pong-game',
    live: '#',
    featured: false,
  },
  {
    title: 'Breakout Game',
    description:
      'An interactive arcade game where players control a paddle to break bricks with a bouncing ball. Features smooth controls, visual effects, score tracking, and increasing difficulty.',
    tech: ['JavaScript', 'Canvas', 'Animation', 'Game Dev'],
    category: 'Games',
    github: 'https://github.com/Selvarajah-Vinushaanth/Breakout-Game',
    live: '#',
    featured: false,
  },
  {
    title: 'CertChain',
    description:
      'Built a full-stack blockchain application for issuing and verifying academic certificates on Ethereum. Certificates are hashed and stored on-chain via smart contracts, with files pinned to IPFS for tamper-proof storage. Features a Next.js frontend with MetaMask wallet integration, Prisma/PostgreSQL database, and a real-time dashboard for institutions to issue, revoke, and manage certificates.',
    tech: ['Next.js', 'Ethereum', 'Solidity', 'IPFS', 'PostgreSQL'],
    category: 'Web',
    github: 'https://github.com/Selvarajah-Vinushaanth/Certify-Web-Blockchain-',
    live: '#',
    featured: false,
  },
  {
    title: 'NexusAI',
    description:
      'A full-stack AI-powered assistant with 15 integrated tools and MCP architecture. Features smart LLM-based tool routing that dynamically invokes the right tools (web search, news, weather, Wikipedia, currency exchange, GitHub lookup, translator, QR code generation, and more) based on user queries. Includes real-time streaming responses, multi-turn conversation context, persistent chat sessions, and dark/light theme support.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini AI', 'MCP SDK'],
    category: 'AI/ML',
    github: 'https://github.com/Selvarajah-Vinushaanth/Nexus-AI--MCP',
    live: '#',
    featured: false,
  },
];

const INITIAL_SHOW_COUNT = 6;

export { projects };

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_SHOW_COUNT);

  const hasMore = filteredProjects.length > INITIAL_SHOW_COUNT;

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0"
            >
              A collection of {projects.length}+ projects spanning web development, AI/ML,
              game development, and automation tools
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0 mobile-scroll"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'glass'}
                size="sm"
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className="rounded-full min-h-[40px] px-3 sm:px-4 text-xs sm:text-sm whitespace-nowrap shrink-0 active:scale-[0.98] transition-transform touch-target"
              >
                {category}
                {category !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({projects.filter((p) => p.category === category).length})
                  </span>
                )}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.05 * (index % 6) }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col transition-all duration-300 hover:border-primary/50 active:border-primary/50 active:bg-primary/5 hover:shadow-lg hover:shadow-primary/10 card-interactive">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                      <Folder className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 -m-2 text-muted-foreground hover:text-primary active:text-primary transition-colors touch-target"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 -m-2 text-muted-foreground hover:text-primary active:text-primary transition-colors touch-target"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-base sm:text-lg md:text-xl mb-2 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-grow line-clamp-3 sm:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Category Badge */}
                  <span className="inline-block w-fit px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-secondary text-[10px] sm:text-xs font-medium text-muted-foreground mb-3 sm:mb-4">
                    {project.category}
                  </span>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-md bg-primary/10 text-primary/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-6 sm:mt-8 md:mt-12 px-4 sm:px-0"
            >
              <Button
                variant="glass"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="rounded-full min-h-[52px] w-full sm:w-auto px-6 sm:px-8 text-sm sm:text-base gap-2 active:scale-[0.98] transition-transform touch-target"
              >
                {showAll ? (
                  <>
                    <ChevronUp size={20} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={20} />
                    View All {filteredProjects.length} Projects
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
