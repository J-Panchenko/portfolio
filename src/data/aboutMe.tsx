import { GiHornedHelm, GiLaptop, GiMayanPyramid, GiNotebook, GiShakingHands } from 'react-icons/gi';

export const aboutMe = {
  experience: 'I\'m a front-end engineer with 1.5 years of commercial web development experience.',
  stack: 'The main technical stack I\'ve experienced in most projects includes' +
    ' React, JavaScript, TypeScript, Redux Toolkit, Zustand, Material Ui, Ant Design,' +
    ' Tailwind CSS, SASS(SCSS), Framer Motion, ',
  partOfTeam: 'Able to effectively on independent projects,' +
    ' as well as collaborate as part of a productive team.',
  selfMotivated: 'I am a self-motivated person and I am always looking for new challenges.' +
    ' I am constantly improving my skills and learning new technologies.',
  analyticalMind: 'I have an analytical mind and I am able to solve complex problems.',
  iAm: [
    'able to take responsibility for the project;',
    'attentive to details and patient;',
    'able to work under pressure;',
    'not afraid of difficulties;',
    'open to new solutions.',
  ],
  iCan: [
    'read and understand technical documentation;',
    'communicate clearly and effectively;',
    'plan time and work efficiently;',
    'give and receive feedback;',
    'listen to understand.',
  ],
  hobbies: 'I like doing sports! I go to the gym four times a week.' +
    ' I even worked as a trainer. Sometimes I do yoga and stretching.' +
    ' It gives me balance and strength of mind.',
};

export const aboutMeMain: AboutItem[] = [
  {
    id: 'experience',
    icon: <GiHornedHelm className="about-me__icon" />,
    text: aboutMe.experience,
  },
  {
    id: 'stack',
    icon: <GiLaptop className="about-me__icon" />,
    text: aboutMe.stack,
  },
  {
    id: 'part_of_team',
    icon: <GiShakingHands className="about-me__icon" />,
    text: aboutMe.partOfTeam,
  },
  {
    id: 'self_motivated',
    icon: <GiNotebook className="about-me__icon" />,
    text: aboutMe.selfMotivated,
  },
  {
    id: 'analytical_mind',
    icon: <GiMayanPyramid className="about-me__icon" />,
    text: aboutMe.analyticalMind,
  },
];
