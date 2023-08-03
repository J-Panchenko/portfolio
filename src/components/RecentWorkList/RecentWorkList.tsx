import { recentWork, recentWorkInitial } from 'data';
import { useEffect, useState } from 'react';
import { RecentWorkFullInfo } from 'components/Modals';
import RecentWorkItem from './RecentWorkItem';
import './RecentWorkList.scss';

function RecentWorkList() {
  const [openDescription, setOpenDescription] = useState<string>('');
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  useEffect(() => {
    if (openDescription) {
      const work = recentWork
        .find((item: WorkItem) => item.id === openDescription);
      setSelectedWork(work || null);
    } else {
      setSelectedWork(null);
    }
  }, [openDescription]);

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
      <RecentWorkFullInfo
        isOpen={!!selectedWork}
        onClose={() => setOpenDescription('')}
        selectedWork={selectedWork || recentWorkInitial}
      />
    </section>
  );
}

export default RecentWorkList;
