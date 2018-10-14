export const SkillAreaColors = {
  name: '#ffffff',
  software: '#ff0000',
  design: '#0000ff',
  art: '#20bf6b',
};

export const ProjectSlug = {
  shrumen: 'shrumen-lumen',
  npr: 'news-page-registration',
  waves: 'waves',
  gitrocket: 'gitrocket',
  versions: 'versions-jasper-lotti',
  dialup: 'dial-up',
  negativereel: 'negativereel',
  topolamp: 'topolamp',
  reflections: 'reflections',
  drawachart: 'draw-a-chart',
  cakes: 'cakes-da-killa-site',
};

export const ProjectContent = {
  shrumen: {
    id: ProjectSlug.shrumen,
    title: 'Shrumen Lumen',
    tags: ['software', 'art'],
    body: `[Foldhaus Collective's](https://www.foldhaus.com/shrumen-lumen/)
    interactive art installation made up of five glowing mushrooms
    that react to the presence of people. Presented at Burning Man 2016
    and Meet D3 Festival in Dubai. Currently on display at the
    [Smithsonian's Renwick Gallery](https://americanart.si.edu/exhibitions/burning-man)
    until January '19.`,
    tools: 'Arduino, NeoPixel, MadMapper, PixelPusher, Raspberry Pi, Node, Processing, Python, C.',
    role: `Lead Software Developer. Hardware-Software Integration. In
    collaboration with the [Foldhaus Collective](https://www.foldhaus.com) team.`,
    site: 'https://www.foldhaus.com/shrumen-lumen',
    primaryLink: `/${ProjectSlug.shrumen}`,
    media: 'img/shrumenlumen/shrumen_main.jpg',
    images: [
      {
        src: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
      },
      {
        src: 'img/shrumenlumen/gallery/shrumen_night.png',
      },
    ],
    videos: [
      'https://www.youtube.com/watch?v=T75FvUDirNM', // Making Mushrooms Glow
    ],
  },
  npr: {
    id: ProjectSlug.npr,
    title: 'News Page Registration',
    tags: ['software'],
    body: `Facebook's new product for indexing News pages to
    support the [Political Ads Archive project](https://newsroom.fb.com/news/2018/05/ads-with-political-content/).
    Publishers can also submit links
    to policies, info, and logos in alignment with [The Trust Project's](https://thetrustproject.org/)
    best practices. Covered by [Axios](https://www.axios.com/facebook-building-index-news-pages-07190e47-13b1-43c7-84eb-bf8084841f10.html)
    and [Adweek](https://www.adweek.com/digital/facebook-started-indexing-news-pages-to-determine-which-publishers-belong-in-its-ad-archive/).`,
    tools: 'React, PHP (Hack), Relay, GraphQL.',
    role: `Software Engineer focused on internal review processes and
    infrastructure. In collaboration with the other engineers on my team.`,
    primaryLink: `/${ProjectSlug.npr}`,
    media: 'img/npr/npr.gif',
    images: [
      {
        src: 'img/npr/gallery/npr_main_section.png',
      },
      {
        src: 'img/npr/gallery/npr_policies_section.png',
      },
      {
        src: 'img/npr/gallery/npr_logos_section.png',
      },
    ],
  },
  waves: {
    id: ProjectSlug.waves,
    title: 'Waves',
    tags: ['software', 'art'],
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
    images: [
      {
        src: 'img/waves/gallery/waves_showing.png',
      },
      {
        src: 'img/waves/gallery/waves_prints.png',
      },
    ],
    videos: [
      'https://vimeo.com/220101786', // Waves Demo
      'https://vimeo.com/220102610', // Eunice Testing Waves
    ],
  },
  gitrocket: {
    id: ProjectSlug.gitrocket,
    title: 'GitRocket',
    tags: ['software'],
    body: `A fun plugin for the [Hyper](https://hyper.is/) terminal that launches
    a rocket ship when you push code with Git. It has received 38 GitHub stars and
    [over 9000 downloads](https://npm-stat.com/charts.html?package=gitrocket&from=2017-07-01)
    via NPM.`,
    tools: 'React, Redux, Hyper.',
    role: 'Individual Project',
    site: 'https://www.npmjs.com/package/gitrocket',
    media: 'img/gitrocket/gitrocket.gif',
    primaryLink: `/${ProjectSlug.gitrocket}`,
    images: [
      {
        src: 'img/gitrocket/gitrocket.gif',
      },
    ],
  },
  versions: {
    id: ProjectSlug.versions,
    title: "Visuals for 'Versions'",
    tags: ['design', 'art'],
    body: `A live-mixed VJ (video jockey) set for [Jasper Lotti's 'Versions'](https://open.spotify.com/album/2oWuiYDtbQZc0It2qcw4jl)
    project. These visuals were a backdrop for Jasper Lotti's live performances
    at Elsewhere, H0L0, and Playground Cofee.`,
    tools: 'CoGe, Giphy, AKAI MP32.',
    role: 'Individual Project',
    media: 'img/versions/versions_main.jpg',
    primaryLink: `/${ProjectSlug.versions}`,
    images: [
      {
        src: 'img/versions/gallery/versions_wings.jpg',
      },
      {
        src: 'img/versions/gallery/versions_dark_rose.jpg',
      },
      {
        src: 'img/versions/gallery/versions_white_hex.jpg',
      },
      {
        src: 'img/versions/gallery/versions_pillow.jpg',
      },
    ],
  },
  dialup: {
    id: ProjectSlug.dialup,
    title: 'Dial Up',
    tags: ['software', 'design'],
    body: `Creative collective that creates music, videos, magazines, and
    technology. Website featured on
    [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
    tools: 'Node, React, SASS, Sketch.',
    role: `Developer, Designer, Writer, DJ. In collaboration with other members
    of Dial Up.`,
    site: 'http://dialupstuff.com/home',
    media: 'img/dialup/dialup_main.png',
    primaryLink: `/${ProjectSlug.dialup}`,
    images: [
      {
        src: 'img/dialup/gallery/dialup_magazine.png',
      },
      {
        src: 'img/dialup/gallery/dialup_chatroom.png',
      },
    ],
  },
  negativereel: {
    id: ProjectSlug.negativereel,
    title: 'NegativeReel',
    tags: ['software', 'art'],
    body: `Projection mapping installation that displays negative thoughts
    people have about themselves as an expression of vulnerability. The
    installation reacts to gestures made by the viewer.`,
    tools: 'Node, Processing, Leap Motion, MadMapper.',
    role: 'Individual Project',
    media: 'img/negativereel/negativereel_main.gif',
    primaryLink: `/${ProjectSlug.negativereel}`,
    // primaryLink: 'https://www.instagram.com/p/BdNtkMiBg1C/?taken-by=bxmani',
    images: [
      {
        src: 'img/negativereel/gallery/negativereel_interaction.gif',
      },
    ],
  },
  topolamp: {
    id: ProjectSlug.topolamp,
    title: 'TopoLamp',
    tags: ['software', 'design'],
    body: `A topographic lamp based on an imaginary mountain. Made with stacked
    laser cut pieces of wood and acrylic, and 24 NeoPixel LEDs.`,
    tools: 'Adobe Illustrator, Arduino, NeoPixel, Laser Cutter.',
    role: 'Individual Project',
    media: 'img/topolamp/topolamp_main.jpg',
    primaryLink: `/${ProjectSlug.topolamp}`,
    // primaryLink: 'https://www.instagram.com/p/BdIS-tdhF1b/?taken-by=bxmani',
    images: [
      {
        src: 'img/topolamp/gallery/topolamp_topview.png',
      },
      {
        src: 'img/topolamp/gallery/topolamp_pieces.png',
      },
      {
        src: 'img/topolamp/gallery/topolamp_lasercut.png',
      },
    ],
  },
  drawachart: {
    id: ProjectSlug.drawachart,
    title: 'Draw-A-Chart',
    tags: ['software', 'design'],
    body: `A prototype interactive web app that allows students to practice
    drawing graphical relationships based on real-world prompts. Created at the
    2016 Hack To The Future ed-tech hackathon, where it won "Most Likely To Be
    Used In A Classroom".`,
    tools: 'jQuery, Highcharts',
    role: 'Developer & Designer. In collaboration with Rebecca Wei and Justin Holzmann.',
    media: 'img/drawachart/drawachart_main.gif',
    primaryLink: `/${ProjectSlug.drawachart}`,
    images: [],
  },
  reflections: {
    id: ProjectSlug.reflections,
    title: 'Reflections \'16',
    tags: ['design'],
    body: `A few pithy reflections from a summer working as a Software Design
    intern at IDEO Palo Alto. Documented and design for sharing.`,
    tools: 'Adobe Illustrator, Arduino, NeoPixel, Laser Cutter.',
    role: 'Individual Project',
    site: 'https://issuu.com/bomanimc/docs/reflections-summer-2016',
    media: 'img/reflections/reflections_cover.png',
    primaryLink: `/${ProjectSlug.reflections}`,
    images: [
      {
        src: 'img/reflections/reflections_cover.png',
      },
    ],
  },
};

export const DeprecatedProjectContent = {
  cakes: {
    id: ProjectSlug.cakes,
    title: 'Cakes Da Killa Site',
    tags: ['software', 'design'],
    body: `A website for rapper [Cakes Da Killa](https://en.wikipedia.org/wiki/Cakes_da_Killa)
    in preparation for his 'Hunger Pangs' deluxe album release and European
    tour. This site was public from late 2015 through 2016.`,
    tools: 'Node, Handlebars.',
    role: 'Developer & Designer. In collaboration with Greg Kim and Rogue Agency.',
    media: 'img/cakes/cakes_main.png',
    primaryLink: `/${ProjectSlug.cakes}`,
    images: [],
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
