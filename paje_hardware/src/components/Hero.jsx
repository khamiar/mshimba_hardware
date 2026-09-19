import React from "react";
import toolsImg from "../assets/img/tools.jpeg";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hs hs1"></div>
      <div className="hs hs2"></div>
      <div className="hbgtxt">TOOLS</div>

      <div className="container">
        <div
          className="row align-items-center g-5"
          style={{ minHeight: "88vh" }}
        >
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="hbadge">
              <div className="hbi">
                <i className="fas fa-star"></i>
              </div>
              <span>#1 Rated Hardware store in Paje, Zanzibar</span>
            </div>

            <h1 className="htitle">
              Quality <span className="hl">Tools & Hardware</span>
              <br />
              for Every Project
            </h1>

            <p className="hdesc">
              Get quality tools, building materials, plumbing supplies,
              electrical products, and everyday hardware essentials at
              affordable prices. Everything you need to build, repair, and
              maintain your projects—all in one place.
            </p>

            <div className="d-flex flex-wrap gap-3 mb-2">
              <button href="#menu" className="btn-red">
                <i className="fas fa-tools"></i> Explore Products
              </button>

              {/* You can replace this with a real lightbox later */}
              <button
                href="https://www.youtube.com/watch?v=RXv_uIN6e-Y"
                target="_blank"
                rel="noreferrer"
                className="btn-play"
              >
                <div className="pico">
                  <i className="fas fa-play"></i>
                </div>
                <span>Watch Our Story</span>
              </button>
            </div>

            <div className="hstats d-flex gap-3 flex-wrap mt-4">
              <div className="hstat">
                <span className="snum">
                  850<em>+</em>
                </span>
                <small>Happy Customers</small>
              </div>
              <div className="sdiv"></div>
              <div className="hstat">
                <span className="snum">
                  500<em>+</em>
                </span>
                <small>Product Available</small>
              </div>
              <div className="sdiv"></div>
              <div className="hstat">
                <span className="snum">
                  4<em>+</em>
                </span>
                <small>Categories</small>
              </div>
              <div className="sdiv"></div>
              <div className="hstat">
                <span className="snum">
                  7<em></em>
                </span>
                <small>Days a Week</small>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6">
            <div style={{ position: "relative", textAlign: "center" }}>
              <div className="hcircle">
                <img src={toolsImg} alt="Burger" />
              </div>

              <div className="fcard fc1">
                <div className="fcoi r">
                  <i className="fas fa-fire"></i>
                </div>
                <div>
                  <span className="fcnum">Hot Deal</span>
                  <span className="fcsm">70% off today</span>
                </div>
              </div>

              <div className="fcard fc2">
                <div className="fcoi y">
                  <i className="fas fa-star"></i>
                </div>
                <div>
                  <span className="fcnum">5/5</span>
                  <span className="fcsm">8+ reviews</span>
                </div>
              </div>

              <div className="fcard fc3">
                <div className="fcoi g">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <span className="fcnum">20 min</span>
                  <span className="fcsm">Fast delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
