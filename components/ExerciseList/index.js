import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import Exercise from "../Exercise";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ExerciseList(props) {
  const renderSectionHeader = ({ section: { type } }) => (
    <View style={styles.header}>
      <Ionicons
        style={styles.headerIcon}
        name={type == 0 ? "time-outline" : "barbell-outline"}
        size={16}
      ></Ionicons>
      <Text>{(type == 0 ? "Duration" : "Repetition") + " Exercises"}</Text>
    </View>
  );

  const renderItem = ({ item, section }) => (
    <View style={styles.container}>
      {item.map((child) => (
        <Exercise
          key={item.indexOf(child)}
          name={child}
          type={section.type}
          scores={props.scores}
          dispatch={props.dispatch}
        ></Exercise>
      ))}
    </View>
  );

  return (
    <SectionList
      style={styles.list}
      sections={props.exercises}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item, index) => item + index}
    ></SectionList>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "white",
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  headerIcon: {
    marginRight: 4,
  },
  list: {
    width: "100%",
    height: "100%",
  },
  container: {
    padding: 16,
  },
});
