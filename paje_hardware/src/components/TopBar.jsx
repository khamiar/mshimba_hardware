export default function TopBar() {
  return (
    <div id="topbar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div className="top-contact d-flex flex-wrap">
            <span>
              <i className="fas fa-phone-alt"></i> +255 773 110 509
            </span>
            <span>
              <i className="fas fa-envelope"></i> info.mshimbahardware@gmail.com
            </span>
            <span>
              <i className="fas fa-map-marker-alt"></i> Paje, Jambiani Road
            </span>
          </div>

          <div className="d-flex align-items-center gap-3">
            <span className="ttag">
              <i className="fas fa-fire me-1"></i> EXPERIENCE MANY PRODUCT
            </span>
            <div className="tsoc">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}