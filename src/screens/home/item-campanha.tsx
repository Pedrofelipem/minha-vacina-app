import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { stylesItemCampanha } from "../../styles/styleItemCampanha";
import { Campanha } from "../../models/campanha";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export interface ItemCampanhaProps {
  campanha: Campanha;
}

export function ItemCampanha(props: ItemCampanhaProps) {
  const nav = useNavigation();
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
    <TouchableOpacity
      style={stylesItemCampanha.containerPrincipal}
      onPress={() =>
        nav.navigate("detalhe-campanha", {
          nome: campanha.nome,
          descricao: campanha.descricao,
          vacina: campanha.vacina,
          municipio: campanha.municipio,
          horarioInicioDia: campanha.horarioInicioDia,
          horarioFimDia: campanha.horarioFimDia,
          local: campanha.local,
          ativa: campanha.ativa,
          dataInicio: campanha.dataInicio,
          dataFim: campanha.dataFim,
          idadeMinima: campanha.idadeMinima,
          idadeMaxima: campanha.idadeMinima,
        })
      }
    >
      <View style={stylesItemCampanha.containerNomeCampanha}>
        <Text numberOfLines={2} style={stylesItemCampanha.NomeCampanha}>
          {campanha.nome.toUpperCase()}
        </Text>
      </View>
      <View style={stylesItemCampanha.containerNomeMunicipio}>
        <Text style={stylesItemCampanha.textAtivo}>
          {campanha.dataInicio > dataAtual ? "Pendente" : "Acontecendo"}{" "}
        </Text>
        <View style={stylesItemCampanha.linhaHorizontal} />
        <Text style={stylesItemCampanha.nomeMunicipio}>
          {campanha.municipio.nome}
        </Text>
      </View>
      <View style={stylesItemCampanha.containerIdade}>
        <MaterialIcons name="people" size={30} color={"rgba(25,25,112, 0.9)"} />
        <Text style={stylesItemCampanha.textIdadeData}>
          {campanha.idadeMinima} - {campanha.idadeMaxima} anos
        </Text>
      </View>
      <View style={stylesItemCampanha.containerData}>
        <MaterialIcons name="event" size={30} color={"rgba(25,25,112, 0.9)"} />
        <Text style={stylesItemCampanha.textIdadeData}>
          {dataFormatada(campanha.dataInicio)} -{" "}
          {dataFormatada(campanha.dataFim)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
