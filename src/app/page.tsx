import Header from "./Pages/CommonComponents/Header";
import About from "./Pages/Landing/About";
import Hero from "./Pages/Landing/Hero";
import Portoflio from "./Pages/Landing/Portoflio";
import Resume from "./Pages/Landing/Resume";
import Contact from "./Pages/Landing/Contact";
import { ReactLenis } from "lenis/react";
export default function Home() {
  return (
    // <Provider store={portfolioStore}>
    <ReactLenis
      options={{
        duration: 4.25,
        gestureOrientation: "vertical",
      }}
      root
    >
      <div className="flex flex-col w-full">
        {/* <Header /> */}
        <Hero />
        {/* <About />
        <Contact />
        <Portoflio />
        <Resume /> */}
      </div>
    </ReactLenis>

    // </Provider>
  );
}
