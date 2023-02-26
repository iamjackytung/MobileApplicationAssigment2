import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";
import { useState } from "react";
import { writeToDB } from "../Firebase/firestoreHelper";

export default function AddEntry({ navigation }) {
  const [calories, updateCalories] = useState("");
  const [description, updateDescription] = useState("");
  let reviewed = true;

  const inputAlert = () => {
    Alert.alert(
      "Invalid Input",
      "Please check your input values",
      [{ text: "OK" }],
      { cancelable: false }
    );
  };

  const onSubmit = () => {
    if (
      !String(calories).match(/^(0|[1-9][0-9]*)$/) ||
      description.trim() == ""
    )
      return inputAlert;
    if (calories > 500) reviewed = false;
    navigation.navigate("AllEntries", {
      name: "AllEntries",
    });
    return writeToDB({
      entry: description,
      calories: calories,
      reviewed: reviewed,
    });
  };

  return (
    <View style={styles.card}>
      <View style={styles.flexRow}>
        <Text style={styles.inputTitle}>Calories</Text>
        <TextInput
          style={styles.input}
          onChangeText={updateCalories}
          value={calories}
        />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.inputTitle}>description</Text>
        <TextInput
          style={styles.input}
          onChangeText={updateDescription}
          value={description}
        />
      </View>
      <View style={styles.flexRow}>
        <Button
          title="Reset"
          onPress={() => {
            updateCalories("");
            updateDescription("");
          }}
          color="red"
        />

        <Button title="Submit" onPress={onSubmit()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  input: {
    height: 30,
    width: "50%",
    borderWidth: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
});
