import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //    or
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
