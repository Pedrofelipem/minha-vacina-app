import * as React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { stylesDetalheCampanha } from "../../styles/styleDetalheCampanha";
import HTMLView from "react-native-htmlview";
import { MaterialIcons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/core";
export interface DetalheCampanhaScreenProps {}

export function DetalheCampanhaScreen(props: DetalheCampanhaScreenProps) {
  const nav = useNavigation();
  const route = useRoute();

  //@ts-ignore
  const nome = route.params?.nome;
  //@ts-ignore
  const descricao = route.params?.descricão;
  //@ts-ignore
  const imagem = route.params?.imagem;
  //@ts-ignore
  const campanhas = route.params?.campanhas;
  //@ts-ignore
  const vacina = route.params?.vacina;
  //@ts-ignore
  const municipio = route.params?.Municipio;
  //@ts-ignore
  const horarioInicioDia = route.params?.horaInicioDia;
  //@ts-ignore
  const horarioFimDia = route.params?.horaFimDia;
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
          <HTMLView value={descricao} stylesheet={stylesDetalheCampanha} />
        </View>
      </ScrollView>
    </View>
  );
}
