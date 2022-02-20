import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";

export default function App() {
  return (
    // <Card
    //   title="Product name"
    //   subTitle="399"
    //   image={require("./app/assets/jacket.jpg")}
    // />
    <Screen>
      <Icon name="email" size={48} backgroundColor="red" iconColor="white" />
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
