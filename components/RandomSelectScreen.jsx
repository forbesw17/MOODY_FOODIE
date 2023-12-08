import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import Restaurant from "./Restaurant";
import { useRestaurantContext } from "./RestaurantProvider";
import CustomButton from "./UtilComponents/CustomButton";

const RandomSelectScreen = ({ setQuiz }) => {
  const restaurants = useRestaurantContext();

  const [randomKey, setRandomKey] = useState(null);

  useEffect(() => {
    if (!restaurants) return; // Check if restaurants exist before generating random key

    let randomNum =
      Object.keys(restaurants)[Math.floor(Math.random() * restaurants.length)];

    setRandomKey(randomNum);
  }, [restaurants]); // Add restaurants dependency to ensure randomKey updates when restaurant data get populated

  const changeQuiz = (selectedQuiz) => {
    setQuiz(selectedQuiz);
  };

  return (
    <View style={styles.container}>
      <Text
        style={[styles.text, styles.backNavigator]}
        onPress={() => setQuiz("")}
      >
        ← Back to Quizzes
      </Text>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.text}>Here's what we picked for you...</Text>

        {randomKey && restaurants ? (
          <>
            <Restaurant
              name={restaurants[randomKey].displayName.text}
              price={restaurants[randomKey].priceLevel}
              rating={restaurants[randomKey].rating}
              address={restaurants[randomKey].shortFormattedAddress}
              photo={restaurants[randomKey].photos[0].name}
            />
            <CustomButton
              style={styles.button}
              text="Re-roll"
              onPress={() =>
                setRandomKey(
                  Object.keys(restaurants)[
                    Math.floor(Math.random() * restaurants.length)
                  ]
                )
              }
            />
          </>
        ) : (
          <ActivityIndicator
            style={styles.activity}
            size="large"
            color="#5A4AE3"
          />
        )}
      </ScrollView>
    </View>
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
  backNavigator: {
    marginLeft: 20,
  },
  text: {
    fontSize: 16,
    color: globalStyles.app.title.color,
    marginBottom: 15,
    fontWeight: "bold",
  },
  button: {
    width: "90%",
  },

  activity: {
    height: 300,
    // differential compared to container
    marginLeft: -40,

    alignSelf: "center",
  },
});

export default RandomSelectScreen;
