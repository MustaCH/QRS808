import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./style";
import { COLORS } from "../../constants/themes/colors";
import { formularioReducer } from "../../store/reducers/index";
import { guardarInvitado } from "../../store/actions/index";
import { invitados } from "../../constants/data";

const Form = ({ navigation }) => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [cantidadEntradas, setCantidadEntradas] = useState(1);
  const [nombreError, setNombreError] = useState("");
  const [apellidoError, setApellidoError] = useState("");
  const [dniError, setDniError] = useState("");
  const [emailError, setEmailError] = useState("");

  const nuevoInvitado = invitados;

  const handleGuardarInvitado = () => {
    const invitado = {
      nombre,
      apellido,
      dni,
      email,
      cantidadEntradas,
    };

    // Dispatch de la acción para guardar el invitado
    dispatch(guardarInvitado(invitado));

    setNombre("");
    setApellido("");
    setDni("");
    setEmail("");
    setCantidadEntradas(1);
  };

  const isFormValid = () => {
    return (
      nombre !== "" &&
      apellido !== "" &&
      dni !== "" &&
      email !== "" &&
      nombreError === "" &&
      apellidoError === "" &&
      dniError === "" &&
      emailError === ""
    );
  };

  const validateField = (fieldName, value) => {
    const nameRegex = /^[a-zA-Z]+$/;
    const dniRegex = /^\d+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    let error = "";

    switch (fieldName) {
      case "nombre":
        if (value !== "" && !nameRegex.test(value)) {
          error = "*Ingresa un nombre válido*";
        }
        setNombreError(error);
        break;
      case "apellido":
        if (value !== "" && !nameRegex.test(value)) {
          error = "*Ingresa un apellido válido*";
        }
        setApellidoError(error);
        break;
      case "dni":
        if (value !== "" && !dniRegex.test(value)) {
          error = "*Ingresa un DNI válido*";
        }
        setDniError(error);
        break;
      case "email":
        if (value !== "" && !emailRegex.test(value)) {
          error = "*Ingresa un email válido*";
        }
        setEmailError(error);
        break;
      default:
        break;
    }
  };

  const handleNombreChange = (value) => {
    setNombre(value);
    validateField("nombre", value);
  };

  const handleApellidoChange = (value) => {
    setApellido(value);
    validateField("apellido", value);
  };

  const handleDniChange = (value) => {
    setDni(value);
    validateField("dni", value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    validateField("email", value);
  };

  const renderPickerItems = () => {
    const items = [];
    for (let i = 1; i <= 10; i++) {
      items.push(<Picker.Item key={i} label={i.toString()} value={i} />);
    }
    return items;
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ingresa datos del invitado:</Text>
      </View>
      <TextInput
        style={styles.inputName}
        placeholder="Nombre"
        placeholderTextColor={COLORS.black}
        value={nombre}
        onChangeText={handleNombreChange}
      />
      {nombreError !== "" && <Text style={styles.errorText}>{nombreError}</Text>}
      <TextInput
        style={styles.inputApellido}
        placeholder="Apellido"
        placeholderTextColor={COLORS.black}
        value={apellido}
        onChangeText={handleApellidoChange}
      />
      {apellidoError !== "" && <Text style={styles.errorText}>{apellidoError}</Text>}
      <TextInput
        style={styles.inputDNI}
        placeholder="DNI"
        placeholderTextColor={COLORS.black}
        value={dni}
        onChangeText={handleDniChange}
        keyboardType="numeric"
      />
      {dniError !== "" && <Text style={styles.errorText}>{dniError}</Text>}
      <TextInput
        style={styles.inputMail}
        placeholder="Email"
        placeholderTextColor={COLORS.black}
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      {emailError !== "" && <Text style={styles.errorText}>{emailError}</Text>}
      <Picker
        style={styles.picker}
        selectedValue={cantidadEntradas}
        onValueChange={(value) => setCantidadEntradas(value)}>
        {renderPickerItems()}
      </Picker>
      <View style={styles.buttonContainer}>
        <Button
          color={COLORS.secondary}
          title="Generar"
          onPress={handleGuardarInvitado}
          disabled={!isFormValid()}
        />
      </View>
      <View style={styles.helperContainer}>
        <Text style={styles.helper}>*Se enviará una invitación vía email al invitado*</Text>
      </View>
    </View>
  );
};

export default Form;
