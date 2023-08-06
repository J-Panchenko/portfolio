import './SkillItem.scss';

export interface SkillItemProps {
  name: string;
  isFavorite: boolean;
}

function SkillItem({ name, isFavorite }: SkillItemProps) {
  const favoriteClass = isFavorite ? ' my-skills-item--favorite' : '';

  return (
    <li className={'my-skills-item' + favoriteClass}>
      {name}
    </li>
  );
}

export default SkillItem;
