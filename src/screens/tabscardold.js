


// npm i @react-navigation/bottom-tabs react-native-elements
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useState  , Component} from "react";
import {
    View, Image, Text, StyleSheet, TouchableOpacity,
    TouchableHighlight, ScrollView, FlatList, SafeAreaView, StatusBar, Switch, ImageBackground,


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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    



const Item =({title})=> {

const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(

        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.item}>


                <Text style={styles.title}>{title}</Text>

                <Switch
                    style={{ top: -27, left: -260 }}
                    trackColor={{ false: "#24202F", true: "#24202F" }}
                    thumbColor={isEnabled ? "white" : "#00B712"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}

                />
            </View>

        </ScrollView>
    )
}






    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );


    return (
        <View  style={styles.MainBack}>
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



                
                    <SafeAreaView style={styles.container}>
                        <ScrollView nestedScrollEnabled={true}>
                        <FlatList 

                                nestedScrollEnabled={true}

                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={items => items.id}


                        />
                            
                        </ScrollView>

                    </SafeAreaView>
             
            </View>


        </View>
</View>

    )
}
function TabB() {


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
        <View style={styles.Baap}>
            <View style={styles.container2}>
                <View style={styles.MainView}>
                    <View style={styles.InnerView}>
                        <Text style={styles.ChooseMeal}>
                            Choose Place

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

                            {/* <FlatList

                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={items => items.id}


                        /> */}
                        </SafeAreaView>
                    </ScrollView>

                </View>


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
                </ScrollView>

            </View>


        </View>

</View>
    )
}

const Tab = createBottomTabNavigator();

class ReactNavigationBottomTabs extends Component {

render(){
    return (
        <Tab.Navigator

            screenOptions={
                {
                    
                    tabBarStyle: { marginBottom:50, height: 90, marginHorizontal: 42, backgroundColor:'#363143' ,
             
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

                    tabBarIcon: ({ focused, color  }) => {
                        return (
                            <Image
                                style={{ width: 60, height: 60,  }}
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

                    tabBarIcon: ({  focused, color }) => {
                        return (
                            <Image
                                style={{ width: 60,  height: 60, }}
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

                    tabBarIcon: ({  focused, color }) => {
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
    Baap:{

    },

    MainBack:{

        backgroundColor:'#4D4D4D',
flex:1,
padding:40,

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
        flexDirection:'row'
        
     

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
        top: 20,
        

    },

    container2: {

        
        flexDirection: 'column',
  
       
        

        
    },
    radiosView: {
        backgroundColor: "#363143",
        height: 1300,
        width: 325,
        marginHorizontal: 2,
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
        flexDirection: "row",
        width: 42,
        height: 42,
        marginLeft: 128,
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
        height:76,
        borderRadius: 20,
        zIndex: 99,
      
     
    },
    InnerView: {

        flexDirection: "row",
       



    },

});

export default ReactNavigationBottomTabs