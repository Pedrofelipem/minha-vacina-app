import { StyleSheet } from "react-native";

export const stylesItemVacina = StyleSheet.create({
  containerPrincipal: {
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    margin: 5,
    padding: 8,
    height: 80,
  },
  containerNome: {},
  containerDescricao: {
    maxWidth: "70%",
  },
  nomeVacina: {
    fontWeight: "bold",
    fontSize: 15,
    left: 10,
  },
  /*Descrição em tag html*/
  p: {
    fontSize: 10,
    color: "black",
    textAlign: "justify",
  },
});
