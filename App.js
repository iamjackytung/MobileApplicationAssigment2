import { StyleSheet, Text } from "react-native";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Components/Home";
import AddEntry from "./Screens/AddEntry";
import EditEntry from "./Screens/EditEntry";
import Utilities from "./Utilities";
import PressableButton from "./Components/PressableButton";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const renderAddEntryButton = ({ navigation }) => (
    <PressableButton
      pressHandler={() => navigation.navigate("AddEntry", { name: "AddEntry" })}
      style={styles.PressableButton}
    >
      <Text style={styles.addButton}> + </Text>
    </PressableButton>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Utilities.primaryColor,
          },
          headerTintColor: Utilities.textColor,
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            title: "All Entries",
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerRight: () => renderAddEntryButton({ navigation }),
          })}
        />
        <Stack.Screen name="AddEntry" component={AddEntry} />
        <Stack.Screen name="EditEntry" component={EditEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  PressableButton: {
    color: Utilities.textColor,
    fontSize: 20,
  },
  addButton: {
    color: Utilities.textColor,
    fontSize: 25,
  },
});

export default App;
