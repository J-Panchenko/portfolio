
import { BgAuthor, CustomButton } from 'components';
import { moveXAnimation, switchingPages } from 'assets/animation';
import { FaArrowRight } from 'react-icons/fa';
import { externalLinks } from 'data';
import me from 'assets/images/welcomePage/me.jpg';
import me1 from 'assets/images/welcomePage/me1.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.scss';

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <motion.section
      className="welcome-page"
      variants={switchingPages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ul className="welcome-page__photos">
        <motion.li
          className="welcome-page__photo welcome-page__photo--top"
          variants={moveXAnimation}
          animate="visible"
          initial="hidden"
          custom={-300}
          transition={{ duration: 0.8 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05, zIndex: 1 }}
        >
          <img
            className="welcome-page__img welcome-page__img--top"
            src={me1}
            alt="Yuliia Panchenko"
            loading="lazy"
            height="auto"
            width="101%"
          />
        </motion.li>
        <motion.li
          className="welcome-page__photo welcome-page__photo--bottom"
          variants={moveXAnimation}
          animate="visible"
          initial="hidden"
          custom={-260}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            className="welcome-page__img welcome-page__img--bottom"
            src={me}
            alt="Yuliia Panchenko"
            loading="lazy"
            height="auto"
            width="315%"
          />
        </motion.li>
      </ul>
      <div className="welcome-page__container">
        <motion.h1
          className="welcome-page__title"
          variants={moveXAnimation}
          animate="visible"
          initial="hidden"
          custom={100}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m{' '}
          <span className="welcome-page__title--highlighted">
            Yuliia Panchenko,
          </span><br />
          a <span className="welcome-page__title--highlighted">Frontend Engineer,</span>
        </motion.h1>
        <motion.p
          className="welcome-page__subtitle"
          variants={moveXAnimation}
          animate="visible"
          initial="hidden"
          custom={100}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          that loves to code and build products<br />
          with a delightful user experience.
        </motion.p>
        <motion.figure
          className="welcome-page__figure"
          variants={moveXAnimation}
          animate="visible"
          initial="hidden"
          custom={100}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <blockquote
            className="welcome-page__quote"
            cite={externalLinks.kentBeck}
          >
            <p className="welcome-page__quote-text">
              &quot;I&apos;m not a great programmer;
              <br /> I&apos;m just a good programmer with great habits.&quot;
            </p>
          </blockquote>
          <figcaption className="welcome-page__quote-author">
            <cite>Kent Beck</cite>
          </figcaption>
        </motion.figure>
        <CustomButton
          type="button"
          text="Learn more"
          size="xl"
          variant="solid"
          colorScheme="secondary"
          rightIcon={<FaArrowRight />}
          style={{ width: '270px' }}
          onClick={() => navigate('/about-me')}
        />
      </div>
      <BgAuthor />
      <div className="block1" />
      <div className="block2" />
      <div className="block3" />
    </motion.section>
  );
}

export default WelcomePage;
