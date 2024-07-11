const base: SkillItem[] = [
  {
    id: 'react',
    name: 'React',
    isFavorite: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    isFavorite: true,
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    isFavorite: true,
  },
  {
    id: 'html5',
    name: 'HTML5 + CSS3',
    isFavorite: true,
  },
];

const mustHave: SkillItem[] = [
  {
    id: 'redux',
    name: 'Redux',
    isFavorite: true,
  },
  {
    id: 'rxjs',
    name: 'RxJs',
    isFavorite: true,
  },
  {
    id: 'zustand',
    name: 'Zustand',
    isFavorite: true,
  },
  {
    id: 'react-hook-form',
    name: 'React Hook Form',
    isFavorite: true,
  },
  {
    id: 'formik',
    name: 'Formik',
    isFavorite: true,
  },
  {
    id: 'zod',
    name: 'Zod/Yup',
    isFavorite: true,
  },
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    isFavorite: true,
  },
  {
    id: 'react-router',
    name: 'React Router',
    isFavorite: false,
  },
  {
    id: 'react-helmet',
    name: 'React Helmet',
    isFavorite: false,
  },
  {
    id: 'jest',
    name: 'Jest',
    isFavorite: true,
  },
  {
    id: 'react-testing-library',
    name: 'React Testing Library',
    isFavorite: true,
  },
];

const ui: SkillItem[] = [
  {
    id: 'bem',
    name: 'BEM',
    isFavorite: true,
  },
  {
    id: 'sass',
    name: 'SASS',
    isFavorite: true,
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    isFavorite: true,
  },
  {
    id: 'material-ui',
    name: 'Material UI',
    isFavorite: true,
  },
  {
    id: 'ant-design',
    name: 'Ant Design',
    isFavorite: false,
  },
  {
    id: 'chakra-ui',
    name: 'Chakra UI',
    isFavorite: false,
  },
  {
    id: 'classnames',
    name: 'Classnames',
    isFavorite: false,
  },
  {
    id: 'styled-components',
    name: 'Styled Components',
    isFavorite: false,
  },
];

const tools: SkillItem[] = [
  {
    id: 'eslint',
    name: 'ESLint',
    isFavorite: true,
  },
  {
    id: 'plop',
    name: 'Plop.js',
    isFavorite: true,
  },
  {
    id: 'prettier',
    name: 'Prettier',
    isFavorite: false,
  },
  {
    id: 'git',
    name: 'Git',
    isFavorite: true,
  },
  {
    id: 'postman',
    name: 'Postman',
    isFavorite: false,
  },
  {
    id: 'swagger',
    name: 'Swagger',
    isFavorite: true,
  },
  {
    id: 'slack',
    name: 'Slack',
    isFavorite: true,
  },
  {
    id: 'jira',
    name: 'Jira',
    isFavorite: true,
  },
  {
    id: 'clickup',
    name: 'Click Up',
    isFavorite: true,
  },
  {
    id: 'miro',
    name: 'Miro',
    isFavorite: false,
  },
  {
    id: 'figma',
    name: 'Figma',
    isFavorite: true,
  },
  {
    id: 'invision',
    name: 'InVision',
    isFavorite: false,
  },
];

const api: SkillItem[] = [
  {
    id: 'axios',
    name: 'Axios',
    isFavorite: true,
  },
  {
    id: 'firebase',
    name: 'Firebase',
    isFavorite: true,
  },
  {
    id: 'socketio',
    name: 'Socket.io',
    isFavorite: true,
  },
  {
    id: 'fetch',
    name: 'Fetch API',
    isFavorite: false,
  },
  {
    id: 'rest',
    name: 'REST API',
    isFavorite: true,
  },
  {
    id: 'stripe',
    name: 'Stripe API',
    isFavorite: false,
  },
  {
    id: 'spotify',
    name: 'Spotify API',
    isFavorite: false,
  },
  {
    id: 'figma',
    name: 'Figma API',
    isFavorite: true,
  }
];

const libraries: SkillItem[] = [
  // date&time
  {
    id: 'date-fns',
    name: 'Date-fns',
    isFavorite: true,
  },
  {
    id: 'moment',
    name: 'Moment.js',
    isFavorite: false,
  },
  // charts
  {
    id: 'recharts',
    name: 'Recharts',
    isFavorite: true,
  },
  {
    id: 'chartjs',
    name: 'Chart.js',
    isFavorite: false,
  },
  //localization
  {
    id: 'i18next',
    name: 'React i18next',
    isFavorite: true,
  },
  {
    id: 'react-intl',
    name: 'React Intl',
    isFavorite: false,
  },
  // helpers
  {
    id: 'uuid',
    name: 'UUID',
    isFavorite: true,
  },
  {
    id: 'lodash',
    name: 'Lodash',
    isFavorite: true,
  },
  {
    id: 'lodash-fp',
    name: 'Lodash/fp',
    isFavorite: true,
  },
  {
    id: 'js-cookie',
    name: 'JS Cookie',
    isFavorite: false,
  },
  // guides
  {
    id: 'react-joyride',
    name: 'React Joyride',
    isFavorite: true,
  },
  {
    id: 'introjs',
    name: 'Intro.js',
    isFavorite: false,
  },
  // files&images&text
  {
    id: 'draftjs',
    name: 'Draft.js',
    isFavorite: false,
  },
  {
    id: 'react-draft-wysiwyg',
    name: 'React Draft Wysiwyg',
    isFavorite: false,
  },
  {
    id: 'draftjs-to-html',
    name: 'Draft.js to HTML',
    isFavorite: false,
  },
  {
    id: 'react-to-print',
    name: 'React to Print',
    isFavorite: false,
  },
  {
    id: 'guppy',
    name: 'Guppy.js',
    isFavorite: false,
  },
  {
    id: 'react-latex',
    name: 'React Latex',
    isFavorite: false,
  },
  {
    id: 'html2canvas',
    name: 'HTML2Canvas',
    isFavorite: false,
  },
  {
    id: 'jspdf',
    name: 'JS PDF',
    isFavorite: false,
  },
  {
    id: 'react-csv',
    name: 'React CSV',
    isFavorite: false,
  },
  //other
  {
    id: 'react-share',
    name: 'React Share',
    isFavorite: false,
  },
  {
    id: 'react-slick',
    name: 'React Slick',
    isFavorite: false,
  },
  {
    id: 'react-scroll',
    name: 'React Scroll',
    isFavorite: false,
  },
  {
    id: 'react-toastify',
    name: 'React Toastify',
    isFavorite: true,
  },
  {
    id: 'react-select',
    name: 'React Select',
    isFavorite: false,
  },
  {
    id: 'tinycolor2',
    name: 'TinyColor2',
    isFavorite: true,
  },
  {
    id: 'maplibre',
    name: 'Maplibre GL',
    isFavorite: false,
  },
  {
    id: 'crisp',
    name: 'Crisp SDK Web',
    isFavorite: false,
  },
  {
    id: 'uploadcare',
    name: 'Uploadcare Widget',
    isFavorite: false,
  },
  {
    id: 'react-beautiful-dnd',
    name: 'React Beutiful DnD',
    isFavorite: false,
  },
];

export const skills = { base, mustHave, ui, tools, api, libraries };
