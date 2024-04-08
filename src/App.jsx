import reactLogo from "./assets/react.svg";
import "./App.css";
import { ListaDeTareas } from "./components/ListaDeTareas";

function App() {
  return (
    <div className="container">
      <div className="logo-contenedor">
        <img className="logo" src={reactLogo} alt="logo" />
      </div>
      <div className="lista-tareas-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
