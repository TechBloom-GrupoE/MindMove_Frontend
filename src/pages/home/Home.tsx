// Importa o modal de cadastro de exercícios
//import ModalExercicio from "../../components/modalexercicio/ModalExercicio"
// Importa Link para navegação entre páginas
import { Link } from "react-router-dom"
import SobreNos from "../sobrenos/SobreNos"

function Home() {
  const scrollToSection = () => {
    const section = document.getElementById("secao-sobrenos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
    return (
        <>
            {/* Primeira parte da Home - Hero Section */}
            <div className="bg-slate-200 flex justify-center min-h-[70vh] scroll-smooth">
                <div className="grid grid-cols sm:grid-cols-2 w-full">
                    
                    {/* Coluna esquerda com texto e botões */}
                    <div className="p-4 bg-[#d2ebea]">
                        <div className="w-full max-w-5xl mx-auto py-20 pl-20 flex flex-col justify-center ">
                            <h2 className="text-5xl font-semibold text-black">
                                Movimento que <span className="text-emerald-600">acalma</span>,
                                <br />
                                foco que <span className="text-emerald-600">transforma</span>.
                            </h2>
                            {/* Botões de ação */}
                            <div className="mt-10 flex gap-4">
                                {/* Botão que leva para a página Sobre Nós */}
                                <button
                                    onClick={scrollToSection}
                                    className="px-4 py-2 rounded-3xl lg:rounded-full bg-white/25 hover:bg-white/85 border border-white transition"
                                >
                                    Sobre Nós
                                </button>

                                {/* Modal de cadastro de exercícios */}
                               {/*<div className="flex justify-around gap-4">
                                    <ModalExercicio />
                                </div>*/}
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita com GIF*/}
                    <div className="hidden md:flex justify-center bg-[#d2ebea]">
                 <img
                        src="https://ik.imagekit.io/techbloom/MindMove/Bem.gif"
                        alt="Imagem Página Home"
                        className="w-2/3 md:w-2/3 mx-auto h-52 md:h-80 lg:h-96 object-contain"
                     />
                    </div>
                </div>
            </div>

            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full"></div>

            {/* Terceira parte da Home - Motivos */}
            <div id="secao-sobre" className="bg-gray-200 py-24 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex text-center justify-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 pb-10">
                        Por que escolher o <span className="text-emerald-600">MindMove</span>?
                    </h2>
                </div>

                {/* Grid com cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-900 justify-items-center">

                    {/* Card 1 */}
                    <div className="bg-[#FF9096]/75 hover:bg-[#FF9096] min-h-80 w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/p9rdkccyy/icone2.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Clareza</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Para facilitar sua jornada.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#B69CE5]/75 hover:bg-[#B69CE5] min-h-80 w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6 ">
                        <img src=" https://ik.imagekit.io/p9rdkccyy/icone3.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Empatia</h3>
                        <p className="text-base sm:text-lg font-regular">
                            Porque você importa.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#FBDE8D]/75 hover:bg-[#FBDE8D] min-h-80 w-70 text-center flex flex-col justify-center rounded-4xl shadow-xl p-6">
                        <img src="https://ik.imagekit.io/p9rdkccyy/icone1.png" className="w-10 sm:w-14 md:w-16 mx-auto mb-2 object-contain" />
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Evolução</h3>
                        <p className="text-base sm:text-lg font-regular">
                           No seu ritmo, do seu jeito.
                        </p>
                    </div>
                </div>
            </div>
            {/* Linha decorativa */}
            <div className="bg-linear-to-r from-pink-200 via-violet-200 to-yellow-200 h-2 w-full "></div>
                <div id="secao-sobrenos">
                <SobreNos />
                </div>
        </>
    )
}

export default Home
