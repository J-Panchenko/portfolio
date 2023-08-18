import {
  AboutMe, BgAuthor, GetInTouch, Menu, MySkills, RecentWorkList, Resume,
} from 'components';
import { AnimatePresence, motion } from 'framer-motion';
import { switchingPages } from 'assets/animation';
import { useState } from 'react';
import './MainPage.scss';

function MainPage() {
  const [activeTab, setActiveTab] = useState<MenuId>(
    localStorage.getItem('activeTab') as MenuId || 'about');

  const getContent = (id: MenuId) => {
    switch (id) {
    case 'about':
      return <AboutMe setActiveTab={setActiveTab} />;
    case 'skills':
      return <MySkills />;
    case 'projects':
      return <RecentWorkList />;
    case 'contact':
      return <GetInTouch />;
    case 'resume':
      return <Resume />;
    default:
      return <Resume />;
    }
  };

  return (
    <motion.section
      className="main-page"
      variants={switchingPages}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ overflow: 'hidden' }}
    >
      <div className="main-page__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="main-page__content"
            variants={switchingPages}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {getContent(activeTab)}
          </motion.div>
        </AnimatePresence>
        <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <BgAuthor />
    </motion.section>
  );
}

export default MainPage;
