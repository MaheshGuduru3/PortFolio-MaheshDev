import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Headers from './components/Headers';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/customStyles.css';

function App() {
  return (
    <div className="app-shell">
      <Headers />
      <main>
        <Main />
        <Skills />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
