import { Municipio } from "./municipio";
import { Vacina } from "./vacina";

export class Usuario {
  constructor(
    public id: number,
    public nome: string,
    public municipio: Municipio,
    public dataNascimento: Date,
    public vacina: Vacina,
    public email: string,
    public senha: string
  ) {}
}
