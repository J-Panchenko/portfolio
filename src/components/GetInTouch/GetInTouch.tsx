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
import axios from 'axios';
import { encode } from 'js-base64';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import './GetInTouch.scss';

type UserForm = z.infer<typeof schemaForm>;

function GetInTouch() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserForm>({
    resolver: zodResolver(schemaForm),
    mode: 'onChange',
    delayError: 500,
  });

  const onSubmit = async (data: UserForm) => {
    try {
      const apiKey = '8ce1cd3e971f8b5e93bb9b6acb3ddd37';
      const apiSecret = 'b2440e5fd72a6cf3c72615d75fb54819';
      const auth = encode(`${apiKey}:${apiSecret}`);
      const response = await axios.post(
        'https://api.mailjet.com/v3.1/send',
        {
          Messages: [
            {
              From: {
                Email: data.email,
              },
              To: [
                {
                  Email: 'panchenko.yuka@gmail.com',
                },
              ],
              Subject: data.name,
              TextPart: data.message,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${auth}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Message sent successfully!');
      } else {
        console.log('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.log('An error occurred. Please try again later.');
      console.log(error);
    }
    reset();
  };

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
          onSubmit={handleSubmit(onSubmit)}
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
              label="Email"
              registerName="email"
              errorMessage={errors.email?.message}
            />
          </div>
          <FormTextarea
            register={register}
            placeholder="Write your message here..."
            label="Message"
            registerName="message"
            errorMessage={errors.message?.message}
            size="lg"
            resize="vertical"
            minHeight={150}
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
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
