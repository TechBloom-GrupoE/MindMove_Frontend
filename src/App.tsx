import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import { AuthProvider } from "./contexts/AuthContext"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter> 
          <div>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastrar" element={<Cadastro />} />
            </Routes>
          </div>          
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App

