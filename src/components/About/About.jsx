import { IconSolial } from "../IconSocial/IconSolial";
import cv from "../../../public/FrontEndDeveloperJonatanMorales.pdf"
export const About = () => {
  const whatsappLink = `https://api.whatsapp.com/send?phone=+50377243251`;
  const linkedin = "https://www.linkedin.com/in/devjonatanmo";
  const github = "https://github.com/DevJonatanMorales";

  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            JONATAN <span className="text-secondary">MORALES</span>
          </h1>
          <div className="subheading mb-2">
            DESARROLLADOR FRONT-END{" "}
            <a href="mailto:name@email.com">
              developerjonatanmorales@gmail.com
            </a>
          </div>
          <p className="mb-5">
            <strong className="bg-success text-light px-2 py-1 rounded">
              #OPENTOWORK
            </strong>
          </p>
          <p className="lead mb-5">
            Soy un apasionado desarrollador con experiencia en React, y me
            siento cómodo trabajando tanto con clases como con componentes
            funcionales. Graduado en Ingeniería en Sistemas y Redes
            Informáticas, a finales de junio del 2023, comencé mi trabajo
            presencial, donde he tenido la oportunidad de aplicar mis
            habilidades y conocimientos para crear soluciones innovadoras. Mi
            enfoque está en el desarrollo de aplicaciones web y la mejor de la
            experiencia de usuario. Estoy comprometido con el aprendizaje
            constante y siempre estoy buscando nuevas formas de mejorar mis
            habilidades en el mundo del desarrollo web.
          </p> 
          <div className="social-icons">
            <IconSolial link={linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </IconSolial>

            <IconSolial link={github}>
              <i className="fab fa-github"></i>
            </IconSolial>

            <IconSolial link={whatsappLink}>
              <i className="fa-brands fa-whatsapp"></i>
            </IconSolial>

            <IconSolial link={cv} downloadable>
              <i className="fa-solid fa-file-arrow-down"></i>
            </IconSolial>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};
