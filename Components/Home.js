import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../Screens/AllEntries";
import OverLimitEntries from "../Screens/OverLimitEntries";
import Utilities from "../Utilities";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: Utilities.primaryColor,
        tabBarInactiveBackgroundColor: Utilities.primaryColor,
        tabBarActiveTintColor: Utilities.tintColor,
        tabBarInactiveTintColor: Utilities.textColor,
        tabBarIcon: (tabInfo) => {
          let chosenIcon = "";
          if (route.name == "All Entries") chosenIcon = "cafe-outline";
          else chosenIcon = "alert-outline";
          return (
            <Ionicons
              name={chosenIcon}
              size={24}
              color={
                tabInfo.focused ? Utilities.tintColor : Utilities.textColor
              }
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="All Entries"
        component={AllEntries}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Over Limit Entries"
        component={OverLimitEntries}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
