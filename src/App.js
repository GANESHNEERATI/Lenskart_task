import "./App.css";
import Banner from "./Components/Banner";
import Banner1 from "./Components/Banner1";
import CardIntro from "./Components/CardIntro";
import Footer from "./Components/Footer";
import Help from "./Components/Help";
import Terms from "./Components/Terms";

function App() {
  return (
    <div className="App">
      <Banner />
      <CardIntro />
      <Banner1 />
      <Terms />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
