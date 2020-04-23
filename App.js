import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import SoapForm from "./SoapForm";

export default function App() {
  return (
      <View style={styles.container}>
        <SoapForm></SoapForm>
      </View>
  )}


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#e9eaeb',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRow:{
    flexDirection: "row"
  },

  title:{
    fontSize: 26,
    color: 'white',
  },

  inputTitle:{
    color: "white",
    fontSize: 14
  },

});
