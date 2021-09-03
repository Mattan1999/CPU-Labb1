import React from "react";
import { Pressable, StyleSheet } from "react-native";

const ClearImages = ({ clearAll }) => {
  return (
    <Pressable
      style={styles.button}
      onPress={() => {
        clearAll();
      }}
    >
      Clear all images
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#DD1A08",
    width: "10em",
    borderRadius: 10,
    paddingTop: "1.25ch",
    paddingBottom: "1.25ch",
    alignItems: "center",
    color: "#FFFFFF",
  },
});

export default ClearImages;
