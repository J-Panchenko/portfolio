import { Dispatch, SetStateAction, useState } from 'react';
import { hiddenPhotoMask, visiblePhotoMask } from 'assets/animation';
import { motion } from 'framer-motion';
import './RecentWorkItem.scss';

interface RecentWorkItemProps {
  id: string;
  cover: string;
  title: string;
  openDescription: Dispatch<SetStateAction<string>>;
}

function RecentWorkItem({
  id,
  cover,
  title,
  openDescription,
}: RecentWorkItemProps) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <motion.li
      className="recent-work-item"
      title={title}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <button
        type="button"
        className="recent-work-item__button"
        onClick={() => openDescription(id)}
      >
        <motion.div
          className="recent-work-item__cover"
          initial={false}
          animate={isLoaded ?
            {
              WebkitMaskImage: visiblePhotoMask('to top'),
              maskImage: visiblePhotoMask('to top'),
            } :
            {
              WebkitMaskImage: hiddenPhotoMask('to top'),
              maskImage: hiddenPhotoMask('to top'),
            }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <img
            className="recent-work-item__cover"
            src={cover}
            alt={title}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        </motion.div>
        <p className="recent-work-item__title">
          {title}
        </p>
      </button>
    </motion.li>
  );
}

export default RecentWorkItem;
