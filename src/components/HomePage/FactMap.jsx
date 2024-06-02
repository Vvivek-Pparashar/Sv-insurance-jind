import React from "react";

const FactMap = () => {
  return (
    <div>
      {/* <!-- Facts Start --> */}
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div className="container facts px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="p-4 p-lg-5 col-lg-6 facts-text wow fadeIn d-flex align-items-center justify-content-center"
              data-wow-delay="0.1s"
            >
              <div
                className="rounded facts-counter wow fadeIn"
                data-wow-delay="0.5s"
              >
                <div className="pt-5 pb-5 h-100 px-4 pe-lg-0">
                  <div className="row g-4 d-flex">
                    <div className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <h5 className="display-5" data-toggle="counter-up">
                          13
                        </h5>
                        <h5>+yrs</h5>
                      </div>
                      <p className="fs-5 text-primary">Experience</p>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="display-5" data-toggle="counter-up">
                        3
                      </h5>
                      <p className="fs-5 text-primary">Awards Achieved</p>
                    </div>
                    <div className="col-sm-6">
                      <h5 className="display-5" data-toggle="counter-up">
                        4
                      </h5>
                      <p className="fs-5 text-primary">Team Members</p>
                    </div>
                    <div id="4" className="col-sm-6">
                      <div className="d-flex align-items-center">
                        <h5 className="display-5" data-toggle="counter-up">
                          1200
                        </h5>
                        <h5>+</h5>
                      </div>
                      <p className="fs-5 text-primary">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "450px" }}
            >
              <div className="position-relative overflow-hidden h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.199147118322!2d76.30874987447402!3d29.305833453189543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39120503e46cd34f%3A0x6faefbda338cd3fa!2sS%20%26V%20Washing%20Point%20and%20general%20insurance!5e0!3m2!1sen!2sin!4v1710434351971!5m2!1sen!2sin"
                  style={{ border: "0", width: "100%", height: "100%" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="S&V Insurance Map Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Facts End --> */}
    </div>
  );
};

export default FactMap;
