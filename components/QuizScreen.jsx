import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import CustomButton from "./UtilComponents/CustomButton";

//Global Styles
import { globalStyles } from "./GlobalStyles";

// Quizzes
import QuizOptionsScreen from "./QuizOptionsScreen";
import RandomSelectScreen from "./RandomSelectScreen";

const QuizScreen = () => {
  
  const [quiz, setQuiz] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Quizzes</Text>

      {quiz === 'random' ?  <RandomSelectScreen setQuiz={setQuiz}/> : <QuizOptionsScreen setQuiz={setQuiz}/> }
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    minWidth: "100%",
    backgroundColor: globalStyles.app.backgroundColor,
  },
  title: {
    marginLeft: 20,
    alignSelf: "flex-start",
    marginBottom: 15,
    color: globalStyles.app.title.color,
    fontSize: globalStyles.app.title.fontSize,
    fontWeight: 'bold'
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
