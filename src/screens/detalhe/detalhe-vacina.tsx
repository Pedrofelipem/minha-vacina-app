import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { MaterialIcons } from "@expo/vector-icons";
import { stylesDetalheVacina } from "../../styles/styleDetalheVacina";
import HTMLView from "react-native-htmlview";
import { Button } from "react-native-elements";

export interface DetalheVacinaScreenProps {}

export function DetalheVacinaScreen(props: DetalheVacinaScreenProps) {
  const nav = useNavigation();
  const route = useRoute();

  //@ts-ignore
  const nome = route.params?.nome;
  //@ts-ignore
  const descricao = route.params?.descricao;
  //@ts-ignore
  const imagem = route.params?.imagem;
  //@ts-ignore
  const campanhas = route.params?.campanhas;

  return (
    <View style={stylesDetalheVacina.containerPrincipal}>
      <View style={stylesDetalheVacina.header}>
        <TouchableOpacity onPress={() => nav.navigate("home")}>
          <MaterialIcons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
        <Text style={stylesDetalheVacina.textHeader}>Vacina</Text>
      </View>
      <ScrollView>
        <View style={stylesDetalheVacina.containerImagemVacina}>
          <Image
            style={stylesDetalheVacina.imagemVacina}
            source={{ uri: imagem }}
          />
        </View>
        <View style={stylesDetalheVacina.containerNome}>
          <Text style={stylesDetalheVacina.textNome}>{nome.toUpperCase()}</Text>
        </View>
        <View style={stylesDetalheVacina.containerDescricao}>
          <HTMLView value={descricao} stylesheet={stylesDetalheVacina} />
        </View>
      </ScrollView>
      <Button title="QUERO SER AVISADO!" buttonStyle={{ height: 55 }} />
    </View>
  );
}
