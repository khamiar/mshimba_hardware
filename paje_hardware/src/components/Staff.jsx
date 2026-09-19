import staff_Image from "../assets/img/profile1.jpeg";

const staff = [
  {
    id: 1,
    name: "STAFF NAME",
    role: "Sales Staff",
    experience: "Customer Service & Sales",
    img: staff_Image,
    delay: 0,
  },
  {
    id: 2,
    name: "STAFF NAME",
    role: "Storekeeper",
    experience: "Stock & Inventory",
    img: staff_Image,
    delay: 80,
  },
  {
    id: 3,
    name: "STAFF NAME",
    role: "Store Assistant",
    experience: "Store & Product Support",
    img: staff_Image,
    delay: 160,
  },
  {
    id: 4,
    name: "STAFF NAME",
    role: "Loading & Delivery Staff",
    experience: "Material Handling & Delivery",
    img: staff_Image,
    delay: 240,
  },
];

export default function Staff() {
  return (
    <section id="staff">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">Our Staff</span>

          <h2 className="stitle">
            Meet Our <span>Staff</span>
          </h2>

          <div className="sline"></div>
        </div>

        <div className="row g-4">
          {staff.map((member) => (
            <div
              key={member.id}
              className="col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={member.delay}
            >
              <div className="chcard">
                <div className="chimg">
                  <img src={member.img} alt={member.name} />

                  <div className="chsoc">
                    <a href="#" aria-label={`${member.name} Instagram`}>
                      <i className="fab fa-instagram"></i>
                    </a>

                    <a href="#" aria-label={`${member.name} Facebook`}>
                      <i className="fab fa-facebook-f"></i>
                    </a>

                    <a href="#" aria-label={`${member.name} Twitter`}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>

                <div className="chbody">
                  <div className="chnm">{member.name}</div>
                  <div className="chrole">{member.role}</div>
                  <div className="chexp">{member.experience}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
