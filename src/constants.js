import shortid from 'shortid';

export const SkillAreaColors = {
  name: '#ffffff',
  software: '#ff0000',
  design: '#0000ff',
  art: '#20bf6b',
};

export const ProjectContent = [
  {
    id: shortid.generate(),
    title: 'Shrumen Lumen',
    tags: ['software', 'art'],
    body: `[Foldhaus Collective's](https://www.foldhaus.com/shrumen-lumen/)
    interactive art installation made up of five glowing mushrooms
    that react to the presence of people. Presented at Burning Man 2016
    and Meet D3 Festival in Dubai. Currently on diplay at the
    [Smithsonian's Renwick Gallery](https://americanart.si.edu/exhibitions/burning-man)
    until January '19.`,
    media: 'img/shrumenlumen/shrumen_main.jpg',
    primaryLink: 'https://www.foldhaus.com/shrumen-lumen',
    images: [
      {
        src: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
      },
      {
        src: 'img/shrumenlumen/gallery/shrumen_night.png',
      },
      {
        src: 'img/shrumenlumen/gallery/shrumen_solo.JPG',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'Waves',
    tags: ['software', 'art'],
    body: `Prototype device that encodes responses to personal questions as
    printed sound waves. Featured in the
    [Raspberry Pi blog](https://www.raspberrypi.org/blog/printed-sound-wave/)
    and [MagPi](https://www.raspberrypi.org/magpi-issues/MagPi61.pdf) (p.31 - p.32), the
    official Raspberry Pi magazine. Presented at Segal Design Expo '17.`,
    media: 'img/waves/waves_main.png',
    primaryLink: 'https://vimeo.com/220101786',
    images: [
      {
        src: 'img/waves/gallery/waves_showing.png',
      },
      {
        src: 'img/waves/gallery/waves_prints.png',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'GitRocket',
    tags: ['software'],
    body: `A fun plugin for the [Hyper](https://hyper.is/) terminal that launches
    a rocket ship when you push code with Git. It has received 38 GitHub stars and
    [over 9000 downloads](https://npm-stat.com/charts.html?package=gitrocket&from=2017-07-01)
    via NPM.`,
    media: 'img/gitrocket/gitrocket.gif',
    primaryLink: 'https://www.npmjs.com/package/gitrocket',
    images: [
      {
        src: 'img/gitrocket/gitrocket.gif',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'Dial Up',
    tags: ['software', 'design'],
    body: `Creative collective that creates music, videos, magazines, and
    technology. Website featured on
    [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
    media: 'img/dialup/dialup_main.png',
    primaryLink: 'http://dialupstuff.com/home',
    images: [
      {
        src: 'img/dialup/gallery/dialup_magazine.png',
      },
      {
        src: 'img/dialup/gallery/dialup_chatroom.png',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'NegativeReel',
    tags: ['software', 'art'],
    body: `Projection mapping installation that displays negative thoughts
    people have about themselves as an expression of vulnerability. The
    installation reacts to gestures made by the viewer.`,
    media: 'img/negativereel/negativereel_main.png',
    primaryLink: 'https://www.instagram.com/p/BdNtkMiBg1C/?taken-by=bxmani',
    images: [
      {
        src: 'img/negativereel/gallery/negativereel_front.gif',
      },
      {
        src: 'img/negativereel/gallery/negativereel_interaction.gif',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'TopoLamp',
    tags: ['software', 'design'],
    body: `A topographic lamp based on an imaginary mountain. Made with stacked
    laser cut pieces of wood and acrylic, and 24 NeoPixel LEDs.`,
    media: 'img/topolamp/topolamp_main.jpg',
    primaryLink: 'https://www.instagram.com/p/BdIS-tdhF1b/?taken-by=bxmani',
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
  // {
  //   id: shortid.generate(),
  //   title: 'Freelance',
  //   tags: ['software', 'design'],
  //   body: `Custom websites created for music artists and organizations, such as
  //   Cakes Da Killa, Machine Girl, and Lyrical
  //   Lemonade (in progress).`,
  //   roles: 'Design, Website Development',
  //   media: 'img/freelance/freelance_main.png',
  //   images: [
  //     {
  //       src: 'img/topolamp/gallery/topolamp_lasercut.png',
  //     },
  //   ],
  // },
];

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
    name: 'SoundCloud',
    link: 'https://soundcloud.com/bxmani',
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
