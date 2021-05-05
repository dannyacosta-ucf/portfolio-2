import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "../ActionButton";

export default function ExerciseFinishScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nice work!</Text>
      <Text style={styles.heading}>
        You completed this exercise after {props.score}
        {props.type === 0 ? "" : ` rep${props.score != 1 ? "s" : ""}`}!
      </Text>
      <ActionButton
        onPress={() => props.setFinished(false)}
        filled={true}
        name={`Track ${props.name} Again`}
      ></ActionButton>
      <ActionButton
        onPress={() => navigation.navigate("Exercises")}
        name={"Track Another Exercise"}
      ></ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    marginBottom: 72,
  },
});
