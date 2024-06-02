import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BottomTele from "../BottomTele";
import { Link, ScrollRestoration } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div>
      <NavBar page={"ContactUs"}/>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header-2 py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h4 className="display-4 animated slideInDown mb-4">Contact Us</h4>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <ContactForm/>
      <Footer />
      <BottomTele />
      <ScrollRestoration />
    </div>
  );
};

export default ContactUs;
