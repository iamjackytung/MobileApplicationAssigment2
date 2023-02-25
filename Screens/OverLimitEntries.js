import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import EntriesList from "../Components/EntriesList";

export default function OverLimitEntries({ navigation }) {
  return (
    <View style={styles.container}>
      <EntriesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
