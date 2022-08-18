import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Components/Input/Input";
import List from "./Components/List";

export default function App() {
  const [list, setList] = useState([]);
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Yapilacaklar</Text>
        <Text>{list.length}</Text>
      </View>
      <List />

      <View style={styles.input}>
        <Input />
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
});
