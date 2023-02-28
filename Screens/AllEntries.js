import { View, StyleSheet } from "react-native";
import React from "react";
import EntriesList from "../Components/EntriesList";

export default function AllEntries({ navigation }) {
  return (
    <View style={styles.container}>
      <EntriesList navigation={navigation} all={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
