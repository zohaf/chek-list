import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Panels from "./components/Panels";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Panels />
      <NavBar />

      <Header title="" />
    </div>
  );
}

export default App;
