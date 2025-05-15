import ncnewsfe from '../assets/NCnewsfrontend.png';
import ncnewsbe from '../assets/NCnewsbackend.png';
import travelDiary from '../assets/TravelDiary.png';
import pokemonShowdown from '../assets/PokemonShowdown.png';
import carRentalSystem from '../assets/CarRentalSystem.png';

export const projects = {
  ncNewsFe: {
    title: 'NC News (front end)',
    description:
      'Built with React and styled with Bootstrap, NC News is a Reddit-style web application that allows users to vote on articles and comments, post comments, filter and sort content by various criteria, and even toggle between light and dark modes — all powered by a custom back-end API.',
    links: {
      github: 'https://github.com/liamAppleton/nc-news',
      hosted: 'https://nc-hub.netlify.app/',
    },
    image: ncnewsfe,
  },
  ncNewsBe: {
    title: 'NC News (back end)',
    description:
      'A fully hosted Express.js server that provides a RESTful API for interacting with a PostgreSQL database. Rigorous integration testing using Supertest ensures the robustness of each endpoint, supporting CRUD operations on articles, comments, and votes.',
    links: {
      github: 'https://github.com/liamAppleton/nc-news-app',
      hosted: 'https://nc-news-app-e2hd.onrender.com/api',
    },
    image: ncnewsbe,
  },
  travelDiaryFe: {
    title: 'The Travel Diary',
    description:
      'Welcome to the Travel Diary web app — an interactive platform where travellers can create itineraries, post photos and notes about their trips, and explore inspiration from others around the world. This frontend connects to our Java Spring Boot backend and brings the social travel experience to life!',
    links: {
      github: 'https://github.com/The-Spice-Boys/Travel-Diary---FE',
      hosted: 'https://thetraveldiary-spiceboys.netlify.app/',
    },
    image: travelDiary,
  },
  pokemonShowdown: {
    title: 'Pokémon Showdown',
    description:
      'Poketerm is a Node.js command-line Pokémon battler that challenges players to strategically select and battle Pokémon against a randomly generated AI team. Built using Object-Oriented Programming and Inquirer.js, it features turn-based combat, type interactions, dynamic healthbars, and healing items.',
    links: { github: 'https://github.com/liamAppleton/pokemon-showdown' },
    image: pokemonShowdown,
  },
  carRentalSystem: {
    title: 'Car Rental System',
    description:
      'Car Rental System is a C# console application that consolidates core C# concepts through rental management and vehicle inventory tracking, all presented in a structured Spectre.Console interface.',
    links: { github: 'https://github.com/liamAppleton/Car-Rental-System' },
    image: carRentalSystem,
  },
};
