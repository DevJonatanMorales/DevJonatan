import { CardProyect } from "./CardProyect";
import ecommer from "../../assets/image/eCommerce.png";
import rickandmortyApi from "../../assets/image/rickandmortyApi.png";
import todolist from "../../assets/image/to-do-list.png";
export const Projects = () => {
  return (
    <>
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Proyectos</h2>
          <div className="d-flex flex-wrap">
            <CardProyect img={ecommer} titulo="ECOMMER" proyectName={"eCommerce"}/>
            <CardProyect img={rickandmortyApi} titulo="API RICK AND MORTY" proyectName={'RickandmortyApi'} />
            <CardProyect img={todolist} titulo="TO DO LIST" proyectName={'To-Do-List'} />
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};
