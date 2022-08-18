import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 0.1,
  },
  inner: {
    flexDirection: "row",
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    height: 45,
  },
  input: {
    width: "auto",
    height: 45,
    padding: 3,
    paddingLeft: 14,
    color: "white",
    backgroundColor: "green",
    borderRadius: 50,
  },
  button: {
    backgroundColor: "green",
    borderRadius: 50,
    height: 45,
    width: 45,
    marginLeft: 10,
    borderRadius: 50,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});
