import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { hiddenPhotoMask, photoSliderL, photoSliderS, visiblePhotoMask } from 'assets/animation';
import { swipeConfidenceThreshold, swipePower } from './helpers';
import { useState } from 'react';
import { wrap } from 'popmotion';
import './PhotoSlider.scss';

interface PhotoSliderProps {
  photos: string[];
  full?: boolean;
}

function PhotoSlider({ photos, full }: PhotoSliderProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imageIndex = wrap(0, photos.length, page);

  const paginate = (newDirection: number) => {
    newDirection > 0 && setIsLoaded(false);
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="photo-slider">
      <AnimatePresence initial custom={direction} mode="popLayout">
        <motion.div
          key={page}
          className="photo-slider__container"
          initial={false}
          animate={isLoaded ?
            { WebkitMaskImage: visiblePhotoMask(), maskImage: visiblePhotoMask() } :
            { WebkitMaskImage: hiddenPhotoMask(), maskImage: hiddenPhotoMask() }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.img
            key={page}
            className="photo-slider__image"
            src={photos[imageIndex]}
            custom={direction}
            variants={full ? photoSliderL : photoSliderS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: 'spring', stiffness: 550, damping: 40 } }}
            drag="x"
            onLoad={() => setIsLoaded(true)}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </motion.div>
        <ul className="photo-slider__dots">
          {photos.map((_: string, i: number) => imageIndex === i ?
            <li key={i} className="photo-slider__dot" /> :
            <li key={i} className="photo-slider__dot" />)}
        </ul>
      </AnimatePresence>
      <button
        className="photo-slider__btn photo-slider__btn--left"
        onClick={() => paginate(-1)}
      >
        <FiChevronLeft className="photo-slider__btn-icon" />
      </button>
      <button
        className="photo-slider__btn photo-slider__btn--right"
        onClick={() => paginate(1)}
      >
        <FiChevronRight className="photo-slider__btn-icon" />
      </button>
    </div>
  );
}

export default PhotoSlider;
