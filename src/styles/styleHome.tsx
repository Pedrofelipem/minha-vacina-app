import { StyleSheet } from "react-native";

export const stylesHome = StyleSheet.create({
  fundo: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  containerDecima: {
    width: "100%",
    height: "50%",
    backgroundColor: "#B0E0E6",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  containerUsuario: {
    flex: 1,
    padding: 19,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nomeUsuario: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginTop: 20,
  },
  imgUsuario: {
    textAlign: "center",
  },
  containerFoto: {
    backgroundColor: "#B0C4DE",
    height: 55,
    width: 55,
    borderRadius: 50,
    justifyContent: "center",
    borderColor: "green",
    left: 2.5,
  },
  borderImg: {
    backgroundColor: "white",
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 9,
  },
  containerBanner: {
    alignItems: "center",
    marginTop: 20,
  },
  imgBanner: {
    borderRadius: 5,
    width: 375,
    height: 129,
  },
  containerCampanha: {
    marginBottom: 2,
    padding: 8,
  },
  textCampanhas: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    padding: 5,
    marginTop: 2,
  },
  textVacinas: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    padding: 5,
    marginTop: 2,
  },
  containerTextCampanhas: {
    left: 5,
  },
  containerTextVacinas: {
    left: 5,
  },
});
