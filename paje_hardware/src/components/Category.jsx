export default function Category({ onCategoryClick }) {
  const categories = [
    {
      name: "All Items",
      filter: "all",
      count: "99 items",
      img: "src/assets/img/tools.jpeg",
      delay: 0,
    },
    {
      name: "Hand Tools",
      filter: "hand",
      count: "24 items",
      img: "src/assets/img/hand/hand.png",
      delay: 70,
    },
    {
      name: "Paint & Accessories",
      filter: "paint",
      count: "18 items",
      img: "src/assets/img/building/paintlogo.jpeg",
      delay: 140,
    },
    {
      name: "Building Materials",
      filter: "building",
      count: "15 items",
      img: "src/assets/img/building/buildinglogo.png",
      delay: 210,
    },
    {
      name: "Electrical Supplies",
      filter: "electric",
      count: "12 items",
      img: "src/assets/img/electric/elec.jpeg",
      delay: 280,
    },
    {
      name: "Plumbing Supplies",
      filter: "plumbing",
      count: "20 items",
      img: "src/assets/img/water/plumbing.jpeg",
      delay: 350,
    },
  ];

  return (
    <section id="category">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">What We Offer</span>
          <h2 className="stitle">
            Browse by <span>Category</span>
          </h2>
          <div className="sline"></div>
          <p className="sdesc mx-auto" style={{ maxWidth: 480 }}>
            Quality hardware products and building essentials for construction,
            repair, renovation, and everyday projects.
          </p>
        </div>

        <div className="row g-3 justify-content-center">
          {categories.map((cat) => (
            <div
              key={cat.filter}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              data-aos="zoom-in"
              data-aos-delay={cat.delay}
            >
              <div
                className={`catcard ${cat.filter === "all" ? "active" : ""}`}
                onClick={() => {
                  onCategoryClick?.(cat.filter);
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <img className="catimg" src={cat.img} alt={cat.name} />
                <div className="catnm">{cat.name}</div>
                <div className="catct">{cat.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
