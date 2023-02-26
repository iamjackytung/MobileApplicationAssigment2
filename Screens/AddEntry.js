import { Text, TextInput, View, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { writeToDB } from "../Firebase/firestoreHelper";

export default function AddEntry() {
  const [calories, updateCalories] = useState("");
  const [description, updateDescription] = useState("");
  let reviewed = true;

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
      {/* <Text>{validPhoneText}</Text> */}
      <View style={styles.flexRow}>
        <Button
          title="Reset"
          // onPress={() => {
          //   resetFunction();
          //   setValidEmailText("");
          //   setValidPhoneText("");
          // }}
          color="red"
        />

        <Button
          title="Submit"
          onPress={() => {
            if (calories > 500) reviewed = false;
            return writeToDB({
              entry: description,
              calories: calories,
              reviewed: reviewed,
            });
          }}
        />
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
