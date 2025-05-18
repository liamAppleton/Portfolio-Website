import './App.css';
import { NavBar } from './components/NavBar';
import { SkillsOverview } from './components/SkillsOverview';
import { ProjectsDisplay } from './components/ProjectsDisplay';
import { PersonalBio } from './components/PersonalBio';

function App() {
  return (
    <div id="home">
      <NavBar />
      <PersonalBio />
      <SkillsOverview />
      <ProjectsDisplay />
    </div>
  );
}

export default App;
