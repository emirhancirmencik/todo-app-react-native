import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Components/Input/Input";
import List from "./Components/List";

export default function App() {
  const [list, setList] = useState([
    {
      text: "Press to complete.",
      id: 0,
      completed: true,
    },
    { text: "Long press to delete.", id: 1, completed: false },
  ]);

  function addItem(item) {
    setList((prev) => [...prev, item]);
  }

  function removeItem(item) {
    setList(list.filter((i) => i.id !== item.id));
  }

  function completeTodo(item) {
    setList(
      list.map((i) => {
        if (item.id === i.id) {
          item.completed = !item.completed;
        }
        return i;
      })
    );
  }

  const completedTodos = list.filter((item) => !item.completed).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {completedTodos > 1 ? "TODOS" : "TODO"}
        </Text>
        <Text style={styles.headerText}>{completedTodos}</Text>
      </View>
      <List data={list} removeItem={removeItem} completeTodo={completeTodo} />

      <View style={styles.input}>
        <Input addItem={addItem} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightslategray",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 20,
    padding: 20,
  },
  input: { height: 65, padding: 10 },
  headerText: {
    fontWeight: "700",
    fontSize: 44,
    color: "orange",
  },
});
