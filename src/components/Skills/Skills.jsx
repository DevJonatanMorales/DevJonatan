import logoTs from "../../assets/image/typescript.png";
import reduxIcon from "../../img/redux.png";
export const Skills = () => {
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Habilidades</h2>
          <div className="subheading mb-3">Front-End</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fa-brands fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <img
                src={logoTs}
                className="rounded-2 p-0 mb-3"
                style={{ width: "2.7rem", height: "2.7rem" }}
              />
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <img
                src={reduxIcon}
                alt="icono de redux toolkit"
                className="rounded-2 p-0 mb-3"
                style={{ width: "2.7rem", height: "2.7rem" }}
              />
            </li>
          </ul>
          <div className="subheading mb-3">Control de version</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fa-brands fa-github "></i>
            </li>
            <li className="list-inline-item">
              <i className="fa-brands fa-git"></i>
            </li>
          </ul>
          <div className="subheading mb-3">Otros Lenguajes</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fa-brands fa-php"></i>
            </li>
            <li className="list-inline-item fs-3">
              <i className="fa fa-database"></i> MySQL
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </>
  );
};
