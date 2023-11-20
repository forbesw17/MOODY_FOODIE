import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import FeedHeader from "./FeedHeader";
import CustomButton from "./UtilComponents/CustomButton";

const QuizScreen = () => {
  return (
    <View style={styles.container}>
      <FeedHeader />

      <View style={styles.quizSection}>
        <Text style={styles.text}>For the single Moodie Foodie</Text>
        <CustomButton text="Solo Quiz" style={styles.button} />

        <Text style={styles.text}>For couples and groups</Text>
        <CustomButton text="Partner Quiz" style={styles.button} />

        <Text style={styles.text}>Can't wait and can't decide?</Text>
        <CustomButton text="Random Selection" style={styles.button} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: "100%",
    backgroundColor: "#003",
  },
  quizSection: {
    width: "100%",
    justifyContent: "center",
    height: "92%",
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  button: {
    marginBottom: 25
  },
});

export default QuizScreen;
