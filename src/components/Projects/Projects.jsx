import { CardProyect } from "./CardProyect";
import ecommer from "../../assets/image/eCommerce.png";
import rickandmortyApi from "../../assets/image/rickandmortyApi.png";
import mini_task_manager from "../../assets/image/mini-task-manager.png";
export const Projects = () => {
  return (
    <>
      <section className="resume-section" id="projects">
        <div className="resume-section-content">
          <h2 className="mb-5">Proyectos</h2>
          <div className="d-flex flex-wrap">
            <CardProyect img={ecommer} titulo="ECOMMER" proyectName={"eCommerce"}/>
            <CardProyect img={rickandmortyApi} titulo="API RICK AND MORTY" proyectName={'RickandmortyApi'} />
            <CardProyect img={mini_task_manager} titulo="mini task manager" proyectName={'mini-task-manager'} />
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};
