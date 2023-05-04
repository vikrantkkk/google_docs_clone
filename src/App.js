import Header from "./components/header/Header";
import Middle from "./components/middle_section/Middle";
import Combine from "./components/textfield/Combine";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
        <Middle />
      </div>
      <div className="Combine">
        <Combine />
      </div>
    </div>
  );
}

export default App;
