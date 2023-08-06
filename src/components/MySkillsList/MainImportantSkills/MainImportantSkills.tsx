import { SkillItem, SkillItemProps } from '..';
import { GiMuscularTorso } from 'react-icons/gi';
import Tooltip from 'components/Tooltip';
import { useState } from 'react';
import './MainImportantSkills.scss';

interface MainImportantSkillsProps {
  skillsGroup: SkillItem[];
}

function MainImportantSkills({ skillsGroup }: MainImportantSkillsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="main-important-skills">
      <Tooltip
        label="Be loyal to the one who is loyal to you"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <button
          className="main-important-skills__info"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="other-skills__info-icon-wrapper">
            <GiMuscularTorso className="main-important-skills__info-icon" />
          </div>
          <h3 className="main-important-skills__info-title">
            Middle Base
          </h3>
        </button>
      </Tooltip>
      <ul className="main-important-skills__list">
        {skillsGroup.map(({ id, ...restProps }: SkillItem) => (
          <SkillItem key={id} {...restProps as SkillItemProps} />
        ))}
      </ul>
    </div>
  );
}

export default MainImportantSkills;
