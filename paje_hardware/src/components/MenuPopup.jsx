import { productInquiry } from '../utils/Whatsapp'

export default function MenuPopup({ item, onClose }) {
  if (!item) return null

  const handleWhatsApp = () => {
    productInquiry(item.title)
    onClose()
  }

  const categoryNames = {
    hand: 'Hand Tools',
    paint: 'Paints',
    building: 'Building Materials',
    electric: 'Electrical',
    plumbing: 'Plumbing',
    power: 'Tools & Equipment',
  }

  const category =
    categoryNames[item.category] || item.category

  return (
    <div
      id="menuPop"
      className="open"
      onClick={onClose}
    >
      <div
        className="mpbox"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          type="button"
          className="mpclose"
          onClick={onClose}
          aria-label="Close product details"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Product Image */}
        <div className="mpimg">
          <img
            src={item.img}
            alt={item.title}
          />
        </div>

        {/* Product Information */}
        <div className="mpbody">

          {/* Category */}
          <div id="mpCat">
            {category}
          </div>

          {/* Product Title */}
          <h3 id="mpTitle">
            {item.title}
          </h3>

          {/* Description */}
          <p id="mpDesc">
            {item.desc}
          </p>

          {/* Product Meta */}
          <div
            className="mpmeta"
            id="mpMeta"
          >

            {/* Unit */}
            <div className="mpm">
              <div className="mpmv">
                <i className="fas fa-box"></i>
              </div>

              <div className="mpml">
                Unit
              </div>

              <div className="small fw-semibold mt-1">
                {item.unit}
              </div>
            </div>

            {/* Availability */}
            <div className="mpm">
              <div className="mpmv">
                <i className="fas fa-check-circle"></i>
              </div>

              <div className="mpml">
                Availability
              </div>

              <div
                className="small fw-semibold mt-1"
                style={{
                  color:
                    item.availability === 'In Stock'
                      ? '#198754'
                      : '#6c757d',
                }}
              >
                {item.availability}
              </div>
            </div>

            {/* Brand */}
            <div className="mpm">
              <div className="mpmv">
                <i className="fas fa-tag"></i>
              </div>

              <div className="mpml">
                Brand
              </div>

              <div className="small fw-semibold mt-1">
                {item.brand || 'Various'}
              </div>
            </div>

          </div>

          {/* Tags */}
          {item.tags?.length > 0 && (
            <div
              className="mptags"
              id="mpTags"
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="mptag"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price Notice */}
          <div
            className="mt-3 p-3 rounded-3"
            style={{
              backgroundColor: '#f8f9fa',
              border: '1px solid #e9ecef',
            }}
          >
            <div className="small text-muted">
              Pricing
            </div>

            <div className="fw-semibold mt-1">
              Contact us for the latest price
            </div>

            <div className="small text-muted mt-1">
              Prices may vary depending on size,
              quantity and product specification.
            </div>
          </div>

          {/* WhatsApp Button */}
          <button
            type="button"
            className="mpaddcart mt-4"
            onClick={handleWhatsApp}
            style={{
              backgroundColor: '#25D366',
              borderColor: '#25D366',
            }}
          >
            <i className="fab fa-whatsapp me-2"></i>
            Ask About This Product
          </button>

        </div>
      </div>
    </div>
  )
}
