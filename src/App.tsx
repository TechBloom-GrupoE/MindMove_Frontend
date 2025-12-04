import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
<<<<<<< HEAD
import { useState } from "react";
=======
import SobreNos from "./pages/sobrenos/SobreNos"
>>>>>>> c82a4cbb5467ec1082708603b335a7bd64e0c294

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
<<<<<<< HEAD
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

          </Routes>
=======
          
          <Navbar />
          
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/sobrenos" element={<SobreNos />} />
              
            </Routes>
          </div>
          
          <Footer />
          
>>>>>>> c82a4cbb5467ec1082708603b335a7bd64e0c294
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App

