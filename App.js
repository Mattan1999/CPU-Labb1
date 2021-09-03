import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import TabBar from "./components/TabBar";
import { MenuProvider } from "./MenuContext";
import ImageView from "./components/ImageView";
import InfoView from "./components/InfoView";
import ClearImages from "./components/ClearImages";

export default function App() {
  const menuItems = [
    { id: 1, text: "Load fox image", animal: "FOX" },
    { id: 2, text: "Load dog image", animal: "DOG" },
  ];

  const [images, setImages] = useState([]);
  const [dogs, setDogs] = useState(0);
  const [foxes, setFoxes] = useState(0);

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((json) => {
        setImages([...images, json.image]);
        setFoxes(foxes + 1);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchAnimal = (animal) => {
    if (animal === "FOX") {
      fetch("https://randomfox.ca/floof/")
        .then((response) => response.json())
        .then((json) => {
          setImages([...images, json.image]);
          setFoxes(foxes + 1);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((json) => {
          setImages([...images, json.message]);
          setDogs(dogs + 1);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const clearImages = () => {
    setImages([]);
    setDogs(0);
    setFoxes(0);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>Get your daily dose of animals!</Text>
      <InfoView
        imageInfo={images.length}
        numberOfFoxImages={foxes}
        numberOfDogImages={dogs}
      />
      <ImageView images={images} />
      <ClearImages clearAll={clearImages} />
      <MenuProvider value={menuItems}>
        <TabBar fetchAnimal={fetchAnimal} />
      </MenuProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FB",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  headerText: {
    color: "#5e69ee",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 5,
  },
});
