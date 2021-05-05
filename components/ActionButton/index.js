import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ActionButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.filled ? styles.buttonFilled : undefined,
        props.prominent ? styles.buttonProminent : undefined,
        props.disabled ? styles.buttonDisabled : undefined,
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text
        style={[
          styles.buttonLabel,
          props.filled ? styles.buttonLabelFilled : undefined,
        ]}
      >
        {props.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "rgb(48, 140, 172)",
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: "100%",
    maxWidth: 250,
    marginBottom: 12,
  },
  buttonFilled: {
    borderWidth: 0,
    backgroundColor: "rgb(48, 140, 172)",
  },
  buttonDisabled: {
    opacity: 0.33,
  },
  buttonProminent: {
    backgroundColor: "rgb(63, 171, 95)",
    alignSelf: "flex-end",
  },
  buttonLabel: {
    fontSize: 16,
    textAlign: "center",
    color: "rgb(48, 140, 172)",
  },
  buttonLabelFilled: {
    color: "white",
  },
});
