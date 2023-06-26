import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../constants";
import MainNavigator from "../main";
import ListNavigator from "../list";
import ScannerNavigator from "../scanner";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: "MerriweatherSans-Bold",
          fontSize: 10,
          paddingVertical: 3,
        },
        tabBarActiveTintColor: COLORS.terciary,
        tabBarActiveBackgroundColor: COLORS.tertiary,
        tabBarInactiveTintColor: COLORS.secondary,
        tabBarInactiveBackgroundColor: COLORS.primary,
      }}>
      <BottomTab.Screen
        name="HOME"
        component={MainNavigator}
        options={{
          tabBarLabel: "HOME",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={focused ? COLORS.background : COLORS.secondary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="LISTA"
        component={ListNavigator}
        options={{
          tabBarLabel: "LISTA",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "list-circle" : "list-circle-outline"}
              size={size}
              color={focused ? COLORS.background : COLORS.secondary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SCANNER"
        component={ScannerNavigator}
        options={{
          tabBarLabel: "SCANNER",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? "scan-circle" : "scan-circle-outline"}
              size={size}
              color={focused ? COLORS.background : COLORS.secondary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
