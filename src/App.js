import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const itemsList = [
    { value: "yes", label: "Yes" },
    { value: "probably-not", label: "Probably Not" },
  ];
  return (
    <div className="App">
      <div className="container">
        <h1>Should you use a dropdown ?</h1>
        <Dropdown itemsList={itemsList}></Dropdown>
      </div>
    </div>
  );
}

export default App;
