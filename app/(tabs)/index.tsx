import React from 'react'
import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import PokemonCard from "../../components/PokemonCard"

export default function index() {
  const carmandar = {
    name: "carmandar",
    image: require("../../assets/images/carmandar.png"),
    type: "fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  const pikachuData = {
    name: "pikachu",
    image: require("../../assets/images/card-2.png"),
    type: "electric",
    hp: 28,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  const squirtleData = {
    name: "squirtle",
    image: require("../../assets/images/card-3.png"),
    type: "water",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  const bulbasaur = {
    name: "bulbasaur",
    image: require("../../assets/images/card-4.png"),
    type: "grass",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weakness: ["Water", "Rock"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <PokemonCard {...carmandar}/>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...squirtleData}/>
      <PokemonCard {...bulbasaur}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  }
});

