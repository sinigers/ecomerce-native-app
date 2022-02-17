import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
