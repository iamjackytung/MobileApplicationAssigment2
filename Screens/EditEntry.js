import { Text, Modal, View, StyleSheet, Button } from "react-native";
import { deleteFromDB } from "../Firebase/firestoreHelper";
import { useState } from "react";
import { Pressable } from "react-native";

export default function EditEntry({ route }) {
  console.log(route.params.id);
  // const [modalVisible, setModalVisible] = useState(visible);
  return (
    <View style={styles.card}>
      <Text style={styles.inputTitle}>You have entered:</Text>
      <Button title="Delete" onPress={() => deleteFromDB(route.params.id)} />
      <Button
      // title="Reviewed"
      // onPress={() =>
      //   navigation.navigate("AllEntries", { name: "AllEntries" })
      // }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "column",
    width: 115,
    alignSelf: "center",
  },
  card: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 10,
    elevation: 5,
    shadow: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  inputTitle: {
    marginTop: 10,
    fontSize: 20,
  },
});
