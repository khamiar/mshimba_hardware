// src/pages/Home.jsx
import { useState, useEffect } from "react";
import AOS from "aos";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import SearchOverlay from "./components/SearchOverlay";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Category from "./components/Category";
import About from "./components/About";       // short about section
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import History from "./components/History";
import Staff from "./components/Staff";
import Hours from "./components/Hours";
import Testimonials from "./components/Testimonials";
import Reservation from "./components/Reservation";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
// import WhatsAppFloat from "./components/ui/WhatsappFloat";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 680, once: true, offset: 55 });
  }, []);

  return (
    <>
      <TopBar />
      <Navbar  />
      {/* <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} /> */}

      <Hero />
      <Marquee />
      <Category />
      <About />          {/* short version with "More About" button */}
      <Menu />
      <Gallery />
      {/* <History /> */}
      {/* <Staff /> */}
      <Hours />
      <Testimonials />
      {/* <Reservation />
      <Blog />
      <Newsletter /> */}
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}