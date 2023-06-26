import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, FlatList, TextInput } from "react-native";
import ListItem from "../../components/list-item/index";
import { styles } from "./style";
import { COLORS } from "../../constants/themes/colors";

const GuestList = () => {
  const [invitados, setInvitados] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredInvitados, setFilteredInvitados] = useState([]);

  useEffect(() => {
    // Aquí debes realizar la consulta a Firebase para obtener la lista de invitados
    // y luego actualizar el estado 'invitados' con los datos obtenidos.
    // Puedes utilizar Firebase SDK o cualquier otra biblioteca para interactuar con Firebase.
    // Asegúrate de llamar a setInvitados con los datos obtenidos de Firebase.
    // Ejemplo:
    // const fetchedInvitados = await fetchInvitadosFromFirebase();
    // setInvitados(fetchedInvitados);
    // NOTA: El código para obtener los invitados desde Firebase no está incluido aquí ya que puede variar según tu implementación y la estructura de tu base de datos.
    // Asegúrate de obtener los datos necesarios y actualizar el estado 'invitados' correctamente.
  }, []);

  useEffect(() => {
    filterInvitados(searchText);
  }, [searchText]);

  const filterInvitados = (text) => {
    const filtered = invitados.filter((invitado) => {
      const nombreCompleto = `${invitado.nombre} ${invitado.apellido}`;
      return nombreCompleto.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredInvitados(filtered);
  };

  const renderInvitado = ({ item }) => (
    <ListItem nombre={item.nombre} apellido={item.apellido} dni={item.dni} email={item.email} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por nombre"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor="gray"
        />
        <Ionicons name="search" size={20} color={COLORS.tertiary} style={styles.searchIcon} />
      </View>
      <FlatList
        data={filteredInvitados}
        renderItem={renderInvitado}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default GuestList;
