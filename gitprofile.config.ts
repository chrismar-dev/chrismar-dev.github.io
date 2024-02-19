// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chrismar-dev', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'More Projects on Github ',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['chrismar-dev/AvailabilityTracker','chrismar-dev/OpenGL-Engine', 'chrismar-dev/Serverless-AWS-Management-Tool', 'chrismar-dev/Enchantia-Quests-NLP-Powered-Story-Adventure' ], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Main projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'DevPulse',
          description:
            'A full stack MERN app for devs to chat on! Click to see GitHub code and live link.',
          imageUrl:
            'https://devpulse-app-vdcy-git-master-chrismar-devs-projects.vercel.app/logo.svg',
          link: 'https://github.com/chrismar-dev/devpulse_app',
        },
        {
          title: 'AWS Serverless Manager',
          description:
            'An in progress AWS manager that operates serverless. No live demo is available yet.',
          imageUrl:
            'https://static-00.iconduck.com/assets.00/aws-icon-2048x2048-274bm1xi.png',
          link: 'https://example.com',
        },
        {
          title: 'PhotoWeather',
          description:
            'A fun and unique photo based weather app. Click to see GitHub code and live link.',
          imageUrl:
            'https://user-images.githubusercontent.com/55571865/201538463-51fde9a2-998a-4fd6-b0eb-b7bcda38e448.png',
          link: 'https://github.com/chrismar-dev/Photo-Weather-App',
        },
        {
          title: 'JSON Sticky Notes',
          description:
            'A sticky notes app that saves user information locally with JSON Click to see GitHub code and live link.',
          imageUrl:
            'https://cdn.discordapp.com/attachments/702286241802223627/1209255048476106752/image.png?ex=65e64186&is=65d3cc86&hm=7b2720a1031468e3b87ab58de400556005a50ebfd9ab2992f0046e915c91f3da&',
          link: 'https://github.com/chrismar-dev/Sticky-Notes-App',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Christian Marbury',
    description: '',
    imageURL: 'https://avatars.githubusercontent.com/u/55571865?v=4',
  },
  social: {
    linkedin: 'christian-mar',
    email: 'cjmarbury03@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1-cIbmyBM4Rk_MSBT14P_LgPUWxd00MfL/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'Angular',
    'Java',
    'Python',
    'C++',
    'C#',
    'AWS',
    'SQL',
    'GraphQL',
    'Git',
    'Docker',
    'PHP',
    'CSS',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Connect Link',
      position: 'Software Engineer Intern',
      from: 'December 2023',
      to: 'Present',
      companyLink: 'https://myconnectlink.com/',
    },
    {
      company: 'Mt. San Antonio College',
      position: 'Software Engineer Intern',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://www.mtsac.edu/it/',
    },
    {
      company: 'Mt. San Antonio College',
      position: 'Software Engineer Intern',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://www.mtsac.edu/it/',
    },
  ],
  certifications: [
    {
      name: 'Intermediate Web Development',
      body: 'CodePath',
      year: 'Spring 2024',
      link: 'https://codepath.org',
    },
  ],
  educations: [
    {
      institution: 'Western Governors University',
      degree: 'BS Computer Science',
      from: '2024',
      to: 'May 2025',
    },
    {
      institution: 'Santa Monica College',
      degree: 'AS Computer Science',
      from: 'August 2022',
      to: 'June 2024',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
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
    defaultTheme: 'dark',

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

  //// Optional Footer. Supports plain text or HTML.
  //footer: `Made with <a 
  //    class="text-primary" href="https://github.com/arifszn/gitprofile"
  //    target="_blank"
  //    rel="noreferrer"
  //  >GitProfile</a> and ❤️`,
//
  enablePWA: true,
};

export default CONFIG;
