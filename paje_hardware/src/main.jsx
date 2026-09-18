import { StrictMode } from 'react'
import { createRoot, reactDom } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.js'
import 'swiper/css'
import 'swiper/css/pagination'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter } from 'react-router-dom'

// import "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Poppins:wght@300;400;500;600;700&family=Dancing+Script:wght@700&display=swap"
     


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
