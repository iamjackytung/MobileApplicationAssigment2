import { Text, View, StyleSheet, Button } from "react-native";
import { deleteFromDB, updateToDB } from "../Firebase/firestoreHelper";
import { Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PressableButton from "../Components/PressableButton";
import Utilities from "../Utilities";

export default function EditEntry({ navigation, route }) {
  console.log(route.params);
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
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.inputTitle}>Calories: {route.params.id}</Text>
        <View style={styles.buttons}>
          <PressableButton
            style={{
              backgroundColor: Utilities.primaryColor,
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
            title="Reviewed"
            pressHandler={deleteAlert}
          >
            <FontAwesome name="trash-o" size={24} color={Utilities.textColor} />
          </PressableButton>
          <PressableButton
            style={{
              backgroundColor: Utilities.primaryColor,
              width: 30,
              height: 30,
              alignSelf: "center",
            }}
            title="Reviewed"
            pressHandler={reviewedAlert}
          >
            <FontAwesome name="check-o" size={24} color={Utilities.textColor} />
          </PressableButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    alignSelf: "center",
  },
  card: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    backgroundColor: Utilities.tertiaryColor,
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
  container: {
    backgroundColor: Utilities.secondaryColor,
    flex: 1,
  },
});
