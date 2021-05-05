import React from "react";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import ActionButton from "../ActionButton";
import ExerciseFinishScreen from "../ExerciseFinishScreen";

export default function DurationExercise(props) {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [finished, setFinished] = useState(false);

  let centiseconds = Math.floor(time % 100);
  let seconds = Math.floor((time / 100) % 60);
  let minutes = Math.floor((time / (100 * 60)) % 60);

  let timeString =
    `${minutes < 10 ? "0" : ""}` +
    minutes +
    `:${seconds < 10 ? "0" : ""}` +
    seconds +
    `.${centiseconds < 10 ? "0" : ""}` +
    centiseconds;

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleStartStop = () => {
    if (time > 0 && timer !== null) {
      clearInterval(timer);
      setTimer(null);
    } else {
      setTimer(
        setInterval(() => {
          setTime((time) => time + 1);
        }, 10)
      );
    }
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTimer(null);
    setTime(0);
  };

  const completeExercise = () => {
    props.dispatch({
      type: "addNewScore",
      newScore: {
        id: props.name,
        type: props.type,
        value: time,
        formattedValue: timeString,
      },
    });
    setFinished(true);
    clearInterval(timer);
    setTimer(null);
  };

  if (finished) {
    return (
      <ExerciseFinishScreen
        name={props.name}
        type={props.type}
        score={timeString}
        setFinished={(value) => {
          setFinished(value);
          setTime(value === false ? 0 : time);
        }}
      ></ExerciseFinishScreen>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.time}>{timeString}</Text>
        <ActionButton
          filled={true}
          name={timer !== null ? "Stop" : "Start"}
          onPress={handleStartStop}
        ></ActionButton>
        <ActionButton
          name="Reset"
          onPress={resetTimer}
          disabled={time === 0}
        ></ActionButton>
        <ActionButton
          disabled={time === 0}
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
  time: {
    fontSize: 72,
    fontWeight: "bold",
    marginBottom: 72,
    fontVariant: ["tabular-nums"],
  },
});
