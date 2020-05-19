import React from 'react';
import {StyleSheet, View, Text,ScrollView, Dimensions} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";

const FatBreakdown = props =>{
    return(
        <View style={styles.list}>
            <Text style={styles.tableText}>{props.fat.name}</Text>
            <Text style={{width: Math.round(Dimensions.get('window').width)/3,
                          paddingLeft: 15,
                          }}>
                {props.fat.weight}{props.uom}
            </Text>
            <Text style={styles.tableText}>
                {((parseFloat(props.fat.weight) / (parseFloat(props.fatAmount))) * 100).toFixed(2)}%
            </Text>
        </View>
    )
}

export default function ResultScreen({navigation, route}){
    return(
        <ScrollView>
            <Text style={{fontWeight: 'bold', fontSize: 24, paddingLeft:15}}>Lye and Liquid:</Text>
            <View style={styles.row}>
                <Text style={styles.boldText}>Lye {route.params.type === 'solid' ? 'Sodium Hydroxide(NaOH)': 'Potassium Hydroxide(KOH)'}:</Text>
                <Text style={styles.infoText}>{route.params.lyeAmount.toFixed(2)} {route.params.uom}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.boldText}>Amount of Water:</Text>
                <Text style={{fontSize: 16, paddingLeft: 118}}>{route.params.water.toFixed(2)} {route.params.uom}</Text>
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
                <Text style={{fontWeight: 'bold', fontSize: 24, paddingTop: 30}}>Total Batch Yield: </Text>
                <Text style={{paddingLeft: 25,fontSize: 24, paddingTop: 27}}>
                    {(parseFloat(route.params.totalWeight) + parseFloat(route.params.water)).toFixed(2)} {route.params.uom}
                </Text>
            </View>
            <Text style={styles.header}>Soap Properties:</Text>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Hardness refers to the physical hardness of soap. The higher the number the harder the soap")}}
                />
                <Text style={styles.boldText}>Hardness:</Text>
                <Text style={styles.infoText}>{route.params.hardness.toFixed()}
                </Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Cleansing refers to the ability of the soap to grab onto oils. a typical range for " +
                        " cleansing would be 12-22")}}
                />
                <Text style={styles.boldText}>Cleansing:</Text>
                <Text style={styles.infoText}>{(route.params.cleansing.toFixed())}
                </Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("Condition predicts how well the soap will condition the skin. The higher the number" +
                        " the more conditioning the bar is. A typical range would be 44-69")}}
                />
                <Text style={styles.boldText}>Conditioning:</Text>
                <Text style={styles.infoText}>{route.params.conditioning.toFixed()}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("This is the ability of the soap to lather and produce foamy bubbly lather. " +
                        " The higher the number the more bubbly and less creamy the soap will be. A typical range would be " +
                        " between 14-46")}}
                />
                <Text style={styles.boldText}>Bubbly Lather:</Text>
                <Text style={styles.infoText}>{route.params.bubbly.toFixed()}</Text>
            </View>
            <View style={styles.row}>
                <FontAwesome.Button
                    name="question-circle"
                    backgroundColor='#e9eaeb'
                    color='#ad1457'
                    size={16}
                    onPress={()=>{alert("This is the stability and creaminess of the lather produced by the soap." +
                        " The higher these numbers the creamy the lather will be and less bubbly the soap will be.")}}
                />
                <Text style={styles.boldText}>Creamy Lather:</Text>
                <Text style={styles.infoText}>{route.params.creamy.toFixed()}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
      fontWeight: 'bold',
      fontSize: 24,
      paddingLeft: 15,
      paddingTop: 30
    },

    headerAlt:{
        fontWeight: 'bold',
        fontSize: 24,
    },

    row:{
        flexDirection: 'row',
        paddingLeft: 15,
        paddingTop: 5
    },

    list:{
      flexDirection: 'row',
      paddingLeft: 17
    },

    column:{
        fontWeight: 'bold',
        width: Math.round(Dimensions.get('window').width)/3,
        fontSize: 16
    },

    tableText:{
        width: Math.round(Dimensions.get('window').width)/3,
        fontSize: 14
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
