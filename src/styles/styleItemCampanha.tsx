import { StyleSheet } from "react-native";

export const stylesItemCampanha = StyleSheet.create({
  container: {
    padding: 5,
    height: 120,
    width: 340,
    backgroundColor: "#CBD4E6",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 1.36,
    shadowRadius: 1.68,
    elevation: 1,
  },
  containerNomeCampanha: {
    maxWidth: "70%",
    maxHeight: "20%",
    padding: 2.5,
  },
  containerNomeMunicipio: {
    left: 105,
    alignItems: "center",
    position: "relative",
    top: "13%",
  },
  containerIdade: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  containerData: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  textIdadeData: {
    color: "black",
    left: 5,
    fontSize: 13.5,
  },
  textCampanha: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
  },
  textAtivo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    position: "relative",
    top: -5,
  },
  textMunicipio: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    position: "relative",
    top: 5,
  },
});
