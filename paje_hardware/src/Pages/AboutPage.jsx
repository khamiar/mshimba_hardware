import shop2Image from "../assets/img/shop2.jpg";
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

      {/* Our Story */}
      <section className="about-story">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Text */}
            <div className="col-lg-6" data-aos="fade-right">
              <span className="slbl">Our Story</span>

              <h2 className="stitle text-start">
                Building Trust <span>Through Quality</span>
              </h2>

              <div className="sline lft"></div>

              <p className="sdesc">
                Mshimba Hardware is a trusted hardware and building materials
                store located in Paje, Zanzibar. We provide a wide range of
                quality construction and maintenance products for homeowners,
                builders, contractors, technicians, and businesses.
              </p>

              <p className="sdesc">
                Our products include iron rods (nondo), timber and other wood
                materials, cement, nails, electrical accessories, plumbing
                supplies, water materials, hand tools, and other essential
                building materials. We are committed to providing reliable
                products at competitive prices while giving our customers
                friendly and dependable service.
              </p>

              <p className="sdesc">
                Whether you are building a new home, working on a commercial
                project, carrying out repairs, or looking for everyday
                construction supplies, Mshimba Hardware aims to make it easy
                for you to find the materials you need in one place.
              </p>
            </div>

            {/* Image */}
            <div className="col-lg-6" data-aos="fade-left">
              <div className="story-img-wrap">
                <img
                  src={shop2Image}
                  alt="Mshimba Hardware Store"
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
                text: "To become a trusted and leading hardware and building materials supplier in Zanzibar, recognized for quality products, fair prices, and dependable customer service.",
              },
              {
                icon: "fa-bullseye",
                title: "Our Mission",
                text: "To provide quality construction, electrical, plumbing, timber, and general hardware products while helping our customers complete their projects with confidence.",
              },
              {
                icon: "fa-flag",
                title: "Our Goals",
                text: "To continuously expand our product range, improve customer service, maintain competitive prices, and build long-term relationships with homeowners, contractors, technicians, and businesses.",
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
          <History />
        </div>
      </section>

      {/* Staff */}
      <Staff />

      {/* Structure / Management */}
      <section className="about-structure" aria-labelledby="structure-title">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="slbl">How We Work</span>
            <h2 className="stitle" id="structure-title">
              Our <span>Structure</span>
            </h2>
            <div className="sline"></div>
            <p className="sdesc structure-intro">
              Clear leadership, dependable operations, and a connected presence
              for our customers in Paje, Zanzibar.
            </p>
          </div>

          <div className="org-tree" data-aos="fade-up">
            <ul className="org-root" aria-label="Mshimba Hardware management hierarchy">
              <li>
                <div className="org-node org-node-owner">
                  <span className="org-icon" aria-hidden="true"><i className="fas fa-building"></i></span>
                  <h3 className="org-role">Founder &amp; Owner</h3>
                  <p className="org-name">Mshimba Seif Ali</p>
                  <p className="org-description">Business leadership &amp; long-term direction</p>
                </div>
                <ul aria-label="Reports to Founder and Owner">
                  <li>
                    <div className="org-node">
                      <span className="org-icon" aria-hidden="true"><i className="fas fa-store"></i></span>
                      <h3 className="org-role">Store Manager</h3>
                      <p className="org-name">Suleiman Mshimba Seif</p>
                      <p className="org-description">Store management &amp; customer service</p>
                    </div>
                    <ul className="org-management" aria-label="Reports to Store Manager">
                      <li>
                        <div className="org-node">
                          <span className="org-icon" aria-hidden="true"><i className="fas fa-boxes-stacked"></i></span>
                          <h3 className="org-role">Operations Manager</h3>
                          <p className="org-name">Mudrik Mshimba Seif</p>
                          <p className="org-description">Daily operations, stock management &amp; material handling</p>
                        </div>
                        <ul aria-label="Reports to Operations Manager">
                          <li>
                            <div className="org-node">
                              <span className="org-icon" aria-hidden="true"><i className="fas fa-users"></i></span>
                              <h4 className="org-role">Our Staff</h4>
                              <p className="org-description">Sales, stockkeeping, store support &amp; loading and delivery</p>
                              <a href="#staff" className="d-inline-block mt-3">Meet our staff <span aria-hidden="true">&rarr;</span></a>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="org-node org-node-marketing">
                          <span className="org-icon" aria-hidden="true"><i className="fas fa-bullhorn"></i></span>
                          <h3 className="org-role">Marketing Manager</h3>
                          <p className="org-name">Khamiar Mshimba Seif</p>
                          <p className="org-description">Website, digital marketing &amp; online brand presence</p>
                        </div>
                        <ul aria-label="Marketing responsibilities">
                          <li>
                            <div className="org-node org-node-digital">
                              <h4 className="org-role">Digital Presence</h4>
                              <p className="org-description">Helping customers find us, explore our products, and stay connected.</p>
                            </div>
                            <ul className="org-channels" aria-label="Digital presence channels">
                              {[
                                { icon: "fa-laptop", title: "Website", detail: "Products & enquiries" },
                                { icon: "fa-location-dot", title: "Google Business Profile", detail: "Local discovery & reviews" },
                                { icon: "fa-comments", title: "Social Media", detail: "Updates & community" },
                              ].map((channel) => (
                                <li key={channel.title}>
                                  <div className="org-node org-channel">
                                    <i className={`fas ${channel.icon}`} aria-hidden="true"></i>
                                    <h5>{channel.title}</h5>
                                    <p className="org-description">{channel.detail}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </>
  );
}
