import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Exercise(props) {
  const getBiggestValue = () => {
    let filteredScores = props.scores.filter(
      (entry) => entry.id === props.name
    );

    if (props.scores.length === 0 || filteredScores.length === 0) return null;

    let i,
      bestScoreIndex = 0;

    for (i = 1; i < filteredScores.length; i++) {
      if (props.type === 0) {
        if (filteredScores[bestScoreIndex].value > filteredScores[i].value)
          bestScoreIndex = i;
      } else {
        if (filteredScores[bestScoreIndex].value < filteredScores[i].value)
          bestScoreIndex = i;
      }
    }

    return filteredScores[bestScoreIndex].value;
  };

  let bestScore = getBiggestValue();

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() =>
        navigation.navigate("ExerciseTracking", {
          name: props.name,
          type: props.type,
          dispatch: props.dispatch,
        })
      }
    >
      <View>
        <Text style={[styles.buttonText, styles.buttonTextTitle]}>
          {props.name}
        </Text>
        <Text style={[styles.buttonText, styles.buttonTextHeader]}>
          {(props.type == 0 ? "Best Time: " : "Most Reps Completed: ") +
            (bestScore === null ? "None" : bestScore)}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Ionicons
          style={styles.icon}
          name="chevron-forward"
          size={24}
        ></Ionicons>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "100%",
    height: "auto",
    paddingVertical: 32,
    paddingHorizontal: 24,
    backgroundColor: "rgb(48, 140, 172)",
    borderRadius: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: "white",
  },
  buttonTextTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 3,
  },
  buttonTextHeader: {
    opacity: 0.5,
  },
  iconContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    color: "white",
  },
});
