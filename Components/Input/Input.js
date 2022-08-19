import { TextInput, View, Button, Pressable, Text } from "react-native";
import React, { useState, useRef } from "react";
import styles from "./Input.styles";
import { Icon } from "../../icons/Icons";
import { customAlphabet } from "nanoid/non-secure";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);

function Input(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  function handleChange(e) {
    setInput(e);
  }

  function handleSave() {
    const cleanInput = input.replace(/\s/g, "");
    if (cleanInput.length > 0)
      props.addItem({
        text: input,
        completed: false,
        id: nanoid(),
      });
    setInput("");
    inputRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Todo..."
            onChangeText={(e) => handleChange(e)}
            style={styles.input}
            ref={inputRef}
            value={input}
          />
        </View>
        <Pressable onPress={() => handleSave()}>
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
