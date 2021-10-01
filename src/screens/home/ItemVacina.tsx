import * as React from "react";
import { View, Text } from "react-native";
import { stylesItemVacina } from "../../styles/styleItemVacina";
import { Vacina } from "../../models/vacina";

export interface ItemVacinaScreenProps {
  vacina: Vacina;
}

export function ItemVacinaScreen(props: ItemVacinaScreenProps) {
  const { vacina } = props;
  return (
    <View>
      <Text>{vacina.nome}</Text>
      <Text>{vacina.descricao}</Text>
      <Text>{vacina.caminhaImagem}</Text>
    </View>
  );
}
