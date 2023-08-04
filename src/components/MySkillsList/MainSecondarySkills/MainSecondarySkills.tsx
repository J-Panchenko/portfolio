import { GiBackForth, GiConqueror, GiFlowerPot, GiLegArmor } from 'react-icons/gi';
import { SkillItem, SkillItemProps } from '..';
import { Tooltip } from '@chakra-ui/react';
import './MainSecondarySkills.scss';

interface MainSecondarySkillsProps {
  ui: SkillItem[];
  api: SkillItem[];
  tools: SkillItem[];
}

function MainSecondarySkills({ ui, api, tools }: MainSecondarySkillsProps) {

  return (
    <div className="main-secondary-skills">
      <Tooltip
        label="The best way to predict the future is to create it"
        placement="top"
      >
        <div className="main-secondary-skills__info">
          <GiLegArmor className="main-secondary-skills__info-icon" />
          <h2 className="main-secondary-skills__info-title">
            Bottom Base
          </h2>
        </div>
      </Tooltip>
      <ul className="main-secondary-skills__list">
        <li className="main-secondary-skills__list-item">
          <Tooltip
            label="Everyone sees the world in one's own way"
            placement="top"
          >
            <div className="skills-group">
              <GiFlowerPot className="skills-group__icon" />
              <h3 className="skills-group__title">UI</h3>
            </div>
          </Tooltip>
          <ul className="skills-group__list">
            {ui.map(({ id, ...restProps }: SkillItem) => (
              <SkillItem key={id} {...restProps as SkillItemProps} />
            ))}
          </ul>
        </li>
        <li className="main-secondary-skills__list-item">
          <Tooltip
            label="Fall down seven times, stand up eight"
            placement="top"
          >
            <div className="skills-group">
              <GiBackForth className="skills-group__icon" />
              <h3 className="skills-group__title">API</h3>
            </div>
          </Tooltip>
          <ul className="skills-group__list">
            {api.map(({ id, ...restProps }: SkillItem) => (
              <SkillItem key={id} {...restProps as SkillItemProps} />
            ))}
          </ul>
        </li>
        <li className="main-secondary-skills__list-item">
          <Tooltip
            label="Everyone underwent something that changed him"
            placement="top"
          >
            <div className="skills-group">
              <GiConqueror className="skills-group__icon" />
              <h3 className="skills-group__title">Tools</h3>
            </div>
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
