export const SkillAreaColors = {
  name: '#ffffff',
  software: '#ff0000',
  design: '#0000ff',
  art: '#20bf6b',
};

export const MediaTypes = {
  image: 'image',
  video: 'video',
};

const Tags = {
  software: 'software',
  design: 'design',
  art: 'art',
};

export const ProjectSlug = {
  shrumen: 'shrumen-lumen',
  npr: 'news-page-index',
  waves: 'waves',
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
};

export const ProjectContent = {
  shrumen: {
    id: ProjectSlug.shrumen,
    title: 'Shrumen Lumen',
    tags: [Tags.software, Tags.art],
    body: `[Foldhaus Collective's](https://www.foldhaus.com/shrumen-lumen/)
    interactive art installation made up of five glowing mushrooms
    that react to the presence of people. Presented at Burning Man '16
    and Meet D3 Festival in Dubai. Currently on display at the
    [Smithsonian's Renwick Gallery](https://americanart.si.edu/exhibitions/burning-man)
    until January '19.`,
    tools: 'Arduino, NeoPixel, MadMapper, PixelPusher, Raspberry Pi, Node, Processing, Python, C.',
    role: `Lead Software Developer. Hardware-Software Integration. In
    collaboration with the [Foldhaus Collective](https://www.foldhaus.com) team.`,
    site: 'https://www.foldhaus.com/shrumen-lumen',
    primaryLink: `/${ProjectSlug.shrumen}`,
    media: 'img/shrumenlumen/shrumen_main.jpg',
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
      },
      {
        type: MediaTypes.video,
        videoUrl: 'https://www.youtube.com/watch?v=T75FvUDirNM', // Making Mushrooms Glow
      },
    ],
  },
  npr: {
    id: ProjectSlug.npr,
    title: 'News Page Index',
    tags: [Tags.software],
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
    media: 'img/npr/npr.gif',
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/npr/gallery/npr_main_section.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/npr/gallery/npr_policies_section.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/npr/gallery/npr_logos_section.png',
      },
    ],
  },
  waves: {
    id: ProjectSlug.waves,
    title: 'Waves',
    tags: [Tags.software, Tags.art],
    body: `Prototype device that encodes responses to personal questions as
    printed sound waves. Featured in the
    [Raspberry Pi blog](https://www.raspberrypi.org/blog/printed-sound-wave/)
    and [MagPi](https://www.raspberrypi.org/magpi-issues/MagPi61.pdf) (p.31 - p.32), the
    official Raspberry Pi magazine. Presented at Segal Design Expo '17.`,
    tools: 'Raspberry Pi, Python, JavaScript.',
    role: `Developer and Designer. In
    collaboration with [Eunice Lee](https://euniceylee.github.io/) and Matt Zhang.`,
    media: 'img/waves/waves_main.png',
    primaryLink: `/${ProjectSlug.waves}`,
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/waves/gallery/waves_showing.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/waves/gallery/waves_prints.png',
      },
      {
        type: MediaTypes.video,
        videoUrl: 'https://vimeo.com/220101786',  // Waves Demo
      },
      {
        type: MediaTypes.video,
        videoUrl: 'https://vimeo.com/220102610', // Eunice Testing Waves
      },
    ],
  },
  gitrocket: {
    id: ProjectSlug.gitrocket,
    title: 'GitRocket',
    tags: [Tags.software],
    body: `A fun plugin for the [Hyper](https://hyper.is/) terminal that launches
    a rocket ship when you push code with Git. It has received 40+ GitHub stars and
    [over 12,000 downloads](https://npm-stat.com/charts.html?package=gitrocket&from=2017-07-01)
    via NPM.`,
    tools: 'React, Redux, Hyper.',
    role: 'Individual Project',
    site: 'https://www.npmjs.com/package/gitrocket',
    media: 'img/gitrocket/gitrocket.gif',
    primaryLink: `/${ProjectSlug.gitrocket}`,
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/gitrocket/gitrocket.gif',
      },
    ],
  },
  versions: {
    id: ProjectSlug.versions,
    title: "Visuals for 'Versions'",
    tags: [Tags.design, Tags.art],
    body: `A live-mixed VJ (video jockey) set for [Jasper Lotti's 'Versions'](https://open.spotify.com/album/2oWuiYDtbQZc0It2qcw4jl)
    project. These visuals were a backdrop for Jasper Lotti's live performances
    at Elsewhere, H0L0, and Playground Coffee.`,
    tools: 'CoGe, Giphy, AKAI MP32.',
    role: 'Individual Project',
    media: 'img/versions/versions_main.jpg',
    primaryLink: `/${ProjectSlug.versions}`,
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/versions/gallery/versions_wings.jpg',
      },
      {
        type: MediaTypes.image,
        src: 'img/versions/gallery/versions_dark_rose.jpg',
      },
      {
        type: MediaTypes.image,
        src: 'img/versions/gallery/versions_white_hex.jpg',
      },
      {
        type: MediaTypes.image,
        src: 'img/versions/gallery/versions_pillow.jpg',
      },
    ],
  },
  futurecity: {
    id: ProjectSlug.futurecity,
    title: 'Future City',
    tags: [Tags.software, Tags.design],
    body: `Creative collective that creates music, videos, magazines, and
    technology. Website featured on
    [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
    tools: 'Three.js, TopCodes.',
    role: `Design Collaborator and Prototype Developer. In collaboration with [Harrison Lin](https://harrisonlin.com/), 
    [Nicole Aw](https://www.nicoleaw.com/), and John Oustedyn.`,
    site: 'https://github.com/bomanimc/future-city',
    media: 'img/futurecity/futurecity_main.gif',
    primaryLink: `/${ProjectSlug.futurecity}`,
    projectMedia: [
      {
        type: MediaTypes.video,
        videoUrl: 'https://www.youtube.com/watch?v=20Jf0CrJreo',
      },
      {
        type: MediaTypes.image,
        src: 'img/futurecity/gallery/futurecity_description.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/futurecity/gallery/futurecity_process.jpg',
      },
      {
        type: MediaTypes.image,
        src: 'img/futurecity/gallery/futurecity_mobileviewer.jpg',
      },
    ],
  },
  dialup: {
    id: ProjectSlug.dialup,
    title: 'Dial Up',
    tags: [Tags.software, Tags.design],
    body: `Creative collective that creates music, videos, magazines, and
    technology. Website featured on
    [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
    tools: 'Node, React, SASS, Sketch.',
    role: `Developer, Designer, Writer, DJ. In collaboration with other members
    of Dial Up.`,
    site: 'http://dialupstuff.com/home',
    media: 'img/dialup/dialup_main.png',
    primaryLink: `/${ProjectSlug.dialup}`,
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/dialup/gallery/dialup_magazine.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/dialup/gallery/dialup_chatroom.png',
      },
    ],
  },
  negativereel: {
    id: ProjectSlug.negativereel,
    title: 'NegativeReel',
    tags: [Tags.software, Tags.art],
    body: `Projection mapping installation that displays negative thoughts
    as an expression of vulnerability. The
    installation reacts to gestures made by the viewer.`,
    tools: 'Node, Processing, Leap Motion, MadMapper.',
    role: 'Individual Project',
    media: 'img/negativereel/negativereel_main.gif',
    primaryLink: `/${ProjectSlug.negativereel}`,
    // primaryLink: 'https://www.instagram.com/p/BdNtkMiBg1C/?taken-by=bxmani',
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/negativereel/gallery/negativereel_interaction.gif',
      },
    ],
  },
  codeasart: {
    id: ProjectSlug.codeasart,
    title: 'Code As Art',
    tags: [Tags.software, Tags.art],
    body: `Re-representing code in order to explore its potential as a
    standalone medium. The unique structure of the code is used to produce
    dynamic visualizations.`,
    tools: 'p5.js, Atom, Socket.io, Node.',
    role: 'Individual Project',
    media: 'img/codeasart/codeasart_main.gif',
    primaryLink: `/${ProjectSlug.codeasart}`,
    projectMedia: [
      {
        type: MediaTypes.video,
        videoUrl: 'https://vimeo.com/307190485', // Demo Video
      },
    ],
  },
  bikewheelsynth: {
    id: ProjectSlug.bikewheelsynth,
    title: 'Bike Wheel Synth',
    tags: [Tags.software, Tags.design],
    body: `Experiemental project and [tutorial video](https://youtu.be/w4CTSO9HesA)
    that explains how control sound effects in Ableton using the speed of a bike
    wheel.`,
    tools: 'Arduino, Ableton, Max for Live, Reed Switches.',
    role: 'Individual Project',
    site: 'https://youtu.be/w4CTSO9HesA',
    media: 'img/bikewheelsynth/bikewheelsynth_main.gif',
    primaryLink: `/${ProjectSlug.bikewheelsynth}`,
    projectMedia: [
      {
        type: MediaTypes.video,
        videoUrl: 'https://youtu.be/w4CTSO9HesA', // Tutorial Video
      },
    ],
  },
  topolamp: {
    id: ProjectSlug.topolamp,
    title: 'TopoLamp',
    tags: [Tags.software, Tags.design],
    body: `A topographic lamp based on an imaginary mountain. Made with stacked
    laser cut pieces of wood and acrylic, and 24 NeoPixel LEDs.`,
    tools: 'Adobe Illustrator, Arduino, NeoPixel, Laser Cutter.',
    role: 'Individual Project',
    media: 'img/topolamp/topolamp_main.jpg',
    primaryLink: `/${ProjectSlug.topolamp}`,
    // primaryLink: 'https://www.instagram.com/p/BdIS-tdhF1b/?taken-by=bxmani',
    projectMedia: [
      {
        type: MediaTypes.image,
        src: 'img/topolamp/gallery/topolamp_topview.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/topolamp/gallery/topolamp_pieces.png',
      },
      {
        type: MediaTypes.image,
        src: 'img/topolamp/gallery/topolamp_lasercut.png',
      },
    ],
  },
  drawachart: {
    id: ProjectSlug.drawachart,
    title: 'Draw-A-Chart',
    tags: [Tags.software, Tags.design],
    body: `A prototype interactive web app that allows students to practice
    drawing graphical relationships based on real-world prompts. Created at the
    Hack To The Future '16 ed-tech hackathon, where it won "Most Likely To Be
    Used In A Classroom".`,
    tools: 'jQuery, Highcharts.',
    role: 'Developer & Designer. In collaboration with Rebecca Wei and Justin Holzmann.',
    media: 'img/drawachart/drawachart_main.gif',
    primaryLink: `/${ProjectSlug.drawachart}`,
    projectMedia: [],
  },
  reflections: {
    id: ProjectSlug.reflections,
    title: 'Reflections \'16',
    tags: [Tags.design],
    body: `A few pithy reflections from a summer working as a Software Design
    intern at IDEO Palo Alto. Documented and designed for sharing.`,
    tools: 'Sketch, Adobe Photoshop.',
    role: 'Individual Project',
    site: 'https://issuu.com/bomanimc/docs/reflections-summer-2016',
    media: 'img/reflections/reflections_main.png',
    primaryLink: `/${ProjectSlug.reflections}`,
    projectMedia: [],
  },
};

export const DeprecatedProjectContent = {
  cakes: {
    id: ProjectSlug.cakes,
    title: 'Cakes Da Killa Site',
    tags: [Tags.software, Tags.design],
    body: `A website for rapper [Cakes Da Killa](https://en.wikipedia.org/wiki/Cakes_da_Killa)
    in preparation for his 'Hunger Pangs' deluxe album release and European
    tour. This site was public from late 2015 through 2016.`,
    tools: 'Node, Handlebars.',
    role: 'Developer & Designer. In collaboration with Greg Kim and Rogue Agency.',
    media: 'img/cakes/cakes_main.png',
    primaryLink: `/${ProjectSlug.cakes}`,
    projectMedia: [],
  },
  authorcontext: {
    id: ProjectSlug.authorcontext,
    title: 'Author Context',
    tags: [Tags.software],
    body: `An experiment that allows news consumers to find more details about an
    article's author while reading news on an Instant Article (Facebook's native
    article format). Covered by [TechCrunch](https://techcrunch.com/2018/04/03/facebook-author-info/).`,
    tools: 'Native Templates, Android, Litho, PHP (Hack).',
    role: 'Software Engineer. In collaboration with one other engineer.',
    media: 'img/dialup/dialup_main.png',
    primaryLink: `/${ProjectSlug.authorcontext}`,
    projectMedia: [],
  },
};

export const SocialLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/bxmani',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/bxmani/',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@bomani',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bomanimc/',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/bomanimc',
  },
];
