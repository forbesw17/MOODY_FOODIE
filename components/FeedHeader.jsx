import React from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import homeLogo from "../assets/MoodyFoodieLogoHome.png";
import profileIcon from "../assets/icons/profile.png";

const FeedHeader = () => {
  const { height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image
        style={[styles.logo, { height: height * 0.07 }]}
        source={homeLogo}
        resizeMode="contain"
      />

      <Image 
        style={styles.icon} 
        source={profileIcon} 
        resizeMode="contain" 
      />
    </View>
  );
};

// STYLES FOR HOME SCREEN
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: globalStyles.app.backgroundColor
  },
  logo: {
    width: "50%",
    // maxWidth: 500,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 20
  }
});

export default FeedHeader;
