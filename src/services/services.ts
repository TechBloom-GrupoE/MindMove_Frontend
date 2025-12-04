import axios from "axios"
 
export const api = axios.create({
    baseURL: "https://mindmove-backend.onrender.com/"
  })
 
  // ==================== CRUD ====================

  export const listar = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }
 
  export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
 
  export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
  }
 
  export const deletar = async(url: string) => {
    await api.delete(url)
  }

// ==================== CÁLCULO DE IMC ====================

export const calcularIMC = async (url: string, dadosIMC: any) => {
  const response = await api.post(url, dadosIMC)
  return response.data
}