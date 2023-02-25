import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function AddEntry() {
  return (
    <View style={styles.card}>
      <View style={styles.flexRow}>
        <Text style={styles.inputTitle}>Calories</Text>
        <TextInput
          style={styles.input}
          // onChangeText={emailUpdateFunction}
          // value={emailText}
        />
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.inputTitle}>description</Text>
        <TextInput
          style={styles.input}
          // onChangeText={phoneUpdateFunction}
          // value={phoneText}
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

        <Button title="Submit" />
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
