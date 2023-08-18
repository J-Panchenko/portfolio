import { RecentWorkItem, RecentWorkModal } from '.';
import { recentWork, recentWorkInitial } from 'data';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Recent works of Yuliia Panchenko</title>
        <meta
          name="description"
          content="I've built web applications using React, TypeScript, Redux and other tools."
        />
      </Helmet>
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
      <RecentWorkModal
        isOpen={!!selectedWork}
        onClose={() => setOpenDescription('')}
        selectedWork={selectedWork || recentWorkInitial}
      />
    </section>
  );
}

export default RecentWorkList;
