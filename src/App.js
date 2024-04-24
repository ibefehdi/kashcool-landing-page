import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/Topbar";
import Banner from "./components/Banner";
import WhoAreWe from "./components/WhoAreWe";
import WhyKashcool from "./components/WhyKashcool";
import DownloadKashcool from "./components/DownloadKashcool";
import Reviews from "./components/Reviews";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Banner />
      <WhoAreWe />
      <WhyKashcool />
      <DownloadKashcool />
      <Reviews />
    </div>
  );
}

export default App;
