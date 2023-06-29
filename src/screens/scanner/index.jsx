import { Text, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { Button } from "react-native";
import { COLORS } from "../../constants/themes/colors";

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("");

  const askForPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  useEffect(() => {
    askForPermission();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type: " + type + "\nData: " + data);
  };

  if (hasPermission === null) {
    return (
      <View>
        <Text>Solicitando permiso de Cámara</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>Acceso a la cámara denegado</Text>
        <Button title="Permitir Cámara" onPress={() => askForPermission()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
      </View>
      <View>
        <View style={styles.scannedTextContainer}>
          <Text style={styles.scannedText}>{text}</Text>
        </View>
        {scanned && (
          <Button
            title="Volver a escanear"
            onPress={() => setScanned(false)}
            color={COLORS.tertiary}
          />
        )}
      </View>
    </View>
  );
};

export default Scanner;
