import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import ForthSection from "./components/ForthSection";
import FifthSection from "./components/FifthSection";
import FAQs from "./components/FAQs";
import yellowbg from "../src/assets/bg-yellow.png";
import i4 from "../src/assets/4.png";
import i1 from "../src/assets/1.png";

function App() {
  return (
    <div className="App">
      <img className="bg-yellow" src={yellowbg} alt="yellow" />{" "}
      <div className="i4-parent">
        <img src={i4} alt="mode domains" />
      </div>
      <div className="i1-parent">
        <img src={i1} alt="mode domains" />
      </div>
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
