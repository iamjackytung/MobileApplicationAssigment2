import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import { firestore } from "../Firebase/firebase-setup";
import { onSnapshot, collection } from "@firebase/firestore";
import Utilities from "../Utilities";
import PressableButton from "./PressableButton";

export default function EntriesList({ navigation, all }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        setEntries([]);
        if (querySnapshot.empty) setEntries([]);
        else {
          let docs = [];
          // we want to update entries array with the data THAT we get in this array
          querySnapshot.docs.forEach((snap) => {
            if (all) return docs.push({ ...snap.data(), id: snap.id });
            else if (!all && !snap.data().reviewed)
              return docs.push({ ...snap.data(), id: snap.id });
          });
          setEntries(docs);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  let itemInfo;

  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={({ item }) => {
          if (item.reviewed == true) itemInfo = "";
          else itemInfo = <Text>⚠️</Text>;
          return (
            <PressableButton
              style={{
                alignSelf: "center",
                backgroundColor: Utilities.primaryColor,
                padding: 10,
                marginVertical: 8,
                marginHorizontal: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "95%",
              }}
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
        }}
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
});
