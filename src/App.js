import './App.css';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe'
import { useRef, useEffect } from 'react';
import Projects from './components/Projects';

function App() {
  const aboutRef = useRef();
  const projRef = useRef();
    useEffect(() => {
    // Scroll to top with smooth behavior on page refresh/load
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // delay slightly to ensure DOM is ready
  }, []);
  return (
    <div className="App">
      <LandingPage scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <div ref={aboutRef}>
        <AboutMe scrollToProjects={() => projRef.current?.scrollIntoView({behavior: 'smooth'})}/>
      </div>
      <div ref={projRef}>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
