export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="fnm">
              Paje <span>Hardware</span>
            </div>
            <p className="fdesc">
              Your trusted hardware partner in Paje, Zanzibar. Quality tools,
              building materials and hardware supplies for every project.
            </p>
            <div className="fsoc">
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
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-sm-6 col-lg-2">
            <div className="ftit">Quick Links</div>
            <ul className="flinks ps-0">
              {["Home", "About", "Products", "Staff", "Review", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(" ", "-")}`} className="d-flex align-items-center text-decoration-none">
                      <i className="fas fa-chevron-right"></i> {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Menu */}
          <div className="col-sm-6 col-lg-2">
            <div className="ftit">Our Menu</div>
            <ul className="flinks ps-0">
              {[
                "Hand",
                "Painting",
                "Building",
                "Electricity",
                "Plumbing",
                "Power",
              ].map((item) => (
                <li key={item}>
                  <a href="#menu" className="d-flex align-items-center text-decoration-none" >
                    <i className="fas fa-chevron-right"></i> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4">
            <div className="ftit">Get In Touch</div>
            {[
              {
                icon: "fa-map-marker-alt",
                label: "Address",
                value: "Paje Zanzibar,South Unguja, Jambiani Road.",
              },
              {
                icon: "fa-phone-alt",
                label: "Phone",
                value: "+255 773 110 509",
              },
              {
                icon: "fa-envelope",
                label: "Email",
                value: "pajehardware@gmail.com",
              },
              {
                icon: "fa-clock",
                label: "Hours",
                value: "7:15AM - 18:00PM",
              },
            ].map((item) => (
              <div className="fci" key={item.label}>
                <div className="fciico">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="fciinfo">
                  <strong>{item.label}</strong>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fbot">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <p>
              © 2026 <span>Paje Hardware</span>. All Rights Reserved.
            </p>
            <div>
              <p>
                <i className="fa-solid fa-user-gear"></i> Built by:
                <a href="#" className="text-decoration-none">
                  <span>Khamiar Mshimba</span> YoungDev <span><i className="fa-solid fa-laptop-code"></i></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
