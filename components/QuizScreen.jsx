import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import CustomButton from "./UtilComponents/CustomButton";

//Global Styles
import { globalStyles } from "./GlobalStyles";

// Quizzes
import QuizOptions from "./QuizOptions";
import RandomSelectScreen from "./RandomSelectScreen";

const QuizScreen = () => {
  
  const [quiz, setQuiz] = useState('');

  return (
    <View style={globalStyles.screen.container}>
      <Text style={globalStyles.screen.title}>Food Quizzes</Text>

      {quiz === 'random' ?  <RandomSelectScreen setQuiz={setQuiz}/> : <QuizOptions setQuiz={setQuiz}/> }
      
    </View>
  );
};

export default QuizScreen;
