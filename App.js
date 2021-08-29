import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { useState, useEffect } from "react";
import TabBar from './components/TabBar';
import { block } from 'react-native-reanimated';

export default function App() {

  const menuItems = [
    {id: 1, text: "Load fox image", animal: 'FOX'},
    {id: 2, text: "Load dog image", animal: 'DOG'},
   ];

  const [images, setImages] = useState([]);
  const [currentAnimalType, setCurrentAnimalType] = useState("FOX");

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.image);
        setImages([...images, json.image]);
        console.log(images);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const fetchAnimal = (animal) => {
    setCurrentAnimalType(animal);

    if (currentAnimalType === "FOX") {
      fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.image);
        setImages([...images, json.image]);
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.message);
        setImages([...images, json.message]);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>Get your daily dose of animals!</Text>
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          {images.map((image, index) => (
            <Image source={image} style={styles.image} key={index}></Image>
          ))}
        </ScrollView>
      </SafeAreaView>
      <TabBar menuItems={menuItems} fetchAnimal={fetchAnimal}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  safeAreaView: {
    display: block,
    backgroundColor: '#5e69ee',
    borderRadius: 10,
    alignItems: 'center',
    width: '95%',
    height: '75%',
    marginBottom: '3.5em'
  },
  scrollView: {
    width: '95%',
    height: '75vh',
  },
  headerText: {
    color: '#5e69ee',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: '200px',
    borderRadius: 8
  },
});
