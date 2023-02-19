import { View, Text, Button } from "react-native";
import React from "react";
import EntriesList from "../Components/EntriesList";

export default function AllEntries({ navigation }) {
  return (
    <View>
      <Button
        title="Go to OverLimitEntries"
        onPress={() =>
          navigation.navigate("OverLimitEntries", { name: "OverLimitEntries" })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: "Home" })}
      />
      <EntriesList />
      <Text>fuck you</Text>
    </View>
  );
}
