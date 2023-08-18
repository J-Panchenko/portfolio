import { SkillItem, SkillItemProps } from '..';
import { GiPuzzle } from 'react-icons/gi';
import { Tooltip } from 'components';
import { useState } from 'react';
import './OtherSkills.scss';

interface OtherSkillsProps {
  skillsGroup: SkillItem[];
}

function OtherSkills({ skillsGroup }: OtherSkillsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="other-skills">
      <Tooltip
        label="Everything you can imagine is real"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <button
          className="other-skills__info"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="other-skills__info-icon-wrapper">
            <GiPuzzle className="other-skills__info-icon" />
          </div>
          <h3 className="other-skills__info-title">
            Treasury of the front-end developer&apos;s achievements &#128513;
          </h3>
        </button>
      </Tooltip>
      <ul className="other-skills__list">
        {skillsGroup.map(({ id, ...restProps }: SkillItem) => (
          <SkillItem key={id} {...restProps as SkillItemProps} />
        ))}
      </ul>
    </div>
  );
}

export default OtherSkills;
