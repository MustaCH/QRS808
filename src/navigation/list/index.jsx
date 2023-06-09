import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GuestList } from "../../screens";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const ListNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Lista de invitados"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.tertiary,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "MerriweatherSans-Bold",
        },
      }}>
      <Stack.Screen name="Lista de invitados" component={GuestList} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
