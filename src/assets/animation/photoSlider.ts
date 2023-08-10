import { Variants } from 'framer-motion';

export const hiddenPhotoMask = (dir?: string) =>
  `repeating-linear-gradient(${dir ?? 'to right'}, rgba(0,0,0,0) 0px,` +
  ' rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)';
export const visiblePhotoMask = (dir?: string) =>
  `repeating-linear-gradient(${dir ?? 'to right'}, rgba(0,0,0,0) 0px,` +
  ' rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)';

export const photoSliderS: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 300 : -300,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
    };
  }
};

export const photoSliderL: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 580 : -580,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 580 : -580,
    };
  }
};
