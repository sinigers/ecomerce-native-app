import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

export default function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.Image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Rec jacket for sale</AppText>
        <AppText style={styles.price}>$300</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/siniger.jpg")}
            title="Alexander Sinigerov"
            subTitle="3 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
    marginLeft: 8,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  Image: {
    width: "100%",
    height: 300,
  },
  userContainer: {
    marginVertical: 40,
  },
});
