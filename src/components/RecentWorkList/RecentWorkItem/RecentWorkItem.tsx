import { Dispatch, SetStateAction } from 'react';
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
    <li
      className="recent-work-item"
      title={title}
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
    </li>
  );
}

export default RecentWorkItem;
