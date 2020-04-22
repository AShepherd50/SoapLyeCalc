import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SoapForm extends React.Component{
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
        return(
            <View>

            </View>
        );
    }
}
