import { TextInput, View, Button, Pressable, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Input.styles";
import { Icon } from "../../icons/Icons";

function Input(props) {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Todo..."
            onChangeText={(e) => handleChange(e)}
            style={styles.input}
          />
        </View>
        <Pressable onPress={() => console.log(input, "pressed")}>
          <View style={styles.button}>
            <Text>
              <Icon name="send" />
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default Input;
