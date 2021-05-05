import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function ScoresScreen(props) {
  const renderItem = ({ item }) => (
    <View style={styles.listEntry}>
      <Text>{item.id}</Text>
      <Text>{item.value}</Text>
    </View>
  );

  if (props.scores.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Scores will show here as you complete exercises.</Text>
      </View>
    );
  } else {
    return (
      <FlatList
        style={styles.list}
        data={props.scores}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "100%",
    height: "100%",
  },
  listEntry: {
      flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderBottomColor: "rgba(128,128,128,0.125)",
    borderBottomWidth: 1,
  },
});
