import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom"
import type Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import { ClipLoader } from "react-spinners";
import { ToastAlerta } from "../../utils/ToastAlerta";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"



function Cadastro() {
  // Objeto responsável por redirecionar o usuário para uma outra rota
	const navigate = useNavigate();
	
	// Controlar a exibição do Loader (animação de carregamento)
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Guardar os dados do usuário
	const [usuario, setUsuario] = useState<Usuario>({
		id: 0,
		nome: "",
		usuario: "",
		senha: "",
		foto: "",
    perfil: "",
    data_nasc: "",
    altura: 0,
    peso: 0
	})

	useEffect( () => {
		if(usuario.id !== 0){
			retornar();
		}
	}, [usuario])

	function retornar(){
		navigate("/");
	}

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
		setUsuario({
			...usuario,
			[e.target.name]: e.target.value
		})
	}


	async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
		e.preventDefault();

		setIsLoading(true);

		if(usuario.senha.length >= 8){

			try{

				await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
				ToastAlerta('Usuário cadastrado com sucesso!', 'success');

			}catch(error){
				ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
			}

		}else{
			ToastAlerta("Dados do usuário inconsistentes! Verifique as informações do cadastro.", 'erro');
			setUsuario({
				...usuario,
				senha: ''
			});
		}

		setIsLoading(false);
	}



 const formatarData = (data: Date | null) => {
    if (!data) return ""
    return data.toISOString().split("T")[0]  // yyyy-MM-dd
  }


  return (
    		<div className="bg-[#DCF0EE] min-h-screen w-full flex flex-col justify-center items-center px-4">

        <img src="https://ik.imagekit.io/gwm5ha4ws/Group%2016.svg" alt="" 
        className="w-32 sm:w-40 md:w-48 lg:w-56 mb-6"/>
        <form className="bg-white 
          w-full 
          max-w-2xl 
          rounded-2xl 
          flex flex-col 
          gap-4 
          p-8 
          sm:p-12 
          mb-10 " 
        onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-3xl sm:text-4xl text-center">Crie sua conta</h2>
          <p className="text-center text-xl sm:text-2xl text-emerald-600">Comece sua jornada de bem-estar!</p>
					<div className="flex flex-col w-full">
						<label htmlFor="nome">Nome</label>
						<input
							type="text"
							id="nome"
							name="nome"
							placeholder="Nome"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
					<div className="flex flex-col w-full">
						<label htmlFor="usuario">Usuario</label>
						<input
							type="text"
							id="usuario"
							name="usuario"
							placeholder="Usuario"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <div className="flex flex-col w-full">
						<label htmlFor="senha">Senha</label>
						<input
							type="password"
							id="senha"
							name="senha"
							placeholder="Senha"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <div className="flex flex-col w-full">
						<label htmlFor="perfil">Perfil neurodivergente</label>
						<input
							type="text"
							id="perfil"
							name="perfil"
							placeholder="Perfil"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.perfil}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
        	<div className="flex gap-5 sm:flex-row flex-col w-full">
          <div className="flex flex-col w-full">
          <label htmlFor="data_nasc">Data de nascimento</label>
          <DatePicker
            id="data_nasc"
            selected={usuario.data_nasc ? new Date(usuario.data_nasc) : null}
            onChange={(date: Date | null) => {
              const formatada = formatarData(date)
              setUsuario({ ...usuario, data_nasc: formatada })
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="Selecione a data"
            className="
              w-full border border-[#BEBDBD] rounded-3xl p-3
              text-gray-700 shadow-sm
            "
          />
        	</div>
		      <div className="flex flex-col w-full">
						<label htmlFor="foto">Foto</label>
						<input
							type="text"
							id="foto"
							name="foto"
							placeholder="Link da foto"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
			  value={usuario.foto}
			  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          </div>
		  		<div className="flex gap-5 sm:flex-row flex-col w-full">
          <div className="flex flex-col w-full">
						<label htmlFor="altura">Altura</label>
						<input
							type="number"
							id="altura"
							name="altura"
							placeholder="altura"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.altura}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          <div className="flex flex-col w-full">
						<label htmlFor="peso">Peso</label>
						<input
							type="number"
							id="peso"
							name="peso"
							placeholder="Peso"
							className="border-2 border-[#BEBDBD] rounded-3xl p-3 text-gray-700 shadow-sm"
              value={usuario.peso}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
						/>
					</div>
          </div>
          <button className="p-4 bg-emerald-600 rounded-2xl text-white font-bold 
            text-lg sm:text-xl w-full sm:w-3/4 mx-auto 
            hover:bg-emerald-800 my-5" type="submit">
          {
								isLoading ?

									<ClipLoader
										color="#ffffff"
										size={24}
									/>

								:
                <span>Cadastrar</span>
                }
          </button>
          <p className="text-center text-lg sm:text-xl">Já tem uma conta? {' '}
            <Link to='/'>
              
                
              <span className="text-emerald-600 hover:text-emerald-800 hover:font-bold cursor-pointer">
                Entrar 
                </span>
            </Link>
            </p>
        </form>
      </div>
  )
}

export default Cadastro

