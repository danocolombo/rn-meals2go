import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const Title = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  font-family: ${(props) => props.theme.fonts.body};
`;
//font-size: ${(props) => props.theme.fonts.fontSizes.body};
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Louie's",
    icon,
    photos = [
      "https://media.istockphoto.com/photos/pasta-with-meat-tomato-sauce-and-vegetables-picture-id857927726?b=1&k=6&m=857927726&s=170667a&w=0&h=2PsKzIHncOet6jE3JAA40Oh8d97BUvnZk421Yeb2gww=",
    ],
    address = "100 Main St.",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </RestaurantCard>
    </>
  );
};
