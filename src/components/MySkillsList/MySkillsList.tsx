import { MainBaseSkills, MainImportantSkills, MainSecondarySkills, OtherSkills } from '.';
import { Helmet } from 'react-helmet';
import { skills } from 'data';
import './MySkillsList.scss';

function MySkillsList() {
  const { base, mustHave, libraries, ...restGroup } = skills;

  return (
    <section className="my-skills">
      <Helmet>
        <title>What does Yuliia Panchenko use?</title>
        <meta
          name="description"
          content="I use React, TypeScript, Redux and other tools to build web applications."
        />
      </Helmet>
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
