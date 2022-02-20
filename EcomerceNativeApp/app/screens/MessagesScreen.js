import { StyleSheet, FlatList } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparatior from "../components/ListItemSeparatior";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/siniger.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/siniger.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparatior}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
