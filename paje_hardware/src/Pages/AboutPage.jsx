import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import History from "../components/History";
import Staff from "../components/Staff";

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 680, once: true, offset: 55 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container text-center">
          <h1 data-aos="fade-up">About Us</h1>
          <p data-aos="fade-up" data-aos-delay="100">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>{" "}
            / About
          </p>
        </div>
      </section>

      {/* Short Story */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Text first → appears on LEFT */}
            <div className="col-lg-6" data-aos="fade-right">
              <span className="slbl">Our Story</span>
              <h2 className="stitle text-start">
                Building Trust <span>Through Quality</span>
              </h2>
              <div className="sline lft"></div>
              <p className="sdesc">
                Mshimba Hardware is a trusted hardware and building materials
                store in Paje, Zanzibar, providing quality construction supplies
                including iron rods, timber, cement, electrical accessories,
                plumbing materials, tools, and other essential building
                products. We proudly serve homeowners, builders, contractors,
                and technicians with reliable products, competitive prices, and
                dependable service for projects of every size.
              </p>
              <p className="sdesc">
                From everyday repairs to major construction projects, our goal
                is to make it easier for our customers to find the right
                materials and tools they need all in one place.
              </p>
            </div>

            {/* Image second → appears on RIGHT */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="story-img-wrap">
                <img
                  src="src/assets/img/shop2.jpg"
                  alt="Our Story"
                  className="story-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Goals */}
      <section className="vmg-section">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: "fa-eye",
                title: "Our Vision",
                text: "To become the most loved fast-casual restaurant brand, known for exceptional taste, warm hospitality, and sustainable practices.",
              },
              {
                icon: "fa-bullseye",
                title: "Our Mission",
                text: "To craft high-quality, flavorful meals using fresh ingredients, while creating memorable experiences for every guest who walks through our doors.",
              },
              {
                icon: "fa-flag",
                title: "Our Goals",
                text: "Expand to 20 cities by 2028, reduce food waste by 40%, and continue training the next generation of passionate Staff.",
              },
            ].map((item, i) => (
              <div
                className="col-md-4"
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="vmg-card">
                  <div className="vmg-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="about-history">
        <div className="container">
          {/* You can reuse the same timeline from History.jsx */}
          <History />
        </div>
      </section>

      <Staff />

      {/* Structure / Team */}
      <section className="about-structure">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">How We Work</span>
            <h2 className="stitle">
              Our <span>Structure</span>
            </h2>
            <div className="sline"></div>
          </div>

          <div className="row g-4 justify-content-center">
            {[
              {
                role: "Founder & CEO",
                name: "Ahmed Sarab",
                desc: "Vision & Strategy",
              },
              {
                role: "Head Chef",
                name: "Alice Mortal",
                desc: "Kitchen Operations",
              },
              {
                role: "Operations Manager",
                name: "Michael Corn",
                desc: "Daily Management",
              },
              {
                role: "Marketing Lead",
                name: "Sofia Ramirez",
                desc: "Brand & Growth",
              },
            ].map((person, i) => (
              <div
                className="col-sm-6 col-lg-3"
                key={person.name}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="struct-card">
                  <div className="struct-role">{person.role}</div>
                  <h5>{person.name}</h5>
                  <p>{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
