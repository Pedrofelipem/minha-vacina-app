import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { stylesHome } from "../../styles/styleHome";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { UsuariosProviders } from "../../providers/usuarios";
import { CampanhasProviders } from "../../providers/campanhas";
import { useState } from "react";
import { Campanha } from "../../models/campanha";
import { ItemCampanha } from "./item-campanha";
import { VacinasProviders } from "../../providers/vacinas";
import { Vacina } from "../../models/vacina";
import { ItemVacinaScreen } from "./item-vacina";

export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  const nav = useNavigation();

  const logout = () => {
    nav.navigate("login");
    UsuariosProviders.Logout;
  };

  //Listando Campanhas
  const [listaCampanhas, setListaCampanhas] = useState<Campanha[]>([]);
  nav.addListener("focus", () => {
    CampanhasProviders.Listar().then((campanhas) =>
      setListaCampanhas(campanhas)
    );
  });

  const [listaVacinas, setListaVacinas] = useState<Vacina[]>([]);
  nav.addListener("focus", () => {
    VacinasProviders.Listar().then((vacinas) => setListaVacinas(vacinas));
  });

  return (
    <View style={stylesHome.fundo}>
      <StatusBar />
      <View style={stylesHome.containerDecima}>
        <View style={stylesHome.containerUsuario}>
          <View>
            <Text style={stylesHome.nomeUsuario}>Olá, Pedro</Text>
          </View>
          <View style={stylesHome.borderImg}>
            <View style={stylesHome.containerFoto}>
              <MaterialIcons
                style={stylesHome.imgUsuario}
                name="person-outline"
                color="#4682B4"
                size={35}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={stylesHome.containerBanner}>
          <Image
            style={stylesHome.imgBanner}
            source={require("../../assets/image/banner/banner-saibamais.png")}
          />
        </TouchableOpacity>
        <View style={stylesHome.containerTextCampanhas}>
          <Text style={stylesHome.textCampanhas}>Campanhas</Text>
        </View>
        <View style={stylesHome.containerCampanha}>
          <FlatList
            horizontal
            data={listaCampanhas}
            ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
            keyExtractor={(id, index) => index.toString()}
            renderItem={({ item }) => <ItemCampanha campanha={item} />}
          />
        </View>
      </View>
      <View style={stylesHome.containerTextVacinas}>
        <Text style={stylesHome.textVacinas}>Vacinas</Text>
      </View>
      <FlatList
        data={listaVacinas}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        keyExtractor={(id, index) => index.toString()}
        renderItem={({ item }) => <ItemVacinaScreen vacina={item} />}
      />
    </View>
  );
}
