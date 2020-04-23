import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {Picker} from '@react-native-community/picker';
import { FontAwesome } from '@expo/vector-icons';

export default class SoapForm extends React.Component{
    constructor() {
        super();

        this.state={
            type: 'Type',
            superfatting: "Superfatting",
            uom: 'Unit of Measurement',  //unit of measurement
            lye: 'default',
            fats:[],
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Soap Lye Calculator</Text>
                </View>
                <View style={styles.inputRow}>
                    <Picker
                        selectedValue={this.state.type}
                        style={styles.dropDown}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex)=>
                            this.setState({type: itemValue})
                        }>
                        <Picker.Item label="Type" color="gray" value="0"/>
                        <Picker.Item label="Liquid" value="liquid"/>
                        <Picker.Item label="Solid" value="solid"/>
                    </Picker>
                </View>
                <View style={styles.inputRow}>
                    <Picker
                        selectedValue={this.state.uom}
                        style={styles.dropDown}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex)=>
                            this.setState({uom:itemValue})
                        }>
                        <Picker.Item label="Unit of Measurement" color="gray" value="0"/>
                        <Picker.Item label="grams" value="grams"/>
                        <Picker.Item label="ounces" value="ounces"/>
                    </Picker>
                </View>
                <View style={styles.inputRow}>
                    <Picker
                        selectedValue={this.state.superfatting}
                        style={styles.dropDown}
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex)=>
                            this.setState({superfatting: itemValue})
                        }>
                        <Picker.Item label="Superfatting" color="gray" value="0"/>
                        <Picker.Item label="None" color="black" value="0"/>
                        <Picker.Item label="2%" color="black" value="0.02"/>
                        <Picker.Item label="3%" color="black" value="0.03"/>
                        <Picker.Item label="4%" color="black" value="0.04"/>
                        <Picker.Item label="5%" color="black" value="0.05"/>
                        <Picker.Item label="6%" color="black" value="0.06"/>
                        <Picker.Item label="7%" color="black" value="0.07"/>
                        <Picker.Item label="8%" color="black" value="0.08"/>
                        <Picker.Item label="9%" color="black" value="0.09"/>
                        <Picker.Item label="10%" color="black" value="0.1"/>
                        <Picker.Item label="11%" color="black" value="0.11"/>
                        <Picker.Item label="12%" color="black" value="0.12"/>
                        <Picker.Item label="13%" color="black" value="0.13"/>
                        <Picker.Item label="14%" color="black" value="0.14"/>
                        <Picker.Item label="15%" color="black" value="0.15"/>
                        <Picker.Item label="16%" color="black" value="0.16"/>
                        <Picker.Item label="17%" color="black" value="0.17"/>
                        <Picker.Item label="18%" color="black" value="0.18"/>
                        <Picker.Item label="19%" color="black" value="0.19"/>
                        <Picker.Item label="20%" color="black" value="0.2"/>
                    </Picker>
                </View>
               
                <FontAwesome.Button
                    name="plus"
                    backgroundColor="#ad1457">
                    Add Fat
                </FontAwesome.Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9eaeb',
        alignItems: 'center',
    },

    inputRow:{
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 15,
        marginBottom: 15,
    },

    header:{
        backgroundColor: "#00838f",
        height: 60,
        alignItems: 'center',
        width: (Math.round(Dimensions.get('window').width)),
        borderStyle: 'solid',
        borderTopColor: '#005662',
        borderTopWidth: 15,
        marginBottom: 100,
    },

    title:{
        fontSize: 26,
        color: 'white',
    },

    inputTitle:{
        color: "white",
        fontSize: 14
    },

    dropDown:{
      width: (Math.round(Dimensions.get('window').width) - 80),
      color: "black",
    },

});
