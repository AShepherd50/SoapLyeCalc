import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Picker,
    Platform
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Saponification from './Saponification';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SoapForm extends React.Component{
    constructor() {
        super();

        this.state={
            type: 'Type',
            superfatting: "Superfatting",
            uom: 'g',  //unit of measurement
            lye: 'default',
            fats:[],
            sapChart: Saponification,
            modalVisible: false,
            liquidRatio: 2.5
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props !== prevProps) {
            this.setState({fats:this.props.route.params.value.values})
        }
    }

    removeData = props =>{
        this.setState({fats: this.state.fats.filter(fat => fat.key !== props)})
    }

    handleInput = (props,index) =>{
        this.state.fats[index].weight = props
    }

    calculate = () =>{
        let lyeAmount = 0
        let fatAmount = 0;

        this.state.fats.map((fat,index) => {
                let weight = parseFloat(fat.weight);
                let lye = 0

                // for each fat do (amount of fat)*(saponification value)
                if(this.state.type === 'liquid') {
                    lye = (parseFloat(fat.potash) * weight)
                }else{
                    lye = (parseFloat(fat.lye) * weight)
                }

                //add all answers to get the amount of lye
                lyeAmount = lyeAmount + lye

                this.state.fats[index].lyeRequired = lye

                fatAmount = fatAmount + weight;
            }
        )

        lyeAmount = lyeAmount - (lyeAmount * parseFloat(this.state.superfatting))

        //amount of lye / 0.3 = Total Weight of Lye Water Solution
        let totalWeight = lyeAmount + fatAmount

        let soapHardness = 0;
        let soapCleansing = 0;
        let soapConditioning = 0;
        let soapBubbly = 0;
        let soapCreamy =0;

        this.state.fats.map(fat =>{
            let percent = fat.weight / fatAmount

            soapHardness = soapHardness + (parseFloat(fat.hardness) * percent)
            soapCleansing = soapCleansing + (parseFloat(fat.cleansing) * percent)
            soapConditioning = soapConditioning + (parseFloat(fat.conditioning) * percent)
            soapBubbly = soapBubbly + (parseFloat(fat.bubbly) * percent)
            soapCreamy = soapCreamy + (parseFloat(fat.creamy) * percent)
        })

        //Total Weight of Lye Required * liquid Ratio  = Amount of Water
        let waterAmount = lyeAmount * parseFloat(this.state.liquidRatio)

        this.props.navigation.navigate('ResultScreen', {totalWeight: totalWeight,
                                                        water: waterAmount,
                                                        lyeAmount: lyeAmount,
                                                        fats: this.state.fats,
                                                        uom: this.state.uom,
                                                        type: this.state.type,
                                                        fatAmount: fatAmount,
                                                        hardness: soapHardness,
                                                        cleansing: soapCleansing,
                                                        conditioning: soapConditioning,
                                                        bubbly: soapBubbly,
                                                        creamy: soapCreamy,})
    }

    render() {
        return (
            <KeyboardAwareScrollView
                backgroundColor= '#e9eaeb'
            >
                <View style={styles.container}>
                    <View style={styles.topRow}>
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
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Liquid : Lye Ratio</Text>
                    <View style={styles.inputRow}>
                        <Picker
                            selectedValue={this.state.liquidRatio}
                            style={styles.ratio}
                            mode="dropdown"
                            onValueChange={(itemValue, itemIndex)=>
                                this.setState({liquidRatio:itemValue})
                            }>
                            <Picker.Item label="2.5"value="2.5"/>
                            <Picker.Item label="4.0" value="4.0"/>
                            <Picker.Item label="3.0" value="3.0"/>
                            <Picker.Item label="2.0" value="2.0"/>
                            <Picker.Item label="1.5" value="1.5"/>
                            <Picker.Item label="1.0" value="1.0"/>
                        </Picker>
                        <Text style={styles.ratioText}>:   1</Text>
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
                        <FontAwesome.Button
                            name="question-circle"
                            backgroundColor='#e9eaeb'
                            color='#ad1457'
                            size={28}
                            onPress={()=>{alert("Superfatting means adding extra oils into your soaps to end up with an excess of oils." +
                                "The excess oils can help give you soaps with moisturizing or emollient properties. Also acts as a buffer to ensure" +
                                " you do not have a lye heavy soap.")}}
                        />

                    </View>
                    <View style={styles.fatHeader}>
                        <Text style={styles.title}>Fats:</Text>
                        <FontAwesome.Button
                            name="plus"
                            backgroundColor="#ad1457"
                            onPress={()=>{this.props.navigation.navigate('FatScreen')}}
                        >
                            Add Fat
                        </FontAwesome.Button>
                    </View>

                    <ScrollView>
                        {this.state.fats.map((fat,index)=>(
                            <DisplayFat
                                key={fat.key}
                                fat={fat}
                                removeData={()=>this.removeData(fat.key)}
                                updateWeight={weight=>this.handleInput(weight,index)}
                            />
                        ))}
                    </ScrollView>

                    <TouchableOpacity
                        style={styles.calculateButton}
                        onPress={()=>this.calculate()}
                    >
                        <Text style={{color: 'white', fontSize: 26, paddingTop:7}}>Calculate</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const DisplayFat = props =>{
    return(
        <View
            style={styles.fatRow}
        >
            <FontAwesome.Button
                onPress={props.removeData}
                color='white'
                name="trash"
                backgroundColor='#ad1457'
           />
           <View style={styles.text}>
                <Text>{props.fat.name}</Text>
           </View>
            <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                placeholder={"Weight"}
                placeholderTextColor='black'
                textAlign="center"
                onChangeText={weight=>props.updateWeight(weight)}
            />
        </View>
    )
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

    topRow:{
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 50,
        marginBottom: 15,
        marginRight: 35
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
        color: 'black',
        marginRight: (Math.round(Dimensions.get('window').width)/3)
    },

    inputTitle:{
        color: "white",
        fontSize: 14
    },

    dropDown:{
      width: (Math.round(Dimensions.get('window').width) /2),
      color: "black",
    },

    ratio:{
        width:(Math.round(Dimensions.get('window').width)/ 4),
        color: 'black'
    },

    ratioText:{
        fontSize: 21,
        fontWeight: 'bold',
        paddingTop: 10,
    },

    fatRow:{
        flexDirection: "row",
        width:(Math.round(Dimensions.get('window').width)),
        marginTop: 5,
        justifyContent: 'space-between'
    },

    fatHeader:{
        width:(Math.round(Dimensions.get('window').width)),
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },

    text:{
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8,
        alignSelf: 'center'
    },

    textInput:{
        borderStyle: 'solid',
        borderWidth: 1,
        width: 100,
        height: 40,
        backgroundColor: "white",
        alignSelf: 'flex-end'
    },

    calculateButton:{
        width: 200,
        backgroundColor: "#ad1457",
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        marginTop: 50
    },

});
