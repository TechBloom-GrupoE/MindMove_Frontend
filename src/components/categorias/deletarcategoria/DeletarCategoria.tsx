import { Check, X } from "@phosphor-icons/react"

function DeletarCategoria() {
    return (
        <div className="w-full min-h-[70vh] px-4 pt-6 mx-auto bg-red-100 flex justify-center">
            <div className="w-md flex flex-col  overflow-hidden justify-start">
                <h1 className="py-4 text-3xl font-semibold text-center text-slate-800 md:text-4xl">
                    Deletar Categoria
                </h1>

                <p className="mb-4 text-base font-medium text-center text-slate-700 md:text-lg">
                    Tem certeza que deseja deletar a categoria abaixo?
                </p>

                <div className="border border-red-300 flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg shadow-amber-400/50">
                    <header
                        className="py-2 px-6 text-slate-900 bg-white/85 text-center text-xl lg:text-2xl"
                    >
                        Categoria
                    </header>
                    <p
                        className="p-4 text-xl text-slate-900 font-light lg:text-3xl text-center bg-white/85 h-full"
                    >
                        Nome Categoria
                    </p>
                    <div className="flex">
                        <button
                            className="text-slate-100 flex justify-center bg-red-200 hover:bg-red-400 w-full py-2"
                        >
                            <X
                                width={40}
                                color="#emerald-900"
                                weight="bold"
                            />
                        </button>

                        <button
                            className="text-slate-100 flex justify-center bg-emerald-200 hover:bg-emerald-400 w-full py-2"
                        >
                            <Check
                                width={40}
                                color="#emerald-900"
                                weight="bold"
                            />
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default DeletarCategoria
