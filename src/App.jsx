import React, { Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroPage from "./components/HomePage/HeroPage";
import About from "./components/HomePage/About";
import Footer from "./components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import BottomTele from "./components/BottomTele";
import Testimonial from "./components/HomePage/Testimonial";
import TeamMember from "./components/HomePage/TeamMember";
import Services from "./components/HomePage/Services";
import Features from "./components/HomePage/Features";
// import FactMap from "./components/HomePage/FactMap";
const FactMap = React.lazy(() => import("./components/HomePage/FactMap"));
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <MyErrorBoundary> */}
      <Suspense fallback={<p>Loading....</p>}>
        <NavBar page={"Home"} />
        <HeroPage />
        <About />
        <FactMap />
        <Features />
        <Services />
        <TeamMember />
        <Testimonial />
        <Footer />
        <BottomTele />
      </Suspense>
      {/* <ScrollRestoration/> */}
      {/* </MyErrorBoundary> */}
    </div>
  );
};

export default App;
