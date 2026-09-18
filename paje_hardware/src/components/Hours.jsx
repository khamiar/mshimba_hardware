const schedule = [
//   {
//     day: "Monday - Tuesday",
//     time: "07:15 AM - 18:00 PM",
//     isOpen: true,
//   },
  {
    day: "Saturday - Thursday",
    time: "07:15 AM - 18:00 PM",
    isOpen: true,
  },
  {
    day: "Friday",
    time: "07:15 AM - 12:00 PM & 14:00 PM - 18:00 PM ",
    isOpen: true,
  },
//   {
//     day: "Saturday",
//     time: "10:00 AM - 11:30 PM",
//     isOpen: true,
//   },
//   {
//     day: "Sunday",
//     time: "11:00 AM - 09:00 PM",
//     isOpen: true,
//   },
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
              <h4>Order Online</h4>
              <p>Get hot food delivered in 25 minutes</p>
              <a href="#menu" className="btnw">
                Order Now →
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
                  className="fas fa-map-marker-alt me-2"
                  style={{ color: "var(--secondary)" }}
                ></i>
                Find Us
              </h5>

              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-location-dot me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Address
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  42 Flavor Street, NY
                </span>
              </div>

              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-phone me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Phone
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  +1 (800) 123-4567
                </span>
              </div>

              <div className="hrsrow">
                <span className="hrsday">
                  <i
                    className="fas fa-envelope me-2"
                    style={{ color: "var(--secondary)" }}
                  ></i>
                  Email
                </span>
                <span className="hrstime" style={{ fontSize: ".8rem" }}>
                  hello@sarabfood.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}