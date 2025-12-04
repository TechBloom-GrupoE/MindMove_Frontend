import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { useState } from "react";
import SobreNos from "./pages/sobrenos/SobreNos"

function App() {

  const [menuState, setMenuState] = useState<'closed' | 'open'>('closed');

  const handleMenuToggle = () => {
    setMenuState(menuState === 'open' ? 'closed' : 'open');
  };

  const handleMenuClose = () => {
    setMenuState('closed');
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          menuState={menuState}
          onMenuToggle={handleMenuToggle}
          onMenuClose={handleMenuClose}
        />

        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobrenos" element={<SobreNos />} />

          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App

