import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTelegram } from 'react-icons/si';
import { contacts } from 'data';
import './ContactInfo.scss';

function ContactInfo() {

  const getSocialIcon = (social: SocialId) => {
    switch (social) {
    case 'github':
      return <SiGithub className="contact-info__icon" />;
    case 'email':
      return <SiGmail className="contact-info__icon" />;
    case 'instagram':
      return <SiInstagram className="contact-info__icon" />;
    case 'linkedin':
      return <SiLinkedin className="contact-info__icon" />;
    case 'telegram':
      return <SiTelegram className="contact-info__icon" />;
    default:
      return null;
    }
  };

  return (
    <div className="contact-info">
      <ul className="contact-info__list">
        {contacts.map(({ id, title, value }: Contact) => (
          <li className="contact-info__item" key={id} title={title}>
            {getSocialIcon(id)}
            <a
              className="contact-info__item-link"
              href={id === 'email' ? `mailto:${value}` : value}
              target="_blank"
              rel="noreferrer"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
