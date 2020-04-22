import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import {Picker} from '@react-native-community/picker';

class App extends React.Component{
  constructor() {
    super();

    this.state={
      type: 'default',
      superfatting: "none",
      uom: 'grams',  //unit of measurement
      lye: 'default',
      fats:[],
    }
  }
  render() {
    return (
        <View style={styles.container}>
          <Text>Soap Lye Calculator</Text>
          <View style={styles.inputRow}>
            <Text>Type:</Text>
            <Picker
              selectedValue={this.state.type}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex)=>
                this.setState({type: itemValue})
              }>
                <Picker.Item label="Liquid" value="liquid"/>
                <Picker.Item label="solid" value="solid"/>
            </Picker>
          </View>
          <View style={styles.inputRow}>
            <Text>Unit of Measurement:</Text>
            <Picker
              selectedValue={this.state.uom}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex)=>
                this.setState({type:itemValue})
              }>
                <Picker.Item label="grams" value="grams"/>
                <Picker.Item label="ounces" value="ounces"/>
            </Picker>
          </View>
            <View style={styles.inputRow}>
              <Text>Superfatting:</Text>
              <Picker
                selectedValue={this.state.superfatting}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex)=>
                  this.setState({type: itemValue})
                }>
                  <Picker.Item label="None" value="0"/>
                  <Picker.Item label="2%" value="0.02"/>
                  <Picker.Item label="3%" value="0.03"/>
                  <Picker.Item label="4%" value="0.04"/>
                  <Picker.Item label="5%" value="0.05"/>
                  <Picker.Item label="6%" value="0.06"/>
                  <Picker.Item label="7%" value="0.07"/>
                  <Picker.Item label="8%" value="0.08"/>
                  <Picker.Item label="9%" value="0.09"/>
                  <Picker.Item label="10%" value="0.1"/>
                  <Picker.Item label="11%" value="0.11"/>
                  <Picker.Item label="12%" value="0.12"/>
                  <Picker.Item label="13%" value="0.13"/>
                  <Picker.Item label="14%" value="0.14"/>
                  <Picker.Item label="15%" value="0.15"/>
                  <Picker.Item label="16%" value="0.16"/>
                  <Picker.Item label="17%" value="0.17"/>
                  <Picker.Item label="18%" value="0.18"/>
                  <Picker.Item label="19%" value="0.19"/>
                  <Picker.Item label="20%" value="0.2"/>
              </Picker>
            </View>
        </View>
    );
  }
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
