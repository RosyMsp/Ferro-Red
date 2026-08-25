import Navbar from "./components/Navbar";
// import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Nosotros from "./sections/Nosotros/Nosotros";
// import Servicios from "./sections/Servicios/Servicios";
// import Experiencia from "./sections/Experiencia/Experiencia";
// import Seguridad from "./sections/Seguridad/Seguridad";
// import PorQueElegirnos from "./sections/WhyUs/WhyUs";
// import Contacto from "./sections/Contacto/Contacto";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Nosotros />
        {/* <Servicios />
        <Experiencia />
        <Seguridad />
        <PorQueElegirnos />
        <Contacto /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;