export const CardProyect = ({ img, titulo, proyectName }) => {
  return (
    <div className="card shadow-sm my-1 mx-auto" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"
        style={{ width: "100%", height: "110px" }}
        alt="..."
      />
      <div className="card-body">
        <h3 className="card-title text-primary">{titulo}</h3>
        <a
          href={`https://devjonatanmorales.github.io/${proyectName}/`}
          className="btn btn-secondary w-100 mb-2"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-globe"></i> DEMO
        </a>
        <a
          href={`https://github.com/DevJonatanMorales/${proyectName}`}
          className="btn btn-dark  w-100"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i> CODIGO
        </a>
      </div>
    </div>
  );
};
