import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, TextInput, Alert } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from "../../components/index";
import { cargarInvitados, borrarInvitados } from "../../store/actions";
import { styles } from "./style";
import { COLORS } from "../../constants/themes/colors";
import { useFocusEffect } from "@react-navigation/native";

const GuestList = () => {
  const dispatch = useDispatch();
  const invitados = useSelector((state) => state.guestList.invitados);
  const [searchText, setSearchText] = useState("");

  const onDelete = (key) => {
    dispatch(borrarInvitados(key));
  };

  const renderInvitado = ({ item }) => {
    const searchTerm = searchText.toLowerCase().trim();
    const nombre = item.nombre.toLowerCase();
    const apellido = item.apellido.toLowerCase();
    if (nombre.includes(searchTerm) || apellido.includes(searchTerm)) {
      return (
        <ListItem
          id={item.id}
          nombre={item.nombre}
          apellido={item.apellido}
          dni={item.dni}
          email={item.email}
          entradas={item.entradas}
          onDelete={onDelete}
        />
      );
    } else {
      return null;
    }
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(cargarInvitados());
    }, [dispatch])
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por nombre o apellido"
          placeholderTextColor={COLORS.white}
          keyboardType="web-search"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Ionicons name="search" size={25} style={styles.searchIcon} color={COLORS.tertiary} />
      </View>
      <FlatList data={invitados} renderItem={renderInvitado} />
    </View>
  );
};

export default GuestList;
