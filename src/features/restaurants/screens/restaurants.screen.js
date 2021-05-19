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
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
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
