import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Utilities from "../Utilities";
export default function PressableButton({ style, pressHandler, children }) {
  return (
    <Pressable
      style={({ pressed }) => {
        return [
          styles.buttonStyle,
          style,
          pressed ? styles.pressedStyle : null,
        ];
      }}
      onPress={pressHandler}
    >
      <View style={styles.view}>{children}</View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "green",
    justifyContent: "center",
    borderRadius: "5",
  },
  pressedStyle: {
    backgroundColor: "white",
    opacity: 0.5,
  },
  view: { alignSelf: "center" },
});
