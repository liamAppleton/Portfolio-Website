import './App.css';
import { SkillsOverview } from './components/SkillsOverview';
import { ProjectsDisplay } from './components/ProjectsDisplay';
import { PersonalBio } from './components/PersonalBio';

function App() {
  return (
    <>
      <PersonalBio />
      <SkillsOverview />
      <ProjectsDisplay />
    </>
  );
}

export default App;
