import { IoCall, IoLocation, IoMail } from 'react-icons/io5';
import { SiGithub, SiLinkedin, SiTelegram } from 'react-icons/si';
import { hiddenPhotoMask, visiblePhotoMask } from 'assets/animation';
import { ReactComponent as Ukraine } from 'assets/images/icons/ukraine.svg';
import me from 'assets/images/resume.webp';
import { motion } from 'framer-motion';
import { resumeContacts } from 'data';
import { useState } from 'react';
import './ResumeHeader.scss';

function ResumeHeader() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="resume-header">
      <motion.div
        className="resume-header__photo-container"
        initial={false}
        animate={isLoaded ?
          { WebkitMaskImage: visiblePhotoMask(), maskImage: visiblePhotoMask() } :
          { WebkitMaskImage: hiddenPhotoMask('to left'), maskImage: hiddenPhotoMask() }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <img
          className="resume-header__photo"
          src={me}
          alt="Yuliia Panchenko"
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      </motion.div>
      <div className="resume-header__info">
        <h2 className="resume-header__info-name">
          Yuliia Panchenko
        </h2>
        <p className="resume-header__info-position">
          Frontend Developer
        </p>
        <div className="resume-header__info-contacts">
          <ul className="resume-header__info-contacts-list">
            <li className="resume-header__info-contacts-item">
              <p className="contact-icon__container">
                <IoCall className="contact-icon" />
              </p>
              <p className="contact-text">
                {resumeContacts.phone}
              </p>
            </li>
            <li className="resume-header__info-contacts-item">
              <p className="contact-icon__container">
                <IoMail className="contact-icon" />
              </p>
              <p className="contact-text">
                {resumeContacts.email}
              </p>
            </li>
            <li className="resume-header__info-contacts-item">
              <p className="contact-icon__container">
                <IoLocation className="contact-icon" />
              </p>
              <p className="contact-text">
                {resumeContacts.location}
              </p>
              <Ukraine className="contact-icon--flag" />
            </li>
          </ul>
          <ul className="resume-header__info-contacts-list">
            <li className="resume-header__info-contacts-item">
              <p className="contact-icon__container">
                <SiGithub className="contact-icon" />
              </p>
              <p className="contact-text">
                {resumeContacts.github}
              </p>
            </li>
            <li className="resume-header__info-contacts-item">
              <p className="contact-icon__container">
                <SiLinkedin className="contact-icon" />
              </p>
              <p className="contact-text">
                {resumeContacts.linkedin}
              </p>
            </li>
            <li className="resume-header__info-contacts-item">
              <p className="contact-icon__container">
                <SiTelegram className="contact-icon" />
              </p>
              <p className="contact-text">
                {resumeContacts.telegram}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumeHeader;
