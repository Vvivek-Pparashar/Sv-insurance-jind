import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h2 className="text-white mb-4">
                <LazyLoad width={"100px"}>
                  <img
                    className="img-fluid me-3"
                    src="img/icon/icon-02-light.png"
                    alt="S&V Insurance Jind Logo"
                    loading="lazy"
                  />
                </LazyLoad>
                S&V
              </h2>
              <p>"S&V Insurance: Protecting Your Tomorrow, Today."</p>
              <div className="d-flex pt-2">
                <Link className="btn btn-square me-1" to="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  className="btn btn-square me-1"
                  to="https://www.facebook.com/sv.insurance.jind?mibextid=JRoKGi"
                  target="__blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  className="btn btn-square me-1"
                  to="https://www.instagram.com/sv_insurance_jind?igsh=cDYxcHowdGMwaGhu"
                  target="__blank"
                >
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link
                  className="btn btn-square me-0"
                  to="https://www.linkedin.com/in/vivek-parashar-developer/"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link
                  className="btn btn-square me-0"
                  to="https://youtube.com/@vivekparashar...8716"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/about-us">
                About Us
              </Link>
              <Link className="btn btn-link" to="/contact-us">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/our-services">
                Our Services
              </Link>
              <Link className="btn btn-link" to="">
                Terms & Condition
              </Link>
              <Link className="btn btn-link" to="">
                Support
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Insurances</h5>
              <Link className="btn btn-link" to="">
                Vechile Insurance
              </Link>
              <Link className="btn btn-link" to="">
                Health Insurance
              </Link>
              <Link className="btn btn-link" to="">
                Home Insurance
              </Link>
              <Link className="btn btn-link" to="">
                Life Insurance
              </Link>
              <Link className="btn btn-link" to="">
                Business Insurance
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <address>
                <h5 className="text-light mb-4">Address</h5>
                <p>
                  <i className="fa fa-map-marker-alt me-3"></i>
                  Near Shani Dev Mandir, Khem Nagar, Jind, Haryana 126102
                </p>
                <p>
                  <i className="fa fa-phone-alt me-3"></i>
                  <a href="tel: 7404609190" className="text-white-50">
                    +91 7404609190
                  </a>
                </p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  <a
                    href="mailto: svwashingstationjind@gmail.com"
                    className="text-white-50"
                  >
                    svwashingstationjind@gmail.com
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link to="/">S&V INSURANCE JIND</Link>, All Right
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </div>
  );
};

export default Footer;
