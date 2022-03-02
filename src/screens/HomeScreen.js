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
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';

// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

// import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

// import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

// import RadioComponent from '../components/RadioButton';

// Dummy content to show
// You can also use dynamic data by calling web service
const CONTENT = [
    {
        title: 'First Date Mode',
        content:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
    {
        title: 'Casual Date Mode',
        content:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
    {
        title: 'Exclusive Date Mode',
        content:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
    {
        title: 'Married Date Mode',
        content:
            'It may, or may not be an actual "first" date, but its certainly one of the first...a "get-to-know" Kind of date.You will need ice-breakers. ',
    },
];


const Pings = [
    {
        id: "Item 1",
        type: "unlock",
        text: "selfie challenge",
        selected: true,
    },
    {
        id: "Item 1",
        type: "lock",
        text: " Compliment your date ",
        selected:true,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: " Compliment your date ",
        selected: true,
    },
    {
        id: "Item 1",
        type: "lock",
        text: " Compliment your date ",
        selected: false,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: " Compliment your date ",
        selected: false,
    },
    {
        id: "Item 1",
        type: "lock",
        text: " Compliment your date ",
        selected: false,
    },
    {
        id: "Item 2",
        type: "unlock",
        text: " Compliment your date ",
        selected: false,
    },

]



const HomeScreen = () => {

    const [date, setDate] = useState(new Date(Date.now()));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
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


const rendenPing =()=>{
return(
    Pings.map((v, i) => {
        return (
            <View style={styles.ping}
                key={i} 
            >
                <TouchableOpacity
                    
                      
                    style={v.type == "unlock" ? styles.PingUnlock : styles.PingBtn  ? styles.PingLock : styles.PingBtn || v.selected == "true" ? styles.PingUnlock : styles.PingBtn}
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
                    />
                    {/*Code for Accordion/Expandable List ends here*/}
                    <View style={styles.AddPersonView}>
                        <Text style={styles.choosePersonText}> Choose Your Date</Text>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.linearGradient} >
                            <Text style={styles.AddButtonText}>
                                Add New Person
                            </Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.AddCouple}>
                        <Text style={styles.choosePersonText}>   Add Another Couple</Text>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.linearGradient} >
                            <Text style={styles.AddButtonText}>
                                Add New person
                            </Text>
                        </LinearGradient>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.linearGradient} >
                            <Text style={styles.AddButtonText}>
                                Add New person
                            </Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.addEvent}>
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
                                style={{ flex: 1, color: 'white', fontSize: 14,}}

                               
                                onPress={showDatepicker}
                                

                            >  {date.toUTCString()}
                            </Text>
                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}
                        </View>
                        <View style={styles.sectionStyle}>
                            <Image
                                source={require('../assets/time.png')} //Change your icon image here
                                style={styles.imageStyle}
                            />
                            <Text
                                style={{ flex: 1, color: 'white', fontSize: 14, }}

                                onPress={showTimepicker}
                                
                              
                            > Select Your time  </Text>
                            
                        </View>




                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.linearGradient} >
                            <Text style={styles.AddButtonText}>
                               Send Invitation
                            </Text>
                        </LinearGradient>
                    </View>
                </ScrollView>
                
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
        flexDirection:"row-reverse",
        left:280
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
       
        fontSize: 16,
        width:354,
        height: 76,

        margin: 10,
        alignSelf:"center",
    },
    PingBtn:{
        width:89,
        height:90,
        borderRadius:12,
        margin:15,
        backgroundColor:"#FF2B25"


    },
    PingUnlock: {
       width:89,
        height:90,
        borderRadius:12,
        margin:15,
        backgroundColor:"#00B712"


    },
    PingLock: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "grey"


    },
    PingText:{
        fontSize:12,
        color:"white",
        alignSelf:"center",
        fontWeight:"bold",
        textAlign:"center",
        marginTop:27,
        marginHorizontal:6

    },
    pinLockUnclock:{
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
      
        textAlign: "center",
        marginTop: 27,
        marginHorizontal: 6

    },


    mins:{
fontSize:14,
alignSelf:"center",
        color:"#B8B8B8",
bottom:30,

    },
    count: {
        fontSize: 30,
        color:"white",
        alignSelf:"center",
        marginHorizontal:55,
    },
    ping: {
        flexDirection: "row",
        marginTop:20,
        alignSelf:"center",
      
    },
    btn1Text: {
        fontSize: 41,
        alignSelf: "center",
        color: "white",

    },
    btn1: {
        width: 58,
        height: 58,
        margin: 25,
        borderRadius: 18,
   
    },
    btn2Text: {
        fontSize: 41,
        alignSelf: "center",
        color: "white",

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
        marginHorizontal: 25,


    },
    AddMeal: {
        color: "white",
        alignSelf: "flex-start",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 25,
        fontSize: 16,

    },
    zipCode: {
        fontSize: 18,
        alignSelf: "center",
        marginTop: 8,
        color: "#9f9f9f",
    },
    addEvent: {
        height: 538,
        backgroundColor: '#4d4d4d',

    },
    tinyLogo: {
        width: 23,
        height: 23,
    },
    AddButtonText: {
        fontSize: 16,


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
        fontSize: 16,

        marginTop: 23,
        alignSelf: "center",
        color: '#FFFF',
        

    },
    linearGradient: {


        width: 354,

        borderRadius: 16,
        marginTop: 40,
        alignSelf: 'center',
     height: 76,
    },
    AddPersonView: {
        marginTop: 90,
        height: 236,
        backgroundColor: '#4D4D4D',

    },
    choosePersonText: {
        marginTop: 40,
        fontSize: 20,
        color: "#FFFF",
        alignSelf: "center",


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
        fontWeight: '300',
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
        fontWeight: '500',
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
        fontWeight: '500',
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
    },
});