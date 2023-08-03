import { Dispatch, SetStateAction } from 'react';
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
        <img
          className="recent-work-item__cover"
          src={cover}
          alt={title}
        />
        <p className="recent-work-item__title">
          {title}
        </p>
      </button>
    </motion.li>
  );
}

export default RecentWorkItem;
