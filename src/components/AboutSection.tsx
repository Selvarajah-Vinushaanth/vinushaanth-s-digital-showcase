import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, FileText, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResumePreview } from './ResumePreview';

const timeline = [
  {
    year: 'Nov 2025 - Present',
    title: 'Machine Learning Engineering Intern',
    institution: 'CML Insight Inc · Austin, Texas, USA',
    description: 'Working across both machine learning and software engineering — building ML pipelines, training models, and developing full-stack applications.',
  },
  {
    year: '2022 - Present',
    title: 'B.Sc. in Computer Science Engineering',
    institution: 'University of Moratuwa — Data Science Stream',
    description: 'Semester 6 in progress · GPA: 3.72 / 4.0 (up to Semester 5) — First Class with Distinction.',
  },
  {
    year: '2019 - 2021',
    title: 'Advanced Level Examination',
    institution: 'Physical Science Stream',
    description: 'Completed with distinction in Mathematics, Physics, and Chemistry.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="about" className="section-padding bg-secondary/20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Get to Know <span className="gradient-text">Me</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-5 sm:p-8 rounded-2xl glow-effect">
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/20 shrink-0">
                    <GraduationCap className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-base sm:text-lg">CSE — Data Science Stream</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm truncate">University of Moratuwa</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                  Hi, I'm <span className="text-primary font-medium">Vinushaanth</span>, a Computer Science Engineering 
                  undergraduate specializing in <span className="text-primary font-medium">Data Science</span> at University of Moratuwa. 
                  I'm equally proficient in <span className="text-primary font-medium">Machine Learning</span> and <span className="text-primary font-medium">Software Engineering</span> — from 
                  training models and building ML pipelines to crafting full-stack web and mobile applications.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                  Currently, I'm a <span className="text-primary font-medium">Machine Learning Engineering Intern</span> at <span className="text-primary font-medium">CML Insight Inc</span> in Austin, Texas, USA, 
                  where I work on both ML and software development projects. With a GPA of <span className="text-primary font-medium">3.72 / 4.0</span> (First Class with Distinction) 
                  through 5 semesters, I combine strong academic foundations with 30+ hands-on projects 
                  spanning web development, computer vision, NLP, and intelligent automation.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-6">
                  <div className="text-center p-2.5 sm:p-3 rounded-xl bg-secondary/50 border border-glass-border">
                    <p className="text-lg sm:text-xl font-bold text-primary">3.72</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">GPA / 4.0</p>
                  </div>
                  <div className="text-center p-2.5 sm:p-3 rounded-xl bg-secondary/50 border border-glass-border">
                    <p className="text-lg sm:text-xl font-bold text-primary">30+</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center p-2.5 sm:p-3 rounded-xl bg-secondary/50 border border-glass-border">
                    <p className="text-lg sm:text-xl font-bold text-primary">6 mo</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Internship</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6">
                  <a href="https://www.google.com/maps/place/Colombo,+Sri+Lanka/@6.9271,79.8612,13z" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MapPin size={14} className="text-primary sm:w-4 sm:h-4" />
                    <span>Colombo, Sri Lanka</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Briefcase size={14} className="text-primary sm:w-4 sm:h-4" />
                    <span>ML Intern at CML Insight Inc, USA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-primary sm:w-4 sm:h-4" />
                    <span>First Class with Distinction</span>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  onClick={() => setIsResumeOpen(true)}
                  className="w-full sm:w-auto min-h-[48px]"
                >
                  <FileText className="mr-2" size={18} />
                  View My Resume
                </Button>
              </div>

              {/* Resume Preview Modal */}
              <ResumePreview isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5 sm:space-y-6"
            >
              <h3 className="text-lg sm:text-xl font-display font-semibold mb-6 sm:mb-8">Education Journey</h3>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-6 sm:pl-8 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                    {item.year}
                  </span>
                  <h4 className="font-display font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
                  <p className="text-primary/80 text-xs sm:text-sm mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
