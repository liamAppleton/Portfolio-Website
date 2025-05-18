import { SkillCard } from './SkillCard';
import { skills } from '../data/skillData';

export const SkillsOverview = () => {
  const { languages, frontEnd, backEnd, testing, other } = skills;
  return (
    <div
      className="py-4 d-flex flex-column align-items-center gap-3"
      style={{ backgroundColor: '#AEBFA8' }}
    >
      <h1 className="heading-style mt-5 mb-4">Skills Overview</h1>
      <div className="d-flex flex-wrap gap-3 mb-3 justify-content-center">
        <SkillCard skillsData={languages} />
        <SkillCard skillsData={frontEnd} />
        <SkillCard skillsData={backEnd} />
        <SkillCard skillsData={testing} />
        <SkillCard skillsData={other} />
      </div>
    </div>
  );
};
