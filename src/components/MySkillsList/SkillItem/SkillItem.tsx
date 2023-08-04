import './SkillItem.scss';

export interface SkillItemProps {
  name: string;
  isFavorite: boolean;
  icon?: JSX.Element;
}

function SkillItem({ name, isFavorite, icon }: SkillItemProps) {
  const favoriteClass = isFavorite ? ' my-skills-item--favorite' : '';

  return (
    <li className={'my-skills-item' + favoriteClass} title={name}>
      {name}
      {icon && icon}
    </li>
  );
}

export default SkillItem;
