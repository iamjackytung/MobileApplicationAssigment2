import { Text, Modal, View, StyleSheet, Button } from "react-native";
import { deleteFromDB, updateToDB } from "../Firebase/firestoreHelper";
import { useState } from "react";
import { Pressable } from "react-native";
import { Alert } from "react-native";
import { updateDoc } from "@firebase/firestore";

export default function EditEntry({ navigation, route }) {
  console.log(route.params.id);
  // const [modalVisible, setModalVisible] = useState(visible);

  const reviewAndNavigate = () => {
    updateToDB(route.params.id);
    navigation.navigate("AllEntries", {
      name: "AllEntries",
    });
  };

  const deleteAndNavigate = () => {
    deleteFromDB(route.params.id);
    navigation.navigate("AllEntries", {
      name: "AllEntries",
    });
  };

  const reviewedAlert = () => {
    Alert.alert(
      "Are you sure you want to mark this as reviewed?",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => reviewAndNavigate() },
      ],
      { cancelable: false }
    );
  };

  const deleteAlert = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => deleteAndNavigate() },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.card}>
      <Text style={styles.inputTitle}>You have entered:</Text>
      <Button title="Delete" onPress={deleteAlert} />
      <Button title="Reviewed" onPress={reviewedAlert} />
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
