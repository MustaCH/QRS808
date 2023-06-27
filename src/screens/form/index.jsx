import React, { useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./style";
import { COLORS } from "../../constants/themes/colors";
import { formularioReducer } from "../../store/reducers/index";
import { guardarInvitado } from "../../store/actions/index";
import { Input } from "../../components/index";

const Form = ({ navigation }) => {
  const dispatch = useDispatch();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [entradas, setEntradas] = useState(1);

  const handleSubmit = () => {
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
          onChangeText={(text) => setNombre(text)}
          label="Nombre"
          error="*ingrese un nombre válido*"
          touched={true}
        />
        <Input
          placeholder="Apellido"
          value={apellido}
          autoCorrect={false}
          onChangeText={(text) => setApellido(text)}
          label="Apellido"
          error="*ingrese un apellido válido*"
          touched={true}
        />
        <Input
          placeholder="DNI"
          value={dni}
          keyboardType="numeric"
          autoCorrect={false}
          onChangeText={(text) => setDni(text)}
          label="DNI"
          error="*ingrese un DNI válido*"
          touched={true}
        />
        <Input
          placeholder="Email"
          value={email}
          keyboardType="email-address"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
          label="E-mail"
          error="*ingrese un e-mail válido*"
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
          <Button color={COLORS.secondary} title="Generar" onPress={handleSubmit} />
        </View>
        <View style={styles.helperContainer}>
          <Text style={styles.helper}>*Se enviará una invitación vía email al invitado*</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;
