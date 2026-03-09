import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Selvarajah-Vinushaanth', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/selvarajah-vinushaanth/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:selvavinu26816@gmail.com', label: 'Email' },
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
    <footer className="bg-secondary/30 border-t border-glass-border safe-area-inset">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 md:gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-lg sm:text-xl md:text-2xl font-display font-bold gradient-text inline-block mb-2 sm:mb-3">
              Vinushaanth<span className="text-foreground">.</span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              ML Engineer & Full-Stack Developer passionate about building intelligent solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-primary active:text-primary transition-colors text-xs sm:text-sm py-1.5 touch-target flex items-center justify-center"
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
                className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-secondary/50 border border-glass-border text-muted-foreground hover:text-primary hover:border-primary/50 active:text-primary active:bg-primary/10 transition-all touch-target"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 md:mt-10 pt-5 sm:pt-6 md:pt-8 border-t border-glass-border text-center">
          <p className="text-muted-foreground text-[10px] sm:text-xs md:text-sm">
            © {currentYear} Vinushaanth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
