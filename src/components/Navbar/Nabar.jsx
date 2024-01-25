import { useEffect } from "react";
import avatar from "../../assets/image/DevJonatanMoralesSinFondo.png";

export const Nabar = () => {
  useEffect(() => {
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
      new window.bootstrap.ScrollSpy(document.body, {
        target: "#sideNav",
        rootMargin: "0px 0px -40%",
      });
    }

    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = Array.from(
      document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map((responsiveNavItem) => {
      responsiveNavItem.addEventListener("click", () => {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
      return null;
    });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">DEV JONATAN</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid mx-auto mb-2"
            style={{ width: "75%" }}
            src={avatar}
            alt="avatar"
          />
        </span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">
              Acerca de Mí
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">
              Experiencia
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">
              Educación
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">
              Habilidades
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#projects">
              Proyectos
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#Certifications">
              Certificaciones
            </a>
          </li> 
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">
              Intereses
            </a>
          </li>*/}
        </ul>
      </div>
    </nav>
  );
};
