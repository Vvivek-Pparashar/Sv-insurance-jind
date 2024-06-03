import React, { Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroPage from "./components/HomePage/HeroPage";
import About from "./components/HomePage/About";
// import Footer from "./components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import BottomTele from "./components/BottomTele";
// import Testimonial from "./components/HomePage/Testimonial";
// import TeamMember from "./components/HomePage/TeamMember";
// import Services from "./components/HomePage/Services";
// import Features from "./components/HomePage/Features";
// import FactMap from "./components/HomePage/FactMap";
const Features = React.lazy(() => import("./components/HomePage/Features"));
const Services = React.lazy(() => import("./components/HomePage/Services"));
const TeamMember = React.lazy(() => import("./components/HomePage/TeamMember"));
const Testimonial = React.lazy(() =>
  import("./components/HomePage/Testimonial")
);
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const FactMap = React.lazy(() => import("./components/HomePage/FactMap"));
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <MyErrorBoundary> */}
      <NavBar page={"Home"} />
      <HeroPage />
      <About />
      <Suspense fallback={<h3>Loading....</h3>}>
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
