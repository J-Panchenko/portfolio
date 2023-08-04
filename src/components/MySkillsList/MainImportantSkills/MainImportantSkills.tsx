import { SkillItem, SkillItemProps } from '..';
import { GiMuscularTorso } from 'react-icons/gi';
import { Tooltip } from '@chakra-ui/react';
import './MainImportantSkills.scss';

interface MainImportantSkillsProps {
  skillsGroup: SkillItem[];
}

function MainImportantSkills({ skillsGroup }: MainImportantSkillsProps) {

  return (
    <li className="main-important-skills">
      <Tooltip label="Be loyal to the one who is loyal to you" placement="top">
        <div className="main-important-skills__info">
          <GiMuscularTorso className="main-important-skills__info-icon" />
          <h3 className="main-important-skills__info-title">
            Middle Base
          </h3>
        </div>
      </Tooltip>
      <ul className="main-important-skills__list">
        {skillsGroup.map(({ id, ...restProps }: SkillItem) => (
          <SkillItem key={id} {...restProps as SkillItemProps} />
        ))}
      </ul>
    </li>
  );
}

export default MainImportantSkills;
