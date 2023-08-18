import { SkillItem, SkillItemProps } from '..';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { Tooltip } from 'components';
import { useState } from 'react';
import './MainBaseSkills.scss';

interface MainBaseSkillsProps {
  skillsGroup: SkillItem[];
}

function MainBaseSkills({ skillsGroup }: MainBaseSkillsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="main-base-skills">
      <Tooltip
        label="Remember who you are"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <button
          className="main-base-skills__info"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="other-skills__info-icon-wrapper">
            <GiPoliceOfficerHead className="main-base-skills__info-icon" />
          </div>
          <h3 className="main-base-skills__info-title">
            Top Base
          </h3>
        </button>
      </Tooltip>
      <ul className="main-base-skills__list">
        {skillsGroup.map(({ id, ...restProps }: SkillItem) => (
          <SkillItem key={id} {...restProps as SkillItemProps} />
        ))}
      </ul>
    </div>
  );
}

export default MainBaseSkills;
