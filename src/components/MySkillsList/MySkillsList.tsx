import MySkillsItem from './MySkillsItem';
import './MySkillsList.scss';

function MySkillsList() {

  return (
    <section className="my-skills">
      <h1 className="my-skills__title">
        What do I use?
      </h1>
      <ul className="my-skills__list">
        <MySkillsItem value="React" />
      </ul>
    </section>
  );
}

export default MySkillsList;
