import React, { useState } from "react";
import {
  StatusBar,
  View,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import logo from "../../assets/MoodyFoodieLogo.png";
import { useNavigation } from "@react-navigation/native";

import CustomInput from "../UtilComponents/CustomInput";
import CustomButton from "../UtilComponents/CustomButton";
import SocialsLoginButtons from "../UtilComponents/SocialsLoginButtons";

const LoginScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPressed = () => {
    // validate user
    navigation.navigate("AppTabs", {screen: "Home"});
    // navigation.navigate("Home");
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPressed = () => {
    navigation.navigate("SignUp");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: "#003" }}
    >
      <View style={styles.container}>
        <Image
          source={logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Login" onPress={onLoginPressed} />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialsLoginButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "100%",
    maxWidth: 400,
    // height: 100
  },
});
