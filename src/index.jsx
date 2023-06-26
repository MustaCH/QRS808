import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import { styles } from "./style";
import Navigation from "./navigation";
import store from "./store/index";

export default function App() {
  const [loaded] = useFonts({
    "MerriweatherSans-Bold": require("../assets/fonts/MerriweatherSans-Bold.ttf"),
    "MerriweatherSans-Medium": require("../assets/fonts/MerriweatherSans-Medium.ttf"),
    "MerriweatherSans-Light": require("../assets/fonts/MerriweatherSans-Light.ttf"),
    "MerriweatherSans-ExtraBold": require("../assets/fonts/MerriweatherSans-ExtraBold.ttf"),
    "MerriweatherSans-Regular": require("../assets/fonts/MerriweatherSans-Regular.ttf"),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
