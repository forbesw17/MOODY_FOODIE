import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import FeedHeader from "./FeedHeader";
import CustomButton from "./UtilComponents/CustomButton";

// Quizzes
import QuizOptionsScreen from "./QuizOptionsScreen";
import RandomSelectScreen from "./RandomSelectScreen";

const QuizScreen = () => {
  
  const [quiz, setQuiz] = useState('');

  return (
    <View style={styles.container}>
      <FeedHeader />


      {quiz === 'random' ?  <RandomSelectScreen setQuiz={setQuiz}/> : <QuizOptionsScreen setQuiz={setQuiz}/> }
      
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
