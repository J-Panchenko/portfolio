
import { Courses, Education, Experience, MainStack, ResumeHeader } from '.';
import { briefInfo, externalLinks } from 'data';
import { CustomButton } from 'components/Buttons';
import { Helmet } from 'react-helmet';
import './Resume.scss';

function Resume() {

  return (
    <section className="resume">
      <Helmet>
        <title>Yuliia Panchenko - CV</title>
        <meta
          name="description"
          content="My resume with information about my skills, experience and education."
        />
      </Helmet>
      <div className="resume__header">
        <h1 className="resume__title">
          My Resume
        </h1>
        <a
          className="resume__link"
          href={externalLinks.cv}
          download="Yuliia_Panchenko_Frontend_Developer"
          target="_blank"
          rel="noreferrer"
        >
          <CustomButton
            text="Open CV in PDF format"
            className="resume__button"
          />
        </a>
      </div>
      <div className="resume__container">
        <ResumeHeader />
        <div className="resume__block">
          <div className="resume__block-title">
            <hr className="resume__block-title-hr" />
            <h3 className="resume__block-title-text">
              Brief Information
            </h3>
            <hr className="resume__block-title-hr" />
          </div>
          <div className="resume__block-content">
            <p className="resume__block-content-text">
              {briefInfo}
            </p>
          </div>
        </div>
        <div className="resume__block">
          <div className="resume__block-title">
            <hr className="resume__block-title-hr" />
            <h3 className="resume__block-title-text">
              Skills and Technologies
            </h3>
            <hr className="resume__block-title-hr" />
          </div>
          <div className="resume__block-content">
            <MainStack />
          </div>
        </div>
        <div className="resume__block">
          <div className="resume__block-title">
            <hr className="resume__block-title-hr" />
            <h3 className="resume__block-title-text">
              Experience
            </h3>
            <hr className="resume__block-title-hr" />
          </div>
          <div className="resume__block-content">
            <Experience />
          </div>
        </div>
        <div className="resume__block">
          <div className="resume__block-title">
            <hr className="resume__block-title-hr" />
            <h3 className="resume__block-title-text">
              Certificates and Courses
            </h3>
            <hr className="resume__block-title-hr" />
          </div>
          <div className="resume__block-content">
            <Courses />
          </div>
        </div>
        <div className="resume__block">
          <div className="resume__block-title">
            <hr className="resume__block-title-hr" />
            <h3 className="resume__block-title-text">
              Education
            </h3>
            <hr className="resume__block-title-hr" />
          </div>
          <div className="resume__block-content">
            <Education />
          </div>
        </div>
        <div className="resume__block">
          <div className="resume__block-title">
            <hr className="resume__block-title-hr" />
            <h3 className="resume__block-title-text">
              Languages
            </h3>
            <hr className="resume__block-title-hr" />
          </div>
          <div className="resume__block-content">
            <ul className="resume__block-content-list">
              <li className="resume__block-content-item">
                <p className="resume__block-content-item-text">
                  Ukrainian - Native
                </p>
              </li>
              <li className="resume__block-content-item">
                <p className="resume__block-content-item-text">
                  English - Intermediate
                </p>
              </li>
              <li className="resume__block-content-item">
                <p className={'resume__block-content-item-text' +
                  ' resume__block-content-item-text--dark'}>
                  russian - Fluent
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Resume;
