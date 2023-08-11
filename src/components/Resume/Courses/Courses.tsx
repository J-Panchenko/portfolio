import { PiCertificateBold } from 'react-icons/pi';
import { courses } from 'data';
import './Courses.scss';

function Courses() {

  return (
    <div className="courses">
      <ul className="courses__list">
        {courses.map((course: CourseItem) => (
          <li className="courses__item" key={course.id}>
            <div className="courses__item-title">
              <h4 className="courses__item-title-text">
                {course.title}
              </h4>
              {course.hasCertificate && (
                <a
                  className="courses__item-title-link"
                  href={course.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <PiCertificateBold />
                </a>
              )}
            </div>
            <p className="courses__item-description">
              {course.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
