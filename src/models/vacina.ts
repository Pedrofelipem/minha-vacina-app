import { Campanha } from "./campanha";

export interface Vacina {
  id: number;
  nome: string;
  descricao: string;
  caminhoImagem: string;
  campanhas?: Campanha[];
  imagem?: any;
}
