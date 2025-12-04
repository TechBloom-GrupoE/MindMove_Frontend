// Importa o modal de cadastro de exercícios
//import ModalExercicio from "../../components/modalexercicio/ModalExercicio"
// Importa Link para navegação entre páginas
import Carrossel from "../../components/carrossel/Carrossel";
import SobreNos from "../sobrenos/SobreNos"

function Home() {
 
    return (
        <>
            {/* Primeira parte da Home - Hero Section */}
            <div className="flex justify-center min-h-[70vh] scroll-smooth">
                <Carrossel />
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
