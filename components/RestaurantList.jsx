import React from "react";
import {ScrollView} from "react-native";

//Global Styles
import { globalStyles } from "./GlobalStyles";

import { useRestaurantContext } from "./RestaurantProvider";

import CustomButton from "./UtilComponents/CustomButton";
import Restaurant from "./Restaurant";

const RestaurantList = () => {
  const restaurants = useRestaurantContext();

  return (
    <ScrollView
      contentContainerStyle={globalStyles.screen.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.isArray(restaurants) &&
        restaurants.map((restaurant, index) => {
          const name = restaurant?.displayName?.text;
          const price = restaurant?.priceLevel;
          const rating = restaurant?.rating;
          const address = restaurant?.shortFormattedAddress;
          const photo = restaurant?.photos?.[0]?.name;

          return (
            <Restaurant
              key={index}
              name={name}
              price={price}
              rating={rating}
              address={address}
              photo={photo}
            />
          );
        })}

      <CustomButton
        text="still looking... we'll find you more 😒"
        type="SECONDARY"
        style={{ width: "90%", marginBottom: 30 }}
      />
    </ScrollView>
  );
};

export default RestaurantList;
