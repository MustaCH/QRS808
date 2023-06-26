import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, FlatList, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ListItem from "../../components/list-item";
import { cargarInvitados, filtrarInvitados } from "../../store/actions/index";
import { styles } from "./style";
import { invitados } from "../../constants/data";

const GuestList = () => {
  const [listaInvitados, setListaInvitados] = useState(invitados);

  //const [searchText, setSearchText] = useState("");
  //const dispatch = useDispatch();
  //const invitados = useSelector((state) => state.list.invitados);
  //const invitadosFiltrados = useSelector((state) => state.list.invitadosFiltrados);

  /*useEffect(() => {
    dispatch(cargarInvitados());
  }, [dispatch]);*/

  const onDelete = (id) => {
    setListaInvitados(item.filter((item) => item.id !== id));
    setListaInvitados(!listaInvitados);
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

  //const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Buscar por nombre o apellido" />
        <Ionicons name="search" size={20} style={styles.searchIcon} />
      </View>
      <FlatList data={listaInvitados} renderItem={renderInvitado} />
    </View>
  );
};

export default GuestList;
