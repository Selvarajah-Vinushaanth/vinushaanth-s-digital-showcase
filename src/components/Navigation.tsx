import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, FolderKanban, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Projects', href: '#projects', icon: FolderKanban },
  { name: 'Skills', href: '#skills', icon: Sparkles },
  { name: 'Contact', href: '#contact', icon: MessageSquare },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-area-inset ${
          isScrolled ? 'glass-card py-2 sm:py-3' : 'py-3 sm:py-5'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-xl sm:text-2xl font-display font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Vinushaanth<span className="text-foreground">.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
            <Button variant="hero" size="sm" onClick={() => scrollToSection('#contact')}>
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-12 h-12 rounded-xl active:bg-primary/20 touch-target"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </Button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden safe-area-inset"
          >
            <div className="absolute inset-0 bg-background/98 backdrop-blur-2xl overflow-y-auto mobile-scroll">
              {/* Header spacer */}
              <div className="h-16 sm:h-20" />
              
              {/* Menu Content */}
              <div className="px-5 sm:px-6 py-6 sm:py-8">
                <nav className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="flex items-center gap-4 px-4 py-4 min-h-[60px] rounded-2xl text-foreground hover:bg-primary/10 hover:text-primary active:bg-primary/20 active:scale-[0.98] transition-all touch-target"
                    >
                      <div className="p-3 rounded-xl bg-secondary/80 text-primary shrink-0">
                        <link.icon size={24} />
                      </div>
                      <span className="text-lg font-display font-semibold">{link.name}</span>
                    </motion.a>
                  ))}
                </nav>
                
                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 px-4"
                >
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full min-h-[56px] text-base rounded-2xl" 
                    onClick={() => scrollToSection('#contact')}
                  >
                    <MessageSquare size={20} className="mr-2" />
                    Let's Talk
                  </Button>
                </motion.div>

                {/* Decorative element */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 text-center"
                >
                  <p className="text-muted-foreground text-sm">Vinushaanth's Portfolio</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
