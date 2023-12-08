import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { globalStyles } from "../GlobalStyles";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  style
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    // borderRadius: 5,
    borderRadius: 15
  },

  container_PRIMARY: {
    backgroundColor: "#5A4AE3",
  },

  container_SECONDARY: {
    borderWidth: 2,
    borderColor: "#5A4AE3",
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_SECONDARY: {
    color: globalStyles.customButton.color,
  },

  text_TERTIARY: {
    color: "gray",
  },
});
