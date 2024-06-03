import React from "react";
import { Link } from "react-router-dom";

const TeamMember = () => {
  return (
    <div>
      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h2 className="display-6 mb-5">
              Meet Our Professional Team Members
            </h2>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="img/team-1.jpg"
                  alt="Insurance Branch Manager Image"
                  loading="lazy"
                />
                <div className="text-center p-4">
                  <h5>Laxmi Kant</h5>
                  <span>Branch Manager</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Laxmi Kant</h5>
                  <p>Branch Manager</p>
                  <div className="d-flex justify-content-center">
                    <Link
                      className="btn btn-square btn-light m-1"
                      href="tel:7404609190"
                    >
                      <i className="bi bi-telephone-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item rounded">
                <img
                  className="img-fluid"
                  src="img/team-4.jpg"
                  alt="Delhi Based Insurancer Image"
                  loading="lazy"
                />
                <div className="text-center p-4">
                  <h5>Vinod Sharma</h5>
                  <span>Delhi based</span>
                </div>
                <div className="team-text text-center bg-white p-4">
                  <h5>Vinod Sharma</h5>
                  <p>Delhi based</p>
                  <div className="d-flex justify-content-center">
                    <Link
                      className="btn btn-square btn-light m-1"
                      href="tel:7404609190"
                    >
                      <i className="bi bi-telephone-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}
    </div>
  );
};

export default TeamMember;
