import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState, Component } from "react";
import {
    View, Image, Text, StyleSheet, TouchableOpacity,
    TouchableHighlight, ScrollView, FlatList, SafeAreaView, StatusBar, Switch, ImageBackground,


} from "react-native";
import { Badge } from 'react-native-paper';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import { scale } from 'react-native-size-matters';
import { moderateScale } from 'react-native-size-matters';

var radio_props = [
    { label: 'Place A', value: 0 },

];


var radio_props2 = [
    { label: 'Place A', value: 0 },
    // { label: 'Place b', value: 1 },
    // { label: 'Place c', value: 2 },
    // { label: 'Place d', value: 3 },
    // { label: 'Place e', value: 4 },
    // { label: 'Place f', value: 5 },
    // { label: 'Place g', value: 6 },


];








const DATA = [
    {
        Id: 1,
        title: 'Barbeque',
        check: false
    },
    {
        Id: 2,
        title: 'Breakfast food',
        check: false
    },
    {
        Id: 3,
        title: 'Buffets',
        check: false
    },
    {
        Id: 4,
        title: 'Burgers & Fries',
        check: false
    },
    {
        Id: 5,
        title: 'Chinese Food',
        check: false
    },
    {

        Id: 6,
        title: 'Fast Food',
        check: false
    },
    {
        Id: 7,
        title: 'Fine Dining',
        check: false
    },
    {
        Id: 8,
        title: 'Fondue',
        check: false
    },
    {
        Id: 9,
        title: 'Greek food',
        check: false
    },
    {
        Id: 10,
        title: 'Hot Dogs ',
        check: false
    },
    {
        Id: 11,
        title: 'Itlian Foods',
        check: false
    },
    {
        Id: 12,
        title: 'Chinese Food',
        check: false

    }
]





const radioData = [
    { value: 'Apple' },
    { value: 'Samsung' },
    { value: 'Blackberry' },
];

// const Switches = () => {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//     return (
//         DATA.map((v,i) => {
//             return (
//                 <Switch
//                    style={{top:-60}}
//                     trackColor={{ false: "#24202F", true: "#24202F" }}
//                     thumbColor={isEnabled ? "white" : "#00B712"}
//                     ios_backgroundColor="#3e3e3e"
//                     onValueChange={toggleSwitch}
//                     value={isEnabled}


//                 />

//             )
//         })
//     )

// }



function TabA() {

    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [mainData, setMainData] = useState(DATA);

    const Item = ({ title, isEnabled, setIsEnabled, Id }) => {

        const toggleSwitch = () => {
            console.log('check')
            setMainData(
                mainData.map(item =>
                    item.Id === Id
                        ? { ...item, check: isEnabled ? false : true }
                        : item
                ))
        }




        // const toggleSwitch = () => console.log('hello')


        return (


            <View >


                <Text style={styles.title}>{title}</Text>

                <Switch
                    style={{ top: -27, left: -220 }}
                    trackColor={{ false: "#24202F", true: "#24202F" }}
                    thumbColor={isEnabled ? "white" : "#00B712"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                />
            </View>


        )
    }



    const [isEnabled, setIsEnabled] = useState(false);


    const renderItem = ({ item }) => (
        <Item  title={item.title} isEnabled={item.check} setIsEnabled={setIsEnabled} Id={item.Id} />

    );


    return (
        <View style={styles.MainBack}>
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
                <ScrollView nestedScrollEnabled={true}>
                <View style={styles.radiosView}>
                    <SafeAreaView style={styles.container}>

                            <FlatList
                                nestedScrollEnabled={true}
                                data={mainData}
                                renderItem={renderItem}
                                keyExtractor={items => items.id}
                            />
                       
                    </SafeAreaView>
                </View>
                </ScrollView>
            </View>
        </View>

    )
}
function TabB() {

    // const radioData = [
    //     { value: 'Place A' }, ];






    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);






    // const Item = ({ title }) => (






    // <View style={styles.item}>


    //     <Text style={styles.title}>{title}</Text>

    //     <Switch
    //         style={{ top: -27, right: 340 }}
    //         trackColor={{ false: "#24202F", true: "#24202F" }}
    //         thumbColor={isEnabled ? "white" : "#00B712"}
    //         ios_backgroundColor="#3e3e3e"
    //         onValueChange={toggleSwitch}
    //         value={isEnabled}

    //     />
    // </View>
    // );



    // const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    // );


    return (
        <View style={styles.MainBack}>
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
                            {/* 
                        <FlatList

                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={items => items.id}


                        /> */}
                        </SafeAreaView>

                        <TouchableOpacity>
                            <View style={styles.placeView}>
                                <View style={styles.yellowView}>
                                    <Text style={{ color: '#000000', fontSize: 9, fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', margin: 5, marginLeft: 10, }}>Sponsored</Text>
                                </View>
                                <Text style={{ fontSize: 10, color: '#BBBBBB', fontFamily: 'Poppins-Regular', top: 20, left: 45 }}>Don`t eat anywhere else</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <RadioForm
                                        formHorizontal={true}
                                        animation={true}
                                    >
                                        {/* To create radio buttons, loop through your array of options */}
                                        {
                                            radio_props.map((obj, i) => (
                                                <RadioButton labelHorizontal={true} key={i} >
                                                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                                    <RadioButtonInput
                                                        obj={obj}
                                                        index={i}
                                                        // isSelected={this.state.value3Index === i}
                                                        // onPress={onPress}
                                                        borderWidth={1}
                                                        buttonInnerColor={'#0000'}
                                                        buttonOuterColor={'white'}
                                                        // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                                                        buttonSize={20}
                                                        buttonOuterSize={20}
                                                        buttonStyle={{ backgroundColor: 'white' }}
                                                        buttonWrapStyle={{ marginLeft: 15, top: 30, }}
                                                    />
                                                    <RadioButtonLabel
                                                        obj={obj}
                                                        index={i}
                                                        labelHorizontal={true}
                                                        // onPress={onPress}
                                                        labelStyle={{ fontSize: 18, color: '#FFD500', top: 30 }}
                                                        labelWrapStyle={{}}
                                                    />
                                                </RadioButton>
                                            ))
                                        }
                                    </RadioForm>

                                    <View style={{ backgroundColor: 'white', height: 30, width: 30, borderRadius: 50, top: 25, left: 10, }}>
                                        <Image style={{ alignSelf: 'center', top: 8 }} source={(require('../assets/place1.png'))}></Image>
                                    </View>
                                    <View style={{ backgroundColor: 'white', height: 30, width: 30, borderRadius: 50, top: 25, }}>
                                        <Image style={{ alignSelf: 'center', top: 8 }} source={(require('../assets/place2.png'))}></Image>
                                    </View>
                                    <View style={{ backgroundColor: 'white', height: 30, width: 30, borderRadius: 50, top: 25, left: -10, }}>
                                        <Image style={{ alignSelf: 'center', top: 8 }} source={(require('../assets/place3.png'))}></Image>
                                    </View>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: 'white', fontSize: 8, fontFamily: 'Poppins-Regular', alignSelf: 'flex-start', top: 35, left: 50, }}>Discount Code</Text>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Badge style={{ backgroundColor: '#363143', top: 40, left: 50, fontSize: 8, fontFamily: 'Poppins-Regular', }}> 7C85A3</Badge>

                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </View>


            </View>

        </View>
    )
}
function TabC() {


    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);






    // const Item = ({ title }) => (






    //     <View style={styles.item}>


    //         <Text style={styles.title}>{title}</Text>

    //         <Switch
    //             style={{ top: -27, right: 340 }}
    //             trackColor={{ false: "#24202F", true: "#24202F" }}
    //             thumbColor={isEnabled ? "white" : "#00B712"}
    //             ios_backgroundColor="#3e3e3e"
    //             onValueChange={toggleSwitch}
    //             value={isEnabled}

    //         />
    // //     </View>
    // );



    // const renderItem = ({ item }) => (
    //     <Item title={item.title} />
    // );


    return (
        <View style={styles.MainBack}>
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
                            {/* 
                        <FlatList

                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={items => items.id}


                        /> */}
                        </SafeAreaView>

                        <TouchableOpacity>
                            <View style={styles.placeView2}>
                               
                               
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' , top:-5 }}>

                                    <RadioForm
                                        formHorizontal={true}
                                        animation={true}
                                    >
                                        {/* To create radio buttons, loop through your array of options */}
                                        {
                                            radio_props2.map((obj, i) => (
                                                <RadioButton labelHorizontal={true} key={i} >
                                                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                                    <RadioButtonInput
                                                        obj={obj}
                                                        index={i}
                                                        // isSelected={this.state.value3Index === i}
                                                        // onPress={onPress}
                                                        borderWidth={1}
                                                        buttonInnerColor={'#0000'}
                                                        buttonOuterColor={'white'}
                                                        // buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
                                                        buttonSize={20}
                                                        buttonOuterSize={20}
                                                        buttonStyle={{ backgroundColor: 'white' }}
                                                        buttonWrapStyle={{ marginLeft: 15, top: 30, }}
                                                    />
                                                    <RadioButtonLabel
                                                        obj={obj}
                                                        index={i}
                                                        labelHorizontal={true}
                                                        // onPress={onPress}
                                                        labelStyle={{ fontSize: 18, color: 'white', top: 30 }}
                                                        labelWrapStyle={{}}
                                                    />
                                                </RadioButton>
                                            ))
                                        }
                                    </RadioForm>

                                    <View style={{ backgroundColor: 'white', height: 30, width: 30, borderRadius: 50, top: 25, left: 10, }}>
                                        <Image style={{ alignSelf: 'center', top: 8 }} source={(require('../assets/place1.png'))}></Image>
                                    </View>
                                    <View style={{ backgroundColor: 'white', height: 30, width: 30, borderRadius: 50, top: 25, }}>
                                        <Image style={{ alignSelf: 'center', top: 8 }} source={(require('../assets/place2.png'))}></Image>
                                    </View>
                                    <View style={{ backgroundColor: 'white', height: 30, width: 30, borderRadius: 50, top: 25, left: -10, }}>
                                        <Image style={{ alignSelf: 'center', top: 8 }} source={(require('../assets/place3.png'))}></Image>
                                    </View>

                                </View>
                                
                            </View>
                        </TouchableOpacity>
                    </ScrollView>

                </View>


            </View>

        </View>
    )
}

const Tab = createBottomTabNavigator();

class ReactNavigationBottomTabs extends Component {

    render() {
        return (
            <Tab.Navigator

                screenOptions={
                    {

                        tabBarStyle: {
                            marginBottom: 50, height: 90, marginHorizontal: 42, backgroundColor: '#363143',

                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                        }
                    }
                }
                tabBarOptions={



                    {


                        // Default Color is blue you can change it by following props
                        activeTintColor: '#363143',
                        inactiveTintColor: '#363143',
                        // Default Background Color is white you can change it by following props

                    }

                }


            >

                <Tab.Screen


                    name="TaB A"
                    component={TabA}


                    options={{



                        headerShown: false,

                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <Image
                                    style={{ width: 60, height: 60, }}
                                    source={(require('../assets/card1.png'))}
                                />
                            );
                        },
                    }}
                />

                {/* 
            <Tab.Screen
                
                name='Tab A'
                component={TabA}
                options={{
                    headerShown: false
            
                   
                }}

                
            /> */}
                <Tab.Screen
                    name="TaB B"
                    component={TabB}


                    options={{



                        headerShown: false,

                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <Image
                                    style={{ width: 60, height: 60, }}
                                    source={(require('../assets/card2.png'))}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="TaB C"
                    component={TabC}


                    options={{



                        headerShown: false,

                        tabBarIcon: ({ focused, color }) => {
                            return (
                                <Image
                                    style={{ width: 60, height: 60, }}
                                    source={(require('../assets/card3.png'))}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    placeView2:{
        margin: 15,
        borderRadius: 18,
        height: moderateScale(72),
        width: moderateScale(230),
        backgroundColor: '#24202F',
        alignSelf: 'center',
    },
    yellowView: {
        height: moderateScale(24),
        width: moderateScale(230),
        backgroundColor: '#FFD500',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,

    },
    placeView: {
        margin: 15,
        borderRadius: 18,
        height: moderateScale(152),
        width: moderateScale(230),
        backgroundColor: '#24202F',
        alignSelf: 'center',

    },
    Baap: {
alignSelf:'center'
    },

    MainBack: {

        backgroundColor: '#4D4D4D',
       
        padding: moderateScale(40),

    },


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
        marginTop: 10,
        flexDirection: 'row'



    },

    title: {
        fontSize: 16,
        color: "white",
        fontFamily: 'Poppins-Regular',
        left: 100,
    },
    item: {
        marginLeft: 70,
        padding: 0,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        height: 60,
        color: "white",
        top: 20,


    },

    container2: {


        flexDirection: 'column',





    },
    radiosView: {
        backgroundColor: "#363143",
        height:moderateScale(650) ,
        width: moderateScale(291),
       
        flexDirection: "column",




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
      marginHorizontal:moderateScale(90),
        flexDirection: "row",
        width: 42,
        height: 42,
      justifyContent:'space-between',
        backgroundColor: 'white',
        borderRadius: 120,
        marginTop: 13,


    },
    ChooseMeal: {
        fontSize: 16,
        fontFamily: "Poppins-Bold",
        color: 'white',
        alignSelf: "flex-start",
        marginLeft: 30,
        marginTop: 22,
        flexDirection: "column"

    },
    MainView: {
        backgroundColor: "#534C64",
        height: moderateScale(76),
        borderRadius: 20,
        zIndex: 99,
        alignSelf:'center'


    },
    InnerView: {
        width: moderateScale(293),
        flexDirection: "row",




    },

});

export default ReactNavigationBottomTabs