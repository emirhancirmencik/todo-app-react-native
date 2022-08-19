import {
  FlatList,
  Pressable,
  Text,
  View,
  Vibration,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import styles from "./List.styles";

function List({ data, removeItem, completeTodo }) {
  const renderItem = ({ item }) => {
    return (
      <Pressable
        onLongPress={() => {
          removeItem(item);
        }}
        onPress={() => {
          completeTodo(item);
        }}
      >
        <View style={[styles.item, item.completed && styles.itemCompleted]}>
          <Text style={[styles.title, item.completed && styles.titleCompleted]}>
            {item.text}
          </Text>
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
