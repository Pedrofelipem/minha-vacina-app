import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fundo:{
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    logoApp:{
        justifyContent: 'center'
    },
    conteinerForm:{
        marginTop: 120,
    },
    input:{
        backgroundColor: "black",
        color: "white",
        fontSize: 17,
        borderRadius: 30,
        padding: 8,
        borderBottomColor: '#00000000',
    },
    containerPicker:{
        backgroundColor: 'black',
        borderRadius: 30,
        padding: 21,
        width: '95%',
        marginLeft: 10
    },
    btnPicker:{
        color: 'white',
        fontSize: 17,
        backgroundColor:'black'
    },
    containerBtnCalendario:{
        padding: 12,
        marginTop: 13,
        marginBottom: 13,
        
    },
    btnCalendario:{
        padding: 18,
        borderRadius:30,
        backgroundColor: 'black',
        color: 'blue',
        justifyContent: 'flex-start'
        
    },
    btnCadastrar:{
        padding: 9,
        borderRadius: 18,
        width: '92%',
        marginLeft: 17,
    },
    textContaLogin:{
        textAlign: 'center',
        color:'black',
        textDecorationLine:'underline',
        fontSize: 15,
        padding: 10,
    },
    erro: {
        color: "black",
        fontSize: 15,
        textAlign: "right",
        margin: 10,
        marginRight: 30,
        marginTop: -28
      },
    carregando:{
        padding: 10,
        justifyContent: "center"
    }



});
