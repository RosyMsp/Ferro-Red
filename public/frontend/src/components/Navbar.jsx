import "../styles/Navbar.css"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#inicio" className="navbar-brand">
          <div className="brand-text">
            <span className="brand-name">FERRO-RED</span>
            <span className="brand-subtitle">
              Inspección · Mantenimiento · Construcción
            </span>
          </div>
        </a>

        <nav className="navbar-menu">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#seguridad">Seguridad y Calidad</a>
          <a href="#elegirnos">¿Por qué elegirnos?</a>
          <a href="#contacto" className="contact-button">
            Contacto
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;