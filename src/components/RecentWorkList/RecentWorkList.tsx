import RecentWorkItem from './RecentWorkItem';
import { recentWork } from 'data';
import { useState } from 'react';
import './RecentWorkList.scss';

function RecentWorkList() {
  const [openDescription, setOpenDescription] = useState<string>('');

  return (
    <section className="recent-work">
      <h1 className="recent-work__title">
        What did I work on?
      </h1>
      <ul className="recent-work__list">
        {recentWork.map((item: WorkItem) => (
          <RecentWorkItem
            key={item.id}
            id={item.id}
            cover={item.cover}
            title={item.title}
            openDescription={setOpenDescription}
          />
        ))}
      </ul>
    </section>
  );
}

export default RecentWorkList;
