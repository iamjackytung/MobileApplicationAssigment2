import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
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
      <View>{children}</View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonStyle: { justifyContent: "center", backgroundColor: "green" },
  pressedStyle: { backgroundColor: "red", opacity: 0.5 },
});
