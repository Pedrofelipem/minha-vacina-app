import { StyleSheet } from "react-native";

export const stylesItemCampanha = StyleSheet.create({
  container: {
    padding: 5,
    height: 120,
    width: 340,
    backgroundColor: "#CBD4E6",
    borderRadius: 10,
  },
  containerNomeCampanha: {
    maxWidth: "95%",
    maxHeight: 20,
    padding: 2.5,
  },
  linhaHorizontal: {
    backgroundColor: "black",
    height: 0.8,
    width: 60,
  },
  containerNomeMunicipio: {
    backgroundColor: "rgba(240, 248, 255, 0.1)",
    alignItems: "center",
    position: "relative",
    top: "32%",
    left: 198,
    width: 130,
    padding: 5,
    borderRadius: 2,
  },
  containerIdade: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: -20,
  },
  containerData: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textIdadeData: {
    color: "black",
    left: 5,
    fontSize: 13.5,
  },
  NomeCampanha: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  textAtivo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    position: "relative",
    top: -5,
  },
  nomeMunicipio: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    position: "relative",
    top: 5,
  },
});
