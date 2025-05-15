import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projectData';

export const ProjectsDisplay = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="d-flex flex-wrap gap-3 mb-3">
        <ProjectCard projectData={projects.ncNewsFe} />
        <ProjectCard projectData={projects.ncNewsBe} />
      </div>
    </>
  );
};
