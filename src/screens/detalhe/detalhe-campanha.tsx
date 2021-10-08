import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { stylesDetalheCampanha } from "../../styles/styleDetalheCampanha";
import HTMLView from "react-native-htmlview";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/core";
import { Button } from "react-native-elements";
export interface DetalheCampanhaScreenProps {}

export function DetalheCampanhaScreen(props: DetalheCampanhaScreenProps) {
  const nav = useNavigation();
  const route = useRoute();

  //@ts-ignore
  const nome = route.params?.nome;
  //@ts-ignore
  const descricao = route.params?.descricao;
  //@ts-ignore
  const vacina = route.params?.vacina;
  //@ts-ignore
  const municipio = route.params?.municipio;
  //@ts-ignore
  const horarioInicio = route.params?.horaInicioDia;
  //@ts-ignore
  const horarioFim = route.params?.horaFimDia;
  //@ts-ignore
  const local = route.params?.local;
  //@ts-ignore
  const ativa = route.params?.ativa;
  //@ts-ignore
  const dataInicio = route.params?.dataInicio;
  //@ts-ignore
  const dataFim = route.params?.dataFim;
  //@ts-ignore
  const idadeMinima = route.params?.idadeMinima;
  //@ts-ignore
  const idadeMaxima = route.params?.idadeMaxima;

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
  let resumo = vacina.nome.substr(0, 14);
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
            {nome.toUpperCase()}
          </Text>
        </View>
        <View style={stylesDetalheCampanha.containerDescricao}>
          <Text style={stylesDetalheCampanha.descricao}>{descricao}.</Text>
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
            <Text style={stylesDetalheCampanha.textInfo}>{municipio.nome}</Text>
            <Text style={stylesDetalheCampanha.textInfo}>
              {idadeMinima} - {idadeMaxima} anos
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
            Horário: 06:00{horarioInicio} - {horarioFim}18:00
          </Text>
          <Text style={stylesDetalheCampanha.textMaisInfo}>Local: {local}</Text>
          <Text style={stylesDetalheCampanha.textMaisInfo}>
            Situação: {dataInicio > dataAtual ? "Pendente" : "Acontecendo"}
          </Text>
          <Text style={stylesDetalheCampanha.textMaisInfo}>
            Período: {dataFormatada(dataInicio)} - {dataFormatada(dataFim)}
          </Text>
        </View>
      </ScrollView>
      <Button title="QUERO SER LEMBRADO!" buttonStyle={{ height: 55 }} />
    </View>
  );
}
