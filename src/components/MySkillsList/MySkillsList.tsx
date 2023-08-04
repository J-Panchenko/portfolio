import { MainBaseSkills, MainImportantSkills, MainSecondarySkills, OtherSkills } from '.';
import { skills } from 'data';
import './MySkillsList.scss';

function MySkillsList() {
  const { base, mustHave, libraries, ...restGroup } = skills;

  return (
    <section className="my-skills">
      <h1 className="my-skills__title">
        What do I use?
      </h1>
      <ul className="my-skills__list">
        <li className="my-skills__list-item">
          <MainBaseSkills skillsGroup={base} />
        </li>
        <li className="my-skills__list-item">
          <MainImportantSkills skillsGroup={mustHave} />
        </li>
        <li className="my-skills__list-item">
          <MainSecondarySkills {...restGroup} />
        </li>
        <li className="my-skills__list-item">
          <OtherSkills skillsGroup={libraries} />
        </li>
      </ul>
    </section>
  );
}

export default MySkillsList;
