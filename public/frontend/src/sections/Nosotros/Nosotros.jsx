import "./Nosotros.css";
import founderImage from "../../assets/founder.jpeg";

function Nosotros() {
  return (
    <section id="nosotros" className="about">
      <div className="aboutContainer">
        <div className="aboutHeader">
          <span className="aboutEyebrow">ACERCA DE NOSOTROS</span>

          <h2 className="aboutTitle">
            Experiencia ferroviaria
            <br />
            que genera confianza.
          </h2>

          <p className="aboutIntro">
            Conoce la trayectoria del Ing. Raúl Ernesto Villanueva dentro
            del sector ferroviario.
          </p>
        </div>

        <article className="aboutCardSingle">
          <div className="aboutCardImage">
            <img
              src={founderImage}
              alt="Ing. Raúl Ernesto Villanueva en instalaciones ferroviarias"
            />
          </div>

          <div className="aboutCardContent">
            {/* <span className="aboutCardTag">FERRO-RED</span> */}

            <h3>Ing. Raúl Ernesto Villanueva</h3>

            <h4>
              Inspección, Mantenimiento y Construcción de Vías Férreas
            </h4>

            <p>
              El fundador cuenta con más de 28 años de experiencia
              profesional dentro de la industria ferroviaria colaborando
              en proyectos y operaciones relacionadas con FNM, TFM,
              Kansas City Southern de México y CPKCM.
            </p>

            <div className="aboutHighlights">
              <div className="highlightItem">
                <strong>28+</strong>
                <span>Años de experiencia</span>
              </div>

              <div className="highlightItem">
                <strong>FNM</strong>
                <span>Trayectoria profesional</span>
              </div>

              <div className="highlightItem">
                <strong>CPKCM</strong>
                <span>Experiencia en operaciones</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Nosotros;