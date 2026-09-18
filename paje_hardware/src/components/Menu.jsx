import { useState } from 'react'
import { menuData } from '../data/menuData'
import MenuPopup from './MenuPopup'
import { productInquiry } from '../utils/Whatsapp'

export default function Menu() {
  const [filter, setFilter] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const categories = [
    'all',
    'hand',
    'paint',
    'building',
    'electric',
    'plumbing',
    'power',
  ]

  const filteredItems = menuData.filter(
    (item) => filter === 'all' || item.category === filter
  )

  // Show only 6 products initially
  const visibleItems = showAll
    ? filteredItems
    : filteredItems.slice(0, 6)

  const formatCategory = (category) => {
    const names = {
      all: 'All Products',
      hand: 'Hand Tools',
      paint: 'Paints',
      building: 'Building Materials',
      electric: 'Electrical',
      plumbing: 'Plumbing',
      power: 'Tools & Equipment',
    }

    return names[category] || category
  }

  return (
    <section id="products">
      <div className="container">

        {/* Section Header */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <span className="slbl">
            What We Offer
          </span>

          <h2 className="stitle">
            Our <span>Products</span>
          </h2>

          <div className="sline"></div>

          <p
            className="text-muted mx-auto mt-3"
            style={{ maxWidth: '650px' }}
          >
            Quality building, hardware, electrical and plumbing
            materials for your construction and home improvement needs.
          </p>
        </div>

        {/* Category Filters */}
        <div
          className="text-center mb-5"
          data-aos="fade-up"
        >
          <div className="d-flex flex-wrap justify-content-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filtbtn ${
                  filter === cat ? 'active' : ''
                }`}
                onClick={() => {
                  setFilter(cat)
                  setShowAll(false)
                }}
              >
                {formatCategory(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="row g-4" id="mgrid">

          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="col-sm-6 col-lg-4 mwrap"
              data-aos="fade-up"
            >
              <div
                className="mcard"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: 'pointer' }}
              >

                {/* Image */}
                <div className="mimg">

                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />

                  {/* Badge */}
                  {item.badge === 'hot' && (
                    <div className="mbdg hot">
                      <i className="fas fa-fire"></i>
                      Popular
                    </div>
                  )}

                  {item.badge === 'new' && (
                    <div className="mbdg new">
                      <i className="fas fa-sparkles"></i>
                      New
                    </div>
                  )}

                </div>

                {/* Body */}
                <div className="mbody">

                  {/* Category */}
                  <div className="mcat">
                    {formatCategory(item.category)}
                  </div>

                  {/* Product Name */}
                  <div className="mtit">
                    {item.title}
                  </div>

                  {/* Description */}
                  <div className="mdesc">
                    {item.desc.length > 90
                      ? `${item.desc.substring(0, 90)}...`
                      : item.desc}
                  </div>

                  {/* Footer */}
                  <div className="mfoot">

                    <div>
                      <small className="text-muted d-block">
                        {item.unit}
                      </small>

                      <span
                        className="fw-semibold"
                        style={{
                          color:
                            item.availability === 'In Stock'
                              ? '#198754'
                              : '#6c757d',
                          fontSize: '.85rem',
                        }}
                      >
                        <i className="fas fa-circle me-1"
                          style={{ fontSize: '6px' }}
                        ></i>

                        {item.availability}
                      </span>
                    </div>

                    {/* View Details */}
                    <button
                      type="button"
                      className="madd"
                      title="View Product Details"
                      aria-label={`View ${item.title} details`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedItem(item)
                      }}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Empty State */}
        {visibleItems.length === 0 && (
          <div className="text-center py-5">
            <i
              className="fas fa-box-open mb-3"
              style={{
                fontSize: '2.5rem',
                color: '#999',
              }}
            ></i>

            <h5>No products found</h5>

            <p className="text-muted">
              We couldn't find products in this category.
            </p>
          </div>
        )}

        {/* View More */}
        {filteredItems.length > 6 && (
          <div
            className="text-center mt-5"
            data-aos="fade-up"
          >
            <button
              type="button"
              className="btn-red"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? (
                <>
                  <i className="fas fa-chevron-up me-2"></i>
                  View Less
                </>
              ) : (
                <>
                  <i className="fas fa-boxes-stacked me-2"></i>
                  View More Products
                </>
              )}
            </button>
          </div>
        )}

      </div>

      {/* Product Details Popup */}
      {selectedItem && (
        <MenuPopup
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  )
}
