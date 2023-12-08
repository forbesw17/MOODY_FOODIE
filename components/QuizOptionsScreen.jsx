import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import CustomButton from "./UtilComponents/CustomButton";

//Global Styles
import { globalStyles } from "./GlobalStyles";

const QuizOptionsScreen = ({ setQuiz }) => {

  const changeQuiz = (selectedQuiz) => {
    setQuiz(selectedQuiz);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.quizSection}>
        <Text style={styles.text}>For the single Moodie Foodie</Text>
        <CustomButton text="Solo Quiz" style={styles.button} onPress={() => changeQuiz('solo')} />

        <Text style={styles.text}>For couples and groups</Text>
        <CustomButton text="Partner Quiz" style={styles.button} onPress={() => changeQuiz('partner')} />

        <Text style={styles.text}>Can't wait and can't decide?</Text>
        <CustomButton text="Random Selection" style={styles.button} onPress={() => changeQuiz('random')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: "100%",
    backgroundColor: globalStyles.app.backgroundColor,
  },
  quizSection: {
    width: "100%",
    justifyContent: "center",
    height: "92%",
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: globalStyles.app.title.color,
    marginBottom: 5,
  },
  button: {
    marginBottom: 25
  },
});

export default QuizOptionsScreen;