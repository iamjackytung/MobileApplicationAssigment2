import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import { firestore } from "../Firebase/firebase-setup";
import Utilities from "../Utilities";
import PressableButton from "./PressableButton";

export default function EntriesList({ navigation, all }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setEntries([]);
        } else {
          const docs = querySnapshot.docs
            .map((snap) => ({
              ...snap.data(),
              id: snap.id,
            }))
            .filter((doc) => all || !doc.reviewed);
          setEntries(docs);
        }
      }
    );
    return () => unsubscribe();
  }, []);

  const renderItem = ({ item }) => {
    const itemInfo = item.reviewed ? null : <Text>⚠️</Text>;
    return (
      <PressableButton
        style={styles.pressableButton}
        title="Reviewed"
        pressHandler={() =>
          navigation.navigate("EditEntry", {
            name: "EditEntry",
            id: item.id,
            calories: item.calories,
            description: item.entry,
          })
        }
      >
        <View style={styles.flexRow}>
          <Text style={styles.title}>{item.entry}</Text>
          <View style={styles.flexError}>
            {itemInfo}
            <View style={styles.roundBorders}>
              <Text>{item.calories}</Text>
            </View>
          </View>
        </View>
      </PressableButton>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    height: 500,
    backgroundColor: Utilities.secondaryColor,
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: Utilities.textColor,
  },
  roundBorders: {
    borderRadius: 5,
    backgroundColor: Utilities.textColor,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  flexError: {
    flexDirection: "row",
    alignItems: "center",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 340,
  },
  pressableButton: {
    alignSelf: "center",
    backgroundColor: Utilities.primaryColor,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
  },
});
