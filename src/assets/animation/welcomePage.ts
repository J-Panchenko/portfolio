import { Variants } from 'framer-motion';

export const moveXAnimation: Variants = {
  hidden: (custom: number) => ({
    opacity: 0,
    x: custom,
  }),
  visible: {
    opacity: 1,
    x: 0,
  },
};
