
function FormCategoria() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto p-14 bg-linear-to-br from-teal-100 via-violet-200 to-red-200">
            <div className="bg-white border border-teal-300 rounded-4xl py-14 shadow-lg shadow-teal-700/50 pr-14 pl-14">
                <h1 className="text-xl lg:text-3xl text-center mt-2 mb-6 font-semibold text-teal-900">
                    Cadastrar Categoria
                </h1>
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="descricao">Descrição</label>
                        <input
                            type="text"
                            placeholder="Descreva sua Categoria"
                            name="descricao"
                            className="border border-teal-700 rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="icone">Ícone</label>
                        <input 
                            type="text"
                            placeholder="Ícone da Categoria"
                            name="icone"
                            className="border border-teal-700 rounded p-2"
                        />
                    </div>

                    <div className="flex flex-col gap-2 text-teal-900">
                        <label htmlFor="icone">Perfil Neurodivergente</label>
                        <input
                            type="text"
                            placeholder="Perfil Neurodivergente"
                            name="perfilneuro"
                            className="border border-teal-700 rounded p-2 mb-6"
                        />
                    </div>

                    <button
                        className=" rounded text-slate-50 hover:font-bold bg-violet-400 hover:bg-violet-800 py-2 flex justify-center cursor-pointer"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FormCategoria
