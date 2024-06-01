import React from "react";
import { Link } from "react-router-dom";

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
              <h1 className="text-white mb-4">
                <img
                  className="img-fluid me-3"
                  src="img/icon/icon-02-light.png"
                  alt=""
                />
                S&V
              </h1>
              <p>"S&V Insurance: Protecting Your Tomorrow, Today."</p>
              <div className="d-flex pt-2">
                <Link className="btn btn-square me-1" to="">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link className="btn btn-square me-1" to="">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="btn btn-square me-1" to="">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link className="btn btn-square me-0" to="">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/AboutUs">
                About Us
              </Link>
              <Link className="btn btn-link" to="/ContactUs">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/OurServices">
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
              <h5 className="text-light mb-4">Address</h5>
              <p>
                <i className="fa fa-map-marker-alt me-3"></i>Near Shani Dev
                Mandir, Khem Nagar, Jind, Haryana 126102
              </p>
              <p>
                <i className="fa fa-phone-alt me-3"></i>+91 7404609190
              </p>
              <p>
                <i className="fa fa-envelope me-3"></i>
                svwashingstationjind@gmail.com
              </p>
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
