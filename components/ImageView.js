import React from "react";
import { StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";

const scroll = React.createRef();

const ImageView = ({ images }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView
        style={styles.scrollView}
        ref={scroll}
        onContentSizeChange={() => scroll.current.scrollToEnd()}
      >
        {images.map((image, index) => (
          <Image source={image} style={styles.image} key={index}></Image>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
    width: "95%",
    height: "65vh",
    marginBottom: "0.5em",
    marginTop: 10,
  },
  scrollView: {
    borderRadius: 10,
    width: "100%",
    // height: "100vh",
  },
  image: {
    width: "100%",
    height: "200px",
  },
});

export default ImageView;
