import BarraNavegacion from '../BarraNavegacion/barraNavegacion';
import Titulo from '../titulo/Titulo';
import Conocimientos from '../Conocimientos/Conocimientos';
import Integrantes from '../integrantes/Integrantes';
import About from '../about/About';

function Landing() {
  return (
    <>
      <BarraNavegacion />
      <Titulo />
      <Conocimientos />
      <Integrantes />
      <About />
    </>
  )
}

export default Landing

