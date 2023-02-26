import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../Screens/AllEntries";
import OverLimitEntries from "../Screens/OverLimitEntries";
import EditEntry from "../Screens/EditEntry";
const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllEntries"
        component={AllEntries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="OverLimitEntries"
        component={OverLimitEntries}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
