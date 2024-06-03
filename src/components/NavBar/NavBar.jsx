import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ page }) => {
  const [navBg, setNavBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  console.log(mobileNav);

  const changeNavBg = () => {
    window.scrollY >= 300 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <div
      className="navbar-sticky-top"
      style={{ top: navBg ? "0px" : "-130px" }}
    >
      {/* <!-- Topbar Start --> */}
      <div className="container-fluid bg-dark text-white-50 py-2 px-0 d-lg-block ">
        <div className="row  gx-0 align-items-center">
          <div className="col-lg-7 px-lg-5 px-4 text-start d-inline-flex justify-content-center justify-content-lg-start">
            <div className="h-100 d-inline-flex align-items-center me-5">
              <small className="fa fa-phone-alt me-2"></small>
              <Link className="text-white-50" to="tel:7404609190">
                +91 7404609190
              </Link>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <small className="fa fa-phone-alt me-2"></small>
              <Link className="text-white-50" to="tel:9315821007">
                +91 9315821007
              </Link>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end d-none d-lg-block">
            <small className="far fa-clock me-2"></small>
            <small>Mon - Sat : 08 AM - 07 PM</small>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light px-4 px-lg-5 shadow-sm">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="m-0 text-primary">
            <img
              className="img-fluid me-3"
              src="img/icon/icon-02-primary.png"
              alt="S&V Insrance Jind Logo"
              loading="lazy"
            />
            S&V
          </h2>
        </Link>
        <button
          title="toggle"
          type="button"
          aria-label="click"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${mobileNav ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav mx-auto bg-light rounded pe-4 py-3 py-lg-0">
            <Link
              to="/"
              className={`nav-item nav-link ${page == "Home" ? "active" : ""}`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`nav-item nav-link ${
                page == "AboutUs" ? "active" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/our-services"
              className={`nav-item nav-link ${
                page == "OurServices" ? "active" : ""
              }`}
            >
              Our Services
            </Link>

            <a
              href="/contact-us"
              className={`nav-item nav-link ${
                page == "ContactUs" ? "active" : ""
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
        <Link
          to="tel:7404609190"
          className="btn btn-primary px-3 d-none d-lg-block"
        >
          Get A Quote
        </Link>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
};

export default NavBar;
