import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const timeline = [
  {
    year: '2021 - Present',
    title: 'B.Sc. in Computer Science Engineering',
    institution: 'University of Moratuwa',
    description: 'Pursuing degree with focus on AI, networking, and systems design.',
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
          <div className="text-center mb-16">
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card p-8 rounded-2xl glow-effect">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">Computer Science Engineer</h3>
                    <p className="text-muted-foreground text-sm">University of Moratuwa</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hi, I'm <span className="text-primary font-medium">Vinushaanth</span>, a Computer Science Engineering 
                  undergraduate at University of Moratuwa. I enjoy solving real-world problems using technology, 
                  exploring AI, networking, and building smart, efficient systems.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  My passion lies in creating innovative solutions that bridge the gap between complex 
                  technical challenges and user-friendly applications. Whether it's developing web applications, 
                  working on AI/ML projects, or optimizing network systems, I bring dedication and creativity 
                  to every project.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    <span>Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span>Available for opportunities</span>
                  </div>
                </div>

                <Button 
                  variant="hero" 
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="w-full sm:w-auto"
                >
                  <FileText className="mr-2" size={18} />
                  View My Resume
                </Button>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-display font-semibold mb-8">Education Journey</h3>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                    {item.year}
                  </span>
                  <h4 className="font-display font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-primary/80 text-sm mb-2">{item.institution}</p>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
