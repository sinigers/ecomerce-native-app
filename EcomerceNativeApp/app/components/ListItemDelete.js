import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../config/colors";
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function ListItemDelete() {
  return (
    <View style={styles.container}>
     <MaterialCommunityIcons title="trash-can" size={32}  color={colors.white}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor=colors.danger,
        width:64,
        justifyContent: "center",
        alignItems: "center",
    }
});
