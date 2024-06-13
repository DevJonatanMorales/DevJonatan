import { Jon } from "./Jon";

export const Experience = () => {

  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">EXPERIENCIA LABORAL</h2>
          <Jon
            cargo="FRONT-END REACT"
            empreza="Hospital de Especialidades Nuestra Señora de La Paz"
            fecha="JUNIO 2021 - PRESENTE"
          >
          <p className="lead">
          Como parte del equipo de desarrollo, desempeño el rol de Desarrollador
          Front-End especializado en React. Mi enfoque principal se centra en la
          creación de interfaces de usuario dinámicas y atractivas para
          aplicaciones web. Utilizo tanto componentes de clase como componentes
          funcionales en React para diseñar soluciones que optimizan la
          experiencia del usuario. Además, he tenido la oportunidad de trabajar
          en la implementación de la facturación electrónica, garantizando
          procesos eficientes y conformidad con las regulaciones vigentes.
        </p>
          </Jon>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};
