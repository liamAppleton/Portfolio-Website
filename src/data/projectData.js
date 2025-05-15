import ncnewsfe from '../assets/NCnewsfrontend.png';
import ncnewsbe from '../assets/NCnewsbackend.png';

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
};
