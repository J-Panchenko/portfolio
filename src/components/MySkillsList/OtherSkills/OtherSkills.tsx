import { SkillItem, SkillItemProps } from '..';
import { GiPuzzle } from 'react-icons/gi';
import { Tooltip } from '@chakra-ui/react';
import './OtherSkills.scss';

interface OtherSkillsProps {
  skillsGroup: SkillItem[];
}

function OtherSkills({ skillsGroup }: OtherSkillsProps) {

  return (
    <li className="other-skills">
      <Tooltip
        label="Everything you can imagine is real"
        placement="top"
      >
        <div className="other-skills__info">
          <GiPuzzle className="other-skills__info-icon" />
          <h3 className="other-skills__info-title">
            Treasury of the front-end developer&apos;s achievements &#128513;
          </h3>
        </div>
      </Tooltip>
      <ul className="other-skills__list">
        {skillsGroup.map(({ id, ...restProps }: SkillItem) => (
          <SkillItem key={id} {...restProps as SkillItemProps} />
        ))}
      </ul>
    </li>
  );
}

export default OtherSkills;
