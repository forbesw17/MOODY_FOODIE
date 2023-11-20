import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import homeIcon from "../assets/icons/home.png";
import quizIcon from "../assets/icons/quiz.png";
import settingIcon from "../assets/icons/setting.png";

const FeedNavigation = () => {

  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={homeIcon} resizeMode="contain" />

      <Image style={styles.icon} source={quizIcon} resizeMode="contain" />

      <Image style={styles.icon} source={settingIcon} resizeMode="contain" />
    </View>
  );
};

// STYLES FOR HOME SCREEN
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#003",
    bottom: 0,

    padding: 20,

  },
  icon: {
    height: 25,
    width: 25,
  },
});

export default FeedNavigation;
