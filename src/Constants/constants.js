/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
  
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
  ho,
  randd,
  sight,
  ard,
  signalgen,
  opamp,
  multi,
  fg,
  irs,
  ultra,
  cap,
  tools,
  tkm

} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  ho,
  randd,
  sight,
  ard,
  signalgen,
  opamp,
  multi,
  fg,
  irs,
  ultra,
  cap,
  tools,
  tkm
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
  faInstagram,
};

const introduction = {
  text: [
    "Feel the signal, portable kiosk Initiative",

    "The K12 - Signal House Project is an outreach initiative, which is a portable kiosk designed to enhance the learning experience for high school students, focusing on the field of signal processing. This project is developed by IEEE SPS Kerala Chapter with support of IEEE SIGHT Kerala R&D team. This project aims to introduce and demonstrate signal processing concepts, techniques, and applications in an engaging and interactive manner to the K12 students. The kiosk will be strategically  presented at different schools in various cycles, starting with the IHRD Model Technical Higher Secondary School in Kaloor, Kerala. It is specifically tailored to reach students who are underrepresented in STEM fields, aiming to create awareness and interest in the exciting world of signal processing. The K12 - Signal House Project is structured to provide a one-hour immersive experience for each student visiting",

    ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'partners',
    title: 'Partners',
  },
  {
    id: 'modules',
    title: 'Modules',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Arasartara's Gallery",
    description: 'A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.',
    image: memoryGame,
    source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Pawsitive',
    description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Basic Calculator',
    description: 'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.',
    image: calculator,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'Dual Channel Oscilloscope',
    icon: fg,
    description:
      'It is a versatile device that combines the functionalities of an oscilloscope and a multimeter. It allows you to measure and analyze electronic signals, making it useful for various electrical and electronic applications',
  },
  {
    id: 'css',
    title: 'IR SENSOR',
    icon: irs,
    description:
    'IR sensor is an electronic device that emits light in order to sense some object of the surroundings. An IR sensor can measure the heat of an object as well as detect the motion. Usually, in the infrared spectrum, all the objects radiate some form of thermal radiation.',
  },
  {
    id: 'react',
    title: 'ULTRASONIC CAPACITOR',
    icon: ultra,
    description:
      'An ultrasonic sensor is a device that uses sound waves of high frequency (ultrasound) to detect the presence, distance, and other properties of objects in its vicinity. It consists of a transmitter and a receiver, which work together to emit and detect ultrasonic waves. ',
  },
  {
    id: 'java',
    title: 'ARDUINO',
    icon: ard,
    description:
      'Arduino Uno R3 is part of the Arduino family, an open-source platform that allows students and enthusiasts to learn and experiment with electronics and programming.',
  },
  {
    id: 'aws',
    title: 'CAPACITORS',
    icon: cap,
    description:
      ' A capacitor is a two-terminal electrical device that can store energy in the form of an electric charge. It consists of two electrical conductors that are separated by a distance and filled by vacuum or with an insulating material known as a dielectric.',
  },
  {
    id: 'figma',
    title: 'OPERATIONAL AMPLIFIER',
    icon: opamp,
    description:
    'An Operational Amplifier is basically a three-terminal device that consists of two high-impedance inputs. One of the inputs is the Inverting Input ( – ). The other input is called the Non-inverting Input ( + ). ',
  },
  {
    id: 'git',
    title: 'MULTIMETER USAGE',
    icon: multi,
    description:
    'A multimeter is a versatile electronic device used to measure several electrical quantities such as voltage, current, resistance, and sometimes even additional parameters like capacitance, frequency, and temperature. ',
  },
  {
    id: 'github',
    title: 'Signal Source Generator',
    icon: signalgen,
    description:
      'The DDS Signal Generator FG-100 is a versatile device used for generating precise and adjustable signals in various electronic applications. It features a built-in frequency counter and a convenient LCD display for easy operation.',
  },
];

const partners = [
  {
    id: 'html',
    title: '',
    icon: randd,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: '',
    icon: sight,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'css',
    title: '',
    icon: tkm,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  partners,
  markerSvg,
  icons,
};
