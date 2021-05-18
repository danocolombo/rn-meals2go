import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
export const RestaurantInfo = ({ restaurant = {} }) => {
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
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
        <Text>{name}</Text>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: { padding: 20, backgroundColor: "white" },
});
