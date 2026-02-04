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
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold gradient-text inline-block mb-3">
              Vinushaanth<span className="text-foreground">.</span>
            </a>
            <p className="text-muted-foreground text-sm">
              Computer Science Engineer passionate about building innovative solutions.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-glass-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
            © {currentYear} Vinushaanth. Made with 
            <Heart size={14} className="text-destructive fill-destructive" /> 
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
