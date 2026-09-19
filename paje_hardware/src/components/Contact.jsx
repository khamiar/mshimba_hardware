import { useState } from "react";
import Swal from 'sweetalert2'

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // setSubmitted(false);

    const formData = new FormData(e.target);

    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d{10,13}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (phone && !phoneRegex.test(phone)) {
      alert(
        "Please enter a valid phone number (10-13 digits, can start with +).",
      );
      setLoading(false);
      return;
    }

    formData.append("access_key", "79f2e63b-c81d-4721-a8f4-51784c070d91");

    formData.append("subject", "New Contact Message - Mshimba Hardware");
    formData.append("from_name", "Mshimba Hardware Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: "Thank you for reaching out. We'll get back to you soon.",
          confirmButtonText: 'OK'
        });
        // setSubmitted(true);
        e.target.reset();
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert(
        "Unable to send your message. Please check your internet connection.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">Get In Touch</span>
          <h2 className="stitle">
            Contact <span>Us</span>
          </h2>
          <div className="sline"></div>
          <p className="sdesc mx-auto" style={{ maxWidth: 480 }}>
            Need tools, building materials, plumbing supplies or electrical
            products? Visit Paje Hardware or get in touch with us today.
          </p>
        </div>

        {/* Cards Row */}
        <div className="row g-4 mb-5">
          {/* Left Info */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="ctdark">
              <h4>Let's Talk</h4>
              <p className="ctsub">
                We typically respond within 2 hours during business hours.
              </p>

              {[
                {
                  icon: "fa-map-marker-alt",
                  label: "Address",
                  value: "Paje Zanzibar, South Unguja,\ Jambiani Road",
                },
                {
                  icon: "fa-phone-alt",
                  label: "Phone",
                  value: "+255 773 110 509",
                },
                {
                  icon: "fa-envelope",
                  label: "Email",
                  value: "info.mshimbahardware@gmail.com",
                },
                {
                  icon: "fa-clock",
                  label: "Working Hours",
                  value: "Mon - Sun: 7 AM - 18 PM",
                },
              ].map((item) => (
                <div className="ctitem" key={item.label}>
                  <div className="cticon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="ctinfo">
                    <strong>{item.label}</strong>
                    <span style={{ whiteSpace: "pre-line" }}>{item.value}</span>
                  </div>
                </div>
              ))}

              <div className="ctsocrow">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8" data-aos="fade-left">
            <div className="form-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="flbl">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="fctrl"
                      placeholder="Full Name"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="flbl">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="fctrl"
                      placeholder="you@email.com"
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="flbl">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="fctrl"
                      placeholder="+255 000 000 000"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="flbl">Subject *</label>
                    <select name="category" className="fctrl" required>
                      <option value="">Select Category</option>
                      <option value="Building Material">
                        Building Material
                      </option>
                      <option value="Hardware Tools">Hardware Tools</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Electrical Products">
                        Electrical Products
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="flbl">Message *</label>
                    <textarea
                      name="message"
                      className="fctrl"
                      rows="5"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn-red"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>

              {/* {submitted && (
                <div className="sucmsg" style={{ display: "block" }}>
                  <i className="fas fa-check-circle"></i>
                  <p>Message sent! We'll reply within 30 min.</p>
                </div>
              )} */}
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="contact-map" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9676886013754!2d39.53207594232789!3d-6.2679799352996755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185d3d004a19e39d%3A0xb71086afdf0aee6!2sMSHIMBA%20SONS%20SHOP!5e0!3m2!1sen!2stz!4v1775833346811!5m2!1sen!2stz"
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: 18 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sarab Restaurant Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
