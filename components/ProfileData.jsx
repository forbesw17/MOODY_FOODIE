import React, { useState } from "react";
import { StyleSheet, ScrollView, View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

//Global Styles
import { globalStyles } from "./GlobalStyles";

import CustomButton from "./UtilComponents/CustomButton";

const ProfileData = () => {
    const navigation = useNavigation();


  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.text}>Name</Text>

      <Text style={styles.text}>Email</Text>
      <Text style={styles.text}>Change Password</Text>
      <Text style={styles.text}>Set Up Two-factor Authentification</Text>

      <CustomButton
        text="Logout"
        style={styles.button}
        onPress={() => navigation.navigate("Auth", { screen: "Login" })}
      >
        Logout
      </CustomButton>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: "95%",
    alignItems: "left",
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: globalStyles.app.backgroundColor,
    minWidth: "100%",
  },
  text: {
    fontSize: 16,
    color: globalStyles.app.title.color,
    marginBottom: 5,
    fontWeight: "bold",
  },
  button: {
    
    width: "90%",
  },
});

export default ProfileData;
