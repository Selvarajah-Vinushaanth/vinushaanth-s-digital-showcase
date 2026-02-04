import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'vinushaanth@example.com', href: 'mailto:vinushaanth@example.com' },
  { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka', href: '#' },
  { icon: Phone, label: 'Phone', value: '+94 77 123 4567', href: 'tel:+94771234567' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/vinushaanth', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/vinushaanth', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:vinushaanth@example.com', label: 'Email' },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding">
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
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Let's <span className="gradient-text">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind or want to collaborate? Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-display font-semibold mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass-card rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl glow-effect">
                <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-glass-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-glass-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-secondary/50 border-glass-border focus:border-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
