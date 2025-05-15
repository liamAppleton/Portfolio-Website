import { SkillCard } from './SkillCard';
import { skills } from '../data/skills';

export const SkillsOverview = () => {
  return (
    <>
      <h1>Skills Overview</h1>
      <div className="d-flex flex-wrap gap-3">
        <SkillCard
          title={skills.languages.title}
          skills={skills.languages.skills}
        />
        <SkillCard
          title={skills.frontEnd.title}
          skills={skills.frontEnd.skills}
        />
        <SkillCard
          title={skills.backEnd.title}
          skills={skills.backEnd.skills}
        />
        <SkillCard
          title={skills.general.title}
          skills={skills.general.skills}
        />
      </div>
    </>
  );
};
