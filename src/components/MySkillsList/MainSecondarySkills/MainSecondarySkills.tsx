import { GiBackForth, GiConqueror, GiFlowerPot, GiLegArmor } from 'react-icons/gi';
import { SkillItem, SkillItemProps } from '..';
import { Tooltip } from 'components';
import { useState } from 'react';
import './MainSecondarySkills.scss';

interface MainSecondarySkillsProps {
  ui: SkillItem[];
  api: SkillItem[];
  tools: SkillItem[];
}

function MainSecondarySkills({ ui, api, tools }: MainSecondarySkillsProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isUiOpen, setIsUiOpen] = useState<boolean>(false);
  const [isApiOpen, setIsApiOpen] = useState<boolean>(false);
  const [isToolsOpen, setIsToolsOpen] = useState<boolean>(false);

  return (
    <div className="main-secondary-skills">
      <Tooltip
        label="The best way to predict the future is to create it"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <button
          className="main-secondary-skills__info"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="other-skills__info-icon-wrapper">
            <GiLegArmor className="main-secondary-skills__info-icon" />
          </div>
          <h2 className="main-secondary-skills__info-title">
            Bottom Base
          </h2>
        </button>
      </Tooltip>
      <ul className="main-secondary-skills__list">
        <li className="main-secondary-skills__list-item">
          <Tooltip
            small
            label="Everyone sees the world in one's own way"
            isOpen={isUiOpen}
            setIsOpen={setIsUiOpen}
          >
            <button
              className="skills-group"
              type="button"
              onClick={() => setIsUiOpen(!isUiOpen)}
            >
              <div className="other-skills__info-icon-wrapper">
                <GiFlowerPot className="skills-group__icon" />
              </div>
              <h3 className="skills-group__title">UI</h3>
            </button>
          </Tooltip>
          <ul className="skills-group__list">
            {ui.map(({ id, ...restProps }: SkillItem) => (
              <SkillItem key={id} {...restProps as SkillItemProps} />
            ))}
          </ul>
        </li>
        <li className="main-secondary-skills__list-item">
          <Tooltip
            small
            label="Fall down seven times, stand up eight"
            isOpen={isApiOpen}
            setIsOpen={setIsApiOpen}
          >
            <button
              className="skills-group"
              type="button"
              onClick={() => setIsApiOpen(!isApiOpen)}
            >
              <div className="other-skills__info-icon-wrapper">
                <GiBackForth className="skills-group__icon" />
              </div>
              <h3 className="skills-group__title">API</h3>
            </button>
          </Tooltip>
          <ul className="skills-group__list">
            {api.map(({ id, ...restProps }: SkillItem) => (
              <SkillItem key={id} {...restProps as SkillItemProps} />
            ))}
          </ul>
        </li>
        <li className="main-secondary-skills__list-item">
          <Tooltip
            small
            label="Everyone underwent something that changed him"
            isOpen={isToolsOpen}
            setIsOpen={setIsToolsOpen}
          >
            <button
              className="skills-group"
              type="button"
              onClick={() => setIsToolsOpen(!isToolsOpen)}
            >
              <div className="other-skills__info-icon-wrapper">
                <GiConqueror className="skills-group__icon" />
              </div>
              <h3 className="skills-group__title">Tools</h3>
            </button>
          </Tooltip>
          <ul className="skills-group__list">
            {tools.map(({ id, ...restProps }: SkillItem) => (
              <SkillItem key={id} {...restProps as SkillItemProps} />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default MainSecondarySkills;
