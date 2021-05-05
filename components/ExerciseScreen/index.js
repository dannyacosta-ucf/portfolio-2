import React from "react";
import { useReducer } from "react";
import { Text, StyleSheet, SectionList } from "react-native";
import ExerciseList from "../ExerciseList";
import ExerciseTrackingScreen from "../ExerciseTrackingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function ExerciseScreen(props) {
  const exercises = [
    {
      type: 0,
      data: [["Planks", "Cycling", "Eliptical", "Running", "Rowing", "Canoeing"]],
    },
    {
      type: 1,
      data: [["Push Ups", "Sit Ups", "Jumping Jacks", "Leg Raises", "Ab Crunches", "Squats", "Lunges"]],
    },
  ];

  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Exercises"
          children={() => <ExerciseList exercises={exercises} scores={props.scores} dispatch={props.dispatch}></ExerciseList>}
        ></Stack.Screen>
        <Stack.Screen
          name="ExerciseTracking"
          component={ExerciseTrackingScreen}
          options={({ route }) => ({ title: route.params.name })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
