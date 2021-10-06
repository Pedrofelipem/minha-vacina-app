import { Municipio } from "./municipio";
import { Vacina } from "./vacina";

export interface Campanha {
  id: number;
  nome: string;
  descricao: string;
  vacina: Vacina;
  municipio: Municipio;
  horarioInicioDia: string;
  horarioFimDia: string;
  local: string;
  ativa: boolean;
  dataInicio: Date;
  dataFim: Date;
  idadeMinima: number;
  idadeMaxima: number;
}
