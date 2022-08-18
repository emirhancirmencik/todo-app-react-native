import { FlatList, Pressable, Text, View, Vibration } from "react-native";
import React from "react";
import styles from "./List.styles";

function List({ data, removeItem }) {
  const renderItem = ({ item }) => {
    return (
      <Pressable onLongPress={() => removeItem(item)}>
        <View style={styles.item}>
          <Text style={styles.title}>{item.text}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default List;
