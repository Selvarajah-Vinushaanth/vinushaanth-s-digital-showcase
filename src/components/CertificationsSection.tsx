import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, ExternalLink, ChevronDown, ChevronUp, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  credentialId?: string;
  skills: string[];
  description: string;
  logo: string;
  logoAlt: string;
}

const certifications: Certification[] = [
  {
    title: 'Fine Tuning Language Models',
    issuer: 'Hugging Face',
    issuedDate: 'Jul 2025',
    skills: ['Transformers', 'LLMs'],
    description:
      'Completed a certification focused on customizing and optimizing pretrained language models for specific tasks, including data preparation, training techniques, and performance evaluation.',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFVs9MsiiOo8Q/company-logo_100_100/company-logo_100_100/0/1702415729898/huggingface_logo?e=1742428800&v=beta&t=dummy',
    logoAlt: 'Hugging Face',
  },
  {
    title: 'Fundamentals of LLMs',
    issuer: 'Hugging Face',
    issuedDate: 'Jul 2025',
    skills: ['Transformers', 'LLMs', 'Tokenization'],
    description:
      'Gained hands-on knowledge of transformers, attention, tokenization, and LLM inference techniques. Excited to apply these in real-world AI projects!',
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQFVs9MsiiOo8Q/company-logo_100_100/company-logo_100_100/0/1702415729898/huggingface_logo?e=1742428800&v=beta&t=dummy',
    logoAlt: 'Hugging Face',
  },
  {
    title: 'Data Science Fundamentals - Essential Tools & Concepts',
    issuer: 'Alison',
    issuedDate: 'Jul 2025',
    credentialId: '34456244',
    skills: ['Data Science', 'Machine Learning'],
    description:
      'Completed the Data Science Fundamentals course from Alison, gaining a solid foundation in key data science principles, including data exploration, cleaning, visualization, and essential tools used in the field.',
    logo: '',
    logoAlt: 'Alison',
  },
  {
    title: 'SpiritX',
    issuer: 'MoraSpirit',
    issuedDate: 'May 2025',
    skills: ['Gemini Api', 'Next.js'],
    description:
      'Awarded for active participation in the 36-hour web development challenge as a dedicated member of Team Underdogs, demonstrating teamwork, creativity, and technical skills under time pressure.',
    logo: '',
    logoAlt: 'MoraSpirit',
  },
  {
    title: 'Mora-Xtreme 9.0 - Algorithmic Coding Competition',
    issuer: 'IEEE Computer Society',
    issuedDate: 'Oct 2024',
    skills: ['C++'],
    description:
      'Participated as a competitor in Mora-Xtreme to gain better experience with algorithms.',
    logo: '',
    logoAlt: 'IEEE Computer Society',
  },
  {
    title: 'Data Cleaning',
    issuer: 'Kaggle',
    issuedDate: 'Feb 2025',
    skills: ['Data Cleaning'],
    description:
      "Completed Kaggle's Data Cleaning course, learning techniques to handle missing data, fix inconsistencies, and prepare datasets for analysis.",
    logo: '',
    logoAlt: 'Kaggle',
  },
  {
    title: 'Feature Engineering',
    issuer: 'Kaggle',
    issuedDate: 'Feb 2025',
    skills: ['Feature Engineering'],
    description:
      "Completed Kaggle's Feature Engineering course, learning techniques to create, transform, and optimize features for improving machine learning model performance.",
    logo: '',
    logoAlt: 'Kaggle',
  },
  {
    title: 'Intro to Pandas',
    issuer: 'Kaggle',
    issuedDate: 'Feb 2025',
    skills: ['pandas'],
    description:
      "Completed Kaggle's Intro to Pandas course, learning essential data manipulation techniques using Pandas for efficient data analysis and processing.",
    logo: '',
    logoAlt: 'Kaggle',
  },
  {
    title: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    issuedDate: 'Feb 2025',
    skills: ['Machine Learning'],
    description:
      "Completed Kaggle's Intro to Machine Learning course, learning key ML concepts like data preprocessing, model building, and decision trees.",
    logo: '',
    logoAlt: 'Kaggle',
  },
];

const INITIAL_SHOW = 4;

const getIssuerColor = (issuer: string): string => {
  const colors: Record<string, string> = {
    'Hugging Face': 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
    'Kaggle': 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30',
    'Alison': 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    'MoraSpirit': 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
    'IEEE Computer Society': 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
  };
  return colors[issuer] || 'from-primary/20 to-primary/10 border-primary/30';
};

const getIssuerInitial = (issuer: string): string => {
  const initials: Record<string, string> = {
    'Hugging Face': '🤗',
    'Kaggle': 'K',
    'Alison': 'A',
    'MoraSpirit': 'MS',
    'IEEE Computer Society': 'IEEE',
  };
  return initials[issuer] || issuer.charAt(0);
};

export const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const displayed = showAll ? certifications : certifications.slice(0, INITIAL_SHOW);

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            >
              Licenses & Certifications
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4"
            >
              My <span className="gradient-text">Certifications</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto px-4 sm:px-0"
            >
              Continuous learning through industry-recognized certifications and competitions
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto">
            {displayed.map((cert, index) => {
              const isExpanded = expandedCard === index;
              return (
                <motion.div
                  key={`${cert.title}-${cert.issuer}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.4, delay: 0.05 * (index % INITIAL_SHOW) }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="glass-card rounded-xl sm:rounded-2xl h-full overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                    {/* Colored top accent bar */}
                    <div className={`h-1 bg-gradient-to-r ${getIssuerColor(cert.issuer)}`} />

                    <div className="p-4 sm:p-5 md:p-6">
                      {/* Header Row: Logo + Title + Issuer */}
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        {/* Issuer Logo / Initial */}
                        <div
                          className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${getIssuerColor(cert.issuer)} flex items-center justify-center text-sm sm:text-base font-bold border`}
                        >
                          {getIssuerInitial(cert.issuer)}
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-display font-semibold text-sm sm:text-base md:text-lg leading-tight mb-1 line-clamp-2">
                            {cert.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-muted-foreground">
                            <Building2 size={12} className="shrink-0 text-primary/60" />
                            <span className="text-xs sm:text-sm truncate">{cert.issuer}</span>
                          </div>
                        </div>
                      </div>

                      {/* Date & Credential */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 sm:mb-4 text-[11px] sm:text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-primary/60 shrink-0" />
                          <span>Issued {cert.issuedDate}</span>
                        </div>
                        {cert.credentialId && (
                          <div className="flex items-center gap-1.5">
                            <Award size={12} className="text-primary/60 shrink-0" />
                            <span>ID: {cert.credentialId}</span>
                          </div>
                        )}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Description (collapsible on mobile) */}
                      <div className="relative">
                        <p
                          className={`text-muted-foreground text-xs sm:text-sm leading-relaxed transition-all duration-300 ${
                            isExpanded ? '' : 'line-clamp-2'
                          }`}
                        >
                          {cert.description}
                        </p>
                        {cert.description.length > 100 && (
                          <button
                            onClick={() => setExpandedCard(isExpanded ? null : index)}
                            className="mt-1.5 sm:mt-2 text-primary text-[11px] sm:text-xs font-medium flex items-center gap-1 hover:underline focus:outline-none active:text-primary/80 touch-target"
                          >
                            {isExpanded ? (
                              <>
                                Show less <ChevronUp size={12} />
                              </>
                            ) : (
                              <>
                                Read more <ChevronDown size={12} />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Show More / Show Less Button */}
          {certifications.length > INITIAL_SHOW && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex justify-center mt-8 sm:mt-10 md:mt-12"
            >
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                className="min-h-[48px] px-6 sm:px-8 text-sm sm:text-base group active:scale-[0.98] transition-transform touch-target"
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                ) : (
                  <>
                    Show All {certifications.length} Certifications{' '}
                    <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
