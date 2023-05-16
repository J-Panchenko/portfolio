import './MySkillsItem.scss';

interface MySkillsItemProps { 
  value: string;
}

function MySkillsItem({ value }: MySkillsItemProps) {
  
  return (
    <li className="my-skills-item" title={value}>
      {value}
    </li>
  );
}

export default MySkillsItem;
