import React from 'react'
import {StyleSheet, ScrollView, View, Text, Platform, Button} from 'react-native'
import Saponification from "./Saponification";
import {FontAwesome} from "@expo/vector-icons"


export default class FatScreen extends React.Component{

    constructor() {
        super();

        this.state={
            values:[],
            keys:[]
        }
    }



    static navigationOptions =({navigation, route}) =>{
        return{
        headerTitle: "Add Fats",
        headerRight: ()=>(
            <Button
                title="Save"
                color={Platform.OS === 'ios' ? 'white' : '#ad1457'}
                onPress={()=>{navigation.navigate('SoapForm', {value:route.params})}}
            />
        ),
        headerStyle:{
            backgroundColor: "#00838f",
            borderStyle: 'solid',
            borderTopColor: '#005662',
            borderTopWidth: 15,
        },
        headerTintColor: '#ffffff',
    }};

    handleAdd = (props,index) =>{

        if(this.state.keys.includes(index)){
            this.setState({values: this.state.values.filter(fat => fat.key !== index)},
                () => this.props.navigation.setParams({values: this.state.values}))
            return true
        }

        const nextValue = {
            key: index,
            name: props.name,
            lye: props.lye,
            potash: props.potash,
            weight: 0,
            lyeRequired: 0,
            hardness: (props.lauric + props.myristic + props.palmitic + props.stearic),
            cleansing: (props.lauric + props.myristic),
            conditioning: (props.linoleic + props.linolenic + props.oleic + props.ricinoleic),
            bubbly: (props.lauric + props.myristic + props.ricinoleic),
            creamy: (props.palmitic + props.ricinoleic + props.stearic)
        }
        this.setState({keys: [...this.state.keys, index]})
        this.setState({values: [...this.state.values, nextValue]},
            () => this.props.navigation.setParams({values: this.state.values}))


    }

    checkValue = props =>{
        this.state.values.map(value => {
            if (value.key === props) {
                return true
            }
        })
        return false
    }


    render(){
        return(
            <ScrollView>
                {Saponification.map((fat,index)=>(
                    <Row
                        key={index}
                        fat={fat}
                        isAdded={this.checkValue(index)}
                        toggleSwitch={()=>{this.handleAdd(fat,index)}}
                    />
                    )

                )}</ScrollView>

        )


    }


}

function Row(props){
    const[isAdded, addValue] = React.useState(props.isAdded);
    const toggleButton = () => {addValue(previousState => !previousState)};
    return (
        <View style={styles.row}>

            <FontAwesome.Button
                name={isAdded?"check":"plus"}
                style={styles.button}
                onPress={()=>{toggleButton(); props.toggleSwitch()}}
                backgroundColor={isAdded?"#00838f":"#ad1457"}
            />

            <Text style={styles.nameText}>{props.fat.name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        padding: 20,
        borderStyle: 'solid',
        borderWidth: 2
    },

    nameText:{
      fontWeight: 'bold',
      fontSize: 16,
      paddingLeft: 50
    },

    button:{
        alignSelf: 'flex-start'
    }

})





