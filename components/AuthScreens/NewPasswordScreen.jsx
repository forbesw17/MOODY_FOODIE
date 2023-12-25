import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

//Global Styles
import { globalStyles } from "../GlobalStyles";

import CustomInput from "../UtilComponents/CustomInput";
import CustomButton from "../UtilComponents/CustomButton";

const NewPasswordScreen = () => {
  const navigation = useNavigation();

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onLoginPressed = () => {
    navigation.navigate("Login");
  };

  const onSubmitPressed = () => {
    navigation.navigate("AppTabs", {screen: "Home"});
    // navigation.navigate("Home");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={globalStyles.auth.scrollView}>
      <View style={globalStyles.auth.container}>
        <Text style={globalStyles.auth.title}>Reset your password</Text>

        <CustomInput placeholder="Enter code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="Enter your new password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to login"
          onPress={onLoginPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};


export default NewPasswordScreen;
