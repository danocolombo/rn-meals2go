import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
const RestaurantSafeAreaView = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentheight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const RestaurantSearch = styled.View`
  padding: 16px;
  background-color: green;
`;
const RestaurantList = styled.View`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;
export const RestaurantsScreen = () => {
  return (
    <RestaurantSafeAreaView>
      <RestaurantSearch>
        <Searchbar />
      </RestaurantSearch>
      <RestaurantList>
        <RestaurantInfoCard />
      </RestaurantList>
    </RestaurantSafeAreaView>
  );
};
