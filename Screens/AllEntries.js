import { View, Text, Button, StyleSheet } from "react-native";
import { onSnapshot, collection } from "@firebase/firestore";
import React from "react";
import EntriesList from "../Components/EntriesList";
import { useState, useEffect } from "react";
import { firestore } from "../Firebase/firebase-setup";
import EditEntry from "./EditEntry";

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
