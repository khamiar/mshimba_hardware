import hand_hammersImage from "../assets/img/hand/hammers.jpeg";
import hand_screwdriversetImage from "../assets/img/hand/screwdriverset.jpeg";
import hand_drillsetImage from "../assets/img/hand/drillset.jpeg";
import building_coralImage from "../assets/img/building/coral.jpeg";
import building_goldstarImage from "../assets/img/building/goldstar.jpeg";
import building_wallputImage from "../assets/img/building/wallput.jpeg";
import building_paintingrollerImage from "../assets/img/building/paintingroller.jpeg";
import building_cementeImage from "../assets/img/building/cemente.jpeg";
import building_metalsImage from "../assets/img/building/metals.jpeg";
import building_metalImage from "../assets/img/building/metal.jpeg";
import building_batirandImage from "../assets/img/building/batirand.jpeg";
import electric_wiringImage from "../assets/img/electric/wiring.jpeg";
import electric_switchImage from "../assets/img/electric/switch.jpeg";
import electric_hinsenceacImage from "../assets/img/electric/hinsenceac.jpeg";
import water_greenpipeImage from "../assets/img/water/greenpipe.jpeg";
import water_pipe_jointsImage from "../assets/img/water/pipe_joints.jpeg";
import water_pipe_connectorImage from "../assets/img/water/pipe_connector.jpeg";
// General tools photo for products whose dedicated images are not available.
import toolsImage from "../assets/img/tools.jpeg";
import majiti from "../assets/img/building/majiti.jpeg";
import waterPipe from "../assets/img/building/nondos.jpeg";

export const menuData = [
  // ===================== HARDWARE =====================

  {
    id: 1,
    category: "hand",
    title: "Hammer",
    img: hand_hammersImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.8,
    reviews: 42,
    unit: "Per kg / Box",
    availability: "Available",
    brand: "Various",
    desc: "Quality construction hammer suitable for timber work, roofing, furniture and general building projects.",
    tags: ["Popular", "Construction"],
    badge: "popular",
  },

  {
    id: 2,
    category: "hand",
    title: "Screwdriver Set",
    img: hand_screwdriversetImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.7,
    reviews: 31,
    unit: "Roll",
    availability: "Available",
    brand: "Various",
    desc: "Strong and durable screwdriver set suitable for various construction and repair tasks.",
    tags: ["Construction", "Durable"],
    badge: null,
  },

  {
    id: 3,
    category: "hand",
    title: "Drill Machine",
    img: hand_drillsetImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.9,
    reviews: 56,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Quality drill machine suitable for construction, roofing, furniture and other projects.",
    tags: ["Popular", "Construction"],
    badge: "hot",
  },
  // ===================== PAINTS =====================

  {
    id: 4,
    category: "paint",
    title: "Rangi za Maji",
    img: building_coralImage,
    price: "Contact for Price",
    oldPrice: null,
    unit: "1L / 4L / 20L",
    availability: "Available",
    brand: "Various",
    desc: "Quality water-based paints suitable for interior and exterior walls, providing a smooth finish and durable protection.",
    tags: ["Water-Based", "Walls", "Popular"],
    badge: "popular",
  },

  {
    id: 5,
    category: "paint",
    title: "Rangi za Mafuta",
    img: building_goldstarImage,
    price: "Contact for Price",
    oldPrice: null,
    unit: "1L / 4L",
    availability: "Available",
    brand: "Various",
    desc: "Durable oil-based paints suitable for metal, wood, doors, windows and other surfaces requiring a strong protective finish.",
    tags: ["Oil-Based", "Metal", "Wood"],
    badge: null,
  },

  {
    id: 6,
    category: "paint",
    title: "Wall Putty",
    img: building_wallputImage,
    price: "Contact for Price",
    oldPrice: null,
    unit: "5kg / 20kg",
    availability: "Available",
    brand: "Various",
    desc: "Quality wall putty for preparing and smoothing surfaces before painting, helping achieve a clean and professional finish.",
    tags: ["Wall Preparation", "Finishing"],
    badge: "new",
  },

  {
    id: 7,
    category: "paint",
    title: "Paint Rollers & Brushes",
    img: building_paintingrollerImage,
    price: "Contact for Price",
    oldPrice: null,
    unit: "Piece / Set",
    availability: "Available",
    brand: "Various",
    desc: "Reliable paint rollers and brushes available in different sizes for smooth, efficient and professional painting work.",
    tags: ["Painting Tools", "Accessories"],
    badge: null,
  },
  // ===================== BUILDING MATERIALS =====================

  {
    id: 8,
    category: "building",
    title: "Cement",
    img: building_cementeImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.9,
    reviews: 84,
    unit: "50kg Bag",
    availability: "Available",
    brand: "Various",
    desc: "Quality cement suitable for concrete work, block making, plastering, foundations and general construction.",
    tags: ["Bestseller", "Construction"],
    badge: "hot",
  },

  {
    id: 9,
    category: "building",
    title: "Metal & Pipes",
    img: building_metalsImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.7,
    reviews: 35,
    unit: "Per Piece",
    availability: "Available",
    brand: "Various",
    desc: "Quality metal materials and pipes suitable for construction, plumbing, fabrication and general building applications.",
    tags: ["Construction", "Building"],
    badge: null,
  },

  {
    id: 10,
    category: "building",
    title: "Steel Reinforcement Bars (Nondo)",
    img: building_metalImage,
    price: "Contact for Price",
    oldPrice: null,
    unit: "Per Piece",
    availability: "Available",
    brand: "Various",
    desc: "High-quality steel reinforcement bars suitable for foundations, columns, beams, slabs and other reinforced concrete construction works.",
    tags: ["Nondo", "Construction", "Steel"],
    badge: "popular",
  },

  {
    id: 11,
    category: "building",
    title: "Large-Corrugation Roofing Sheets",
    img: building_batirandImage,
    price: "Contact for Price",
    oldPrice: null,
    unit: "Per Sheet",
    availability: "Available",
    brand: "Various",
    desc: "Durable large-corrugation roofing sheets suitable for residential, commercial and other building projects.",
    tags: ["Roofing", "Construction", "Durable"],
    badge: null,
  },

  // ===================== ELECTRICAL =====================

  {
    id: 12,
    category: "electric",
    title: "Electrical Cables",
    img: electric_wiringImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.9,
    reviews: 51,
    unit: "Meter / Roll",
    availability: "Available",
    brand: "Various",
    desc: "Reliable electrical cables suitable for residential, commercial and general electrical installations.",
    tags: ["Electrical", "Popular"],
    badge: "hot",
  },

  {
    id: 13,
    category: "electric",
    title: "Electrical Switches",
    img: electric_switchImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.7,
    reviews: 29,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Quality wall switches available in different designs for residential and commercial electrical installations.",
    tags: ["Electrical", "Home"],
    badge: "new",
  },

  {
    id: 14,
    category: "electric",
    title: "Sockets & Plugs",
    img: electric_hinsenceacImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.8,
    reviews: 37,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Durable electrical sockets and plugs suitable for homes, offices, shops and other installations.",
    tags: ["Electrical", "Popular"],
    badge: null,
  },

  // ===================== PLUMBING =====================

  {
    id: 15,
    category: "plumbing",
    title: "PVC Pipes",
    img: water_greenpipeImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.9,
    reviews: 63,
    unit: "Length",
    availability: "Available",
    brand: "Various",
    desc: "Durable PVC pipes suitable for water supply, drainage and general plumbing installations.",
    tags: ["Plumbing", "Bestseller"],
    badge: "hot",
  },

  {
    id: 16,
    category: "plumbing",
    title: "Pipe Connectors",
    img: water_pipe_jointsImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.8,
    reviews: 41,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Quality pipe connectors and fittings for secure and reliable plumbing installations.",
    tags: ["Plumbing", "Fittings"],
    badge: "popular",
  },

  {
    id: 17,
    category: "plumbing",
    title: "Water Taps",
    img: water_pipe_connectorImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.7,
    reviews: 33,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Durable water taps suitable for kitchens, bathrooms, outdoor areas and general water installations.",
    tags: ["Plumbing", "Home"],
    badge: null,
  },

  // ===================== TOOLS & EQUIPMENT =====================

  {
    id: 18,
    category: "power",
    title: "Hand Tools",
    img: waterPipe,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.9,
    reviews: 72,
    unit: "Piece / Set",
    availability: "Available",
    brand: "Various",
    desc: "A selection of reliable hand tools for construction, repair, maintenance and everyday workshop use.",
    tags: ["Tools", "Popular"],
    badge: "hot",
  },

  {
    id: 19,
    category: "power",
    title: "Power Tools",
    img: majiti,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.8,
    reviews: 48,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Quality power tools designed for construction, carpentry, installation and professional maintenance work.",
    tags: ["Tools", "Professional"],
    badge: "new",
  },

  {
    id: 20,
    category: "power",
    title: "Measuring Tools",
    img: toolsImage,
    price: "Contact for Price",
    oldPrice: null,
    rating: 4.7,
    reviews: 26,
    unit: "Piece",
    availability: "Available",
    brand: "Various",
    desc: "Accurate and durable measuring tools suitable for construction, carpentry and general project work.",
    tags: ["Tools", "Construction"],
    badge: null,
  },
];
