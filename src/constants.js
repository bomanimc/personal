export const MediaTypes = {
  image: 'image',
  video: 'video',
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
  obb: 'out-of-the-black-box',
  mybluewindow: '1956-2054',
  babyfaith: 'baby-faith',
  ml5: 'ml5js',
  ritualtranspondence: 'a-ritual-transpondence',
  rosc: 'return-of-spontaneous-circulation',
  dialupdigital: 'dial-up-digital',
};

export const FeaturedProjects = [
  ProjectSlug.ritualtranspondence,
  ProjectSlug.rosc,
  ProjectSlug.informedconsent,
  ProjectSlug.blackhealthbook,
  ProjectSlug.dialupdigital,
  ProjectSlug.obb,
  ProjectSlug.shrumen,
  ProjectSlug.codeasart,
  ProjectSlug.ml5,
];

export const ProjectContent = {};
ProjectContent[ProjectSlug.shrumen] = {
  id: ProjectSlug.shrumen,
  title: 'Shrumen Lumen',
  body: `[Foldhaus Collective's](https://www.foldhaus.com/shrumen-lumen/)
  interactive art installation made up of five glowing mushrooms
  that react to the presence of people. Displayed at the Smithsonian Renwick Gallery, Oakland Museum, Burning Man '16, and other locations.`,
  year: '2016 - Present',
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
      videoUrl: 'https://www.youtube.com/embed/T75FvUDirNM', // Making Mushrooms Glow
    },
  ],
};

ProjectContent[ProjectSlug.obb] = {
  id: ProjectSlug.obb,
  title: 'Out of the Black Box',
  body: `Out of the Black Box (OBB) is a workshop series taught at [Pioneer Works](https://pioneerworks.org/) to help children in grades 2-5 to uncover the magical 
  logic of electronic circuitry through arts and crafts.`,
  year: '2019 - Present',
  tools: 'Squishy Circuits, Hexbugs, Voice Recording Modules, and many other electronic components and craft supplies.',
  role: 'Co-teacher & Organizer',
  site: 'https://pioneerworks.org/programs/summer-steam-program-out-of-the-black-box/',
  primaryLink: `/${ProjectSlug.obb}`,
  media: 'obb_drawbot',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'obb_hexbug_playing',
    },
    {
      type: MediaTypes.image,
      src: 'obb_drawbot',
    },
  ],
};

ProjectContent[ProjectSlug.mybluewindow] = {
  id: ProjectSlug.mybluewindow,
  title: '1956/2054',
  body: `1956/2054 is a mobile application that complements [American Artist's](https://americanartist.us/)
  exhibition called ["My Blue Window" at Queens Museum](https://queensmuseum.org/2019/02/american-artist) focused on predictive policing.`,
  year: '2019',
  tools: 'React Native, Expo, Firebase, Google Cloud Functions.',
  role: 'Sole Developer',
  site: 'https://americanartist.us/app',
  primaryLink: `/${ProjectSlug.mybluewindow}`,
  media: 'mybluewindow_threescreens',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'mybluewindow_threescreens',
    },
  ],
};

ProjectContent[ProjectSlug.babyfaith] = {
  id: ProjectSlug.babyfaith,
  title: 'Baby Faith',
  body: `Baby Faith is an online conversational chatbot created as the latest iteration of artist [Ryan Kuo’s](https://rkuo.net/) series
  on AI conversational agents that embody “the blind 'faith' that underpins both white supremacy and miserable
  white liberalism”. Commissioned by [Rhizome](https://rhizome.org/) and [Jigsaw](https://jigsaw.google.com/).`,
  year: '2020',
  tools: 'React, Next.js, p5.js, IBM Watson',
  role: 'Project Lead & Developer',
  site: 'https://faith.rhizome.org/',
  primaryLink: `/${ProjectSlug.babyfaith}`,
  media: 'babyfaith_main',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'babyfaith_main',
    },
    {
      type: MediaTypes.video,
      videoUrl: 'https://player.vimeo.com/video/393681927', // Baby Faith Demo
    },
  ],
};

ProjectContent[ProjectSlug.waves] = {
  id: ProjectSlug.waves,
  title: 'Waves',
  body: `Prototype device that encodes responses to personal questions as
  printed sound waves. Featured in the
  [Raspberry Pi blog](https://www.raspberrypi.org/blog/printed-sound-wave/)
  and [MagPi](https://www.raspberrypi.org/magpi-issues/MagPi61.pdf) (p.31 - p.32), the
  official Raspberry Pi magazine. Presented at Segal Design Expo '17.`,
  year: '2017',
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
      videoUrl: 'https://player.vimeo.com/video/220101786', // Waves Demo
    },
    {
      type: MediaTypes.video,
      videoUrl: 'https://player.vimeo.com/video/220102610', // Eunice Testing Waves
    },
  ],
};

ProjectContent[ProjectSlug.gitrocket] = {
  id: ProjectSlug.gitrocket,
  title: 'GitRocket',
  body: `A fun plugin for the [Hyper](https://hyper.is/) terminal that launches
  a rocket ship when you push code with Git. It has received 40+ GitHub stars and
  [over 20,000 downloads](https://npm-stat.com/charts.html?package=gitrocket&from=2017-07-01)
  via NPM.`,
  year: '2017',
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
  body: `A live-mixed VJ (video jockey) set for [Jasper Lotti's 'Versions'](https://open.spotify.com/album/2oWuiYDtbQZc0It2qcw4jl)
  project. These visuals were a backdrop for Jasper Lotti's live performances
  at Elsewhere, H0L0, and Playground Coffee.`,
  year: '2018',
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
  body: `A prototype for an on-site augmented reality pop-up that invites residents to community redesign a public space. 
    Designed and developed for [IDEO CoLab](https://www.ideocolab.com/).`,
  year: '2019',
  tools: 'Three.js, TopCodes.',
  role: `Design Collaborator and Prototype Developer. In collaboration with [Harrison Lin](https://harrisonlin.com/), 
  [Nicole Aw](https://www.nicoleaw.com/), and John Oustedyn.`,
  site: 'https://github.com/bomanimc/future-city',
  media: 'futurecity_main_video',
  primaryLink: `/${ProjectSlug.futurecity}`,
  projectMedia: [
    {
      type: MediaTypes.video,
      videoUrl: 'https://www.youtube.com/embed/20Jf0CrJreo',
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
  body: `Creative collective that creates music, videos, magazines, and
  technology. Website featured on
  [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
  year: '2014 - Present',
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
  body: `Projection mapping installation that displays negative thoughts
  as an expression of vulnerability. The
  installation reacts to gestures made by the viewer.`,
  year: '2017',
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
  body: `Re-representing code in order to explore its potential as a
  standalone medium. The unique structure of the code is used to produce
  dynamic visualizations.`,
  year: '2018',
  tools: 'p5.js, Atom, Socket.io, Node.',
  role: 'Individual Project',
  media: 'codeasart_main_video',
  primaryLink: `/${ProjectSlug.codeasart}`,
  projectMedia: [
    {
      type: MediaTypes.video,
      videoUrl: 'https://player.vimeo.com/video/307190485', // Demo Video
    },
  ],
  displaysWithBorder: true,
};

ProjectContent[ProjectSlug.bikewheelsynth] = {
  id: ProjectSlug.bikewheelsynth,
  title: 'Bike Wheel Synth',
  body: `Experiemental project and [tutorial video](https://youtu.be/w4CTSO9HesA)
  that explains how control sound effects in Ableton using the speed of a bike
  wheel.`,
  year: '2018',
  tools: 'Arduino, Ableton, Max for Live, Reed Switches.',
  role: 'Individual Project',
  site: 'https://youtu.be/w4CTSO9HesA',
  media: 'bikewheelsynth_main_video',
  primaryLink: `/${ProjectSlug.bikewheelsynth}`,
  projectMedia: [
    {
      type: MediaTypes.video,
      videoUrl: 'https://www.youtube.com/embed/w4CTSO9HesA',
    },
  ],
};

ProjectContent[ProjectSlug.topolamp] = {
  id: ProjectSlug.topolamp,
  title: 'TopoLamp',
  body: `A topographic lamp based on an imaginary mountain. Made with stacked
  laser cut pieces of wood and acrylic, and 24 NeoPixel LEDs.`,
  year: '2016',
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
  body: `A prototype interactive web app that allows students to practice
  drawing graphical relationships based on real-world prompts. Created at the
  Hack To The Future '16 ed-tech hackathon, where it won "Most Likely To Be
  Used In A Classroom".`,
  year: '2016',
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
  body: `A few pithy reflections from a summer working as a Software Design
  intern at IDEO Palo Alto. Documented and designed for sharing.`,
  year: '2016',
  tools: 'Setch, Adobe Photoshop.',
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
  body: `Informed Consent is a projection mapping installation that places the viewer 
  into the uncomfortable position of signing a consent form for a clinical trial.`,
  year: '2019',
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
      videoUrl: 'https://www.youtube.com/embed/FdqxRcJ08FE',
    },
  ],
};

ProjectContent[ProjectSlug.blackhealthbook] = {
  id: ProjectSlug.blackhealthbook,
  title: 'Black Health',
  body: `“Black Health: A Collection of References to Black People on WebMD” is a book composed 
  of over a thousand sentences containing the keywords “black” or “African” that were 
  scraped from WebMD, one of the most popular online destinations for medical information.`,
  year: '2019',
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

ProjectContent[ProjectSlug.ml5] = {
  id: ProjectSlug.ml5,
  title: 'ml5.js',
  body: `ml5.js is a beginner-friendly open-source machine learning library focused on making 
  creative ML techniques approachable for a broad audience of artists, educators, creative 
  coders, and others.`,
  year: '2020 - 2021',
  tools: 'Tensorflow.js, p5.js, GitHub',
  role: 'Lead Software Maintainer',
  site: 'https://ml5js.org/',
  media: 'ml5js_main',
  primaryLink: `/${ProjectSlug.ml5}`,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'ml5js_main.JPG',
    },
  ],
};

ProjectContent[ProjectSlug.npr] = {
  id: ProjectSlug.npr,
  title: 'News Page Index',
  body: `Facebook's new product for indexing News pages to
  support the [Political Ads Archive project](https://newsroom.fb.com/news/2018/05/ads-with-political-content/).
  Publishers can also submit links
  to policies, info, and logos in alignment with [The Trust Project's](https://thetrustproject.org/)
  best practices. Covered by [Axios](https://www.axios.com/facebook-building-index-news-pages-07190e47-13b1-43c7-84eb-bf8084841f10.html)
  and [Adweek](https://www.adweek.com/digital/facebook-started-indexing-news-pages-to-determine-which-publishers-belong-in-its-ad-archive/).`,
  year: '2018',
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

ProjectContent[ProjectSlug.ritualtranspondence] = {
  id: ProjectSlug.ritualtranspondence,
  title: 'A Ritual Transpondence',
  body: `A Ritual Transpondence" is a multi-channel sound performance invoking 
  ritualistic techniques from my upbringing in Ifa spiritual practices`,
  year: '2022',
  tools: 'Max MSP, Multi-channel Audio, Teensyduino, Concrete, Cowrie Shells, Nails, Palm Oil, Speakers.',
  role: 'Individual Project',
  primaryLink: `/${ProjectSlug.ritualtranspondence}`,
  media: 'ritualtranspondence_main',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'ritualtranspondence_main',
    },
    {
      type: MediaTypes.image,
      src: 'ritualtranspondence_color_top_view',
    },
    {
      type: MediaTypes.image,
      src: 'ritualtranspondence_color_side_view',
    },
    {
      type: MediaTypes.image,
      src: 'ritualtranspondence_color_pour',
    },
    {
      type: MediaTypes.image,
      src: 'ritualtranspondence_color_process',
    },
  ],
};

ProjectContent[ProjectSlug.rosc] = {
  id: ProjectSlug.rosc,
  title: 'Return of Spontaneous Circulation',
  body: `I made this tool called "Return of Spontaneous Circulation" to help myself
  find the shape that describes the activity within my heart, and what frequencies and waveforms compose it.
  This iteration visualizes a parametric graphing of two oscillators (either sine, sawtooth, square, or triangle)
  producing sound at different frequencies.`,
  year: '2021',
  tools: 'Tone.js, p5.js',
  role: 'Individual Project',
  site: 'https://bomani.rip/experiments/return-of-spontaneous-circulation/',
  primaryLink: `/${ProjectSlug.rosc}`,
  media: 'rosc_main_video',
  displaysWithBorder: true,
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'rosc_main_video',
    },
    {
      type: MediaTypes.image,
      src: 'rosc_snapshot_1',
    },
    {
      type: MediaTypes.image,
      src: 'rosc_snapshot_2',
    },
    {
      type: MediaTypes.image,
      src: 'rosc_snapshot_3',
    },
  ],
};

ProjectContent[ProjectSlug.dialupdigital] = {
  id: ProjectSlug.dialupdigital,
  title: 'Dial Up Digital',
  body: `Dial Up Digital is a creative development studio focused on building unique
  digital experiences for artists and organizations working in music and new media.`,
  year: '2016-Present',
  tools: 'React, React Native, Expo',
  role: 'Cofounder',
  site: 'https://dialup.digital/',
  primaryLink: `/${ProjectSlug.dialupdigital}`,
  media: 'dialupdigital_main_video',
  projectMedia: [
    {
      type: MediaTypes.image,
      src: 'dialupdigital_main_video',
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
  {
    name: 'Are.na',
    link: 'https://www.are.na/bomani-oseni-mcclendon',
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
      degree: 'Masters in Interactive Telecommunications',
      startDate: '2019',
      endDate: '2022',
    },
    {
      name: 'B&H Emergency Medical Training',
      degree: 'EMT Accelerated Course',
      startDate: '2021',
    },
    {
      name: 'School for Poetic Computation',
      degree: '10-Week Spring Session',
      startDate: '2019',
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
      name: 'A History of Pathologizing Blackness',
      link: 'https://issuu.com/sfpcspring2019/docs/darkmatterszinespring2019scan/4',
      date: 'Dark Matters (Zine)',
    },
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
  interviews: [
    {
      name: 'TensorFlow.js Community "Show & Tell" #5',
      link: 'https://youtu.be/IeTibm880ys?t=1317',
      org: 'TensorFlow',
      date: 'April 2021',
    },
    {
      name: 'Speaker at Pond Mag & Eto Ano’s "Year-End Education Convention"',
      org: "BABY TV by Baby's All Right",
      date: 'December 2020',
      location: 'Brooklyn, NY',
    },
    {
      name: 'Making ml5.js Accessible: Interview with Bomani Oseni McClendon',
      link: 'https://medium.com/processing-foundation/making-ml5-js-accessible-b28ae295af4a',
      org: 'Processing Foundation',
      date: 'July 2020',
    },
  ],
  speaking: [
    {
      name: 'Guest Speaker at "Python Crash Course"',
      event: 'Upperline Code',
      date: 'July 2021',
      location: 'New York, NY (Online)',
      isNameTitle: false,
    },
    {
      name: 'OSSTA Creative-In-Residence: Notes from ml5.js',
      event: ' Open-Source Software Toolkits for the Arts (OSSTA) Lecture Series',
      date: 'April 2021',
      location: 'Pittsburgh, PA (Online)',
      link: 'https://www.youtube.com/watch?v=nFtuh5Skz5Q',
    },
    {
      name: 'Guest Speaker at "Introduction to Machine Learning for the Arts"',
      event: 'NYU Interactive Media Arts',
      date: 'October 2020',
      location: 'New York, NY (Online)',
      isNameTitle: false,
    },
    {
      name: 'Panelist at Institute for Entrepreneurship',
      event: 'Prep for Prep',
      date: 'July 2020',
      location: 'New York, NY (Online)',
      isNameTitle: false,
    },
    {
      name: 'Guest Critic for "Intro to Web" Course',
      event: 'NYU Integrated Digital Media',
      date: 'May 2020',
      location: 'New York, NY (Online)',
      isNameTitle: false,
    },
    {
      name: 'Co-Organizer of Processing Community Day NYC',
      event: 'Processing Community Day',
      date: 'February 2020',
      location: 'New York, NY',
      isNameTitle: false,
    },
    {
      name: 'Creative Pathways in Computer Science (with Omayeli Arenyeka)',
      event: "Harlem Children's Zone",
      date: 'February 2020',
      location: 'New York, NY',
      isNameTitle: false,
    },
    {
      name: 'Interactive Projection Mapping with Processing',
      event: 'The School of Afrotectopia',
      date: 'January 2020',
      location: 'New York, NY',
      link: 'https://docs.google.com/presentation/d/1huLuMwr7kGXJifFZAMnxy4fk89dAXh7JsjT6YsKFPHE/edit#slide=id.p',
    },
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
      name: 'Interactive Projection Mapping with Processing!',
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
      org: 'eTextiles Spring Break',
      title: 'Resident',
      date: '2022',
    },
    {
      org: 'Clinic for Open Source Arts',
      title: 'COSA Community Leaders Program Fellow',
      date: '2021',
    },
    {
      org: 'The Frank-Ratchye STUDIO for Creative Inquiry',
      title: 'Open-Source Software Toolkits for the Arts Spring Resident',
      date: '2021',
    },
    {
      org: 'Interact',
      title: 'Fellow',
      date: '2020',
    },
    {
      org: 'Clinic for Open Source Arts',
      title: 'Grant Fellow',
      date: '2020',
    },
    {
      org: 'Processing Foundation',
      title: 'ml5.js Fellow',
      date: '2020',
    },
    {
      org: 'IDEO CoLab',
      title: 'Software Design Fellow',
      date: '2019',
    },
    {
      org: 'Delta Lab',
      title: 'Undergraduate Research Fellow',
      date: '2016 - 2017',
    },
    {
      org: 'Knight Lab',
      title: 'Technical Fellow',
      date: '2015 - 2017',
    },
  ],
  exhibitions: [
    {
      title: 'eTextiles Spring Break: Artists In Residence Exhibition',
      gallery: 'Prairie Ronde: Downtown Gallery',
      location: 'Vicksburg, MI',
      date: '2022',
    },
    {
      title: 'No Media',
      gallery: 'The Wrong 2022 Biennale',
      location: 'Online (https://thewrong.tv)',
      date: '2022',
    },
    {
      title: 'Creative Code Festival',
      gallery: 'Lightbox',
      location: 'New York, NY',
      date: '2020',
    },
    {
      title: 'Poetic Computation: Seven Years of SFPC',
      gallery: 'Westbeth Gallery',
      location: 'New York, NY',
      date: '2020',
    },
    {
      title: 'Second Sundays',
      gallery: 'Pioneer Works',
      location: 'Brooklyn, NY',
      date: '2019',
    },
    {
      title: 'SFPC Spring 2019 Student Showcase',
      gallery: 'School for Poetic Computation',
      location: 'New York, NY',
      date: '2019',
    },
    {
      title: 'Innuendo',
      gallery: 'Light Grey Art Lab',
      location: 'Minneapolis, MN',
      date: '2019',
    },
  ],
};
