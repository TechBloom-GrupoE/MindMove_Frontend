import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import AtualizarUsuario from "./pages/perfil/AtualizarUsuario";

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
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar
          menuState={menuState}
          onMenuToggle={handleMenuToggle}
          onMenuClose={handleMenuClose}
        />

        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/atualizarusuario" element={<AtualizarUsuario />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}
export default App

