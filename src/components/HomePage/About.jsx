import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* <!-- About Start --> */}
      <div id="2" className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden rounded ps-5 pt-5 h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/aboutt.jpg"
                  alt="S&V Insurance Manager Image"
                  style={{ objectFit: "cover" }}
                />

                <div
                  className="position-absolute top-0 start-0 bg-white rounded pe-3 pb-3"
                  style={{ width: "200px", height: "200px" }}
                >
                  <div className="d-flex flex-column justify-content-center text-center bg-primary rounded h-100 p-3">
                    <h5 className="text-white mb-0">13+</h5>
                    <h5 className="text-white">Years</h5>
                    <h6 className="text-white mb-0">Experience</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h2 className="display-6 mb-3">
                  We spread happiness with our services.
                </h2>
                <p className="fs-5 text-primary mb-4">
                  S&V offers a wide range of insurance policies to help protect
                  people and businesses from losing money. These policies are
                  designed to cover many different situations, so no matter what
                  kind of protection you need, S&V has something for you.
                </p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 me-3"
                        src="img/icon/icon-04-primary.png"
                        alt="Flexible Insurance Plans"
                        loading="lazy"
                      />

                      <h4 className="mb-0">Flexible Insurance Plans</h4>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 me-3"
                        src="img/icon/icon-03-primary.png"
                        alt="Authentic Poilcy Agencies"
                        loading="lazy"
                      />

                      <h4 className="mb-0">Authentic Poilcy Agencies</h4>
                    </div>
                  </div>
                </div>
                <p className="mb-4">
                  Trust us to be your partner in navigating the complexities of
                  insurance, ensuring a brighter and more secure future. We
                  understand that insurance can be complicated, and we're here
                  to help you every step of the way
                </p>
                <div className="border-top mt-4 pt-4">
                  <div className="d-flex align-items-center bg-primary rounded p-3">
                    <img
                      className="flex-shrink-0 rounded-circle me-3"
                      src="img/profile.jpg"
                      alt="S&V Insurance Manager Image"
                      loading="lazy"
                    />
                    <Link to="tel: 7404609190" className="text-white mb-0">
                      Call Us: +91 7404609190
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </div>
  );
};

export default About;
