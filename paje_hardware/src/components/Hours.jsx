const schedule = [
  {
    day: "Monday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },
  {
    day: "Tuesday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },
  {
    day: "Wednesday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },
  {
    day: "Thursday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },

  {
    day: "Friday",
    time: "07:15 AM - 12:00 PM & 14:00 PM - 18:00 PM ",
    isOpen: true,
  },
  {
    day: "Saturday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },
  {
    day: "Sunday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },
];

export default function Hours() {
  return (
    <section id="hours">
      <div className="hrsbg"></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl" style={{ color: "#a5d6bc" }}>
            Opening Hours
          </span>
          <h2 className="stitle" style={{ color: "#fff" }}>
            We're Open <span style={{ color: "var(--secondary)" }}>For You</span>
          </h2>
          <div className="sline"></div>
        </div>

        <div className="row g-4 align-items-start">
          {/* Schedule Card */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="hrscard">
              {schedule.map((item) => (
                <div className="hrsrow" key={item.day}>
                  <span className="hrsday">
                    <i
                      className="fas fa-calendar-day me-2"
                      style={{ color: "var(--secondary)" }}
                    ></i>
                    {item.day}
                  </span>
                  <div className="d-flex align-items-center gap-2">
                    <div className={`hdot ${item.isOpen ? "on" : "off"}`}></div>
                    <span
                      className="hrstime"
                      style={!item.isOpen ? { color: "#ff6b6b" } : {}}
                    >
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order CTA */}
          <div className="col-lg-3" data-aos="zoom-in">
            <div className="hrscta">
              <i
                className="fas fa-truck-fast fa-2x mb-3"
                style={{ color: "rgba(255,255,255,.8)" }}
              ></i>
              <h4>Faster Delivery</h4>
              <p>Need your building materials delivered? Contact our local transport partners for convenient delivery.</p>
              <a href="" className="btnw">
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>

          {/* Find Us Card */}
          <div className="col-lg-4" data-aos="fade-left">
            <div className="hrscard">
              <h5
                style={{
                  color: "#fff",
                  marginBottom: 18,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: ".95rem",
                  fontWeight: 700,
                }}
              >
                <i
                  className="fas fa-id-card me-2"
                  style={{ color: "var(--secondary)" }}
                ></i>
                Delivery Partners
              </h5>

              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-phone me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Urope
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  <a
                    href="tel:+255652105404"
                    className="hrstime text-decoration-none"
                    style={{ fontSize: ".8rem" }}
                  >
                    +255652105404
                  </a>
                </span>
              </div>

              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-phone me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Faru
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  <a
                    href="tel:+255714162980"
                    className="hrstime text-decoration-none"
                    style={{ fontSize: ".8rem" }}
                  >
                    +255714162980
                  </a>
                </span>
              </div>

              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-phone me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Ndomo
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  <a
                    href="tel:+255776470450"
                    className="hrstime text-decoration-none"
                    style={{ fontSize: ".8rem" }}
                  >
                    +255776470450
                  </a>
                </span>
              </div>
              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-phone me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Uncle
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  <a
                    href="tel:+255773110509"
                    className="hrstime text-decoration-none"
                    style={{ fontSize: ".8rem" }}
                  >
                    +255773110509
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}