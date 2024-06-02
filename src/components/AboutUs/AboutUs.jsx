import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BottomTele from "../BottomTele";
import { Link, ScrollRestoration } from "react-router-dom";
import About from "../HomePage/About";
import TeamMember from "../HomePage/TeamMember";
import FactMap from "../HomePage/FactMap";

const AboutUs = () => {
  return (
    <div>
      <NavBar page={"AboutUs"} />
      {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header-1 py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h4 className="display-4 animated slideInDown mb-4">About Us</h4>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
      <About/>
      <FactMap/>
      <TeamMember/>
      <Footer/>
      <BottomTele/>
      <ScrollRestoration/>
    </div>
  );
};

export default AboutUs;
