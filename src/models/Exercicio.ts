import type Categoria from "./Categoria";

export default interface Exercicio {
  id: number;
  nome: string;
  descricao: string;
  duracao: number;
  estimuloSensorial: string;
  categoria: Categoria | null;
}