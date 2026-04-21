// FEATURED PRODUCTS DATA
const featuredProducts = [
  {
    name: 'Portland Cement - 50kg',
    cat: 'Ujenzi',
    desc: 'High quality cement for all construction needs. Durable and reliable.',
    price: 18000,
    badge: 'BEST SELLER',
    image: './assets/cement.jpeg',
    stock: true
  },
  {
    name: 'Professional Hammer',
    cat: 'Zana',
    desc: 'Heavy-duty hammer for construction work. Comfortable grip.',
    price: 25000,
    badge: null,
    image: './assets/tools.jpeg',
    stock: true
  },
  {
    name: 'PVC Pipes - 2 inch',
    cat: 'Maji',
    desc: 'Durable PVC pipes for plumbing systems. UV resistant.',
    price: 8500,
    badge: 'NEW',
    image: './assets/waterpe_pu_pv_pm_pza_pk.jpeg',
    stock: true
  },
  {
    name: 'Electrical Wire - 2.5mm',
    cat: 'Umeme',
    desc: 'Copper electrical wire for safe wiring. Fire resistant.',
    price: 12000,
    badge: null,
    image: './assets/switch.jpeg',
    stock: true
  },
  {
    name: 'Premium Wall Paint',
    cat: 'Ujenzi',
    desc: 'High quality paint for interior and exterior walls. Long lasting.',
    price: 35000,
    badge: null,
    image: './assets/majiti.jpeg',
    stock: true
  },
  {
    name: 'Power Drill Set',
    cat: 'Zana',
    desc: 'Professional power drill with multiple bits. Battery included.',
    price: 150000,
    badge: 'HOT',
    image: './assets/star&sets.jpeg',
    stock: true
  },
  {
    name: 'Premium Wall Paint',
    cat: 'Ujenzi',
    desc: 'High quality paint for interior and exterior walls. Long lasting.',
    price: 35000,
    badge: null,
    image: './assets/majiti.jpeg',
    stock: true
  },
  {
    name: 'Premium Wall Paint',
    cat: 'Ujenzi',
    desc: 'High quality paint for interior and exterior walls. Long lasting.',
    price: 35000,
    badge: null,
    image: './assets/majiti.jpeg',
    stock: true
  }
];

// RENDER FEATURED PRODUCTS WITH FILTERING
function renderFeaturedProducts() {
  const grid = document.querySelector('.featured-products-grid');
  if (!grid) return;
  
  const q = (document.querySelector('#section-featured-products .search-input')?.value || '').toLowerCase();
  let list = featuredProducts.filter(p => {
    const matchCat = currentFilter === 'All' || p.cat === currentFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  
  if (!list.length) {
    grid.innerHTML = '<div class="no-products">No featured products found.</div>';
    return;
  }
  
  grid.innerHTML = list.map(p => `
    <div class="product-card scroll-reveal">
      <div class="product-img">
        ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="product-body">
        <div class="product-cat">${p.cat.toUpperCase()}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">TZS ${Number(p.price).toLocaleString()} <span>/unit</span></div>
          ${p.stock ? '<div class="in-stock">In Stock</div>' : '<div class="out-stock">Out of Stock</div>'}
        </div>
      </div>
    </div>
  `).join('');
  if (typeof initScrollRevealAnimations === 'function') {
    initScrollRevealAnimations();
  }
}

// SET FILTER FOR FEATURED PRODUCTS
function setFeaturedFilter(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('#section-featured-products .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderFeaturedProducts();
}

// INITIALIZE FEATURED PRODUCTS FILTERING
function initFeaturedProducts() {
  console.log('Initializing featured products...');
  
  // Update filter buttons to use featured products functions
  const filterButtons = document.querySelectorAll('#section-featured-products .filter-btn');
  const searchInput = document.querySelector('#section-featured-products .search-input');
  
  console.log('Filter buttons found:', filterButtons.length);
  console.log('Search input found:', !!searchInput);
  
  filterButtons.forEach(btn => {
    btn.onclick = () => {
      const cat = btn.textContent === 'All' ? 'All' : 
                 btn.textContent === 'Building' ? 'Ujenzi' :
                 btn.textContent === 'Tools' ? 'Zana' :
                 btn.textContent === 'Plumbing' ? 'Maji' :
                 btn.textContent === 'Electrical' ? 'Umeme' : 'All';
      console.log('Filter clicked:', cat);
      setFeaturedFilter(cat, btn);
    };
  });
  
  if (searchInput) {
    searchInput.oninput = renderFeaturedProducts;
  }
  
  // Initial render
  renderFeaturedProducts();
}

// Initialize on DOM ready and also try after a delay
document.addEventListener('DOMContentLoaded', initFeaturedProducts);

// Also try after a short delay to ensure everything is loaded
setTimeout(initFeaturedProducts, 500);
