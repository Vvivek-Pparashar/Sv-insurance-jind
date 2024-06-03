import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div>
      {/* <!-- Carousel Start --> */}
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <OwlCarousel
              nav
              items={1}
              autoplay={true}
              smartSpeed={1000}
              loop
              lazyLoad={true}
              lazyContent={true}
              navText={[
                '<i className="bi bi-arrow-left"></i>',
                '<i className="bi bi-arrow-right"></i>',
              ]}
              classNameName="owl-carousel testimonial-carousel bg-white p-5"
            >
              <div className="carousel-item active">
                <img className="w-100" src="img/c3.jpg" alt="Life Insurance"/>
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h1 className="display-3 text-dark mb-4 animated slideInDown">
                          Expert Insurance Services for Life, Health, and
                          Vehicle.
                        </h1>
                        <p className="fs-5 text-body mb-5">
                          Protect your life, health, and vehicle with expert
                          insurance services.
                        </p>
                        <a href="#2" className="btn btn-primary py-3 px-5">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                <img className="w-100" src="img/c1.jpg" alt="Car Insurance"/>
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <h2 className="display-3 text-dark mb-4 animated slideInDown">
                          Protect What Matters Most with S&V Insurance
                        </h2>
                        <p className="fs-5 text-body mb-5">
                          Safeguarding futures, building wealth for all.
                        </p>
                        <a href="#2" className="btn btn-primary py-3 px-5">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
      {/* <!-- Carousel End --> */}
    </div>
  );
};

export default HeroPage;
