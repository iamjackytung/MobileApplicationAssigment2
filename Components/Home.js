import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../Screens/AllEntries";
import OverLimitEntries from "../Screens/OverLimitEntries";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "@firebase/firestore";
import { Button } from "react-native";
import AddEntry from "../Screens/AddEntry";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { firestore } from "../Firebase/firebase-setup";
const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) setEntries([]);
        else {
          let docs = [];
          // we want to update entries array with the data THAT we get in this array
          querySnapshot.docs.forEach((snap) => {
            console.log(snap.id);
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

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllEntries"
        component={AllEntries}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="OverLimitEntries"
        component={OverLimitEntries}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}
