import "./Hero.css";
import heroImage from "../../assets/hero-ferroviaria.jpeg";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div
        className="heroBackground"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="heroOverlay"></div>

        <div className="heroContent">
          <p className="heroFounder">ING. RAÚL ERNESTO VILLANUEVA</p>

          <h1 className="heroTitle">FERRO-RED</h1>

          <h2 className="heroSubtitle">
            Inspección, Mantenimiento y Construcción de Vías Férreas
          </h2>

          <p className="heroDescription">
            Experiencia ferroviaria respaldada por más de 28 años en
            operaciones y mantenimiento de vía.
          </p>

          <div className="heroActions">
            <a href="#servicios" className="heroButton primaryButton">
              Nuestros servicios
            </a>

            <a href="#contacto" className="heroButton secondaryButton">
              Contáctanos
            </a>
          </div>
        </div>
      </div>

      <div className="heroStats">
        <div className="stat">
          <strong>28+</strong>
          <span>Años de experiencia</span>
        </div>

        <div className="stat">
          <strong>Inspección</strong>
          <span>Ferroviaria</span>
        </div>

        <div className="stat">
          <strong>Mantenimiento</strong>
          <span>De vía</span>
        </div>

        <div className="stat">
          <strong>Construcción</strong>
          <span>De vías férreas</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;