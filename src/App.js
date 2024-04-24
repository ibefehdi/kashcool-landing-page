import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/Topbar";
import Banner from "./components/Banner";
import WhoAreWe from "./components/WhoAreWe";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner />
      <WhoAreWe />
    </div>
  );
}

export default App;
