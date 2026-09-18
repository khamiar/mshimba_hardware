export default function Marquee() {
  const items = [
    "Power Tools",
    "Hand Tools",
    "Building Materials",
    "Plumbing Supplies",
    "Electrical Supplies",
    "Paint & Accessories",
    "Safety Equipment",
    "Fasteners",
  ];

  // Duplicate the list so the animation loops seamlessly
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="mqsec">
      <div className="mqtrack">
        {marqueeItems.map((item, index) => (
          <div className="mqitem" key={index}>
            <i className="fas fa-circle"></i>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
