import { PencilIcon, TrashIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import type Exercicio from "../../../models/Exercicio"


interface CardExercicioProps {
	exercicio: Exercicio
}
function CardExercicios({ exercicio }: Readonly<CardExercicioProps>) {
	return (

		<div className="flex flex-col justify-between my-4 sm:my-6 md:my-4 lg:my-10 overflow-hidden bg-white rounded-lg">
			<div className="flex items-end justify-end pt-2 pr-2 ">
				<Link to={`/editarexercicio/${exercicio.id}`}>
					<PencilIcon
						size={24}
						className="mr-1 hover:fill-teal-800"
					/>
				</Link>

				<Link to={`/deletarexercicio/${exercicio.id}`}>
					<TrashIcon
						size={24}
						className="mr-1 hover:fill-red-700"
					/>
				</Link>
			</div>

			{/* <div className="py-4">
				<img
					src={exercicio.foto}
					className="mx-auto mt-1 h-44 max-w-75"
					alt={exercicio.nome}
				/> */}

				<div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    {/* <img
                        src={exercicio.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={exercicio.usuario?.nome} /> */}
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {exercicio.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{exercicio.duracao}</h4>
                    <p>{exercicio.descricao}</p>
                    <p>{exercicio.estimuloSensorial}</p>
                    <p>Categoria: {exercicio.categoria?.descricao}</p>
                </div>
            
			<div className="flex flex-wrap">
				<button
					className="flex items-center justify-center w-full py-2 text-white bg-red-800 hover:bg-red-300 font-semibold"
				>
					Exercício Completo
				</button>
			</div>
		</div>
    </div>
	)
}

export default CardExercicios