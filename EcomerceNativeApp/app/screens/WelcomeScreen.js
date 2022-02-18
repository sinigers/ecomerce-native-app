import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.titleText}>Sell What you want</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 16,
  },
  titleText: {
    // fontWeight: "bold",
    fontSize: 32,
    fontWeight: "600",
    paddingVertical: 20,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 12,
    width: "100%",
  },
});
