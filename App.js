import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { useState, useEffect } from "react";
import Korv from './components/Korv'

export default function App(props) {
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

  const changeAnimalType = (newAnimal) => {
    setCurrentAnimalType(newAnimal);
  };

  const fetchData = () => {
    console.log(images);
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
        setImages([...images, json.image]);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Get your daily dose of animals!</Text>
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {images.map((image, index) => (
          <Image source={image} style={styles.image} key={index}></Image>
        ))}
      </ScrollView>
    </SafeAreaView>
      
      <button 
        style={{marginTop: 10, borderStyle: 'none', borderRadius: 5, backgroundColor: '#39AFEA', padding: '1ch 2ch', width: '10em'}}
        onClick={() => {
          changeAnimalType("FOX");
          fetchData()
        }}
      >
        <Text style={styles.btnText}>Load fox image</Text>
      </button>
      <button 
        style={{marginTop: 10, borderStyle: 'none', borderRadius: 5, backgroundColor: '#39AFEA', padding: '1ch 2ch', width: '10em'}}
        onClick={() => {
          changeAnimalType("DOG");
          fetchData()
        }}
      >
        <Text style={styles.btnText}>Load dog image</Text>
      </button>
      <StatusBar style="auto" />

      <Korv />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4FB',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  scrollView: {
    width: '90%',
  },
  headerText: {
    color: '#5e69ee',
    fontSize: 24,
    fontWeight: '500',
    // marginBottom: 10,
    marginTop: 10,
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: '200px'
  },
});
