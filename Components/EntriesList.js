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
import EditEntry from "../Screens/EditEntry";

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
            // console.log(snap.id);
            if (all) return docs.push({ ...snap.data(), id: snap.id });
            else if (!all && !snap.data().reviewed)
              return docs.push({ ...snap.data(), id: snap.id });
          });
          console.log(docs);
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={entries}
        renderItem={({ item }) => {
          if (item.reviewed == true) itemInfo = "";
          else itemInfo = <Text>⚠️</Text>;

          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() =>
                navigation.navigate("EditEntry", {
                  name: "EditEntry",
                  id: item.id,
                })
              }
            >
              <Text style={styles.title}>{item.entry}</Text>
              <View style={styles.flexError}>
                {itemInfo}
                <Text style={styles.categoryBox}>{item.calories}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    height: 500,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    // fontSize: 32,
  },
  categoryBox: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  flexError: {
    flexDirection: "row",
    alignItems: "center",
  },
});
