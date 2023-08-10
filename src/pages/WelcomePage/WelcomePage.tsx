
import { BgAuthor, CustomButton } from 'components';
import { moveXAnimation, switchingPages } from 'assets/animation';
import { FaArrowRight } from 'react-icons/fa';
import { externalLinks } from 'data';
import me from 'assets/images/welcomePage/me.jpg';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useScreenDimensions } from 'hooks';
import './WelcomePage.scss';

function WelcomePage() {
  const navigate = useNavigate();
  const { screenWidth } = useScreenDimensions();

  const myPhoto = (
    <motion.div
      className="welcome-page__photo"
      variants={moveXAnimation}
      animate="visible"
      initial="hidden"
      custom={-300}
      transition={{ duration: 0.8 }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05, zIndex: 1 }}
    >
      <img
        className="welcome-page__img"
        src={me}
        alt="Yuliia Panchenko"
        loading="lazy"
        height="auto"
        width="100%"
      />
    </motion.div>
  );

  return (
    <motion.section
      className="welcome-page"
      variants={switchingPages}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {screenWidth > 768 ?
        <div className="welcome-page__container welcome-page__container--left">
          {myPhoto}
        </div> : null}
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
          that loves to code and build products{' '}
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
        {screenWidth <= 768 ? myPhoto : null}
        <CustomButton
          type="button"
          text="Learn more"
          size="xl"
          variant="solid"
          colorScheme="secondary"
          rightIcon={<FaArrowRight />}
          style={{ width: '270px' }}
          onClick={() => navigate('/info')}
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
