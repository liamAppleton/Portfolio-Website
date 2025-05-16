import ncnewsfe from '../assets/NCNewsFrontEnd.png';
import ncnewsbe from '../assets/NCNewsBackEnd.png';
import traveldiary from '../assets/TravelDiary.png';
import pokemonshowdown from '../assets/PokemonShowdown.png';
import carrentalsystem from '../assets/CarRentalSystem.png';
import { FaReact, FaBootstrap, FaCss3, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  SiAxios,
  SiExpress,
  SiJest,
  SiNetlify,
  SiRender,
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { TbBrandThreejs, TbBrandCSharp } from 'react-icons/tb';

export const projects = {
  ncNewsFe: {
    title: 'NC News (front end)',
    description:
      'Built with React and styled with Bootstrap, NC News is a Reddit-style web application that allows users to vote on articles and comments, post comments, filter and sort content by various criteria, and even toggle between light and dark modes — all powered by a custom back-end API.',
    links: {
      github: 'https://github.com/liamAppleton/nc-news',
      hosted: {
        link: 'https://nc-hub.netlify.app/',
        icon: SiNetlify,
      },
    },
    image: ncnewsfe,
    icons: [IoLogoJavascript, FaReact, FaBootstrap, FaCss3, SiAxios],
  },
  ncNewsBe: {
    title: 'NC News (back end)',
    description:
      'A fully hosted Express.js server that provides a RESTful API for interacting with a PostgreSQL database. Rigorous integration testing using Supertest ensures the robustness of each endpoint, supporting CRUD operations on articles, comments, and votes.',
    links: {
      github: 'https://github.com/liamAppleton/nc-news-app',
      hosted: {
        link: 'https://nc-news-app-e2hd.onrender.com/api',
        icon: SiRender,
      },
    },
    image: ncnewsbe,
    icons: [IoLogoJavascript, FaNodeJs, SiExpress, BiLogoPostgresql, SiJest],
  },
  travelDiaryFe: {
    title: 'The Travel Diary',
    description:
      'Welcome to the Travel Diary web app — an interactive platform where travellers can create itineraries, post photos and notes about their trips, and explore inspiration from others around the world. This frontend connects to our Java Spring Boot backend and brings the social travel experience to life!',
    links: {
      github: 'https://github.com/The-Spice-Boys/Travel-Diary---FE',
      hosted: {
        link: 'https://thetraveldiary-spiceboys.netlify.app/',
        icon: SiNetlify,
      },
    },
    image: traveldiary,
    icons: [
      IoLogoJavascript,
      FaReact,
      FaBootstrap,
      FaCss3,
      SiAxios,
      TbBrandThreejs,
    ],
  },
  pokemonShowdown: {
    title: 'Pokémon Showdown',
    description:
      'Poketerm is a Node.js command-line Pokémon battler that challenges players to strategically select and battle Pokémon against a randomly generated AI team. Built using Object-Oriented Programming and Inquirer.js, it features turn-based combat, type interactions, dynamic healthbars, and healing items.',
    links: { github: 'https://github.com/liamAppleton/pokemon-showdown' },
    image: pokemonshowdown,
    icons: [IoLogoJavascript, FaNodeJs, SiJest],
  },
  carRentalSystem: {
    title: 'Car Rental System',
    description:
      'Car Rental System is a C# console application that consolidates core C# concepts through rental management and vehicle inventory tracking, all presented in a structured Spectre.Console interface.',
    links: { github: 'https://github.com/liamAppleton/Car-Rental-System' },
    image: carrentalsystem,
    icons: [TbBrandCSharp],
  },
};
