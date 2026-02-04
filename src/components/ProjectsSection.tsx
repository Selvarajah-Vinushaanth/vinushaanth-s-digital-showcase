import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Web', 'AI/ML', 'Games', 'Tools'];

const projects = [
  {
    title: 'BookSky',
    description: 'A comprehensive book management and recommendation system with user authentication and personalized suggestions.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Web',
    github: 'https://github.com/vinushaanth/booksky',
    live: '#',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    category: 'Web',
    github: 'https://github.com/vinushaanth/ecommerce',
    live: '#',
    featured: true,
  },
  {
    title: 'AI Vision Analyzer',
    description: 'Computer vision application for object detection and image classification using deep learning.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    category: 'AI/ML',
    github: 'https://github.com/vinushaanth/ai-vision',
    live: '#',
    featured: true,
  },
  {
    title: 'Cloud Sync',
    description: 'Real-time file synchronization tool with end-to-end encryption and cross-platform support.',
    tech: ['Go', 'AWS S3', 'WebSocket', 'Docker'],
    category: 'Tools',
    github: 'https://github.com/vinushaanth/cloudsync',
    live: '#',
    featured: false,
  },
  {
    title: 'YOLOvFeed',
    description: 'Automated animal feed monitoring system using YOLO object detection for smart farming.',
    tech: ['Python', 'YOLOv8', 'Raspberry Pi', 'IoT'],
    category: 'AI/ML',
    github: 'https://github.com/vinushaanth/yolovfeed',
    live: '#',
    featured: false,
  },
  {
    title: 'Puzzle Quest',
    description: 'Interactive puzzle game with multiple levels, achievements, and leaderboard functionality.',
    tech: ['Unity', 'C#', 'Firebase', 'Blender'],
    category: 'Games',
    github: 'https://github.com/vinushaanth/puzzlequest',
    live: '#',
    featured: false,
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              My Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Here are some of my recent projects that showcase my skills and experience
            </motion.p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'glass'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl p-6 flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <Folder size={24} />
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Category Badge */}
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground mb-4">
                    {project.category}
                  </span>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
