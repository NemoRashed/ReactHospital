import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";

function Section5() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <MdKeyboardArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <MdKeyboardArrowLeft />
      </div>
    );
  };
  let settings = {
    dot: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="silder">
      <div className="Container mt-5 carousel">
        <h1 className="slider_title">Best Hospitals</h1>

        <Slider {...settings} className="flex">
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="pichos.jpg" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="detalis">
              <h2>
                haldoor<span className="job-title">Hospital</span>
              </h2>
              <div className="stars">
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="pichos.jpg" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="detalis">
              <h2>
                haldoor<span className="job-title">Hospital</span>
              </h2>
              <div className="stars">
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="pichos.jpg" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="detalis">
              <h2>
                haldoor<span className="job-title">Hospital</span>
              </h2>
              <div className="stars">
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar />
              </div>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <div className="card-image">
                <img src="pichos.jpg" />
              </div>
              <ul className="social-icons">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="detalis">
              <h2>
                haldoor<span className="job-title">Hospital</span>
              </h2>
              <div className="stars">
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar style={{ color: "yellow" }} />
                <MdStar />
              </div>
            </div>
          </div>
        </Slider>
        <Link to="/Hospitals">
          <button className="slider-btn">hospital search</button>
        </Link>
      </div>
    </div>
  );
}

export default Section5;
