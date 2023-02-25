import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import EntriesList from "../Components/EntriesList";

export default function OverLimitEntries({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Button
        title="Go to AllEntries"
        onPress={() =>
          navigation.navigate("AllEntries", { name: "AllEntries" })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: "Home" })}
      /> */}
      <EntriesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
