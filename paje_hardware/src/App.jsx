import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import AboutPage from "./Pages/AboutPage";
import WhatsappFloat from "./components/ui/WhatsappFloat";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <WhatsappFloat />
    </>
  );
}

export default App;