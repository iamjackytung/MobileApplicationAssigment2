import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import EntriesList from "../Components/EntriesList";

export default function OverLimitEntries({ navigation, route }) {
  // console.log(route.params);
  // console.log("Over");
  return (
    <View style={styles.container}>
      <EntriesList all={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
