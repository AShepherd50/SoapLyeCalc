import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import SoapForm from "./SoapForm";
import FatScreen from "./FatScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import {FontAwesome} from "@expo/vector-icons";

const Stack = createStackNavigator();


export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SoapForm"
            component={SoapForm}
            options={({navigation, route})=>({
                headerTitle: "Soap Lye Calculator",
                headerStyle:{
                    backgroundColor: "#00838f",
                    borderStyle: 'solid',
                    borderTopColor: '#005662',
                    borderTopWidth: 15,
                },
                headerTintColor: '#ffffff',
            })}
          />
          <Stack.Screen
            name="FatScreen"
            component={FatScreen}
            options={FatScreen.navigationOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
