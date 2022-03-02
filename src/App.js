import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
