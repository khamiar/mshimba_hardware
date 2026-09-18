import { useState } from "react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="reservation">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">Book a Table</span>
          <h2 className="stitle">
            Make a <span>Reservation</span>
          </h2>
          <div className="sline"></div>
          <p className="sdesc mx-auto" style={{ maxWidth: 480 }}>
            Reserve your table for a memorable dining experience. We recommend
            booking 24 hours in advance for weekend evenings.
          </p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Contact Info Card */}
          <div className="col-lg-4" data-aos="fade-right">
            <div
              style={{
                background: "var(--dark)",
                borderRadius: 18,
                padding: 36,
              }}
            >
              <h4
                style={{ color: "#fff", fontSize: "1.3rem", marginBottom: 8 }}
              >
                Contact Info
              </h4>
              <p
                style={{
                  color: "rgba(255,255,255,.55)",
                  fontSize: ".85rem",
                  marginBottom: 26,
                }}
              >
                We're happy to help you plan the perfect dining experience.
              </p>

              <div className="d-flex flex-column gap-3">
                {[
                  {
                    icon: "fa-clock",
                    label: "Opening Hours",
                    value: "Wed - Sun, 9 AM - 11 PM",
                  },
                  {
                    icon: "fa-phone-alt",
                    label: "Call for Booking",
                    value: "+1 (800) 123-4567",
                  },
                  {
                    icon: "fa-users",
                    label: "Group Dining",
                    value: "Special menus for 10+ guests",
                  },
                  {
                    icon: "fa-map-marker-alt",
                    label: "Location",
                    value: "42 Flavor Street, NY",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="d-flex align-items-center gap-3"
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 11,
                        background: "rgba(232,40,26,.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--primary)",
                        fontSize: "1.1rem",
                        flexShrink: 0,
                      }}
                    >
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <strong
                        style={{
                          display: "block",
                          color: "#ccc",
                          fontSize: ".78rem",
                          textTransform: "uppercase",
                          letterSpacing: ".8px",
                        }}
                      >
                        {item.label}
                      </strong>
                      <span style={{ color: "#fff", fontSize: ".87rem" }}>
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8" data-aos="fade-left">
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="flbl">Full Name *</label>
                    <input
                      type="text"
                      className="fctrl"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Phone Number *</label>
                    <input
                      type="tel"
                      className="fctrl"
                      placeholder="+1 (800) 000-0000"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Email Address *</label>
                    <input
                      type="email"
                      className="fctrl"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Number of Guests *</label>
                    <select className="fctrl" required>
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 - 4 People</option>
                      <option>5 - 6 People</option>
                      <option>7 - 10 People</option>
                      <option>10+ People</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Date *</label>
                    <input type="date" className="fctrl" required />
                  </div>
                  <div className="col-sm-6">
                    <label className="flbl">Time *</label>
                    <select className="fctrl" required>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                      <option>02:00 PM</option>
                      <option>06:00 PM</option>
                      <option>07:00 PM</option>
                      <option>08:00 PM</option>
                      <option>09:00 PM</option>
                      <option>10:00 PM</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="flbl">Special Requests</label>
                    <textarea
                      className="fctrl"
                      rows="3"
                      placeholder="Allergies, dietary needs, special occasions..."
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-red w-100 justify-content-center"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Booking...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-calendar-check"></i> Confirm
                          Reservation
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {submitted && (
                <div className="sucmsg" style={{ display: "block" }}>
                  <i className="fas fa-check-circle"></i>
                  <p>Table reserved! We'll confirm via email shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
