import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ResumePreview } from './ResumePreview';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Selvarajah-Vinushaanth', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/selvarajah-vinushaanth/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:selvavinu26816@gmail.com', label: 'Email' },
];

export const HeroSection = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pt-16 sm:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-sky-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 sm:mb-6 leading-tight"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Vinushaanth</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display text-muted-foreground mb-4 sm:mb-6"
          >
            ML Engineer · Full-Stack Developer · Data Science
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            Bridging Machine Learning and Software Engineering — I build intelligent web apps, 
            ML pipelines, and full-stack solutions. Currently an ML Engineering Intern at CML Insight Inc, Austin, Texas, USA.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0"
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="w-full sm:w-auto min-h-[52px] text-base rounded-xl active:scale-[0.98] transition-transform touch-target"
            >
              <Eye className="mr-2" size={20} />
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setIsResumeOpen(true)}
              className="w-full sm:w-auto min-h-[52px] text-base rounded-xl active:scale-[0.98] transition-transform touch-target"
            >
              <FileText className="mr-2" size={20} />
              Preview CV
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto min-h-[52px] text-base rounded-xl active:scale-[0.98] transition-transform touch-target"
            >
              <Mail className="mr-2" size={20} />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 sm:gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-3 rounded-xl bg-secondary/50 border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/50 active:scale-95 active:bg-primary/20 transition-all duration-300 touch-target"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={22} className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreview isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
};
