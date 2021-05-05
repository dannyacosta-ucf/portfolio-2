import React from "react";
import { useState, useReducer } from "react";
import { View, StyleSheet } from "react-native";
import WelcomeScreen from "../WelcomeScreen";
import ExerciseScreen from "../ExerciseScreen";
import ScoresScreen from "../ScoresScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { initialState, reducer } from "../AppState";

export default function MainScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inWelcomeScreen, setInWelcomeScreen] = useState(true);

  const Tab = createBottomTabNavigator();

  if (inWelcomeScreen)
    return (
        <View style={styles.container}>
            <WelcomeScreen setInWelcomeScreen={setInWelcomeScreen}></WelcomeScreen>
        </View>
    );
  else {
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName = route.name == "Exercises" ? "bicycle" : "list";

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen
              name="Exercises"
              children={() => (
                <ExerciseScreen
                  scores={state.scores}
                  dispatch={dispatch}
                ></ExerciseScreen>
              )}
            ></Tab.Screen>
            <Tab.Screen
              name="Scores"
              children={() => (
                <ScoresScreen scores={state.scores}></ScoresScreen>
              )}
            ></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: "100%",
  },
});
