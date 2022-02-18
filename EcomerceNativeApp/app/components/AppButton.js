import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";
// import { TouchableOpacity } from "react-native-web";

export default function AppButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      //   style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%",
    marginVertical: 12,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
