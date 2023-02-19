import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import EntriesList from "../Components/EntriesList";

export default function AllEntries({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Go to OverLimitEntries"
        onPress={() =>
          navigation.navigate("OverLimitEntries", { name: "OverLimitEntries" })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: "Home" })}
      />
      <EntriesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
