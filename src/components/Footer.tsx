import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/vinushaanth', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vinushaanth', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:vinushaanth@example.com', label: 'Email' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-glass-border">
      <div className="container mx-auto px-4 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl sm:text-2xl font-display font-bold gradient-text inline-block mb-2 sm:mb-3">
              Vinushaanth<span className="text-foreground">.</span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xs mx-auto md:mx-0">
              Computer Science Engineer passionate about building innovative solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-xs sm:text-sm py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-2 rounded-lg text-muted-foreground hover:text-primary active:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-glass-border text-center">
          <p className="text-muted-foreground text-xs sm:text-sm flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Vinushaanth. Made with 
            <Heart size={14} className="text-destructive fill-destructive" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
