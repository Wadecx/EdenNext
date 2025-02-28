'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type Props = {
  animate?: 'popIn' | 'fadeIn' | 'slideFromBottom';
  delay?: number;
  duration?: number;
  className?: string;
  hasLayout?: boolean;
  once?: boolean;
};

const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const POP_IN = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const SLIDE_FROM_BOTTOM = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

const DEFAULT_TRANSITION = (delay: number, duration: number) => ({
  duration,
  delay,
  type: 'spring',
  stiffness: 200,
  damping: 10,
  mass: 0.5,
});

export const AnimateContainer = ({
  children,
  className = '',
  duration = 1,
  delay = 0,
  animate = 'popIn',
  hasLayout = false,
  once = true,
}: PropsWithChildren<Props>) => {
  const getAnimation = () => {
    switch (animate) {
      case 'fadeIn':
        return FADE_IN;
      case 'popIn':
        return POP_IN;
      case 'slideFromBottom':
        return SLIDE_FROM_BOTTOM;
      default:
        return FADE_IN;
    }
  };

  return (
    <motion.div
      layout={hasLayout}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={getAnimation()}
      whileInView="animate"
      viewport={{ once, amount: 0.2 }} // Ajuste l'affichage quand 20% de l'élément est visible
      transition={DEFAULT_TRANSITION(delay, duration)}
      className={className}
    >
      {children}
    </motion.div>
  );
};
