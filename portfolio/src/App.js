import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Headers from './components/Headers';
import Main from './components/Main';
import Projects from './components/Projects';
import Skills from './components/Skills';


function App() {
  return (
    <div className="container-fluid p-0 m-0">
       <Headers />
       <Main />
       <AboutMe />
       <Skills />
       <Projects />
       <Contact />
    </div>
  );
}

export default App;
