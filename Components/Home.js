import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../Screens/AllEntries";
import OverLimitEntries from "../Screens/OverLimitEntries";
import Utilities from "../Utilities";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName, focused) {
  const chosenIcon =
    routeName === "All Entries" ? "cafe-outline" : "alert-outline";
  const color = focused ? Utilities.tintColor : Utilities.textColor;

  return <Ionicons name={chosenIcon} size={24} color={color} />;
}

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: Utilities.primaryColor,
        tabBarInactiveBackgroundColor: Utilities.primaryColor,
        tabBarActiveTintColor: Utilities.tintColor,
        tabBarInactiveTintColor: Utilities.textColor,
        tabBarIcon: ({ focused }) => getTabBarIcon(route.name, focused),
      })}
    >
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Over Limit Entries"
        component={OverLimitEntries}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
