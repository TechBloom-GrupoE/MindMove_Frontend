import type Exercicio from "./Exercicio";

export default interface Categoria {
  id: number;
  descricao: string;
  icone: string;
  perfil_relacionado: string;
  exercicios?: Exercicio[] | null;
}