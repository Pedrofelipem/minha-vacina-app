import { Municipio } from "./municipio";
import { Vacina } from "./vacina";

export interface Campanha {
  id: number,
  nome: string,
  descrição: string,
  vacina: Vacina,
  municipio: Municipio,
  ativa: boolean,
  dataInicio: Date,
  dataFim: Date,
  idadeMinima: number,
  idadeMaxima: number
}
