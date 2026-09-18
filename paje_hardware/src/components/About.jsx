import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Images */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="astack">
              <div className="aexp">
                <span className="anum">12+</span>
                <small>
                  Years of
                  <br />
                  Excellence
                </small>
              </div>
              <div className="amain">
                <img src="src/assets/img/shop3.jpg" alt="Restaurant" />
              </div>
              <div className="asm">
                <img src="src/assets/img/shop2.jpg" alt="Kitchen" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7" data-aos="fade-left">
            <span className="slbl">Our Story</span>
            <h2 className="stitle text-start">
              We Invite You to Visit
              <br />
              Our <span>Hardware Store</span>
            </h2>
            <div className="sline lft"></div>

            <p className="sdesc mb-4">
              Paje Hardware is a trusted local hardware shop serving customers
              in Paje and surrounding areas. We provide reliable tools,
              construction materials, electrical and plumbing supplies, and
              other essential hardware products for homeowners, builders,
              technicians, and businesses.
            </p>

            <div className="mb-4">
              <div className="fti">
                <div className="ftico r">
                  <i className="fas fa-leaf"></i>
                </div>
                <div>
                  <h6>100% Quality Products</h6>
                  <p>
                    We provide reliable products selected to meet everyday
                    construction and repair needs.
                  </p>
                </div>
              </div>

              <div className="fti">
                <div className="ftico y">
                  <i className="fas fa-award"></i>
                </div>
                <div>
                  <h6>Affordable Price</h6>
                  <p>
                    Get quality hardware at competitive prices for both small
                    and large projects.
                  </p>
                </div>
              </div>

              <div className="fti">
                <div className="ftico g">
                  <i className="fas fa-shipping-fast"></i>
                </div>
                <div>
                  <h6>Trusted Services</h6>
                  <p>
                    Friendly and professional assistance to help you find the
                    right product for your project.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about" className="btn-red text-decoration-none">
              <i className="fas fa-book-open"></i> Learn More 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
