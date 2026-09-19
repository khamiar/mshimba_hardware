import { useState, useEffect } from "react";
import shop3 from "../assets/img/shop3.jpg";
import dangote from "../assets/img/building/dangote.jpeg";
import goldstar2 from "../assets/img/building/goldstar2.jpeg";
import wiring from "../assets/img/electric/wiring.jpeg";
import greenpipe from "../assets/img/water/greenpipe.jpeg";
import toolsImage from "../assets/img/tools.jpeg";
import hammer from "../assets/img/hand/hammer.jpeg";
import saw from "../assets/img/hand/Saw.jpeg";
import wallputty from "../assets/img/building/wallput.jpeg";

const galleryItems = [
  {
    id: 0,
    img: shop3,
    title: "Our Hardware Store",
    desc: "A wide range of quality hardware and building materials available for construction, renovation and home improvement projects.",
  },
  {
    id: 1,
    img: dangote,
    title: "Building Materials",
    desc: "Quality cement, sand, blocks, timber and other essential materials for residential and commercial construction projects.",
  },
  {
    id: 2,
    img: goldstar2,
    title: "Paints & Finishing",
    desc: "Interior and exterior paints, brushes, rollers and finishing products to help give your building a clean and lasting finish.",
  },
  {
    id: 3,
    img: wiring,
    title: "Electrical Supplies",
    desc: "Electrical cables, switches, sockets, plugs, lighting accessories and other electrical installation materials.",
  },
  {
    id: 4,
    img: greenpipe,
    title: "Plumbing & Water Materials",
    desc: "PVC pipes, fittings, connectors, taps and other plumbing materials for reliable water and drainage installations.",
  },
  {
    id: 5,
    img: hammer,
    title: "Tools & Equipment",
    desc: "Reliable hand tools and construction equipment for builders, technicians, carpenters and everyday maintenance work.",
  },
  {
    id: 6,
    img: saw,
    title: "Tools & Equipment",
    desc: "Reliable hand tools and construction equipment for builders, technicians, carpenters and everyday maintenance work.",
  },
  {
    id: 7,
    img: wallputty,
    title: "Tools & Equipment",
    desc: "Reliable hand tools and construction equipment for builders, technicians, carpenters and everyday maintenance work.",
  },
  
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openPopup = (index) => setActiveIndex(index);
  const closePopup = () => setActiveIndex(null);

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closePopup();
      if (e.key === "ArrowLeft" && activeIndex !== null) showPrev();
      if (e.key === "ArrowRight" && activeIndex !== null) showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const current = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <>
      {/* Gallery Section */}
      <section id="gallery">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            
          <span className="slbl">Inside Mshimba Hardware</span>

          <h2 className="stitle">
            Explore Our <span>Store & Products</span>
          </h2>
          <div className="sline"></div>
          <p className="text-muted mx-auto mt-3" style={{ maxWidth: '650px' }}>
            Take a look at our store, products and the quality materials
            we provide for construction, renovation and home improvement.
          </p>
          </div>

          <div className="ggrid" data-aos="fade-up">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="gitem"
                onClick={() => openPopup(item.id)}
              >
                <img src={item.img} alt={item.title} />
                <div className="gover">
                  <span>
                    <i className="fas fa-expand-alt"></i> {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Popup */}
      {current && (
        <div
          id="galPop"
          className="open"
          onClick={closePopup}
        >
          <div className="gpbox" onClick={(e) => e.stopPropagation()}>
            <button className="gpclose" onClick={closePopup}>
              <i className="fas fa-times"></i>
            </button>

            <img id="gpImg" src={current.img} alt={current.title} />

            <div className="gpcap">
              <h5 id="gpTitle">{current.title}</h5>
              <p id="gpDesc">{current.desc}</p>
            </div>

            <div className="gpnav">
              <button id="gpPrev" onClick={showPrev}>
                <i className="fas fa-chevron-left me-1"></i>Prev
              </button>
              <button id="gpNext" onClick={showNext}>
                Next <i className="fas fa-chevron-right ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}