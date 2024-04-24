import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/Topbar";
import Banner from "./components/Banner";
import WhoAreWe from "./components/WhoAreWe";
import WhyKashcool from "./components/WhyKashcool";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner />
      <WhoAreWe />
      <WhyKashcool />
    </div>
  );
}

export default App;
