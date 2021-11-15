import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { stylesDetalheCampanha } from "../../styles/styleDetalheCampanha";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/core";
import { Button } from "react-native-elements";
import { Local } from "../../models/local";
import { useState } from "react";
import { Campanha } from "../../models/campanha";
export interface DetalheCampanhaScreenProps {}

export function DetalheCampanhaScreen(props: DetalheCampanhaScreenProps) {
  const nav = useNavigation();
  const route = useRoute();

  //@ts-ignore
  const campanha: Campanha = route.params?.campanha;

  //Formatando Data
  function dataFormatada(data): string {
    let pegandoData = new Date(data);
    let diaFormatado =
      pegandoData.getDate() < 10
        ? "0" + pegandoData.getDate()
        : pegandoData.getDate();
    let mesFormatado =
      pegandoData.getMonth() + 1 < 10
        ? "0" + (pegandoData.getMonth() + 1)
        : pegandoData.getMonth() + 1;
    return diaFormatado + "/" + mesFormatado + "/" + pegandoData.getFullYear();
  }

  let dataAtual = new Date();
  let resumo = campanha.vacina.nome.substr(0, 14);

  return (
    <View style={stylesDetalheCampanha.containerPrincipal}>
      <View style={stylesDetalheCampanha.header}>
        <TouchableOpacity onPress={() => nav.navigate("home")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
        <Text style={stylesDetalheCampanha.textHeader}>Campanha</Text>
      </View>
      <ScrollView>
        <View style={stylesDetalheCampanha.containerNome}>
          <Text style={stylesDetalheCampanha.textNome}>
            {campanha.nome.toUpperCase()}
          </Text>
        </View>
        <View style={stylesDetalheCampanha.containerDescricao}>
          <Text style={stylesDetalheCampanha.descricao}>
            {campanha.descricao}
          </Text>
        </View>
        <View style={stylesDetalheCampanha.containerTextIcone}>
          <View style={stylesDetalheCampanha.containerIcones}>
            <MaterialIcons
              name="coronavirus"
              size={60}
              color={"rgba(25,25,112, 0.9)"}
            />
            <MaterialIcons
              name="location-city"
              size={60}
              color={"rgba(25,25,112, 0.9)"}
            />
            <MaterialIcons
              name="people"
              size={60}
              color={"rgba(25,25,112, 0.9)"}
            />
          </View>
          <View style={stylesDetalheCampanha.containerTextInfo}>
            <Text style={stylesDetalheCampanha.textInfo}>{resumo}</Text>
            <Text style={stylesDetalheCampanha.textInfo}>
              {campanha.municipio.nome}
            </Text>
            <Text style={stylesDetalheCampanha.textInfo}>
              {campanha.idadeMinima} - {campanha.idadeMaxima} anos
            </Text>
          </View>
        </View>
        <View>
          <Text style={stylesDetalheCampanha.tituloMaisInfo}>
            Mais informações
          </Text>
        </View>
        <View style={stylesDetalheCampanha.containermaisInfo}>
          <Text style={stylesDetalheCampanha.textMaisInfo}>
            Horário: {campanha.horarioInicioDia.substr(0, 5)} -{" "}
            {campanha.horarioFimDia.substr(0, 5)}
          </Text>
          {campanha.locais.map((l) => {
            return (
              <Text style={stylesDetalheCampanha.textMaisInfo} key={l.id}>
                Lugar: {l.descricao}, CEP: {l.cep}, Bairro: {l.bairro}, Rua:{" "}
                {l.rua} Número: {l.numero}
              </Text>
            );
          })}

          <Text style={stylesDetalheCampanha.textMaisInfo}>
            Situação:{" "}
            {campanha.dataInicio > dataAtual ? "Pendente" : "Acontecendo"}
          </Text>
          <Text style={stylesDetalheCampanha.textMaisInfo}>
            Período: {dataFormatada(campanha.dataInicio)} -{" "}
            {dataFormatada(campanha.dataFim)}
          </Text>
        </View>
      </ScrollView>
      <Button title="QUERO SER LEMBRADO!" buttonStyle={{ height: 55 }} />
    </View>
  );
}
