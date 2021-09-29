import * as React from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
  Switch,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Municipio } from "../../models/municipio";
import { MunicipiosProviders } from "../../providers/municipios";
import { UsuariosProviders } from "../../providers/usuarios";
import { Usuario } from "../../models/usuario";
import { InputCampo, InputSenha } from "../../components/input";
import { CheckboxCampo } from "./checkbox";
import { ButtonDataCadastro } from "./button";
import { styles } from "../../styles/styleLoginCadastro";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { ModalTermoUso } from "../../components/modal";

export interface CadastroScreenProps {}

export function CadastroScreen(props: CadastroScreenProps) {
  //Abrir Calendário
  const [aberto, setAberto] = useState<boolean>(false);

  const abrirCalendario = () => {
    setAberto(true);
  };

  const fecharCalendario = () => {
    setAberto(false);
  };

  //Selecionando Data
  const [dataNascimento, setDataNascimento] = useState(new Date(1900, 10, 11));
  const confirmarDataNascimento = (dataNascimento: Date) => {
    setDataNascimento(dataNascimento);
    fecharCalendario();
  };

  //Mostrando Data
  let pegandoData = new Date(dataNascimento);
  let diaFormatado =
    pegandoData.getDate() < 10
      ? "0" + pegandoData.getDate()
      : pegandoData.getDate();
  let mesFormatado =
    pegandoData.getMonth() + 1 < 10
      ? "0" + (pegandoData.getMonth() + 1)
      : pegandoData.getMonth() + 1;
  let mostrandoData =
    diaFormatado + "/" + mesFormatado + "/" + pegandoData.getFullYear();

  function dataNaoFoiPreenchida(): boolean {
    let dataInput =
      dataNascimento.getDate() +
      "/" +
      (dataNascimento.getMonth() + 1) +
      "/" +
      dataNascimento.getFullYear();
    return mostrandoData === dataInput;
  }

  //Listando Municípios
  const [listaMunicipios, setListaMunicipios] = useState<Municipio[]>([]);
  useEffect(() => {
    MunicipiosProviders.Listar().then((listaMunicipios) =>
      setListaMunicipios(listaMunicipios)
    );
  }, []);

  //Selecionando Município
  const [selecaoMunicipio, setSelecaoMunicipio] = useState<number>();

  //Cadastrando Usuário
  const cadastrar = async (usuario: Usuario) => {
    usuario.municipio.id = selecaoMunicipio;
    usuario.dataNascimento = dataNascimento;
    if (!usuario.municipio || !usuario.dataNascimento) {
      ToastAndroid.show(
        "Campo município e data de nascimento são obrigatórios",
        1000
      );
    } else {
      await UsuariosProviders.Cadastar(usuario);
      ToastAndroid.show("Usuário cadastrado com sucesso", 1000);
    }
  };

  //Estados de seleção checkBoxs
  const [termoUsoSelecionado, setTermoUsoSelecionado] = useState(false);
  const [termoNotificacaoSelecionado, setTermoNotificacaoSelecionado] =
    useState(false);

  //Estado de selação modal
  const [modalSelecionado, setModalSelecionado] = useState(false);

  const [mostrarSenha, setMostrarSenha] = useState(true);

  const alternar = () => {
    setMostrarSenha(!mostrarSenha);
  };

  //Navegação
  const nav = useNavigation();

  return (
    <ScrollView style={styles.fundo}>
      <StatusBar />
      <View style={styles.logoApp}>
        <Text>Logo Minha Vacina</Text>
      </View>
      <Formik
        initialValues={{
          nome: "",
          municipio: {
            id: null,
            nome: "",
          },
          dataNascimento: null,
          email: "",
          senha: "",
        }}
        validationSchema={Yup.object().shape({
          nome: Yup.string()
            .required("Campo nome obrigatório")
            .min(5, "Campo Nome incompleto")
            .max(35, "Máximo 35 caracteres"),
          email: Yup.string()
            .required("Campo e-mail obrigatório")
            .email("Email inválido")
            .max(30, "Máximo 30 caracteres"),
          senha: Yup.string()
            .required("Campo senha obrigatório")
            .min(8, "Mínimo 8 caracteres")
            .max(20, "Máximo 20 caracteres"),
        })}
        onSubmit={cadastrar}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <View style={styles.conteinerFormCadastro}>
            <InputCampo
              placeholder="Digite seu nome completo"
              icone="person"
              onChangeText={handleChange("nome")}
              onBlur={() => handleBlur("nome")}
            />
            {touched.nome && <Text style={styles.erro}>{errors.nome}</Text>}

            <View style={styles.containerPicker}>
              <Picker
                selectedValue={selecaoMunicipio}
                onValueChange={setSelecaoMunicipio}
                style={styles.btnPicker}
                dropdownIconColor={"white"}
              >
                <Picker.Item
                  style={styles.btnPicker}
                  label="Selecione seu município"
                  value=""
                />
                {listaMunicipios.map((m) => {
                  return (
                    <Picker.Item
                      style={styles.btnPicker}
                      label={m.nome}
                      value={m.id}
                      key={m.id}
                    />
                  );
                })}
              </Picker>
            </View>

            <View style={styles.containerBtnCalendario}>
              <ButtonDataCadastro
                titulo={
                  dataNaoFoiPreenchida()
                    ? "Selecione sua data de nacismento"
                    : mostrandoData
                }
                icone={"today"}
                onPress={abrirCalendario}
                estilo={styles.btnCalendario}
              />
            </View>

            <DateTimePickerModal
              isVisible={aberto}
              mode="date"
              onConfirm={confirmarDataNascimento}
              onCancel={fecharCalendario}
            />

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
              onChangeText={handleChange("senha")}
              onBlur={() => handleBlur("senha")}
              secureText={mostrarSenha}
            />
            {touched.senha && <Text style={styles.erro}>{errors.senha}</Text>}
            <View style={styles.btnVerSenha}>
              <Switch
                onValueChange={alternar}
                value={mostrarSenha}
                trackColor={{ true: "#12963C", false: "#bbbbbb" }}
                thumbColor={mostrarSenha ? "#12963C" : "#bbbbbb"}
              />
              <Text style={styles.textoExibirsenha}>Exibir senha</Text>
            </View>
            <ModalTermoUso
              titulo="Termos de uso"
              visivel={modalSelecionado}
              onCancelar={() => setModalSelecionado(!modalSelecionado)}
            >
              <Text>Tudo o texto</Text>
            </ModalTermoUso>

            <TouchableOpacity
              style={styles.containerTextTermo}
              onPress={() => setModalSelecionado(!modalSelecionado)}
            >
              <Text style={styles.textTermoUso}>Termos de uso</Text>
            </TouchableOpacity>
            <View style={styles.containerCheckbox}>
              <CheckboxCampo
                titulo="Eu concordo com os termos de uso"
                iconeMarcado="check"
                iconeDesmarcado="square-o"
                corMarcada="green"
                verificado={termoUsoSelecionado}
                onPress={() => setTermoUsoSelecionado(!termoUsoSelecionado)}
              />
            </View>
            <View style={styles.containerCheckbox2}>
              <CheckboxCampo
                titulo="Eu estou ciente que irei receber notificações"
                iconeMarcado="check"
                iconeDesmarcado="square-o"
                corMarcada="green"
                verificado={termoNotificacaoSelecionado}
                onPress={() =>
                  setTermoNotificacaoSelecionado(!termoNotificacaoSelecionado)
                }
              />
            </View>

            {isSubmitting && (
              <ActivityIndicator
                style={styles.carregando}
                size="small"
                color="white"
              />
            )}
            {!isSubmitting && (
              <ButtonDataCadastro
                titulo="Cadastrar-se"
                disabled={!termoUsoSelecionado || !termoNotificacaoSelecionado}
                onPress={() => handleSubmit()}
                estilo={styles.btnCadastrar}
              />
            )}
            <TouchableOpacity onPress={() => nav.navigate("login")}>
              <Text style={styles.textContaLoginCadastrar}>
                Já possuo uma conta!
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
