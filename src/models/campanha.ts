import { Municipio } from "./municipio";
import { Vacina } from "./vacina";

export class Campanha {
  constructor(
    public id: number,
    public nome: string,
    public descrição: string,
    public vacina: Vacina,
    public municipio: Municipio,
    public ativa: boolean,
    public dataInicio: Date,
    public dataFim: Date,
    public idadeMinima: number,
    public idadeMaxima: number
  ) {}
}
