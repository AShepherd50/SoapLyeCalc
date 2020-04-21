import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Soap Lye Calculator</Text>
      <View style={styles.inputRow}>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#4A646C',
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
