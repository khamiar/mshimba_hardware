import menu_1Image from "../assets/img/menu/1.jpg";
import menu_2Image from "../assets/img/menu/2.jpg";
import menu_3Image from "../assets/img/menu/3.jpg";
import menu_4Image from "../assets/img/menu/4.jpg";
import menu_5Image from "../assets/img/menu/5.jpg";
import menu_6Image from "../assets/img/menu/6.jpg";
import { useState, useEffect } from 'react';

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const categories = [
    { name: 'All Items', cat: 'all', img: menu_1Image },
    { name: 'Burgers', cat: 'burgers', img: menu_1Image },
    { name: 'Pizza', cat: 'pizza', img: menu_2Image },
    { name: 'Chicken', cat: 'chicken', img: menu_3Image },
    { name: 'Wraps', cat: 'wraps', img: menu_4Image },
    { name: 'Pasta', cat: 'pasta', img: menu_5Image },
    { name: 'Desserts', cat: 'desserts', img: menu_6Image },
  ];

  const trending = [
    'Smash Burger',
    'Nashville Chicken',
    'Truffle Pizza',
    'Lava Cake',
    'Loaded Fries',
    'Mango Shake',
  ];

  return (
    <div id="searchOv" className="open" onClick={onClose}>
      <button className="sovclose" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>

      <div className="sovbox" onClick={(e) => e.stopPropagation()}>
        <h4>What are you craving today?</h4>

        <div className="sovinput">
          <input
            type="text"
            id="searchInput"
            placeholder="Search burgers, pizza, chicken..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Categories */}
        <div className="sovcats">
          {categories.map((c) => (
            <div
              key={c.cat}
              className={`sovcat ${c.cat === 'all' ? 'active' : ''}`}
              onClick={() => {
                onClose();
                // You can later connect this to Menu filter
                document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src={c.img} alt={c.name} />
              {c.name}
            </div>
          ))}
        </div>

        {/* Trending */}
        <div className="sovtrend">
          <p>
            <i className="fas fa-fire me-1" style={{ color: 'var(--secondary)' }}></i>
            Trending Searches
          </p>
          {trending.map((tag) => (
            <span
              key={tag}
              className="ttag"
              onClick={() => setSearchTerm(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}