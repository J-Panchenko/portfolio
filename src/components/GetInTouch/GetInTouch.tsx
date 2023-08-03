import * as z from 'zod';
import { FormInput, FormTextarea } from 'components/Inputs';
import { IoLocation, IoMail } from 'react-icons/io5';
import {
  SiGithub,
  SiGmail,
  SiInstagram,
  SiLinkedin,
  SiTelegram,
} from 'react-icons/si';
import { contacts, schemaForm } from 'data';
import { CustomButton } from 'components/Buttons';
import { Tooltip } from '@chakra-ui/react';
import { ReactComponent as Ukraine } from 'assets/images/icons/ukraine.svg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './GetInTouch.scss';

type UserForm = z.infer<typeof schemaForm>;

function GetInTouch() {
  const {
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<UserForm>({
    resolver: zodResolver(schemaForm),
    mode: 'onChange',
    delayError: 500,
  });

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
    <section className="get-in-touch">
      <h1 className="get-in-touch__title">
        Get in touch
      </h1>
      <div className="get-in-touch__container">
        <form
          className="get-in-touch__form"
          target="_blank"
          action="https://formsubmit.co/0dccb1e886340f83d099ded9e4fc3165"
          method="POST"
        >
          <div className="contact-info">
            <p className="contact-info__description">
              I am open to cooperation and work proposals.
              <br />
              Feel free to contact me.
            </p>
            <ul className="contact-info__main">
              <li className="contact-info__main-email">
                <IoMail className="contact-info__main-location-icon" />
                <p className="contact-info__main-email-text">
                  panchenko.yuka@gmail.com
                </p>
              </li>
              <li className="contact-info__main-location">
                <IoLocation className="contact-info__main-location-icon" />
                <p className="contact-info__main-location-text">
                  Ukraine, Kyiv
                </p>
                <Ukraine className="contact-info__main-location-flag" />
              </li>
            </ul>
          </div>
          <div className="get-in-touch__form--top">
            <FormInput
              register={register}
              label="Your name or company"
              registerName="name"
              errorMessage={errors.name?.message}
            />
            <FormInput
              register={register}
              label="Your email"
              registerName="email"
              errorMessage={errors.email?.message}
            />
          </div>
          <FormTextarea
            register={register}
            placeholder="Write your message here..."
            label="Your message"
            registerName="message"
            errorMessage={errors.message?.message}
          />
          <div className="get-in-touch__form--bottom">
            <ul className="get-in-touch__list">
              {contacts.map(({ id, title, value }: Contact) => (
                <li className="get-in-touch__item" key={id} title={title}>
                  <Tooltip
                    label={title}
                    aria-label={title}
                    placement="top"
                    paddingBottom="0.7rem"
                  >
                    <a
                      className="get-in-touch__item-link"
                      href={id === 'email' ? `mailto:${value}` : value}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {getSocialIcon(id)}
                    </a>
                  </Tooltip>
                </li>
              ))}
            </ul>
            <CustomButton
              type="submit"
              text="Send Message"
              disabled={!isValid}
              colorScheme="secondary"
              onClick={() => setTimeout(() => reset(), 7000)}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
