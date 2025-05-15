import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projectData';

export const ProjectsDisplay = () => {
  return (
    <>
      <ProjectCard projectData={projects.ncNewsFe} />
    </>
  );
};
