import { Text, TextInput, View, StyleSheet, Button, Alert } from "react-native";
import { useState } from "react";
import { writeToDB } from "../Firebase/firestoreHelper";
import Utilities from "../Utilities";
import PressableButton from "../Components/PressableButton";
import { FontAwesome } from "@expo/vector-icons";

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

  const onReset = () => {
    updateCalories("");
    updateDescription("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.flexRow}>
          <View style={styles.flexColumn}>
            <Text style={styles.inputTitle}>Calories</Text>
            <Text></Text>
            <Text style={styles.inputTitle}>description</Text>
          </View>
          <View style={styles.flexColumn}>
            <TextInput
              style={styles.input}
              onChangeText={updateCalories}
              value={calories}
            />
            <Text></Text>
            <TextInput
              style={styles.descriptionInput}
              onChangeText={updateDescription}
              value={description}
            />
          </View>
        </View>
        <View style={styles.flexRow}>
          <PressableButton
            style={{
              backgroundColor: Utilities.primaryColor,
              width: 100,
              height: 30,
              alignSelf: "center",
              marginHorizontal: 30,
            }}
            pressHandler={onReset}
          >
            <Text style={styles.button}>Reset</Text>
          </PressableButton>
          <PressableButton
            style={{
              backgroundColor: Utilities.primaryColor,
              width: 100,
              height: 30,
              alignSelf: "center",
            }}
            pressHandler={onSubmit}
          >
            <Text style={styles.button}>Submit</Text>
          </PressableButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
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
    fontSize: 20,
    color: Utilities.primaryColor,
  },
  descriptionInput: {
    height: 100,
    width: 180,
    marginHorizontal: 10,
    backgroundColor: Utilities.tertiaryColor,
  },
  input: {
    height: 30,
    width: 180,
    marginHorizontal: 10,
    backgroundColor: Utilities.tertiaryColor,
  },
  flexRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  flexColumn: {
    flexDirection: "column",
  },
  container: {
    backgroundColor: Utilities.secondaryColor,
    flex: 1,
  },
  button: { color: "white" },
});
