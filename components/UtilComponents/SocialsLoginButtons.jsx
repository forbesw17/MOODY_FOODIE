import React from "react";
import { View, Text } from "react-native";
import CustomButton from "./CustomButton";

const SocialsLoginButtons = () => {

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  }

  const onLoginFacebook = () => {
    console.warn('Facebook');
  }

  const onLoginGoogle = () => {
    console.warn('Google');
  }

  const onLoginApple = () => {
    console.warn('Apple');
  }

  return (
    <>
      <CustomButton
        text="Continue with Facebook"
        onPress={onLoginFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />

      <CustomButton
        text="Continue with Google"
        onPress={onLoginGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <CustomButton
        text="Continue with Apple"
        onPress={onLoginApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialsLoginButtons;
