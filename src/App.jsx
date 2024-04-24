import "./scss/styles.scss";
import { Nabar } from "./components/Navbar/Nabar";
import { LayoutContent } from "./layout/layout-content.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Educacion } from "./components/Educacion/Educacion.jsx";
import { Skills } from "./components/Skills/Skills.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
//import { Interests } from "./components/Interests/Interests.jsx";


function App() {
  return (
    <>
      <Nabar />
      <LayoutContent>
        <About />
        <Experience />
        <Educacion />
        <Skills />
        <Projects />
        {/* <Interests /> */}
      </LayoutContent>
    </>
  );
}

export default App;
