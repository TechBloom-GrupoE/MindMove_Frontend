import { Barbell, PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (
        <div className="hover:shadow-lg flex flex-col rounded-3xl overflow-hidden justify-between bg-slate-50">
            <div className="pb-10 pt-6">
                <div className="flex items-end justify-end pr-3 gap-2 ">
                    <Link to={``}>
                        <PencilIcon
                            size={22}
                            className="text-violet-400 hover:text-green-600 transition-colors"
                            weight="regular"
                        />
                    </Link>

                    <Link to={``}>
                        <TrashIcon
                            size={22}
                            className="text-violet-400 hover:text-red-400 transition-colors"
                            weight="regular"
                        />
                    </Link>
                </div>
                <header className=" flex justify-center items-center ">
                    {categoria.icone}
                    <Barbell size={34} weight="light" className="text-violet-600 transition" />
                </header>
                <p className="text-center flex justify-center text-lg lg:text-xl text-violet-600 hover:text-violet-900">{categoria.descricao}</p>
            </div>
        </div>
    )
}

export default CardCategorias
