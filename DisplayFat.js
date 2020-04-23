import React from 'react';
import {View, Text, Switch, TextInput} from 'react-native'

const DisplayFat = props =>{
    return(
        <View>
            <Switch>
                trackColor={{false: '#767577', true: '#ad1457'}}
                thumbColor={{true: "#81b0ff", false: "#f4f3f4"}}
                onValueChange={props.toggleSwitch}
                value={false}
            </Switch>

        </View>
    )
}
