import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../UtilComponents/CustomInput";
import CustomButton from "../UtilComponents/CustomButton";
import SocialsLoginButtons from "../UtilComponents/SocialsLoginButtons";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onLoginPressed = () => {
    navigation.navigate("Login");
  };

  const onRegisterPressed = () => {
    navigation.navigate("ConfirmEmail");
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use");
  };

  const onPrivacyPressed = () => {
    console.warn("Privacy Policy");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept out{" "}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialsLoginButtons />

        <CustomButton
          text="Already have an account? Login"
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
    color: "#00ae7f",
  },
});

export default SignUpScreen;
