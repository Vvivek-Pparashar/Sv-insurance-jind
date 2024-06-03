import React from "react";

const Features = () => {
  return (
    <div>
      {/* <!-- Features Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h2 className="display-6 mb-5">
                लोगों द्वारा हमें चुनने के कुछ कारण!
              </h2>
              <p className="mb-4">
                अद्वितीय विशेषज्ञता, वैयक्तिकृत सेवा और अपने मन की शांति के
                प्रति प्रतिबद्धता के लिए एस एंड वी बीमा चुनें। जानकार पेशेवरों
                की एक समर्पित टीम के साथ, हम आपकी विशिष्ट आवश्यकताओं को पूरा
                करने के लिए डिज़ाइन किए गए अनुकूलित बीमा समाधान प्रदान करते हैं।
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="img/icon/icon-06-primary.png"
                        alt="Insurance Easy Process icon"
                        loading="lazy"
                      />
                      <h4 className="mb-0">Easy Process</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="img/icon/icon-03-primary.png"
                        alt="Insurance Fast Delivery icon"
                        loading="lazy"
                      />
                      <h4 className="mb-0">Fast Delivery</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="img/icon/icon-04-primary.png"
                        alt="Insurance Policy Controlling icon"
                        loading="lazy"
                      />
                      <h4 className="mb-0">Policy Controlling</h4>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="bg-light rounded h-100 p-3">
                    <div className="bg-white d-flex flex-column justify-content-center text-center rounded h-100 py-4 px-3">
                      <img
                        className="align-self-center mb-3"
                        src="img/icon/icon-07-primary.png"
                        alt="Insurance Money Saving icon"
                        loading="lazy"
                      />
                      <h4 className="mb-0">Money Saving</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src="img/a1.jpg"
                  alt="S&V Insurance Manager Image"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Features End --> */}
    </div>
  );
};

export default Features;
