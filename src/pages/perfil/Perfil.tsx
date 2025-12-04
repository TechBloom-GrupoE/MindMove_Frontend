import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"
import {CalendarIcon, BarbellIcon, EnvelopeIcon, UserCircleIcon, RulerIcon, BrainIcon } from "@phosphor-icons/react"
import { buscar } from "../../services/Service"

function Perfil() {
	const navigate = useNavigate()

	const { usuario } = useContext(AuthContext)
  const [dadosCompletos, setDadosCompletos] = useState<any>({})

  useEffect(() => {
    if (usuario.id !== 0) {
      buscar(`/usuarios/${usuario.id}`, setDadosCompletos, {
        headers: {
          Authorization: usuario.token
        }
      })
    }
  }, [usuario.id])

	useEffect(() => {
		if (usuario.token === "") {
			ToastAlerta("Você precisa estar logado", "info")
			navigate("/")
		}
	}, [usuario.token])

	function formatarDataBrasileira(dataISO: string) {
  return new Date(dataISO).toLocaleDateString("pt-BR", { timeZone: "UTC" });
}
	return (
		<div className="flex justify-center items-center min-h-screen w-full bg-amber-100 px-4">
			<div className="container mx-auto my-4 rounded-2xl overflow-hidden bg-white shadow-lg
      flex flex-col items-center p-6 sm:p-10 md:p-16 justify-between 
      w-full max-w-sm md:max-w-md lg:max-w-lg">

          <img
					className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-cover rounded-full mx-auto border-2 border-[#DCF0EE]"
					src={usuario.foto}
					alt={`Foto de perfil de ${usuario.nome}`}
				/>
        <div className="flex flex-col items-left gap-3">
          <p className="text-left mt-6 text-lg font-medium flex items-center gap-2">
          <UserCircleIcon
          size={26}/>{dadosCompletos.nome} </p>
					<p className="text-center text-lg font-medium flex items-center gap-2"><EnvelopeIcon
          size={26}/>{dadosCompletos.usuario}</p>
					<p className="text-center text-lg font-medium flex items-center gap-2"><BrainIcon
          size={26}/>{dadosCompletos.perfil}</p>
					<p className="text-center text-lg font-medium flex items-center gap-2"><CalendarIcon
          size={26}/>{formatarDataBrasileira(dadosCompletos.data_nasc)}</p>
					<p className="text-center text-lg font-medium flex items-center gap-2"><RulerIcon
          size={26}/>{dadosCompletos.altura} M</p>
					<p className="text-center text-lg font-medium flex items-center gap-2"><BarbellIcon
          size={26}/>{dadosCompletos.peso} KG</p>
        </div>
					
				
					{/* Botão de editar */}
					<Link to={`/atualizarusuario`} className="mt-8 w-full">
						<button className="w-full bg-linear-to-r from-violet-400 to-violet-400 hover:from-violet-400 hover:to-violet-500 text-black text-lg font-bold font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
							Editar Perfil
						</button>
					</Link>
				</div>
			</div>
	)
}

export default Perfil