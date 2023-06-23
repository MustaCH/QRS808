import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

const ListItem = ({ nombre, dni, email, entradas, onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete} style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Nombre y Apellido:</Text>
        <Text style={styles.value}>{nombre}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>DNI:</Text>
        <Text style={styles.value}>{dni}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.label}>Entradas:</Text>
        <Text style={styles.value}>{entradas}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
