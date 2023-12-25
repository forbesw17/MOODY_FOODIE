import React from "react";
import { ScrollView, Text } from "react-native";
import CustomButton from "./UtilComponents/CustomButton";

//Global Styles
import { globalStyles } from "./GlobalStyles";

const QuizOptions = ({ setQuiz }) => {

  const changeQuiz = (selectedQuiz) => {
    setQuiz(selectedQuiz);
  };
  
  return (
    <ScrollView contentContainerStyle={globalStyles.screen.contentContainer}>
        <Text style={globalStyles.screen.text}>For the single Moodie Foodie</Text>
        <CustomButton text="Solo Quiz" style={globalStyles.screen.button} onPress={() => changeQuiz('solo')} />

        <Text style={globalStyles.screen.text}>For couples and groups</Text>
        <CustomButton text="Partner Quiz" style={globalStyles.screen.button} onPress={() => changeQuiz('partner')} />

        <Text style={globalStyles.screen.text}>Want me to pick for you?</Text>
        <CustomButton text="Random Selection" style={globalStyles.screen.button} onPress={() => changeQuiz('random')} />
    </ScrollView>
  );
};

export default QuizOptions;