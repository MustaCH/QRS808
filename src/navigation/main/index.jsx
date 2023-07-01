import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Form, GuestList, Scanner } from "../../screens";
import { LogoHeader } from "../../components";
import { COLORS } from "../../constants";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HOME"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.tertiary,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "MerriweatherSans-Bold",
        },
      }}>
      <Stack.Screen
        name="HOME"
        component={Form}
        options={{
          headerTitle: (props) => <LogoHeader {...props} />,
        }}
      />
      <Stack.Screen name="Lista de invitados" component={GuestList} />
      <Stack.Screen name="QR Scanner" component={Scanner} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
