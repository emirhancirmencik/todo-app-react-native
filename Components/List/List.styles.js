import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginBottom: 10,
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  titleCompleted: {
    textDecorationLine: "line-through",
  },
  itemCompleted: {
    backgroundColor: "darkseagreen",
    borderRadius: 5,
  },
});
