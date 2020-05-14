import React from 'react';
import {StyleSheet, View, Text,ScrollView, Dimensions} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

const FatBreakdown = props =>{
    return(
        <View style={styles.list}>
            <Text style={styles.tableText}>{props.fat.name}</Text>
            <Text style={styles.tableText}>{props.fat.weight}{props.uom}</Text>
            <Text style={styles.tableText}>
                {((parseFloat(props.fat.weight) / (parseFloat(props.fatAmount))) * 100).toFixed(2)}%
            </Text>
        </View>
    )
}

export default function ResultScreen({navigation, route}){
    return(
        <View>
            <Text style={styles.header}>Lye and Liquid:</Text>
            <View style={styles.row}>
                <Text style={styles.boldText}>Lye {route.params.type === 'solid' ? 'Sodium Hydroxide(NaOH)': 'Potassium Hydroxide(KOH)'}:</Text>
                <Text style={styles.infoText}>{route.params.lyeAmount.toFixed(2)} {route.params.uom}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Amount of Water:</Text>
                <Text style={styles.infoText}>{route.params.water.toFixed(2)} {route.params.uom}</Text>
            </View>
            <Text style={styles.header}>Fats Breakdown:</Text>
            <View style={styles.list}>
                <Text style={styles.column}>Fat</Text>
                <Text style={styles.column}>Weight</Text>
                <Text style={styles.column}>% of Weight</Text>
            </View>
            <ScrollView>
                {route.params.fats.map((fat,index) =>(
                    <FatBreakdown
                        key={index}
                        fat={fat}
                        uom={route.params.uom}
                        water={route.params.water}
                        lyeAmount={route.params.lyeAmount}
                        fatAmount={route.params.fatAmount}
                    />
                ))}
            </ScrollView>
            <View style={styles.row}>
                <Text style={styles.boldText}>Weight of Fats/Oils: </Text>
                <Text style={styles.infoText}>{route.params.fatAmount.toFixed(2)} {route.params.uom}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.header}>Total Batch Yield: </Text>
                <Text style={{paddingLeft: 25,fontSize: 24}}>
                    {(parseFloat(route.params.totalWeight) + parseFloat(route.params.fatAmount)).toFixed(2)}{route.params.uom}
                </Text>
            </View>
            <Text style={styles.header}>Soap Properties:</Text>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Hardness Description")}}
                />
                <Text style={styles.boldText}>Hardness:</Text>
                <Text style={styles.infoText}>{route.params.hardness.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Cleansing Description")}}
                />
                <Text style={styles.boldText}>Cleansing:</Text>
                <Text style={styles.infoText}>{route.params.cleansing.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Condition Description")}}
                />
                <Text style={styles.boldText}>Conditioning:</Text>
                <Text style={styles.infoText}>{route.params.conditioning.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Bubbly Lather Description")}}
                />
                <Text style={styles.boldText}>Bubbly Lather:</Text>
                <Text style={styles.infoText}>{route.params.bubbly.toFixed(2)}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("CreamyDescription")}}
                />
                <Text style={styles.boldText}>Creamy Lather:</Text>
                <Text style={styles.infoText}>{route.params.creamy.toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
      fontWeight: 'bold',
      fontSize: 24,
    },

    row:{
        flexDirection: 'row',
        paddingTop: 10
    },

    list:{
      flexDirection: 'row',
    },

    column:{
        fontWeight: 'bold',
        width: Math.round(Dimensions.get('window').width)/3,
    },

    tableText:{
        width: Math.round(Dimensions.get('window').width)/3,
    },

    boldText:{
        fontWeight: 'bold',
        fontSize: 16
    },

    infoText:{
      paddingLeft: 25,
      fontSize: 16,
    }
})
