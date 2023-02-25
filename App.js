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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#eee",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen
          name="AllEntries"
          component={Home}
          options={({ navigation, route }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
            headerRight: () => {
              return (
                <Button
                  title="+"
                  color="white"
                  onPress={() =>
                    navigation.navigate("AddEntry", { name: "AddEntry" })
                  }
                ></Button>
              );
            },
          })}
        />
        <Stack.Screen
          name="AddEntry"
          component={AddEntry}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditEntry"
          component={EditEntry}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
