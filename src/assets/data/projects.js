import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/utracker.jpg';
import Creer from '../images/creer.png';
import Portfolio from '../images/portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Creer',
    desc: 'A collaborative platform that allows techies to share, get feedback/give feedback on ideas/issues in and around the tech ecosystem. I created the Backend API for the mobile and frontend developers to consume making use of django rest framework and postgres database.',
    img: Creer,
  },
  {
    id: uuidv4(),
    name: 'My Portfolio',
    desc: 'A smoother feel to my portflio. Developed using ReactJs',
    img: Portfolio,
  },
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc: ' lorems summ ipsum strat nerrto olup lorem ipsim p',
    img: UTrackerImg,
  },
];

export default projects;
