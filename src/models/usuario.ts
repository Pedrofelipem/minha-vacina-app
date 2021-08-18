import { Municipio } from "./municipio";
import { Vacina } from "./vacina";

export interface Usuario {
  nome: string,
  municipio: Municipio,
  dataNascimento: Date,
  email: string,
  senha: string,
  vacinas?: Vacina[],
  id?: number
}
