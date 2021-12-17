import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
  Image,
  Platform,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { styles } from "../../styles/styleLoginCadastro";
import { InputCampo, InputSenha } from "../../components/input";
import { ButtonLogin } from "../login/button";
import { useNavigation } from "@react-navigation/core";
import { ModalSenha } from "../../components/modal";
import { UsuariosProviders } from "../../providers/usuarios";
import { useEffect, useState } from "react";
import { CheckBox } from "react-native-elements";
import { Usuario } from "../../models/usuario";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { TokenNotificacao } from "../../models/tokenNotificacao";
import { TokenNotificacaoProvider } from "../../providers/token-notificacao";

export interface LoginScreenProps {}

export function LoginScreen(props: LoginScreenProps) {
  const logar = async (dados) => {
    let resposta = await UsuariosProviders.Logar(dados.email, dados.senha);
    if (resposta) {
      //let tokenNotificacao: TokenNotificacao;
      //tokenNotificacao.token = await registerForPushNotificationsAsync();
      //console.log(registerForPushNotificationsAsync());
      //TokenNotificacaoProvider.salvarToken(tokenNotificacao);
      nav.navigate("home");
    } else {
      ToastAndroid.show("Usuario não existe", 300);
    }
  };

  //Estado de selação modal
  const [modalSelecionado, setModalSelecionado] = useState(false);

  const [mostrarSenha, setMostrarSenha] = useState(true);

  const nav = useNavigation();
  /*
  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }
  
  useEffect(() => {
    //@ts-ignore
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      //@ts-ignore
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  */
  return (
    <View style={styles.fundo}>
      <StatusBar />
      <Formik
        initialValues={{
          email: "",
          senha: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .required("Campo e-mail obrigatório")
            .email("Email inválido")
            .max(30, "Máximo 30 caracteres"),
          senha: Yup.string()
            .required("Campo senha obrigatório")
            .min(6, "Mínimo 6 caracteres")
            .max(20, "Máximo 20 caracteres"),
        })}
        onSubmit={logar}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <View style={styles.conteinerFormLogin}>
            <View style={styles.containerLogoApp}>
              <Image
                style={styles.logoApp}
                source={require("../../assets/image/logo-app/logo-minha-vacina.png")}
              />
            </View>
            <InputCampo
              placeholder="Digite seu e-mail"
              icone="email"
              tipoTeclado="email-address"
              onChangeText={handleChange("email")}
              onBlur={() => handleBlur("email")}
            />
            {touched.email && <Text style={styles.erro}>{errors.email}</Text>}

            <InputSenha
              placeholder="Digite sua senha"
              secureText={mostrarSenha}
              onChangeText={handleChange("senha")}
              onBlur={() => handleBlur("senha")}
            />
            {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}

            <CheckBox
              title="Exibir senha"
              checked={mostrarSenha == true ? undefined : true}
              onPress={() => setMostrarSenha(!mostrarSenha)}
              containerStyle={styles.containerCheckBoxSenha}
            />

            <ModalSenha
              titulo="Restaurar senha"
              visivel={modalSelecionado}
              onCancelar={() => setModalSelecionado(!modalSelecionado)}
            >
              <View>
                <Text>
                  Será enviado uma nova senha aleatória para seu e-mail.
                </Text>
                <InputCampo
                  placeholder="Digite seu e-mail"
                  icone="email"
                  tipoTeclado="email-address"
                  onChangeText={handleChange("email")}
                  onBlur={() => handleBlur("email")}
                />
              </View>
            </ModalSenha>

            <TouchableOpacity
              onPress={() => setModalSelecionado(!modalSelecionado)}
            >
              <Text style={styles.textEsqueceuSenha}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

            {isSubmitting && (
              <ActivityIndicator
                style={styles.carregando}
                size="small"
                color="white"
              />
            )}
            {!isSubmitting && (
              <ButtonLogin
                titulo="Entrar"
                onPress={() => handleSubmit()}
                estilo={styles.btnLogin}
              />
            )}
            <TouchableOpacity onPress={() => nav.navigate("cadastro")}>
              <Text style={styles.textContaLoginCadastrar}>
                Ainda não possuo uma conta!
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
