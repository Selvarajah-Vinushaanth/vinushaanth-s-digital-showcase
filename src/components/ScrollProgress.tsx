import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-sky-400 z-[200] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
