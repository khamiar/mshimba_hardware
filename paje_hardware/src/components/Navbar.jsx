import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavbarComponent({ onSearchClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setExpanded(false);

  return (
    <Navbar
      expand="sm"
      sticky="top"
      id="nav"
      className={scrolled ? 'scrolled' : ''}
      expanded={expanded}
      onToggle={(nextExpanded) => setExpanded(nextExpanded)}
    >
      <Container>
        <Navbar.Brand href="#hero">
          <div className="blogo">
            <div className="bico">
              <i className="fas fa-tools"></i>
            </div>
            <div>
              <div className="bname">
                Paje<span> Hardware</span>
              </div>
              <div className="bsub">Trusted Hardware Store & Shop</div>
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navmenu" className="border-0">
          <i className="fas fa-bars" style={{ color: 'var(--primary)', fontSize: '1.35rem' }}></i>
        </Navbar.Toggle>

        <Navbar.Collapse id="navmenu">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="active" onClick={closeNav}>Home</Nav.Link>
            <Nav.Link href="#about" onClick={closeNav}>About</Nav.Link>
            <Nav.Link href="#products" onClick={closeNav}>Products</Nav.Link>
            {/* <Nav.Link href="#chefs" onClick={closeNav}>Staff</Nav.Link>
            <Nav.Link href="#reservation" onClick={closeNav}>Order</Nav.Link> */}
            <Nav.Link href="#testimonials" onClick={closeNav}>Reviews</Nav.Link>
            <Nav.Link href="#contact-section" onClick={closeNav}>Contact</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-1">
            <button
              id="navSearchBtn"
              title="Search"
              onClick={() => {
                closeNav();
                onSearchClick?.();
              }}
            >
              <i className="fas fa-search"></i>
            </button>
            <a href="#menu" className="nav-link nav-cta" onClick={closeNav}>
              <i className="fas fa-shopping-bag me-1"></i>Order Now
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}