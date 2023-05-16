import RecentWorkItem from './RecentWorkItem';
import './RecentWorkList.scss';

function RecentWorkList() {

  return (
    <section className="recent-work">
      <h1 className="recent-work__title">
        What did I work on?
      </h1>
      <ul className="recent-work__list">
        <RecentWorkItem value="Full Vegan Belly" />
      </ul>
    </section>
  );
}

export default RecentWorkList;
