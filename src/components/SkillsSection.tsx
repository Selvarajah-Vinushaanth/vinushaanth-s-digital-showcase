import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, 
  Network, 
  Cloud, 
  Cpu, 
  Globe, 
  Monitor, 
  Database, 
  Palette,
  Code2,
  Server,
  Smartphone,
  Shield
} from 'lucide-react';

const skills = [
  { icon: Brain, name: 'Artificial Intelligence', description: 'Machine Learning, Deep Learning, NLP' },
  { icon: Network, name: 'Networking', description: 'Network Security, Protocols, Infrastructure' },
  { icon: Cloud, name: 'Cloud Computing', description: 'AWS, Azure, GCP, Serverless' },
  { icon: Cpu, name: 'Embedded Systems', description: 'IoT, Raspberry Pi, Arduino' },
  { icon: Globe, name: 'Web Development', description: 'React, Node.js, Full-stack' },
  { icon: Smartphone, name: 'App Development', description: 'React Native, Flutter, Mobile' },
  { icon: Monitor, name: 'Operating Systems', description: 'Linux, Windows, System Admin' },
  { icon: Database, name: 'Data Science', description: 'Python, R, Data Analysis' },
  { icon: Palette, name: 'Graphic Design', description: 'UI/UX, Figma, Adobe Suite' },
  { icon: Code2, name: 'Programming', description: 'C++, Python, JavaScript, TypeScript' },
  { icon: Server, name: 'Backend Development', description: 'APIs, Microservices, Databases' },
  { icon: Shield, name: 'Cybersecurity', description: 'Ethical Hacking, Security Audits' },
];

const technologies = [
  'JavaScript', 'TypeScript', 'Python', 'C++', 'Java',
  'React', 'Next.js', 'Node.js', 'Express', 'Django',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes',
  'AWS', 'Git', 'Linux', 'TensorFlow', 'PyTorch'
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              Skills & Interests
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
            >
              What I <span className="gradient-text">Do Best</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Areas of expertise and technologies I work with
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6 mb-12 sm:mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl h-full text-center transition-all duration-300 hover:border-primary/50 active:border-primary/50 active:bg-primary/5 hover:shadow-lg hover:shadow-primary/10">
                  <div className="inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-primary/10 text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <skill.icon className="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base mb-1 sm:mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h3 className="text-lg sm:text-xl font-display font-semibold mb-6 sm:mb-8">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary border border-glass-border text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary active:text-primary hover:border-primary/50 active:border-primary/50 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
