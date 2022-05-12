import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Homepage</h1>
      <Link to="/players">Hier geht's zu Nationalteam</Link>
    </div>
  );
}

export default App;
