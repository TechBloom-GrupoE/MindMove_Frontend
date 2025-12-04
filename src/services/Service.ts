import axios from "axios";

// Instância do Axios
const api = axios.create({
    baseURL: 'https://mindmove-backend.onrender.com'
    //baseURL: 'http://localhost:8080'
})

// Função para Cadastrar Usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

// Função para Logar (Autenticar)
export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

// Função para consultar com token
export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
}

// Função para cadastrar com token
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
}

// Função para atualizar com token
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
}

// Função para deletar com token
export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header);
}

// ==================== CÁLCULO DE IMC ====================

export const calcularIMC = async (url: string, dadosIMC: any) => {
  const response = await api.post(url, dadosIMC)
  return response.data
}