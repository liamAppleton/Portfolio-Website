import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projectData';

export const ProjectsDisplay = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="d-flex flex-wrap gap-5 mb-3">
        <ProjectCard projectData={projects.ncNewsFe} />
        <ProjectCard projectData={projects.ncNewsBe} />
        <ProjectCard projectData={projects.travelDiaryFe} />
        <ProjectCard projectData={projects.pokemonShowdown} />
        <ProjectCard projectData={projects.carRentalSystem} />
      </div>
    </>
  );
};
