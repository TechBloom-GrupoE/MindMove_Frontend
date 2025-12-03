import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          
          <Navbar />
          
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              
            </Routes>
          </div>
          
          <Footer />
          
        </div>
      </BrowserRouter>
    </>
  )
}
export default App

