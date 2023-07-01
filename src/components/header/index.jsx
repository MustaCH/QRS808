import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

const LogoHeader = () => {
  return (
    <View style={styles.header}>
      <Image source={require("../../../assets/SBS808LOGOreduGREEN.png")} style={styles.logo} />
    </View>
  );
};

export default LogoHeader;
