import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesItemCampanha } from "../../styles/styleItemCampanha";
import { Campanha } from "../../models/campanha";
import { MaterialIcons } from "@expo/vector-icons";

export interface ItemCampanhaProps {
  campanha: Campanha;
}

export function ItemCampanha(props: ItemCampanhaProps) {
  const { campanha } = props;

  //Formatando Data
  function dataFormatada(data): string {
    let pegandoData = new Date(data);
    let diaFormatado =
      pegandoData.getDate() < 10
        ? "0" + (pegandoData.getDate() + 1)
        : pegandoData.getDate() + 1;
    let mesFormatado =
      pegandoData.getMonth() + 1 < 10
        ? "0" + (pegandoData.getMonth() + 1)
        : pegandoData.getMonth() + 1;
    return diaFormatado + "/" + mesFormatado + "/" + pegandoData.getFullYear();
  }
  let dataAtual = new Date();

  return (
    <View>
      <TouchableOpacity>
        <View style={stylesItemCampanha.container}>
          <View style={stylesItemCampanha.containerNomeCampanha}>
            <Text style={stylesItemCampanha.textCampanha}>{campanha.nome}</Text>
          </View>
          <View style={stylesItemCampanha.containerNomeMunicipio}>
            <Text style={stylesItemCampanha.textAtivo}>
              {campanha.dataInicio > dataAtual ? "PENDENTE" : "ACONTECENTO"}{" "}
            </Text>
            <Text style={stylesItemCampanha.textMunicipio}>
              {campanha.municipio.nome.toUpperCase()}
            </Text>
          </View>
          <View style={stylesItemCampanha.containerIdade}>
            <MaterialIcons name="people" size={30} color={"white"} />
            <Text style={stylesItemCampanha.textIdadeData}>
              {campanha.idadeMinima} - {campanha.idadeMaxima} anos
            </Text>
          </View>
          <View style={stylesItemCampanha.containerData}>
            <MaterialIcons name="event" size={30} color={"white"} />
            <Text style={stylesItemCampanha.textIdadeData}>
              {dataFormatada(campanha.dataInicio)} -{" "}
              {dataFormatada(campanha.dataFim)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
