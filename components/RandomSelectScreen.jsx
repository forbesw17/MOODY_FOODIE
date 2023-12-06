import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";

import Restaurant from "./Restaurant";
import { useRestaurantContext } from "./RestaurantProvider";
import CustomButton from "./UtilComponents/CustomButton";

const RandomSelectScreen = ( {setQuiz }) => {
  const restaurants = useRestaurantContext();

  const [randomKey, setRandomKey] = useState(null);

  useEffect(() => {
    if (!restaurants) return; // Check if restaurants exist before generating random key

    let randomNum =
      Object.keys(restaurants)[Math.floor(Math.random() * restaurants.length)];

    setRandomKey(randomNum);
  }, [restaurants]); // Add restaurants dependency to ensure randomKey updates when restaurants change

  const changeQuiz = (selectedQuiz) => {
    setQuiz(selectedQuiz);
  };

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      {randomKey && (
        <>
        <CustomButton text="Back to Quizzes" onPress={() => changeQuiz('')} />

          <Restaurant
            name={restaurants[randomKey].displayName.text}
            price={restaurants[randomKey].priceLevel}
            rating={restaurants[randomKey].rating}
            address={restaurants[randomKey].shortFormattedAddress}
            photo={restaurants[randomKey].photos[0].name}
          />

          <CustomButton text="Re-roll" onPress={() => setRandomKey(Object.keys(restaurants)[Math.floor(Math.random() * restaurants.length)])} />
        </>
      )}

      {!randomKey && <Text>Searching...</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'center',
    width: "100%",
    height: '92%',
    backgroundColor: "#003",
  },
});

export default RandomSelectScreen;
