import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { globalStyles, images } from "../styles/global";
import { useRoute } from "@react-navigation/native";
import Card from "../shared/card";

export default function ReviewDetails() {
  const route = useRoute();
  const rating = route.params.rating;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
