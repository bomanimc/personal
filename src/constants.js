export const SkillAreaColors = {
  name: '#ffffff',
  engineering: '#ff0000',
  experiment: '#0000ff',
  art: '#20bf6b',
};

export const MediaTypes = {
  image: 'image',
  video: 'video',
};

const Tags = {
  engineering: 'engineering',
  experiment: 'experiment',
  art: 'art',
};

export const ProjectSlug = {
  shrumen: 'shrumen-lumen',
  waves: 'waves',
  npr: 'news-page-index',
  gitrocket: 'gitrocket',
  versions: 'versions-jasper-lotti',
  dialup: 'dial-up',
  negativereel: 'negativereel',
  topolamp: 'topolamp',
  reflections: 'reflections',
  drawachart: 'draw-a-chart',
  cakes: 'cakes-da-killa-site',
  bikewheelsynth: 'bike-wheel-synth',
  codeasart: 'code-as-art',
  futurecity: 'future-city',
  informedconsent: 'informed-consent',
  blackhealthbook: 'black-health-book',
};

export const FeaturedProjects = [
  ProjectSlug.informedconsent,
  ProjectSlug.blackhealthbook,
  ProjectSlug.shrumen,
  ProjectSlug.versions,
  ProjectSlug.codeasart,
];

export const ProjectOrder = [
  ProjectSlug.informedconsent,
  ProjectSlug.blackhealthbook,
  ProjectSlug.shrumen,
  ProjectSlug.versions,
  ProjectSlug.codeasart,
];

export const ProjectContent = {};
ProjectContent[ProjectSlug.shrumen] = {
  id: ProjectSlug.shrumen,
  title: 'Shrumen Lumen',
  tags: [Tags.art],
  body: `[Foldhaus Collective's](https://www.foldhaus.com/shrumen-lumen/)
  interactive art installation made up of five glowing mushrooms
  that react to the presence of people. Currently on display at the
  [Oakland Museum](https://museumca.org/exhibit/no-spectators-art-burning-man)
  until February '20.`,
  tools: 'Arduino, NeoPixel, MadMapper, PixelPusher, Raspberry Pi, Node, Processing, Python, C.',
  role: `Lead Software Developer. Hardware-Software Integration. In
  collaboration with the [Foldhaus Collective](https://www.foldhaus.com) team.`,
  site: 'https://www.foldhaus.com/shrumen-lumen',
  primaryLink: `/${ProjectSlug.shrumen}`,
  media: 'shrumen_main',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'shrumen_main',
    },
    {
      type: MediaTypes.image,
      src: 'shrumen_sandy',
    },
    {
      type: MediaTypes.video,
      videoUrl: 'https://www.youtube.com/watch?v=T75FvUDirNM', // Making Mushrooms Glow
    },
  ],
};

ProjectContent[ProjectSlug.waves] = {
  id: ProjectSlug.waves,
  title: 'Waves',
  tags: [Tags.art],
  body: `Prototype device that encodes responses to personal questions as
  printed sound waves. Featured in the
  [Raspberry Pi blog](https://www.raspberrypi.org/blog/printed-sound-wave/)
  and [MagPi](https://www.raspberrypi.org/magpi-issues/MagPi61.pdf) (p.31 - p.32), the
  official Raspberry Pi magazine. Presented at Segal Design Expo '17.`,
  tools: 'Raspberry Pi, Python, JavaScript.',
  role: `Developer and Designer. In
  collaboration with [Eunice Lee](https://euniceylee.github.io/) and Matt Zhang.`,
  media: 'waves_main',
  primaryLink: `/${ProjectSlug.waves}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'waves_showing',
    },
    {
      type: MediaTypes.image,
      src: 'waves_prints',
    },
    {
      type: MediaTypes.video,
      videoUrl: 'https://vimeo.com/220101786', // Waves Demo
    },
    {
      type: MediaTypes.video,
      videoUrl: 'https://vimeo.com/220102610', // Eunice Testing Waves
    },
  ],
};

ProjectContent[ProjectSlug.gitrocket] = {
  id: ProjectSlug.gitrocket,
  title: 'GitRocket',
  tags: [Tags.engineering],
  body: `A fun plugin for the [Hyper](https://hyper.is/) terminal that launches
  a rocket ship when you push code with Git. It has received 40+ GitHub stars and
  [over 12,000 downloads](https://npm-stat.com/charts.html?package=gitrocket&from=2017-07-01)
  via NPM.`,
  tools: 'React, Redux, Hyper.',
  role: 'Individual Project',
  site: 'https://www.npmjs.com/package/gitrocket',
  media: 'gitrocket_main_video',
  primaryLink: `/${ProjectSlug.gitrocket}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'gitrocket_main_video',
    },
  ],
};

ProjectContent[ProjectSlug.versions] = {
  id: ProjectSlug.versions,
  title: "Visuals for 'Versions'",
  tags: [Tags.art],
  body: `A live-mixed VJ (video jockey) set for [Jasper Lotti's 'Versions'](https://open.spotify.com/album/2oWuiYDtbQZc0It2qcw4jl)
  project. These visuals were a backdrop for Jasper Lotti's live performances
  at Elsewhere, H0L0, and Playground Coffee.`,
  tools: 'CoGe, Giphy, AKAI MP32.',
  role: 'Individual Project',
  media: 'versions_main',
  primaryLink: `/${ProjectSlug.versions}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'versions_main',
    },
    {
      type: MediaTypes.image,
      src: 'versions_wings.jpg',
    },
    {
      type: MediaTypes.image,
      src: 'versions_dark_rose.jpg',
    },
    {
      type: MediaTypes.image,
      src: 'versions_white_hex.jpg',
    },
    {
      type: MediaTypes.image,
      src: 'versions_pillow.jpg',
    },
  ],
};

ProjectContent[ProjectSlug.futurecity] = {
  id: ProjectSlug.futurecity,
  title: 'Future City',
  tags: [Tags.engineering],
  body: `A prototype for an on-site augmented reality pop-up that invites residents to community redesign a public space. 
    Designed and developed for [IDEO CoLab](https://www.ideocolab.com/).`,
  tools: 'Three.js, TopCodes.',
  role: `Design Collaborator and Prototype Developer. In collaboration with [Harrison Lin](https://harrisonlin.com/), 
  [Nicole Aw](https://www.nicoleaw.com/), and John Oustedyn.`,
  site: 'https://github.com/bomanimc/future-city',
  media: 'futurecity_main_video',
  primaryLink: `/${ProjectSlug.futurecity}`,
  projectMedia: [
    {
      type: MediaTypes.video,
      videoUrl: 'https://www.youtube.com/watch?v=20Jf0CrJreo',
    },
    {
      type: MediaTypes.image,
      src: 'futurecity_description',
    },
    {
      type: MediaTypes.image,
      src: 'futurecity_process.jpg',
    },
    {
      type: MediaTypes.image,
      src: 'futurecity_mobileviewer.jpg',
    },
  ],
};

ProjectContent[ProjectSlug.dialup] = {
  id: ProjectSlug.dialup,
  title: 'Dial Up',
  tags: [Tags.engineering],
  body: `Creative collective that creates music, videos, magazines, and
  technology. Website featured on
  [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
  tools: 'Node, React, SASS, Sketch.',
  role: `Developer, Designer, Writer, DJ. In collaboration with other members
  of Dial Up.`,
  site: 'http://dialupstuff.com/home',
  media: 'dialup_main',
  primaryLink: `/${ProjectSlug.dialup}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'dialup_magazine',
    },
    {
      type: MediaTypes.image,
      src: 'dialup_chatroom',
    },
  ],
};

ProjectContent[ProjectSlug.negativereel] = {
  id: ProjectSlug.negativereel,
  title: 'NegativeReel',
  tags: [Tags.art],
  body: `Projection mapping installation that displays negative thoughts
  as an expression of vulnerability. The
  installation reacts to gestures made by the viewer.`,
  tools: 'Node, Processing, Leap Motion, MadMapper.',
  role: 'Individual Project',
  media: 'negativereel_main_video',
  primaryLink: `/${ProjectSlug.negativereel}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'negativereel_main_video',
    },
    {
      type: MediaTypes.image,
      src: 'negativereel_interaction_video',
    },
  ],
};

ProjectContent[ProjectSlug.codeasart] = {
  id: ProjectSlug.codeasart,
  title: 'Code Visualizations',
  tags: [Tags.art],
  body: `Re-representing code in order to explore its potential as a
  standalone medium. The unique structure of the code is used to produce
  dynamic visualizations.`,
  tools: 'p5.js, Atom, Socket.io, Node.',
  role: 'Individual Project',
  media: 'codeasart_main_video',
  primaryLink: `/${ProjectSlug.codeasart}`,
  projectMedia: [
    {
      type: MediaTypes.video,
      videoUrl: 'https://vimeo.com/307190485', // Demo Video
    },
  ],
};

ProjectContent[ProjectSlug.bikewheelsynth] = {
  id: ProjectSlug.bikewheelsynth,
  title: 'Bike Wheel Synth',
  tags: [Tags.experiment],
  body: `Experiemental project and [tutorial video](https://youtu.be/w4CTSO9HesA)
  that explains how control sound effects in Ableton using the speed of a bike
  wheel.`,
  tools: 'Arduino, Ableton, Max for Live, Reed Switches.',
  role: 'Individual Project',
  site: 'https://youtu.be/w4CTSO9HesA',
  media: 'bikewheelsynth_main_video',
  primaryLink: `/${ProjectSlug.bikewheelsynth}`,
  projectMedia: [
    {
      type: MediaTypes.video,
      videoUrl: 'https://youtu.be/w4CTSO9HesA', // Tutorial Video
    },
  ],
};

ProjectContent[ProjectSlug.topolamp] = {
  id: ProjectSlug.topolamp,
  title: 'TopoLamp',
  tags: [Tags.experiment],
  body: `A topographic lamp based on an imaginary mountain. Made with stacked
  laser cut pieces of wood and acrylic, and 24 NeoPixel LEDs.`,
  tools: 'Adobe Illustrator, Arduino, NeoPixel, Laser Cutter.',
  role: 'Individual Project',
  media: 'topolamp_main',
  primaryLink: `/${ProjectSlug.topolamp}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'topolamp_topview',
    },
    {
      type: MediaTypes.image,
      src: 'topolamp_pieces',
    },
    {
      type: MediaTypes.image,
      src: 'topolamp_lasercut',
    },
  ],
};

ProjectContent[ProjectSlug.drawachart] = {
  id: ProjectSlug.drawachart,
  title: 'Draw-A-Chart',
  tags: [Tags.experiment],
  body: `A prototype interactive web app that allows students to practice
  drawing graphical relationships based on real-world prompts. Created at the
  Hack To The Future '16 ed-tech hackathon, where it won "Most Likely To Be
  Used In A Classroom".`,
  tools: 'jQuery, Highcharts.',
  role: 'Developer & Designer. In collaboration with Rebecca Wei and Justin Holzmann.',
  media: 'drawachart_main_video',
  primaryLink: `/${ProjectSlug.drawachart}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'drawachart_main_video',
    },
  ],
};

ProjectContent[ProjectSlug.reflections] = {
  id: ProjectSlug.reflections,
  title: 'Reflections \'16',
  tags: [Tags.experiment],
  body: `A few pithy reflections from a summer working as a Software Design
  intern at IDEO Palo Alto. Documented and designed for sharing.`,
  tools: 'Sketch, Adobe Photoshop.',
  role: 'Individual Project',
  site: 'https://issuu.com/bomanimc/docs/reflections-summer-2016',
  media: 'reflections_main',
  primaryLink: `/${ProjectSlug.reflections}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'reflections_main',
    },
  ],
};

ProjectContent[ProjectSlug.informedconsent] = {
  id: ProjectSlug.informedconsent,
  title: 'Informed Consent',
  tags: [Tags.art],
  body: `Informed Consent is a projection mapping installation that places the viewer 
  into the uncomfortable position of signing a consent form for a clinical trial.`,
  tools: 'Projector, MadMapper, Acrylic, Vellum Paper.',
  role: 'Individual Project',
  media: 'informedconsent_main',
  primaryLink: `/${ProjectSlug.informedconsent}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'informedconsent_main.JPG',
    },
    {
      type: MediaTypes.image,
      src: 'informedconsent_frontal.JPG',
    },
    {
      type: MediaTypes.image,
      src: 'informedconsent_upclose.JPG',
    },
    {
      type: MediaTypes.video,
      videoUrl: 'https://www.youtube.com/watch?v=FdqxRcJ08FE',
    },
  ],
};

ProjectContent[ProjectSlug.blackhealthbook] = {
  id: ProjectSlug.blackhealthbook,
  title: 'Black Health',
  tags: [Tags.art],
  body: `“Black Health: A Collection of References to Black People on WebMD” is a book composed 
  of over a thousand sentences containing the keywords “black” or “African” that were 
  scraped from WebMD, one of the most popular online destinations for medical information.`,
  tools: 'Python, Selenium.',
  role: 'Individual Project',
  site: 'https://issuu.com/bomanimc/docs/black_health_book',
  media: 'blackhealthbook_main',
  primaryLink: `/${ProjectSlug.blackhealthbook}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'blackhealthbook_main.JPG',
    },
    {
      type: MediaTypes.image,
      src: 'blackhealthbook_reading.JPG',
    },
  ],
};

ProjectContent[ProjectSlug.npr] = {
  id: ProjectSlug.npr,
  title: 'News Page Index',
  tags: [Tags.engineering],
  body: `Facebook's new product for indexing News pages to
  support the [Political Ads Archive project](https://newsroom.fb.com/news/2018/05/ads-with-political-content/).
  Publishers can also submit links
  to policies, info, and logos in alignment with [The Trust Project's](https://thetrustproject.org/)
  best practices. Covered by [Axios](https://www.axios.com/facebook-building-index-news-pages-07190e47-13b1-43c7-84eb-bf8084841f10.html)
  and [Adweek](https://www.adweek.com/digital/facebook-started-indexing-news-pages-to-determine-which-publishers-belong-in-its-ad-archive/).`,
  tools: 'React, PHP (Hack), Relay, GraphQL.',
  role: `Software Engineer focused on internal review processes. In collaboration
  with the other engineers on my team.`,
  primaryLink: `/${ProjectSlug.npr}`,
  media: 'npr_main_video',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'npr_main_section',
    },
    {
      type: MediaTypes.image,
      src: 'npr_policies_section',
    },
    {
      type: MediaTypes.image,
      src: 'npr_logos_section',
    },
  ],
};

export const SocialLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/bxmani',
    isExternal: true,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/bxmani/',
    isExternal: true,
  },
  {
    name: 'Email',
    link: 'mailto:bomanimc@gmail.com',
    isExternal: true,
  },
  {
    name: 'GitHub',
    link: 'https://github.com/bomanimc',
    isExternal: true,
  },
];

export const NavLinks = [
  {
    name: 'Work',
    link: '/',
    isExternal: false,
  },
  {
    name: 'About',
    link: '/about',
    isExternal: false,
  },
];

export const AboutCopy = {
  education: [
    {
      name: 'New York University',
      degree: 'M.P.S in Interactive Telecommunications',
      date: '2019 - 2021',
      startDate: '2019',
      endDate: '2021',
    },
    {
      name: 'School for Poetic Computation',
      degree: '10-Week Spring Session',
      startDate: '2019',
      endDate: '2019',
    },
    {
      name: 'Northwestern University',
      degree: 'B.S in Computer Science',
      startDate: '2013',
      endDate: '2017',
    },
  ],
  writing: [
    {
      name: 'How I built my first mobile app scraper',
      link: 'https://medium.com/leesons-journalism-tech/how-i-built-my-first-mobile-app-scraper-6ed7201c7678',
      date: 'Knight Lab',
    },
    {
      name: 'Getting started with conversational bots using Wit.ai',
      link: 'https://medium.com/leesons-journalism-tech/getting-started-with-conversational-bots-using-wit-ai-5001b85f5afa',
      date: 'Knight Lab',
    },
    {
      name: 'Paying dinosaurs: Lessons learned from many hacky deployments with Heroku',
      link: 'https://medium.com/leesons-journalism-tech/paying-dinosaurs-lessons-learned-from-many-hacky-deployments-with-heroku-597ed9824c17',
      date: 'Knight Lab',
    },
  ],
  speaking: [
    {
      name: 'Panel Discussion at Decode Experiential Vol. V',
      event: 'Lightbox',
      date: 'September 2019',
      location: 'New York, NY',
      isNameTitle: false,
    },
    {
      name: 'Advice & Insights for Institute For Entrepreneurship Students',
      event: 'Upperline Code',
      date: 'August 2019',
      location: 'New York, NY',
    },
    {
      name: 'Code As An Artistic Medium',
      event: 'WordHack',
      date: 'May 2019',
      location: 'New York, NY',
      link: 'https://docs.google.com/presentation/d/1HtEw3l-R5G4duIEJKuSuO2KFSYfqNklObWGiKtKUejs/edit?usp=sharing',
    },
    {
      name: 'Meet the Students Spring 2019',
      event: 'School for Poetic Computation',
      date: 'March 2019',
      location: 'New York, NY',
      link: 'https://youtu.be/DOMR8-3hE04?t=1538',
      isNameTitle: false,
    },
    {
      name: 'Interactive Projection Mapping with Processing',
      event: 'Processing Community Day NYC',
      date: 'February 2019',
      location: 'New York, NY',
      link: 'https://docs.google.com/presentation/d/1GfVKDLk5o_yNBy4mst4nDapCcCRiyqyqsiHV5sRelnk/edit?usp=sharing',
    },
    {
      name: 'Panel Discussion at Student Assembly',
      event: 'Avenues: The World School',
      date: 'December 2018',
      location: 'New York, NY',
      isNameTitle: false,
    },
    {
      name: 'Making Mushrooms Glow',
      event: '!!Con',
      date: 'May 2017',
      location: 'New York, NY',
      link: 'https://www.youtube.com/watch?v=T75FvUDirNM',
    },
    {
      name: "'Hacking' Mobile Apps",
      event: 'Open Lab',
      date: 'November 2016',
      location: 'Evanston, IL',
    },
    {
      name: `Serving Social Change: Leveraging the Internet for the Empowerment
      of Social Movements`,
      event: 'MozFest',
      date: 'November 2015',
      location: 'London, England',
    },
  ],
  fellowships: [
    {
      org: 'IDEO CoLab',
      title: 'Software Design Fellow',
      date: '2019 - 2021',
      startDate: '2019',
      endDate: '2019',
    },
    {
      org: 'Delta Lab',
      title: 'Undergraduate Research Fellow',
      startDate: '2016',
      endDate: '2017',
    },
    {
      org: 'Knight Lab',
      title: 'Technical Fellow',
      startDate: '2015',
      endDate: '2017',
    },
  ],
};
