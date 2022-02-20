import { StyleSheet, FlatList, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparatior from "../components/ListItemSeparatior";
import ListItemDelete from "../components/ListItemDelete";
import { useState } from "react";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));

    //Call the server
  };

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
            onPress={() => console.log("Message,selected", item)}
            renderRightActions={() => (
              <ListItemDelete onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparatior}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
