import { RiComputerLine } from 'react-icons/ri';
import { FaServer, FaCode } from 'react-icons/fa6';
import { GrTest } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';

export const skills = {
  languages: {
    title: 'Languages',
    skills: ['JavaScript', 'C#'],
    Icon: FaCode,
  },
  frontEnd: {
    title: 'Front end',
    skills: ['HTML', 'CSS', 'React', 'Bootstrap', 'Chrome Developer Tools'],
    Icon: RiComputerLine,
  },
  backEnd: {
    title: 'Back end',
    skills: ['Node.js', 'Express.js', 'PostgreSQL'],
    Icon: FaServer,
  },
  testing: {
    title: 'Testing',
    skills: [
      'Test Driven Development',
      'Jest',
      'Supertest',
      'Postman',
      'Insomnia',
    ],
    Icon: GrTest,
  },
  other: {
    title: 'Other',
    skills: [
      'Version Control - Git/GitHub',
      'Object Oriented Programming',
      'Paired Programming | Mobbing',
      'Spiking',
      'Technical Communication',
    ],
    Icon: GiSkills,
  },
};
