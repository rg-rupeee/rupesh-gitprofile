// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'rg-rupeee', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: './',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repositories',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
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
        projects: [
          'rg-rupeee/depxbox',
          'rg-rupeee/html-to-pdf',
          'rg-rupeee/saferU-backend',
          'rg-rupeee/rpoll',
          'rg-rupeee/multivendor-ecommerce',
          'rg-rupeee/c_and_cpp',
        ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Top Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'DepXbox',
          description:
            'Depxbox simplifies testing npm packages by handling setup, letting you quick and easy testing.',
          imageUrl:
            'https://plus.unsplash.com/premium_photo-1675544613154-d82fe5bf1373?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: 'https://www.npmjs.com/package/depxbox',
        },
        {
          title: 'YourStore',
          description:
            'Built a scalable multivendor e-commerce app with 30+ APIs for seamless operations.',
          imageUrl:
            'https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: 'https://github.com/rg-rupeee/multivendor-ecommerce',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Rupesh Garhwal',
    description:
      'Backend Developer with expertise in TypeScript, Java, Node.js, SQL, MongoDB, and Kafka. Specializing in scalable microservices, cloud-native applications, and distributed systems using event-driven architecture and Kubernetes for containerization. Explore my projects, skills, and experience in backend development.',
    imageURL: '',
  },
  social: {
    linkedin: 'rupesh03',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'http://rupesh.vercel.app',
    phone: '',
    email: 'rupeshgarhwal3920@gmail.com',
    leetcode: 'rupeshgarhwal3920',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1LRLLDP9lsRTeMyoKMHHZHgkkEW2tq9Cn/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C++',
    'TypeScript',
    'JavaScript',
    'Java',
    'Python',
    'Node.js',
    'Express.js',
    'Nest.js',
    'FastAPI',
    'React.js',
    'MongoDB',
    'MySQL',
    'Redis',
    'ElasticSearch',
    'Kafka',
    'Microservices',
    'Docker',
    'Kubernetes',
    'Azure',
    'AWS',
  ],
  experiences: [
    {
      company: 'Bajaj Finserv Health',
      position: 'Software Development Engineer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://www.bajajfinservhealth.in/',
    },
    {
      company: 'Bajaj Finserv Health',
      position: 'Software Developer Intern - Backend',
      from: 'July 2022',
      to: 'June 2023',
      companyLink: 'https://www.bajajfinservhealth.in/',
    },
    {
      company: 'Zluri',
      position: 'Software Developer Intern - Integrations',
      from: 'June 2021',
      to: 'June 2022',
      companyLink: 'https://www.zluri.com/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      degree: 'Bachelors of Technology',
      from: '2019',
      to: '2023',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  about: {
    title: 'About Me',
    content: [
      "I'm a passionate <b>Software Developer</b> specializing in building scalable <b>backend systems</b>, optimizing performance, and solving complex problems. I also have experience with <b>frontend technologies</b> like React.js, enabling me to build seamless user experiences. 🚀",

      'With expertise in <b>backend development</b>, <b>microservices</b>, <b>event-driven architecture</b>, <b>containerization technologies</b>, and  <b>cloud platforms</b>, I focus on crafting efficient and maintainable solutions. 📈',

      'Beyond development, I enjoy solving Data Structures and Algorithms (DSA) problems and continuously improving my problem-solving skills. Beyond my technical abilities, I am a collaborative team player and believe in open communication and knowledge sharing. 🫂',

      "Let's connect and collaborate to build something amazing! 🤝",
    ],
  },
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'rupeee', // to hide blog section, keep it empty
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
    defaultTheme: 'fantasy',

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
      // 'light',
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
  footer: `Open to ideas & opportunities — <a 
      class="text-primary" href="https://www.linkedin.com/in/rupesh03"
      target="_blank"
      rel="noreferrer"
    >let's talk!</a> 💬 `,

  enablePWA: true,
};

export default CONFIG;
