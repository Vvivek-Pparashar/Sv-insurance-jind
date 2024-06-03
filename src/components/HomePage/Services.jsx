import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      {/* <!-- Service Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h2 className="display-6 mb-5">
              We Provide professional Insurance Services
            </h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-10-light.png"
                      alt="Vehicle Insurance icon"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-0">Vehicle Insurance</h3>
                </div>
                <p className="mb-4">
                  Vehicle insurance, provides financial protection for drivers
                  in the event of accidents, theft, or damage to their vehicles.{" "}
                </p>
                <Link className="btn btn-light px-3" href="">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-01-light.png"
                      alt="Health Insurance icon"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-0">Health Insurance</h3>
                </div>
                <p className="mb-4">
                  Health insurance is a type of insurance coverage that helps
                  individuals or families pay for medical expenses.
                </p>
                <Link className="btn btn-light px-3" href="">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-05-light.png"
                      alt="Home Insurance icon"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-0">Home Insurance</h3>
                </div>
                <p className="mb-4">
                  Home Insurance typically covers a range of perils, including
                  fire, theft, vandalism, windstorms, and more.
                </p>
                <Link className="btn btn-light px-3" href="">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-08-light.png"
                      alt="Life Insurance icon"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-0">Life Insurance</h3>
                </div>
                <p className="mb-4">
                  Life insurance provides financial protection for your loved
                  ones in the event of your death.
                </p>
                <Link className="btn btn-light px-3" href="">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-07-light.png"
                      alt="Business Insurance icon"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-0">Business Insurance</h3>
                </div>
                <p className="mb-4">
                  Business Insurance provides financial protection for
                  businesses against unforeseen events that damage property, or
                  lead to legal claims.
                </p>
                <Link className="btn btn-light px-3" href="">
                  Read More
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded h-100 p-5">
                <div className="d-flex align-items-center ms-n5 mb-4">
                  <div className="service-icon flex-shrink-0 bg-primary rounded-end me-4">
                    <img
                      className="img-fluid"
                      src="img/icon/icon-06-light.png"
                      alt="Property Insurance icon"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mb-0">Property Insurance</h3>
                </div>
                <p className="mb-4">
                  Property insurance protects property owners against financial
                  losses resulting from damage or loss to their property and its
                  contents.
                </p>
                <Link className="btn btn-light px-3" href="">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}
    </div>
  );
};

export default Services;
