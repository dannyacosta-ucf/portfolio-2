import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "../ActionButton";

export default function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Tracker</Text>
      <Text style={styles.heading}>Track a variety of duration and repeition exercises with the click of a button.</Text>
      <ActionButton
        onPress={() => props.setInWelcomeScreen(false)}
        filled={true}
        name="Get Started"
      ></ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    marginBottom: 72,
    textAlign: "center",
  },
});
