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
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import InitialLoadingAnimation from "./components/InitialLoadingAnimation";

function App() {
  const AppRef = useRef();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous action, like fetching data
    setTimeout(() => {
      setLoading(false); // Set loading to false after the async action is complete
    }, 3300); // Adjust the timeout based on your needs
  }, []); // Empty dependency array ensures the effect runs only once
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      // use scoped selectors
      // gsap.from(".bg-yellow", { opacity: 0, x: -30, duration: 2 });
      gsap.set("i4", { x: 0, y: 0 });
      gsap.to(".i4", {
        scrollTrigger: {
          trigger: ".fs-container",
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none none reverse",

          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate the values for opacity, x position, and rotation based on scroll progress
            const yPos = progress * -200; // Adjust the value as needed for the distance

            gsap.to(".i4", {
              y: yPos,
            });
          },
        },
      });
      gsap.to(".bg-yellow", {
        scrollTrigger: {
          trigger: ".fs-container",
          start: "top top",
          end: "bottom bottom",
          toggleActions: "play none none reverse",

          onUpdate: (self) => {
            const progress = self.progress;

            gsap.to(".bg-yellow", {
              opacity: 1 - progress * 4,
              x: -progress * 50,
              ease: "none",
            });
          },
        },
      });
    }, AppRef);
    // clean up function
    return () => ctx.revert();
  }, []);
  return (
    <div className="App" ref={AppRef}>
      <img className="bg-yellow" src={yellowbg} alt="yellow" />
      <Header />
      {/* {loading ? ( */}
      <InitialLoadingAnimation />
      {/* ) : ( */}
      <>
        <div className="i4-parent">
          <img src={i4} alt="mode domains" className="i4" />
        </div>

        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <ForthSection />
        <FifthSection />
        <FAQs />
        <Footer />
      </>
      {/* )} */}
    </div>
  );
}

export default App;
