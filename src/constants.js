import shortid from 'shortid';

export const SkillAreaColors = {
  name: '#ffffff',
  software: '#f1c40f',
  design: '#3498db',
  art: '#e74c3c',
};

export const ProjectContent = [
  {
    id: shortid.generate(),
    title: 'Shrumen Lumen',
    tags: ['software', 'art'],
    body: `Interactive art installation made up of five glowing mushrooms
    that react to the presence of people. Presented at Burning Man 2016
    and Meet D3 Festival in Dubai. Currently on diplay at the
    [Smithsonian's Renwick Gallery](https://americanart.si.edu/exhibitions/burning-man)
    until January '19.`,
    roles: `Lead Software Developer,
    Hardware-Software Integration.`,
    media: 'img/shrumenlumen/shrumenlumen_main.png',
    images: [
      {
        src: 'img/shrumenlumen/gallery/shrumen_sandy.jpg',
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
    roles: 'Design, Software, Electronics.',
    media: 'img/waves/waves_main.png',
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
    title: 'Dial Up',
    tags: ['software', 'design'],
    body: `Creative collective that creates music, videos, magazines, and
    technology. Website featured on
    [Brutalist Websites](http://brutalistwebsites.com/dialupstuff.com/).`,
    roles: 'Design, Website Development, DJ, Writer.',
    media: 'img/dialup/dialup_main.png',
    images: [
      {
        src: 'img/dialup/gallery/dialup_screen.png',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'NegativeReel',
    tags: ['software', 'art'],
    body: `Projection mapping installation that displays negative thoughts
    people have about themselves as an expression of vulnerability.`,
    roles: 'Creative Lead, Projection Mapping, Software Development.',
    media: 'img/negativereel/negativereel_main.png',
    images: [
      {
        src: 'img/negativereel/gallery/negativereel_front.gif',
      },
    ],
  },
  {
    id: shortid.generate(),
    title: 'TopoLamp',
    tags: ['software', 'design'],
    body: `A topographic lamp based on an imaginary mountain. Made with stacked
    laser cut pieces of wood and acrylic, and 24 NeoPixel LEDs.`,
    roles: 'Creative Lead, Design, Software, Hardware.',
    media: 'img/topolamp/topolamp_main.jpg',
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
  {
    id: shortid.generate(),
    title: 'Freelance',
    tags: ['software', 'design'],
    body: `Custom websites created for music artists and organizations, such as
    Cakes Da Killa, Machine Girl, and Lyrical
    Lemonade (in progress).`,
    roles: 'Design, Website Development',
    media: 'img/freelance/freelance_main.png',
    images: [
      {
        src: 'img/dialup/gallery/dialup_screen.png',
      },
    ],
  },
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
