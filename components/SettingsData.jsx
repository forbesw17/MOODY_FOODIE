import React from "react";
import { ScrollView, Text} from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

const SettingsData = () => {

  return (
    <ScrollView contentContainerStyle={globalStyles.screen.contentContainer}>
      <Text style={globalStyles.screen.text}>Search Radius</Text>
      <Text style={globalStyles.screen.text}>Dark Mode</Text>
      <Text style={globalStyles.screen.text}>About</Text>
      
    </ScrollView>
  );
};

export default SettingsData;
