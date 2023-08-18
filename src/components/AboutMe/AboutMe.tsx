import { Dispatch, SetStateAction } from 'react';
import { GiSpeedometer, GiStopwatch, GiTechnoHeart } from 'react-icons/gi';
import { aboutMe, aboutMeMain } from 'data';
import { Helmet } from 'react-helmet';
import './AboutMe.scss';

interface AboutMeProps {
  setActiveTab: Dispatch<SetStateAction<MenuId>>;
}

function AboutMe({ setActiveTab }: AboutMeProps) {

  return (
    <section className="about-me">
      <Helmet>
        <title>About Yuliia Panchenko</title>
        <meta
          name="description"
          content="I'm a Frontend Engineer with 2 years of experience in building web applications."
        />
      </Helmet>
      <h1 className="about-me__title">
        Who am I?
      </h1>
      <ul className="about-me__list">
        {aboutMeMain.map((item: AboutItem) => (
          <li key={item.id} className="about-me__item">
            <p className="about-me__icon-container">
              {item.icon}
            </p>
            <p className="about-me__text">
              {item.text}
              {item.id === 'stack' && (
                <button
                  className="about-me__nav-btn"
                  type="button"
                  onClick={() => setActiveTab('skills')}
                >
                  etc.
                </button>
              )}
            </p>
          </li>
        ))}
      </ul>
      <ul className="about-me__cards">
        <li className="about-me__card">
          <div className="about-me__card-title">
            <p className="about-me__icon-container">
              <GiSpeedometer className="about-me__icon about-me__icon--primary" />
            </p>
            <h2 className="about-me__card-title">
              I am:
            </h2>
          </div>
          <ul className="about-me__card-list">
            {aboutMe.iAm.map((item, index) => (
              <li key={index} className="about-me__card-item">
                <p className="about-me__card-text">
                  {item}
                </p>
              </li>))}
          </ul>
        </li>
        <li className="about-me__card">
          <div className="about-me__card-title">
            <p className="about-me__icon-container">
              <GiStopwatch className="about-me__icon about-me__icon--primary" />
            </p>
            <h2 className="about-me__card-title">
              I can:
            </h2>
          </div>
          <ul className="about-me__card-list">
            {aboutMe.iCan.map((item, index) => (
              <li key={index} className="about-me__card-item">
                <p className="about-me__card-text">
                  {item}
                </p>
              </li>))}
          </ul>
        </li>
      </ul >
      <ul className="about-me__list">
        <li className="about-me__item">
          <p className="about-me__icon-container">
            <GiTechnoHeart className="about-me__icon" />
          </p>
          <p className="about-me__text">
            {aboutMe.hobbies}
          </p>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
