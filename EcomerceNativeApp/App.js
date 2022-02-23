import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Switch } from "react-native";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import { useState } from "react";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
