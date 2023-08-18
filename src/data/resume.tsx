export const resumeContacts = {
  email: 'panchenko.yuka@gmail.com',
  phone: '+38 (063) 157 09 46',
  location: 'Kyiv, Ukraine',
  github: 'github.com/J-Panchenko',
  linkedin: 'linkedin.com/in/yuliia-panchenko-143b6321b',
  telegram: 't.me/yuka_panchy',
};

export const briefInfo = 'I\'m a Frontend Engineer with 2 years of' +
  ' experience in building web applications. I\'m passionate about creating products with' +
  ' a delightful user experience. I have a good knowledge of HTML, CSS, JavaScript, TypeScript,' +
  ' React, Redux, Git, and other technologies. I am a responsible, hard-working,' +
  ' and communicative person. I am always ready to learn new things and improve my skills.';

export const mainStackLeftSide: StackItem[] = [
  {
    id: 1,
    title: 'HTML5, CSS3',
    grade: 5,
  },
  {
    id: 2,
    title: 'JavaScript (ES6+)',
    grade: 5,
  },
  {
    id: 3,
    title: 'TypeScript',
    grade: 5,
  },
  {
    id: 4,
    title: 'React + React Patterns',
    grade: 5,
  },
  {
    id: 5,
    title: 'Redux Toolkit, Zustand',
    grade: 4,
  },
  {
    id: 6,
    title: 'Fetch API, Axios (REST API), Socket.io (WebSockets)',
    grade: 5,
  },
  {
    id: 7,
    title: 'BEM, SASS/SCSS, Tailwind CSS, Styled Components',
    grade: 5,
  },
  {
    id: 8,
    title: 'Material UI, Ant Design, Chakra UI',
    grade: 4,
  },
];

export const mainStackRightSide: StackItem[] = [
  {
    id: 1,
    title: 'Animation (Framer Motion, React Spring)',
    grade: 4,
  },
  {
    id: 2,
    title: 'React Hook Form (validation - Yup, Zod)',
    grade: 4,
  },
  {
    id: 3,
    title: 'React Testing Library, Jest',
    grade: 3,
  },
  {
    id: 4,
    title: 'Reacti18next, ReactIntl',
    grade: 5,
  },
  {
    id: 5,
    title: 'ESLint, Prettier',
    grade: 5,
  },
  {
    id: 6,
    title: 'Webpack, Babel, npm',
    grade: 3,
  },
  {
    id: 7,
    title: 'Git, GitHub',
    grade: 5,
  },
  {
    id: 8,
    title: 'Click Up, Jira, Figma, InVision',
    grade: 5,
  },
];


export const experience: ExperienceItem[] = [
  {
    id: 1,
    company: 'EU4UA.org',
    position: 'Frontend Engineer',
    period: 'May 2023 - Present',
    description: 'is a French nonprofit association that' +
      ' helps Ukrainian refugees to suttle down in Europe.',
    duties: [
      'Developed the front-end part of the project.',
      'Created a base structure of the project.',
      'Added an ESLint configuration to the client side.',
      'Implemented a responsive design using Tailwind CSS.',
      'Implemented a multi-language support using Reacti18next.',
      'Developed a custom form validation using React Hook Form and Zod.',
      'Wrote unit tests using React Testing Library and Jest.',
      'Worked according to the Scrum methodology, used Jira.'
    ],
  },
  {
    id: 2,
    company: 'SaaS Insiders (formerly TensionX)',
    position: 'Junior Frontend Developer',
    period: 'March 2022 - May 2023',
    description: 'is a web tech company' +
      ' that developing SaaS products for business clients across the US.',
    duties: [
      'Developed the front-end part of the project.',
      'Implemented a responsive design using media queries.',
      'Developed a custom form validation using React Hook Form and Yup.',
      'Created a base template of the project for the team.',
      'Added an ESLint configuration and provided TypeScript support to the client side.',
      'Performed various administrative duties such as planning,' +
      ' task distribution, estimating projects.',
      'Worked well independently and on a team to solve problems.',
      'Worked to meet client deadlines and requirements, used ClickUp.',
    ],
  },
  {
    id: 3,
    company: 'Freelance',
    position: 'Trainee Frontend Developer',
    period: 'November 2021 - February 2022',
    description: 'I was working on online store of my friends to improve my skills.',
    duties: [
      'Developed the frontend part of the project.',
      'Developed a responsive design using media queries.',
      'Worked with InvisionApp and Material UI.',
    ],
  },
];

export const courses: CourseItem[] = [
  {
    id: 1,
    title: '2023 | Complete React Developer in 2023 at Udemy',
    description: 'This course is all about React(v18) and the ecosystem around it.' +
      ' I learned to used GraphQL, Redux Thunk and Redux Saga, Firebase, Stripe API.' +
      ' I also learned how to used React Design Patterns' +
      ' and converted app to Progressive Web App.',
    hasCertificate: true,
    link: 'https://res.cloudinary.com/dzc60mxjg/image/upload/v1692340895/eu4ua/React23_edkxgv.jpg',
  },
  {
    id: 2,
    title: '2022 | Testing React with Jest and React Testing Library (RTL) at Udemy + Docs',
    description: 'This course is all about testing React components.' +
      ' I learned how to write unit tests for simple and complex React' +
      ' applications with React Testing Library and Jest.' +
      ' I also learned how to correct common errors returned by Testing Library.',
    hasCertificate: true,
    link: 'https://res.cloudinary.com/dzc60mxjg/image/upload/v1691755218/eu4ua/testingCertificate_fwy7fo.jpg',
  },
  {
    id: 3,
    title: '2022 | TypeScript with typescriptlang.org,' +
      ' React TypeScript Cheatsheet, YouTube channels',
    description: 'I\'ve learned TypeScript from the official documentation and' +
      ' React TypeScript Cheatsheet. I\'ve also watched a lot of videos on YouTube' +
      ' about TypeScript and React with TypeScript.',
    hasCertificate: false,
  },
  {
    id: 4,
    title: '2021 | JavaScript with MDN Web Docs, learn.javascript, YouTube channels',
    description: 'I\'ve learned JavaScript from the official documentation and' +
      ' learn.javascript. I\'ve also watched a lot of videos on YouTube about JavaScript' +
      ' and programming in general.',
    hasCertificate: false,
  },
  {
    id: 5,
    title: '2021 | React + Redux - professional development at Udemy',
    description: 'This course is all about React and Redux. I learned how to' +
      ' to create modern front-end applications with React and Redux. I also used' +
      ' the REST API to access data on the server and used React Hooks.',
    hasCertificate: true,
    link: 'https://res.cloudinary.com/dzc60mxjg/image/upload/v1692340895/eu4ua/ReactRedux_ry3rzt.jpg',
  },
  {
    id: 6,
    title: '2021 | HTML + CSS at HTML Academy',
    description: 'This course is all about HTML and CSS. I learned how to' +
      ' build a real-world application with HTML and CSS. I also learned how' +
      ' to use CSS to simplify your HTML code. I created CSS animations and' +
      ' learned how to use CSS preprocessors.',
    hasCertificate: false,
  },
];
