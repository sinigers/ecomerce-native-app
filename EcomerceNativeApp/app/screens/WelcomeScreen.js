import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.titleText}>Sell What you want</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={styles.textButton}>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.textButton}>Register</Text>
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
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "90%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    borderRadius: 12,
  },
  registerButton: {
    display: "flex",
    width: "90%",
    height: 70,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
    borderRadius: 12,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",

    // textAlign: "center",
  },
});
