import { View, Text, Button } from "react-native";
import React from "react";

export default function OverLimitEntries({ navigation }) {
  return (
    <View>
      <Button
        title="Go to AllEntries"
        onPress={() =>
          navigation.navigate("AllEntries", { name: "AllEntries" })
        }
      />
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home", { name: "Home" })}
      />
    </View>
  );
}
