import './RecentWorkItem.scss';

interface RecentWorkItemProps {
  value: string;
}

function RecentWorkItem({ value }: RecentWorkItemProps) {

  return (
    <li
      className="recent-work-item"
      title={value}
    >
      {value}
    </li>
  );
}

export default RecentWorkItem;
