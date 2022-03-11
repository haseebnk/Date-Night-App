import React, { useRef, useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Animated,
    TextInput,
    FlatList,

} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

// import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

// import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import moment from 'moment';
import TabsCardComponent from '../components/TabsCard';
import ReactNavigationBottomTabs from './tabscardold';
import { scale } from "react-native-size-matters";
// import RadioComponent from '../components/RadioButton';

// Dummy content to show
// You can also use dynamic data by calling web service
// const CONTENT = [
//     {
//         title: 'First Date Mode',
//         content:
//             'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
//     },
//     {
//         title: 'Casual Date Mode',
//         content:
//             'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
//     },
//     {
//         title: 'Exclusive Date Mode',
//         content:
//             'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
//     },
//     {
//         title: 'Married Date Mode',
//         content:
//             'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
//     },
// ];


const data = [
    {
        id: 1,
        title: 'First Date Mode',
        description:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
    {
        id: 2,
        title: 'Casual Date Mode',
        description:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
    {
        id: 3,
        title: 'Exclusive Date Mode',
        description:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
    {
        id: 4,
        title: 'Married Date Mode',
        description:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
];



const Pings = [
    {
        id: "Item 1",
        type: "unlock",
        text: "selfie challenge",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected:true,
    },
    {
        id: "Item 1",
        type: "unlock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected:true,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 1",
        type: "lock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 1",
        type: "lock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: " Compliment your date ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },

]



const HomeScreen = (props) => {

    //fahas faq


    const [press, setPress] = useState('');

    function questionPick(item) {
        setPress(item.id)
    }

    function questionClose(item) {
        setPress(item.id)
    }

    //fahads






    const [isDateSelected, setIsDateSelected] = useState(false);
    const [isTimeSelected, setIsTimeSelected] = useState(false)



    const [date, setDate] = useState(new Date(Date.now()));

    const [time, setTime] = useState(new Date(Date.now()));

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setIsDateSelected(true)
        setDate(currentDate);
    };


    const onChangeTime = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setIsTimeSelected(true)
        setTime(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };


    const [count, setCount] = useState(0);
    const animation = useRef(new Animated.Value(0)).current;
    const scale = animation.interpolate({ inputRange: [0, 1], outputRange: [1, 0.9] });

    const onPressIn = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };
    const onPressOut = () => {
        setTimeout(() => {
            Animated.spring(animation, {
                toValue: 0,
                useNativeDriver: true,
            }).start();
        }, 200);
    };

    const onPressMius = () => {
        Animated.spring(animation, {
            toValue: -5,
            useNativeDriver: true,
        }).start();
    };
    const onPress = () => setCount(count + 5);
    const onPree = () => setCount(count - 5);

    // Default active selector
    const [activeSections, setActiveSections] = useState([]);
    // Collapsed condition for the single collapsible
    const [collapsed, setCollapsed] = useState(true);
    // MultipleSelect is for the Multiple Expand allowed
    // True: Expand multiple at a time
    // False: One can be expand at a time
    const [multipleSelect, setMultipleSelect] = useState(false);

    const toggleExpanded = () => {
        // Toggling the state of single Collapsible
        setCollapsed(!collapsed);
    };

    const setSections = (sections) => {
        // Setting up a active section state
        setActiveSections(
            sections.includes(undefined) ? [] : sections
        );
    };

    const renderHeader = (section, _, isActive) => {
        // Accordion header view
        return (

            <View style={{ height: 100, }} >
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#399ADA', '#0883FB']}
                    style={styles.header} >
                    <Animatable.View

                        duration={400}

                        transition="backgroundColor">

                        <Text style={styles.headerText}>
                            {section.title}
                        </Text>


                    </Animatable.View>
                </LinearGradient >

            </View>


        );
    };




    const rendenPing = () => {
        return (
            Pings.map((v, i) => {
                return (
                    <View style={styles.ping}
                        key={i}
                    >
                        <TouchableOpacity


                            style={v.type == "unlock" && v.selected == true ? styles.PingPlayed  : styles.PingUnlock && v.type == 'lock' ? styles.PingLock : styles.PingUnlock}
                            type={Pings}

                        >


                            <Text style={styles.PingText}>
                                {v.text}
                            </Text>
                            <Text style={styles.pinLockUnclock}>
                                {v.type}
                            </Text>

                        </TouchableOpacity>



                    </View>
                )
            })
        )

    }

    // <View style={styles.ping}>
    //     <TouchableOpacity >
    //         <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
    //             colors={['#FF2B25', '#FF2B25']}
    //             style={styles.btn1}
    //             type={Pings}>
    //             <Text style={styles.btn1Text}>

    //             </Text>
    //         </LinearGradient>
    //     </TouchableOpacity>



    // </View>

    const renderContent = (section, _, isActive) => {
        // Accordion Content view
        return (

            <Animatable.View
                duration={400}
                style={[
                    styles.contentHead,
                    isActive ? styles.inactive : styles.inactive
                ]}
                transition="backgroundColor">



                <Animatable.Text
                    animation={isActive ? '' : undefined}
                    style={{ textAlign: 'center', margin: 8, }}>
                    {section.content}
                </Animatable.Text>

            </Animatable.View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.TopHeader}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('faqscreen')}>
                            <Text style={{ fontSize: 23, color: "white", alignSelf: "flex-start", margin: 20, }}> Faq</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.navigate('personalprofiledetails')}>

                            <Image style={styles.imgSetting}
                                source={require("../assets/setting.png")}
                            ></Image>
                        </TouchableOpacity>
                    </View>
                    {/* 
                    <Accordion


                        activeSections={activeSections}
                        // For any default active section
                        sections={CONTENT}
                        // Title and content of accordion
                        touchableComponent={TouchableOpacity}
                        // Which type of touchable component you want
                        // It can be the following Touchables
                        // TouchableHighlight, TouchableNativeFeedback
                        // TouchableOpacity , TouchableWithoutFeedback
                        expandMultiple={multipleSelect}
                        // If you want to expand multiple at a time
                        renderHeader={renderHeader}
                        // Header Component(View) to render
                        renderContent={renderContent}
                        // Content Component(View) to render
                        duration={300}
                        // Duration for Collapse and expand
                        onChange={setSections}
                    // Setting the state of active sections
                    /> */}



                    <View >

                        {/* <NavHeader title="FAQ" /> */}

                        <View style={{ alignItems: 'center', }}>

                            <View>

                                <Text style={styles.ModeHeading}>choose Your Mode</Text>
                            </View>


                            <FlatList
                                data={data}
                                keyExtractor={(item, index) => index.toString()}
                                style={{ width: '90%' }}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        onPress={() => questionPick(item)}
                                        style={{ marginTop: 20, width: '100%', padding: 3 }}
                                    >
                                        {press === item.id ?
                                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#0883FB', paddingHorizontal: 10, paddingVertical: 10, height: 76, borderRadius: 18, color: "White" }}>
                                                <MaterialIcons name='expand-less' size={hp('5%')} color="white" />
                                                <Text style={{ color: 'white', fontFamily: "Poppins-Regular", fontSize: 16 }}>{item.title}</Text>
                                                {/* <AntDesign name="caretdown" size={16} color="black"/> */}


                                            </View>
                                            :
                                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#0883FB', paddingHorizontal: 10, paddingVertical: 10, height: 76, borderRadius: 18, color: "White" }}>
                                                <MaterialIcons name='expand-more' size={hp('5%')} color="white" />
                                                <View>
                                                    <Text style={{ padding: 5, fontFamily: "Poppins-Regular", color: "white", fontSize: 16 }}>{item.title}</Text>
                                                </View>


                                            </View>
                                        }

                                        {press === item.id ?

                                            <TouchableOpacity onPress={() => setPress('')}>

                                                <Text style={{ padding: 15, marginHorizontal: 0, top: -10, backgroundColor: "white", color: "#B4B4B4", borderBottomLeftRadius: 18, borderBottomRightRadius: 18, fontSize: 14, fontFamily: "Poppins-Regular", }}>{item.description} </Text>

                                            </TouchableOpacity>

                                            :
                                            null
                                        }
                                    </TouchableOpacity>

                                )}
                            />
                        </View>
                    </View>




                    <View style={styles.AddPersonView}>
                        <Text style={styles.choosePersonText}> Choose Your Date</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("addpartnersdetails")}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF7474', '#E20303']}
                                style={styles.linearGradient} >
                                <Text style={styles.AddButtonText}>
                                    Add New Person
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.AddCouple}>

                        <Text style={styles.choosePersonText}>   Add Another Couple</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("addcouple")}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF7474', '#E20303']}
                                style={styles.linearGradient} >
                                <Text style={styles.AddButtonText}>
                                    Add New person
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => props.navigation.navigate("addcouple")}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF7474', '#E20303']}
                                style={styles.linearGradient} >
                                <Text style={styles.AddButtonText}>
                                    Add New person
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal={true} >


                        <View style={styles.addEvent}>

                            
                            <View style={styles.mealView} >
                               
                                <Text style={styles.choosePersonText}>  Add An Event</Text>
                                <Text style={styles.zipCode}>  Zip code +</Text>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={['#80D3FC', '#80D3FC']}
                                    style={styles.addEventButton} >
                                    <Text style={styles.AddMeal}>
                                        Add a meal
                                    </Text>
                                </LinearGradient>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={['#44BEFB', '#44BEFB']}
                                    style={styles.addEventButton} >
                                    <Text style={styles.AddMeal}>
                                        Add An activity
                                    </Text>
                                </LinearGradient>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={['#0883FB', '#0883FB']}
                                    style={styles.addEventButton} >
                                    <Text style={styles.AddMeal}>
                                        Add Desert
                                    </Text>
                                </LinearGradient>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                    colors={['#0149FF', '#0149FF']}
                                    style={styles.addEventButton} >
                                    <Text style={styles.AddMeal}>
                                        Add Drink
                                    </Text>
                                </LinearGradient>
                            </View>
                            <View style={styles.mealView} >
                               

                                <ReactNavigationBottomTabs nestedScrollEnabled={true}></ReactNavigationBottomTabs>


                            </View>
                        </View>
                    </ScrollView>
                    <Text style={styles.choosePersonText}>   Select Your Ping Frequency</Text>
                    <View style={styles.ping}>
                        <TouchableOpacity onPressIn={onPressMius}
                            onPress={onPree}
                            onPressOut={onPree}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF2B25', '#FF2B25']}
                                style={styles.btn1} >
                                <Text style={styles.btn1Text}>
                                    -
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <Text style={styles.count}>{count}</Text>

                        <TouchableOpacity onPressIn={onPressIn}
                            onPress={onPress}
                            onPressOut={onPressOut}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF2B25', '#FF2B25']}
                                style={styles.btn2} >
                                <Text style={styles.btn2Text}>
                                    +
                                </Text>

                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.mins}>mins</Text>
                    <Text style={styles.selectPngText}>Select Your Pings</Text>
                    <ScrollView horizontal={true}>

                        {
                            rendenPing()
                        }
                    </ScrollView>
                    <View style={styles.ScheduleView}>
                        <Text style={styles.choosePersonText}> Schedule Your Date</Text>


                        <View style={styles.sectionStyle}>
                            <Image
                                source={require('../assets/calender.png')} //Change your icon image here
                                style={styles.imageStyle}
                            />
                            <Text
                                style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginLeft: -40, }}
                                onPress={showDatepicker}
                            >
                                {isDateSelected ? `${date.getMonth() + ' | ' + date.getDate() + ' | ' + date.getFullYear()}` : "Select Date"}
                            </Text>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={mode == 'date' ? onChange : onChangeTime}
                                />
                            )}
                        </View>
                        <View style={styles.sectionStyle}>
                            <Image
                                source={require('../assets/time.png')} //Change your icon image here
                                style={styles.imageStyle}
                            />
                            <Text
                                style={{ flex: 1, color: 'white', fontSize: 16, fontFamily: "Poppins-Regular", marginLeft: -40, }}

                                onPress={showTimepicker}


                            >  {isTimeSelected ? `${time.getHours() + ' : ' + time.getMinutes()} ` : "Select Time"} </Text>

                        </View>



                        <TouchableOpacity onPress={() => props.navigation.navigate('donefornow')}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF7474', '#E20303']}
                                style={styles.linearGradient} >
                                <Text style={styles.AddButtonText}>
                                    Send Invitation
                                </Text>
                            </LinearGradient>

                        </TouchableOpacity>

                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    mealView: {
        flex: 1,
        flexDirection: 'column',
        width: scale(350),
    
     

    },
    ModeHeading: {
        color: 'white',
        fontSize: 20,
        marginTop: 30,

        marginBottom: 5,
        fontFamily: "Poppins-Regular",
        textAlign: 'center',

    },
    imgSetting: {
        height: 35,
        width: 35,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,


        marginTop: 20,
    },
    TopHeader: {
        height: 76,
        backgroundColor: '#363143',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomLeftRadius: 26, zIndex: 999,
        borderBottomRightRadius: 26,


    },
    ScheduleView: {
        marginTop: 90,
        height: 436,
        backgroundColor: '#4D4D4D',

    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 55,
        width: 55,
        resizeMode: 'stretch',
        flexDirection: "row-reverse",
        left: 280
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
        width: 354,
        height: 76,

        margin: 10,
        alignSelf: "center",
    },
    PingBtn: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#FF2B25",
        fontFamily: "Poppins-Regular",


    },
   

    PingUnlock: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#FF2B25",
        fontFamily: "Poppins-Regular",


    },
    PingLock: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#C5C5C5",
        fontFamily: "Poppins-Regular",

    },
    PingPlayed: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#1AC72B",
        fontFamily: "Poppins-Regular",

    },
    PingText: {
        fontSize: 12,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 27,
        marginHorizontal: 6

    },
    pinLockUnclock: {
        fontSize: 12,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        marginHorizontal: 6
    },

    selectPngText: {
        fontSize: 20,
        color: "white",
        alignSelf: "center",
        fontFamily: "Poppins-Regular",
        textAlign: "center",
        marginTop: 27,
        marginHorizontal: 6

    },


    mins: {
        fontSize: 14,
        alignSelf: "center",
        color: "#B8B8B8",
        bottom: 30,
        fontFamily: "Poppins-Regular",

    },
    count: {
        fontSize: 30,
        color: "white",
        alignSelf: "center",
        marginHorizontal: 55,
        fontFamily: "Poppins-Regular",
    },
    ping: {
        flexDirection: "row",
        marginTop: 20,
        alignSelf: "center",

    },
    btn1Text: {
        fontSize: 41,
        alignSelf: "center",
        color: "white",
        fontFamily: "Poppins-Regular",

    },
    btn1: {
        width: 58,
        height: 58,
        margin: 25,
        borderRadius: 18,
        fontFamily: "Poppins-Regular",

    },
    btn2Text: {
        fontSize: 41,
        alignSelf: "center",
        color: "white",
        fontFamily: "Poppins-Regular",

    },
    btn2: {
        width: 58,
        height: 58,
        margin: 25,
        borderRadius: 18,

    },

    addEventButton: {
        margin: 10,
        height: 76,
        borderRadius: 16,
        marginHorizontal:40



    },
    AddMeal: {
        color: "white",
        alignSelf: "flex-start",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 25,
        fontSize: 16,
        fontFamily: "Poppins-Regular", 

    },
    zipCode: {
        fontSize: 18,
        alignSelf: "center",
        marginTop: 8,
        color: "#9f9f9f",
        fontFamily: "Poppins-Regular",
    },
    addEvent: {
        height: scale(600),
        backgroundColor: '#4d4d4d',
        width: '100%',
        flexDirection: 'row',
       

    },
    tinyLogo: {
        width: 23,
        height: 23,
    },
    AddButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",

        alignSelf: "center",
        color: '#FFFF',

    },
    linearGradient: {


        width: 354,

        borderRadius: 16,

        alignSelf: 'center',
        height: 74,
    },
    AddCouple: {
        height: 392,
        backgroundColor: '#0000',

    },
    AddButtonText: {
        height: 76,
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        marginTop: 27,
        alignSelf: "center",
        color: '#FFFF',


    },
    linearGradient: {


        width: 314,

        borderRadius: 16,
        marginTop: 40,
        alignSelf: 'center',
        height: 76,
    },
    AddPersonView: {
        marginTop: 60,
        height: 236,
        backgroundColor: '#4D4D4D',

    },
    choosePersonText: {
        marginTop: 40,
        fontSize: 20,
        color: "#FFFF",
        alignSelf: "center",
        fontFamily: "Poppins-Regular",
    

    }
    ,
    contentHead: {
        marginHorizontal: 20,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        height: 70,
        marginBottom: 20,



    },
    container: {
        flex: 1,
        backgroundColor: 'black',


    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        marginBottom: 20,
    },
    header: {
        marginHorizontal: 20,
        backgroundColor: '#F5FCFF',
        padding: 10,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        borderTopLeftRadius: 22,
        borderTopRightRadius: 22,
        height: 76,
        marginBottom: 5,
        top: 35,


    },
    headerText: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: "white",
        alignSelf: "flex-start",
        marginTop: 15,
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontFamily: "Poppins-Regular",
        padding: 10,
        textAlign: 'center',
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
        fontFamily: "Poppins-Regular",
    },
});