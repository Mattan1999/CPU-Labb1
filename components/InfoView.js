import React from "react";
import { StyleSheet, Text } from "react-native";

const InfoView = ({ imageInfo, numberOfFoxImages, numberOfDogImages }) => {
  let loadedImages = "";
  let numberOfFoxes = "";
  let numberOfDogs = "";

  if (numberOfFoxImages === 1) {
    numberOfFoxes = numberOfFoxImages + " fox";
  } else {
    numberOfFoxes = numberOfFoxImages + " foxes";
  }

  if (numberOfDogImages === 1) {
    numberOfDogs = numberOfDogImages + " dog";
  } else {
    numberOfDogs = numberOfDogImages + " dogs";
  }

  if (imageInfo === 1) {
    loadedImages =
      imageInfo + " picture loaded!\n" + numberOfFoxes + "\n" + numberOfDogs;
  } else {
    loadedImages =
      imageInfo + " pictures loaded!\n" + numberOfFoxes + "\n" + numberOfDogs;
  }

  return <Text style={styles.text}>{loadedImages}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "#5e69ee",
    fontWeight: "slim",
  },
});

export default InfoView;
