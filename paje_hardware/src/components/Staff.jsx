const staff = [
  {
    id: 1,
    name: "Alice Mortal",
    role: "Head Chef",
    experience: "12 years experience",
    img: "src/assets/img/staff/1.jpg",
    delay: 0,
  },
  {
    id: 2,
    name: "Michael Corn",
    role: "Grill Master",
    experience: "8 years experience",
    img: "src/assets/img/staff/2.jpg",
    delay: 80,
  },
  {
    id: 3,
    name: "Faz Chowdel",
    role: "Pastry Chef",
    experience: "10 years experience",
    img: "src/assets/img/staff/3.jpg",
    delay: 160,
  },
  {
    id: 4,
    name: "William Latnum",
    role: "Pizza Artisan",
    experience: "9 years experience",
    img: "src/assets/img/staff/4.jpg",
    delay: 240,
  },
];

export default function Staff() {
  return (
    <section id="staff">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">Our Team</span>
          <h2 className="stitle">
            Meet Experienced <span>Staff</span>
          </h2>
          <div className="sline"></div>
        </div>

        <div className="row g-4">
          {staff.map((chef) => (
            <div
              key={chef.id}
              className="col-sm-6 col-lg-3"
              data-aos="fade-up"
              data-aos-delay={chef.delay}
            >
              <div className="chcard">
                <div className="chimg">
                  <img src={chef.img} alt={chef.name} />
                  <div className="chsoc">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
                <div className="chbody">
                  <div className="chnm">{chef.name}</div>
                  <div className="chrole">{chef.role}</div>
                  <div className="chexp">{chef.experience}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}