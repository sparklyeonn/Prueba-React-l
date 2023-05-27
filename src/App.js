import Personajes from "./assets/img/Personajes.jpeg";
import South_Park from "./assets/img/South_Park.png";
import Busqueda from "./components/miApi";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container" id="contenedor">
        <div className="row">
          <div className="col-md-6" id="contenedor1">
            <img src={South_Park} alt="southpark" id="img1" />
            <p>
            South Park es una serie de televisión estadounidense de animación, creada por Trey Parker 
            y Matt Stone para el canal Comedy Central. Está dirigida al público adulto y se caracteriza 
            por satirizar con humor negro la sociedad, actualidad y cultura estadounidense a través de 
            las historias y situaciones surrealistas que les suceden a sus protagonistas,
            cuatro chicos llamados Stan, Kyle, Cartman y Kenny, residentes en un pueblo ficticio de 
            Colorado que se llama South Park.
            </p>
            <div>
              <img src={Personajes} alt="southpark" id="img2" />
            </div>
          </div>
          <div className="col-md-6" id="contenedor2">
            <h3>Busca tu Personaje</h3>
            <Busqueda />
        
          
      
          </div>
        </div>
        <footer>Desafío Final React I</footer>
      </div>
    </div>
  );
}

export default App;