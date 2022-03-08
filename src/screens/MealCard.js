import React, { useEffect, useState } from "react";
import {
    View, Image, Text, StyleSheet, TouchableOpacity,
    TouchableHighlight, ScrollView, FlatList, SafeAreaView, StatusBar, Switch,


} from "react-native";




import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const DATA = [
    {
        Id: 1,
        title: 'Barbeque'
    },
    {
        Id: 2,
        title: 'Breakfast food'
    },
    {
        Id: 3,
        title: 'Buffets'
    },
    {
        Id: 4,
        title: 'Burgers & Fries'
    },
    {
        Id: 5,
        title: 'Chinese Food'
    },
    {

        Id: 6,
        title: 'Fast Food'
    },
    {
        Id: 7,
        title: 'Fine Dining'
    },
    {
        Id: 8,
        title: 'Fondue'
    },
    {
        Id: 9,
        title: 'Greek food'
    },
    {
        Id: 10,
        title: 'Hot Dogs '
    },
    {
        Id: 11,
        title: 'Itlian Foods'
    },
    {
        Id: 12,
        title: 'Chinese Food'
    }
]


export default function MealCard() {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);






    const Item = ({ title }) => (






        <View style={styles.item}>


            <Text style={styles.title}>{title}</Text>

            <Switch
                style={{ top: -27, right: 340 }}
                trackColor={{ false: "#24202F", true: "#24202F" }}
                thumbColor={isEnabled ? "white" : "#00B712"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}

            />
        </View>
    );



    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return (
        <View style={styles.container2}>
            <View style={styles.MainView}>
                <View style={styles.InnerView}>
                    <Text style={styles.ChooseMeal}>
                        Choose Meal

                    </Text>

                    <TouchableOpacity>

                        <View style={styles.RadioView}>
                            <View style={styles.RadioInnerView}>

                            </View>

                        </View>

                    </TouchableOpacity>
                </View>









            </View>

            <View style={styles.radiosView}>



                <ScrollView>
                    <SafeAreaView style={styles.container}>

                        <FlatList

                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={items => items.id}


                        />
                    </SafeAreaView>
                </ScrollView>












                <View style={styles.BtnViews}>

                   

                </View>
            </View>


        </View>


    )
}


const styles = StyleSheet.create({
    BtnViews: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "red",
        position: "absolute",
        zIndex: 999,
        top: 500,
        width: '100%',
        height: 100,

    },
    container: {
        flex: 1,
        marginTop: 40,
        height: 1000,
    },

    title: {
        fontSize: 16,
        color: "white",
        fontFamily: 'Poppins-Regular',
    },
    item: {
        marginLeft: 70,
        padding: 0,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        height: 60,
        color: "white",
        top: 20

    },

    container2: {
        flex: 1,


    },
    radiosView: {
        backgroundColor: "#363143",
        height: 1000,
        width: 408,
        marginHorizontal: 2,
        flexDirection: "column",
        marginTop: -16,


    },
    RadioInnerView: {

        width: 30,
        height: 30,
        backgroundColor: '#00B712',
        borderRadius: 120,
        alignSelf: "center",
        margin: 6,

    },

    RadioView: {
        flexDirection: "row",
        width: 42,
        height: 42,
        marginLeft: 210,
        backgroundColor: 'white',
        borderRadius: 120,
        marginTop: 13,


    },
    ChooseMeal: {
        fontSize: 16,
        fontFamily: "Phoppins-Bold",
        color: 'white',
        alignSelf: "flex-start",
        marginLeft: 30,
        marginTop: 22,
        flexDirection: "column"

    },
    MainView: {
        backgroundColor: "#534C64",
        height: 76,
        borderRadius: 20,
        zIndex: 99,


    },
    InnerView: {

        flexDirection: "row",

    },

})