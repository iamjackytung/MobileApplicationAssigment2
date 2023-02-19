import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllEntries from "./Screens/AllEntries";
import OverLimitEntries from "./Screens/OverLimitEntries";

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View>
      <Button
        title="Go to AllEntries"
        onPress={() =>
          navigation.navigate("AllEntries", { name: "AllEntries" })
        }
      />
      <Button
        title="Go to OverLimitEntries"
        onPress={() =>
          navigation.navigate("OverLimitEntries", { name: "OverLimitEntries" })
        }
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
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
          name="Home"
          component={Home}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="AllEntries"
          component={AllEntries}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="OverLimitEntries"
          component={OverLimitEntries}
          options={{ headerShown: true }}
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
