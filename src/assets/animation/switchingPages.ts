import { Variants } from 'framer-motion';

export const switchingPages: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, duration: 0.2 },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.2, duration: 0.2 },
  },
};
