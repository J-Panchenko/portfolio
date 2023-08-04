import { SkillItem, SkillItemProps } from '..';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { Tooltip } from '@chakra-ui/react';
import './MainBaseSkills.scss';

interface MainBaseSkillsProps {
  skillsGroup: SkillItem[];
}

function MainBaseSkills({ skillsGroup }: MainBaseSkillsProps) {

  return (
    <div className="main-base-skills">
      <Tooltip label="Remember who you are" placement="top">
        <div className="main-base-skills__info">
          <GiPoliceOfficerHead className="main-base-skills__info-icon" />
          <h3 className="main-base-skills__info-title">
            Top Base
          </h3>
        </div>
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
