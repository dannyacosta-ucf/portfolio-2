import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "../ActionButton";
import ExerciseFinishScreen from "../ExerciseFinishScreen";

export default function RepetitionExercise(props) {
  const [reps, setReps] = useState(0);
  const [finished, setFinished] = useState(false);

  const increaseRepCount = () => {
    let localReps = reps;
    localReps++;
    setReps(localReps);
  };

  const resetRepCount = () => {
    setReps(0);
  };

  const completeExercise = () => {
    props.dispatch({
      type: "addNewScore",
      newScore: { id: props.name, type: props.type, value: reps },
    });
    setFinished(true);
  };

  if (finished) {
    return (
      <ExerciseFinishScreen
        name={props.name}
        type={props.type}
        score={reps}
        setFinished={(value) => {
          setFinished(value);
          setReps(value === false ? 0 : reps);
        }}
      ></ExerciseFinishScreen>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.reps}>{reps}</Text>
        <Text style={styles.repsLabel}>
          rep{reps != 1 ? "s" : ""} completed
        </Text>
        <ActionButton
          filled={true}
          name="Complete Rep"
          onPress={increaseRepCount}
        ></ActionButton>
        <ActionButton
          name="Reset Rep Count"
          onPress={resetRepCount}
          disabled={reps === 0}
        ></ActionButton>
        <ActionButton
          disabled={reps === 0}
          name="Finish Exercise"
          onPress={completeExercise}
        ></ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  reps: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 8,
  },
  repsLabel: {
    marginBottom: 72,
    opacity: 0.5,
  },
});
