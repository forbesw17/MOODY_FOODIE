import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>

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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#003'
  },
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: '#003'
  },
  logo: {
    width: "100%",
    maxWidth: 400,
    // height: 100
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },

  text: {
    color: "gray",
    marginVertical: 10,
  },

  link: {
    color: "#FDB075",
  },
});

export default NewPasswordScreen;
