import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ScoresScreen(props) {
  const reversedScores = [...props.scores];
  reversedScores.reverse();

  const renderItem = ({ item }) => (
    <View style={styles.listEntry}>
      <View style={styles.listEntryTitleContainer}>
        <Ionicons
          style={styles.listEntryTitleIcon}
          size={20}
          name={item.type === 0 ? "time-outline" : "barbell-outline"}
        ></Ionicons>
        <Text style={styles.listEntryTitle}>{item.id}</Text>
      </View>
      <View style={styles.listEntryScoreContainer}>
        <Text style={styles.listEntryScore}>
          {item.type === 0 ? item.formattedValue : item.value}
        </Text>
        <Text style={styles.listEntryScoreDescription}>
          {item.type === 0
            ? "duration"
            : `rep${item.value !== 1 ? "s" : ""} completed`}
        </Text>
      </View>
    </View>
  );

  const Stack = createStackNavigator();

  if (props.scores.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Scores will show here as you finish exercises.</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen
            name="Scores"
            children={() => (
              <FlatList
                style={styles.list}
                data={reversedScores}
                renderItem={renderItem}
                keyExtractor={(item, index) => item + index}
              ></FlatList>
            )}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
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
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomColor: "rgba(128,128,128,0.125)",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  listEntryTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  listEntryTitleIcon: {
    marginRight: 8,
    color: "rgb(48, 140, 172)",
  },
  listEntryTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgb(48, 140, 172)",
  },
  listEntryScoreContainer: {
    flexGrow: 1,
    alignItems: "flex-end",
  },
  listEntryScore: {
    fontSize: 20,
  },
  listEntryScoreDescription: {
    opacity: 0.5,
  },
});
