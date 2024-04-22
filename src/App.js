import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/Topbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner />
    </div>
  );
}

export default App;
