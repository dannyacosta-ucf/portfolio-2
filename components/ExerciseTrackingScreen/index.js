import React from "react";
import DurationExercise from "../DurationExercise";
import RepetitionExercise from "../RepetitionExercise";

export default function ExerciseTrackingScreen({ route }) {
  if (route.params.type == 0) {
    return <DurationExercise name={route.params.name} dispatch={route.params.dispatch}></DurationExercise>;
  } else {
    return <RepetitionExercise name={route.params.name} dispatch={route.params.dispatch}></RepetitionExercise>;
  }
}
