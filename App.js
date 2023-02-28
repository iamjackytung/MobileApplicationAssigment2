import { StyleSheet, Image, Button } from "react-native";
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
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const addButton = () => {
  navigation.navigate("AddEntry", { name: "AddEntry" });
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Utilities.primaryColor,
          },
          headerTintColor: "#eee",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation, route }) => ({
            title: "All Entries",
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerTitleAlign: "center",
            headerRight: () => {
              return (
                <PressableButton
                  pressHandler={() =>
                    navigation.navigate("AddEntry", { name: "AddEntry" })
                  }
                >
                  <Text style={styles.PressableButton}> + </Text>
                </PressableButton>
              );
            },
          })}
        />
        <Stack.Screen name="AddEntry" component={AddEntry} />
        <Stack.Screen name="EditEntry" component={EditEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Utilities.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  PressableButton: {
    color: Utilities.textColor,
    fontSize: 20,
  },
});
