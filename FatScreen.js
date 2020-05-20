import React from 'react'
import {StyleSheet, ScrollView, View, Text, Platform, Button, FlatList, SafeAreaView, Dimensions} from 'react-native'
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


    componentDidMount= async() => {
        await this.setState({values: this.props.route.params})
        await this.props.route.params.map(value=>{
            this.setState({keys:[...this.state.keys, value.key]})
            }
        )
    }

    handleAdd = (props,index) =>{

        if(this.state.keys.includes(index)){

            this.setState({values: this.state.values.filter(fat => fat.key !== index),
                                 keys: this.state.keys.filter(value => value !== index)},
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

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
            <FlatList
                data={Saponification}
                renderItem={({item,index}) =>
                <Row
                    fat={item}
                    index={index}
                    isAdded={!!this.state.keys.includes(index)}
                    toggleSwitch={() => {
                        this.handleAdd(item, index)
                    }}
                />}
                keyExtractor={(item,index)=> index.toString()}
                extraData={this.state.values}
            >

            </FlatList>
            </SafeAreaView>
        )
    }
}

function Row({fat, isAdded, toggleSwitch}){
   let isON = isAdded

    return (
        <View style={styles.row}>

            <FontAwesome.Button
                name={isON?"check":"plus"}
                style={styles.button}
                onPress={()=>{isON=!isON; toggleSwitch()}}
                backgroundColor={isON?"#00838f":"#ad1457"}
            />

            <Text style={styles.nameText}>{fat.name}</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        padding: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        height: 100,
        width: (Math.round(Dimensions.get('window').width))
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





