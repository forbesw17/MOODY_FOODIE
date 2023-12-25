import React, { useEffect, useState } from "react";
import {
  ScrollView,
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
    <ScrollView contentContainerStyle={globalStyles.screen.contentContainer}>
      <Text
        style={globalStyles.screen.text}
        onPress={() => setQuiz("")}
      >
        ← Back to Quizzes
      </Text>

        <Text style={globalStyles.screen.text}>Here's what we picked for you...</Text>

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
              style={globalStyles.screen.button}
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
            size="large"
            color="#5A4AE3"
          />
        )}
      </ScrollView>
  );
};

export default RandomSelectScreen;
