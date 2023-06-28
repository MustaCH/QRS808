import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { styles } from "./style";
import { COLORS } from "../../constants/themes/colors";
import { guardarInvitado } from "../../store/actions/index";
import { Input } from "../../components/index";
import { enviarCorreo } from "../../utils/functions";

const Form = ({ navigation }) => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [entradas, setEntradas] = useState(1);
  const [generarDisabled, setGenerarDisabled] = useState(true);
  const [nombreError, setNombreError] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [dniError, setDniError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validarCampos = () => {
    let valid = true;

    const letrasRegex = /^[a-zA-Z\s]*$/;
    if (!letrasRegex.test(nombre)) {
      setNombreError("*Ingrese un nombre válido*");
      valid = false;
    } else {
      setNombreError("");
    }

    if (!letrasRegex.test(apellido)) {
      setApellidoError("*Ingrese un apellido válido*");
      valid = false;
    } else {
      setApellidoError("");
    }

    const dniRegex = /^\d{1,9}$/;
    if (!dniRegex.test(dni)) {
      setDniError("*Ingrese un DNI válido*");
      valid = false;
    } else {
      setDniError("");
    }

    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(email)) {
      setEmailError("*Ingrese un email válido*");
      valid = false;
    } else {
      setEmailError("");
    }

    return valid;
  };

  const handleSubmit = () => {
    if (!validarCampos()) {
      return;
    }

    const invitado = {
      nombre,
      apellido,
      dni,
      email,
      entradas,
    };

    dispatch(guardarInvitado(invitado));

    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");
    setEntradas(1);

    enviarCorreo(invitado);
  };

  const handleNombreChange = (text) => {
    setNombre(text);
    setGenerarDisabled(!validarCampos());
  };

  const handleApellidoChange = (text) => {
    setApellido(text);
    setGenerarDisabled(!validarCampos());
  };

  const handleDniChange = (text) => {
    setDni(text);
    setGenerarDisabled(!validarCampos());
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setGenerarDisabled(!validarCampos());
  };

  const renderPickerItems = () => {
    const items = [];
    for (let i = 1; i <= 10; i++) {
      items.push(<Picker.Item key={i} label={i.toString()} value={i} />);
    }
    return items;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ingresa datos del invitado:</Text>
        </View>
        <Input
          placeholder="Nombre"
          value={nombre}
          autoCorrect={false}
          onChangeText={handleNombreChange}
          label="Nombre"
          hasError={nombreError !== ""}
          error={nombreError}
          touched={true}
        />
        <Input
          placeholder="Apellido"
          value={apellido}
          autoCorrect={false}
          onChangeText={handleApellidoChange}
          label="Apellido"
          hasError={apellidoError !== ""}
          error={apellidoError}
          touched={true}
        />
        <Input
          placeholder="DNI"
          value={dni}
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={handleDniChange}
          label="DNI"
          hasError={dniError !== ""}
          error={dniError}
          touched={true}
        />
        <Input
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={handleEmailChange}
          label="E-mail"
          hasError={emailError !== ""}
          error={emailError}
          touched={true}
        />
        <Text style={styles.labelEntradas}>Entradas</Text>
        <Picker
          style={styles.picker}
          selectedValue={entradas}
          onValueChange={(value) => setEntradas(value)}>
          {renderPickerItems()}
        </Picker>
        <View style={styles.buttonContainer}>
          <Button
            color={COLORS.secondary}
            title="Generar"
            onPress={handleSubmit}
            disabled={generarDisabled}
          />
        </View>
        <View style={styles.helperContainer}>
          <Text style={styles.helper}>*Se enviará una invitación vía email al invitado*</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;
