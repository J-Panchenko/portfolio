import { experience } from 'data';
import './Experience.scss';

function Experience() {

  return (
    <div className="experience">
      <div className="experience__container">
        <table className="experience__table">
          <tbody className="experience__table-body">
            {experience.map((item: ExperienceItem) => (
              <tr key={item.id} className="experience__table-body-row">
                <td className="experience__table-body-cell about">
                  <p className="my-position">
                    {item.position}
                  </p>
                  <p className="my-period">
                    {item.period}
                  </p>
                </td>
                <td className="experience__table-body-cell company">
                  <p className="company-name">
                    {item.company}
                  </p>
                  <p className="company-description">
                    {item.description}
                  </p>
                </td>
                <td className="experience__table-body-cell duties">
                  <ul className="experience__list">
                    {item.duties.map((responsibility: string) => (
                      <li key={responsibility} className="experience__list-item">
                        <p className="experience__list-item-text">
                          {responsibility}
                        </p>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Experience;
