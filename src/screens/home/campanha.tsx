import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { Campanha } from "../../models/campanha";

export interface CampanhaScreenProps {}

export function CampanhaScreen(props: CampanhaScreenProps) {
  const campanhas = [
    {
      id: 1,
      nome: "Combate ao covid-19",
      descrição: "Imunizante contra o covid-19",
      vacina: "Pfizer",
      ativa: "true",
      dataInicio: "01/04/2021",
      dataFim: "30/05/2021",
      idadeMinima: 21,
      idadeMaxima: 24,
    },
  ];
  return <View></View>;
}
