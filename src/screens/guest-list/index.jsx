import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from "../../components/index";
import { cargarInvitados, filtrarInvitados } from "../../store/actions/index";
import { styles } from "./style";
import { COLORS } from "../../constants/themes/colors";

const GuestList = () => {
  const dispatch = useDispatch();
  const invitados = useSelector((state) => state.guestList.invitados);

  useEffect(() => {
    dispatch(cargarInvitados());
  }, [dispatch]);

  const onDelete = () => {
    console.warn("Borrar");
  };

  const renderInvitado = ({ item }) => (
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

  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar por nombre o apellido"
          placeholderTextColor={COLORS.white}
        />
        <Ionicons name="search" size={20} style={styles.searchIcon} color={COLORS.tertiary} />
      </View>
      <FlatList data={invitados} renderItem={renderInvitado} keyExtractor={keyExtractor} />
    </View>
  );
};

export default GuestList;
