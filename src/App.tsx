import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import SobreNos from "./pages/sobrenos/SobreNos"

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          
          <Navbar />
          
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/sobrenos" element={<SobreNos />} />
              
            </Routes>
          </div>
          
          <Footer />
          
        </div>
      </BrowserRouter>
    </>
  )
}
export default App

