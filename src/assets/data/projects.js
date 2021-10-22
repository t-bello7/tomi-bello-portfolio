import { v4 as uuidv4 } from 'uuid';
// import UTrackerImg from '../images/utracker.jpg';
import { SiDjango, SiJavascript, SiPostgresql } from 'react-icons/si/';
import { FaHtml5, FaReact, FaCss3Alt } from 'react-icons/fa';
import Creer from '../images/creer.png';
import Portfolio from '../images/portfolio.png';
import Finconnect from '../images/finnconnect.png';
import Loruki from '../images/loruki.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Creer',
    desc: 'A collaborative platform that allows techies to share, get feedback/give feedback on ideas/issues in and around the tech ecosystem. I created the Backend API for the mobile and frontend developers to consume making use of django rest framework and postgres database.',
    img: Creer,
    stacks: { django: SiDjango, postgress: SiPostgresql },
    liveLink: 'http://creer-pjt-105.herokuapp.com/',
    githubLink: 'https://github.com/t-bello7/creer-be-pjt-105',
  },
  {
    id: uuidv4(),
    name: 'My Portfolio',
    desc: 'A smoother feel to my portflio. Developed using ReactJs',
    img: Portfolio,
    stacks: { react: FaReact, css3: FaCss3Alt, javascript: SiJavascript },
    liveLink: 'https://tomibello.netlify.app/',
    githubLink: 'https://github.com/t-bello7/tomi-bello-portfolio',
  },
  {
    id: uuidv4(),
    name: 'FinConnect',
    desc: ' A listing website for listing financiaal institutions.',
    img: Finconnect,
    stacks: {
      django: SiDjango,
      html: FaHtml5,
      css3: FaCss3Alt,
      javascript: SiJavascript,
    },
    liveLink: 'https://finconnect.herokuapp.com/',
    githubLink: 'https://github.com/t-bello7/finconnect',
  },
  {
    id: uuidv4(),
    name: 'Loruki',
    desc: ' A clone of a cloud hosting website',
    img: Loruki,
    stacks: { html: FaHtml5, css3: FaCss3Alt },
    liveLink: 'https://lorukicloudclone.netlify.app/',
    githubLink: 'https://github.com/t-bello7/loruki',
  },
];

export default projects;
