import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import TercerComponente from './TercerComponente';
import { EventosComponente } from './EventosComponente';


function App() {
  
  const ficha_media={
    altura: "168cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "ninguna"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido al master de ract!!
        </p>
        {/* Cargar mi primer componente*/}
        <div className='componentes'>
          <hr />
            <EventosComponente />
          <hr />
            <TercerComponente
              ficha={ficha_media}
            />
          <hr />
            <SegundoComponente />
          <hr />
            <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
