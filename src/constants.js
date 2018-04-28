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
    tags: ['featured', 'software', 'art'],
    body: `Interactive art installation made up of five glowing mushrooms
    that react to the presence of people. Presented at Burning Man 2016
    and [Meet D3 Festival](https://www.theluxediary.com/guide-meet-d3-2016/) in Dubai. On diplay at the [Smithsonian Museum](https://americanart.si.edu/exhibitions/burning-man) in 2018.`,
    roles: `Lead Software Developer (First Showings),
    Hardware-Software Integration.`,
    media: 'img/shrumenlumen/shrumenlumen_main.png',
    bgColor: '#919FB4',
    textColor: '#FFF',
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
    title: 'Dial Up',
    tags: ['featured', 'software', 'design'],
    body: `Creative collective that creates music, videos, magazines, and
    technology. Website featured on Brutalist Websites.`,
    roles: 'Website Design/Develoment, DJ, Writer.',
    media: 'img/dialup/dialup_main.png',
    bgColor: '#FFF',
    textColor: '#FF433E',
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
    bgColor: '#FFF',
    textColor: '#FF433E',
    images: [
      {
        src: 'img/negativereel/gallery/negativereel_front.gif',
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
