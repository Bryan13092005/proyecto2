import Integrantes from './components/integrantes/Integrantes.jsx';
import About from './components/about/About.jsx';
import Titulo from './components/titulo/Titulo.jsx';
import Conocimientos from './components/Conocimientos/Conocimientos.jsx';
import BarraNavegacion from './components/BarraNavegacion/barraNavegacion.jsx';
function App() {
  return (
    <>
    <BarraNavegacion/>
    <Titulo/>
    <Conocimientos/>
    <Integrantes />
    <About />
    </>
  )
}

export default App
