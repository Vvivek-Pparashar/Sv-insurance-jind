import React from "react";
import OwlCarousel from "react-owl-carousel";

const Testimonial = () => {
  return (
    <div>
      {/* <!-- Testimonial Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: "500px" }}>
            <h2 className="display-6 mb-5">
              What They Say About Our Insurance
            </h2>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-left h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/p1.jpg"
                  alt="Vechile Insurance Testimonial"
                  loading="lazy"
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/p2.jpg"
                  alt="Health Insurance Testimonial"
                  loading="lazy"
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/p3.jpg"
                  alt="Life Insurance Testimonial"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <OwlCarousel
                nav={true}
                items={1}
                autoplay={true}
                smartSpeed={1000}
                lazyLoad={true}
                lazyContent={true}
                loop
                navText={[
                  '<i class="bi bi-chevron-left"></i>',
                  '<i class="bi bi-chevron-right"></i>',
                ]}
                className="owl-carousel testimonial-carousel"
              >
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="img/p5.jpg"
                    alt="Car Insurance Testimonial"
                    loading="lazy"
                  />
                  <p className="fs-5">
                    "मैं वर्षों से S&V इंश्योरेंस का एक वफादार ग्राहक रहा हूं,
                    और वे कभी भी बंद नहीं होते हैं मुझे उनकी व्यावसायिकता और
                    समर्पण से प्रभावित करने के लिए।"
                  </p>
                  <h5>Sarvesh</h5>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="img/p2.jpg"
                    alt="Business Insurance Testimonial"
                    loading="lazy"
                  />
                  <p className="fs-5">
                    "Choosing S&V Insurance was one of the best decisions I've
                    made for my family's financial security. "
                  </p>

                  <h5>Uday Bhandari</h5>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="img/p1.jpg"
                    alt="Insurance Testimonial"
                    loading="lazy"
                  />
                  <p className="fs-5">
                    "S&V इंश्योरेंस ने अपने व्यक्तिगत दृष्टिकोण के साथ मेरी
                    अपेक्षाओं को पार कर लिया मेरी ज़रूरतों के लिए सही कवरेज
                    ढूंढ़ना।""
                  </p>
                  <h5>Shubham</h5>
                </div>
                <div className="testimonial-item text-center">
                  <img
                    className="img-fluid rounded mx-auto mb-4"
                    src="img/p3.jpg"
                    alt="Insurance Testimonial"
                    loading="lazy"
                  />
                  <p className="fs-5">
                    "I've been a loyal customer of S&V Insurance for years, and
                    they never cease to impress me with their professionalism
                    and dedication."
                  </p>
                  <h5>Nilesh</h5>
                </div>
              </OwlCarousel>
            </div>
            <div className="col-lg-3 d-none d-lg-block">
              <div className="testimonial-right h-100">
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/p6.jpg"
                  alt="Property Insurance Testimonial"
                  loading="lazy"
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/p5.jpg"
                  alt="Car Insurance Testimonial"
                  loading="lazy"
                />
                <img
                  className="img-fluid animated pulse infinite"
                  src="img/p4.jpg"
                  alt="MotorCycle Insurance Testimonial"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </div>
  );
};

export default Testimonial;
