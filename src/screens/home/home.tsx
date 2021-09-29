import * as React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-elements";
import { stylesHome } from "../../styles/styleHome";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { UsuariosProviders } from "../../providers/usuarios";

export interface HomeScreenProps {}

export function HomeScreen(props: HomeScreenProps) {
  const nav = useNavigation();

  const logout = () => {
    nav.navigate("login");
    UsuariosProviders.Logout;
  };

  return (
    <View style={stylesHome.fundo}>
      <StatusBar />
      <View style={stylesHome.containerDecima}>
        <View style={stylesHome.containerUsuario}>
          <View>
            <Text style={stylesHome.nomeUsuario}>
              Olá, Edvan Oliveira Júnior
            </Text>
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
        <View style={stylesHome.containerBanner}>
          <Text>Banner qualquer</Text>
          <Button title={"Sair"} onPress={logout} />
        </View>
        <Text>Campanhas</Text>
        <View style={stylesHome.containerCampanha}>
          <View>
            <Text>Em tempo real</Text>
          </View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
