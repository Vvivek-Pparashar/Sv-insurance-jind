import React from "react";
import NavBar from "../NavBar/NavBar";
import Services from "../HomePage/Services";
import Footer from "../Footer/Footer";
import BottomTele from "../BottomTele";
import { Link, ScrollRestoration } from "react-router-dom";


const OurServices = () => {
  return (
    <div>
      <NavBar page={"OurServices"}/>
      <div
        className="container-fluid page-header-3 py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 animated slideInDown mb-4">Services</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <Services />
      <Footer />
      <BottomTele />
      <ScrollRestoration />
    </div>
  );
};

export default OurServices;
