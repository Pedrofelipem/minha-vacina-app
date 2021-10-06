import { StyleSheet } from "react-native";

export const stylesDetalheVacina = StyleSheet.create({
  containerPrincipal: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#003366",
    flexDirection: "row",
    padding: 18,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    left: 30,
    marginTop: -2,
  },
  containerNome: {
    marginTop: 50,
  },
  textNome: {
    color: "black",
    fontSize: 40,
    textAlign: "center",
  },
  containerDescricao: {
    width: "95%",
    left: 9,
    marginTop: 50,
  },
  p: {
    color: "black",
    textAlign: "justify",
    fontSize: 20,
  },
});
