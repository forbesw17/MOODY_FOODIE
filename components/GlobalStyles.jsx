
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

  // Styles for Navigation
  navigation: {
    bottomTabContainer: {
      backgroundColor: "white",
    },
  },

  // Styles for Auth Screens
  auth: {
    scrollView: {
      backgroundColor: "white",
    },
    container: {
      backgroundColor: "white",
      alignItems: "center",
      padding: 20,
    },
    logo: {
      width: "100%",
      maxWidth: 400,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#5A4AE3",
      margin: 10,
    },
    text: {
      color: "gray",
      marginVertical: 10,
    },
    link: {
      color: "#FDB075",
    },
  },

  // Styles for Screens
  screen: {
    container: {
      alignItems: "center",
      width: "100%",
      backgroundColor: "white",
      marginBottom: 20,
    },
    contentContainer: {
      height: "95%",
      alignItems: "center",
      backgroundColor: "white",
      minWidth: "90%",
    },
    navigation: {
      backNavigator: {
        alignSelf: "flex-start",
        marginLeft: 20,
        marginBottom: 100,
        color: "#5A4AE3",
      },
    },
    title: {
      color: "#5A4AE3",
      fontSize: 26,
      marginLeft: 20,
      alignSelf: "flex-start",
      marginBottom: 15,
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      color: "#5A4AE3",
      marginBottom: 10,
      fontWeight: "bold",
      alignSelf: "flex-start",
    },
    button: {
      marginBottom: 25,
      marginLeft: 20,
      marginRight: 20,
      width: "100%",
    },
    restaurant: {
      backgroundColor: "#5A4AE3",
      color: "white",
    },
  },

  // Styles for CustomButton
  customButton: {
    color: "#5A4AE3",
  },

  // Styles for RestaurantList
  restaurantList: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "white",
    minWidth: "100%",
  },

  // Styles for Restaurant
  restaurant: {
    container: {
      height: 250,
      width: 350,
      backgroundColor: "#5A4AE3",
      flexDirection: "column",
      borderRadius: 15,
      marginBottom: 20,
    },
    imageContainer: {
      height: "65%",
    },
    image: {
      height: "100%",
      width: "100%",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    info: {
      padding: 10,
      marginLeft: 5,
    },
    detailsContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    name: {
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
    text: {
      color: "white",
    },
    star: {
      height: 10,
      width: 10,
    },
  },
});
