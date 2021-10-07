import { Campanha } from "./campanha";

export interface Vacina {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
  campanhas?: Campanha[];
}
