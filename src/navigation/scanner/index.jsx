import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Scanner } from "../../screens";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const ScannerNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="QR Scanner"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.tertiary,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "MerriweatherSans-Bold",
        },
      }}>
      <Stack.Screen name="QR Scanner" component={Scanner} />
    </Stack.Navigator>
  );
};

export default ScannerNavigator;
