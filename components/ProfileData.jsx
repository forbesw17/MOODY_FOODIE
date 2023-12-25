import React from "react";
import { ScrollView, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

//Global Styles
import { globalStyles } from "./GlobalStyles";

import CustomButton from "./UtilComponents/CustomButton";

const ProfileData = () => {
    const navigation = useNavigation();


  return (
    <ScrollView contentContainerStyle={globalStyles.screen.contentContainer}>
      <Text style={globalStyles.screen.text}>Name</Text>

      <Text style={globalStyles.screen.text}>Email</Text>
      <Text style={globalStyles.screen.text}>Change Password</Text>
      <Text style={globalStyles.screen.text}>Set Up Two-factor Authentification</Text>

      <CustomButton
        text="Logout"
        style={globalStyles.screen.button}
        onPress={() => navigation.navigate("Auth", { screen: "Login" })}
      >
        Logout
      </CustomButton>

    </ScrollView>
  );
};

export default ProfileData;
