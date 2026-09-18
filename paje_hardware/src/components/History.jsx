const timelineData = [
  {
    year: "2012",
    title: "Beginning",
    desc: "Paje Hardware begins serving the local community with essential hardware and building supplies.",
  },
  {
    year: "2015",
    title: "Growing Our Product Range",
    desc: "Expanded our selection to include more tools, construction materials, plumbing and electrical products.",
  },
  {
    year: "2019",
    title: "Serving More Customers",
    desc: "Built strong relationships with local builders, technicians, contractors and homeowners.",
  },
  {
    year: "2026",
    title: "Growing Into the Future",
    desc: "Continuing to improve our products, customer service and digital presence to serve Paje and beyond.",
  },
];

export default function History() {
  return (
    <section id="history">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">Our Journey</span>
          <h2 className="stitle">
            A History of <span>Excellence</span>
          </h2>
          <div className="sline"></div>
          <p className="sdesc mx-auto" style={{ maxWidth: 480 }}>
            From humble beginnings to the city's most beloved store - every
            chapter written with passion.
          </p>
        </div>

        <div className="timeline" data-aos="fade-up">
          {timelineData.map((item, index) => (
            <div className="tli" key={item.year}>
              {/* Left side */}
              <div className="tl-left">
                <div className="tlyear">{item.year}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>

              {/* Center dot */}
              <div className="tl-center">
                <div className="tldot"></div>
              </div>

              {/* Right side */}
              <div className="tl-right">
                <div className="tlyear">{item.year}</div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
