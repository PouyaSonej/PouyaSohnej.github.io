// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'pouyasonej', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',

projects: {

    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects

        projects: ['pouyasonej/Image-processing_GonalezBook', 'pouyasonej/Natural-language-processing-NLP',
                   'pouyasonej/Python_ImageProcessing', 'pouyasonej/cs-video-courses',
                   'pouyasonej/Neural-Networks', 'pouyasonej/Diabetic-Retinopathy'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    
  },
  seo: {
    title: 'Pouya Sohrabinejad',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'PouyaSohrabinejad',
    twitter: 'pouya.sonej',
    researchGate: '',
    instagram: 'pouya.sonej',
    threads: 'pouya.sonej',
    telegram: '@qpouya',
    phone: '+98 - 9934465567',
    email: 'pouyasohnej@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1WyUGicMXvb2pZ77cxhUyUSxTTE0Upkxx/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MATLAB',
    'C',
    'C++',
    'C#',
    'Assembly',
    'PHP',
    'HTML',
    'CSS',
    'JavaScript',
    'wordpress',
    'Git',
    'Docker',
    'Jupyter',
    'Pycharm',
    'Kaggle',
    'Tensorflow',
    'Sickit-learn', 
    'Pytorch',
    'Proteus'
  ],
  experiences: [
    {
      company: 'Shahrood University of Technology',
      position: 'Research Assistant',
      from: 'June 2023',
      to: 'Present',
      companyLink: 'shahroodut.ac.ir',
    },
    {
      company: 'Gam',
      position: 'Hardware Technician',
      from: 'July 2021',
      to: 'Present',
      companyLink: 'https://.com',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning',
      body: 'Stanford CS229 machine learning course by prof. Tengyu Ma and prof. Christopher Re',
      year: '2022-2023',
      link: '',
    },
    {
      name: '',
      body: 'Stanford CS229 machine learning course by prof. Andrew Ng',
      year: '',
      link: '',
    },
    {
      name: '',
      body: '5 deep learning courses of Deeplearning.ai by prof. Andrew Ng',
      year: '',
      link: '',
    },
    {
      name: '',
      body: 'Machine learning specialization course of Deeplearning.ai by prof. Andrew Ng',
      year: '',
      link: '',
    },

    {
      name: 'Deep Learning for Computer Vision',
      body: 'Iran university of Science and Technology (IUST) deep learning course with ComputerVision focus by prof. Mohammad Reza Mohammadi',
      year: '2022-2023',
      link: '',
    },
    {
      name: '',
      body: '',
      year: 'Michigan deep learning for computer vision course by Justin Johnson',
      link: '',
    },
    {
      name: 'Generative AI',
      body: '2023',
      year: 'Career essentials in Generative AI course by Microsoft and LinkedIn by: Pinar Seyhan',
      link: '',
    },
    {
      name: '',
      body: '',
      year: 'DeepLearning.ai',
      link: '',
    },
    {
      name: 'Multimodal Programming',
      body: '2024',
      year: 'Stanford Multimodal Machine Learning course CVPR 2022',
      link: '',
    },
    {
      name: '',
      body: '',
      year: 'Carnegie Mellon University Multimodal Machine Learning course',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Shahrood University of Technology',
      degree: 'MSc-Artificial Intelligence and Robotics',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Zand Institute of Higher Education',
      degree: 'Bachelor-Computer engineering',
      from: '2017',
      to: '2021',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },

  ],
// Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'pouyasonej', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
