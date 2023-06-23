import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "../main";
import ListNavigator from "../list";
import ScannerNavigator from "../scanner";
const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HOME" component={MainNavigator} />
      <BottomTab.Screen name="LISTA" component={ListNavigator} />
      <BottomTab.Screen name="SCANNER" component={ScannerNavigator} />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
