import React, { useEffect, useState, useRef  , } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TextInput,
    StatusBar,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Switch,
    ListViewComponent, 
    ScrollView,
    Animated,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalComponent from '../components/modalQuit';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { types } from '@babel/core';
import UnlockModal from '../components/unlockModal';






const DATA = [
    {
        Id: 1,
        title: 'truth or date',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
        Id: 2,
        title: 'selfie challenge',
        Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },

]



const Pings = [
    {
        id: "Item 1",
        type: "unlock",
        text: "selfie challenge",
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: true,
    },
    {
        id: "Item 1",
        type: "unlock",
        text: " Truth Or Dare ",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: true,
    },
    {
        id: "Item 2",
        type: "lock",
        text: "Compliment date",
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        selected: false,
    },
    {
        id: "Item 1",
        type: "unlock",
        text: " selfie challenge",
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

const rendenPing = (props) => {


    
    return (
        Pings.map((v, i) => {
            return (
                <View style={styles.ping}
                    key={i}
                >
                    <TouchableOpacity

                       
                        onPress={()=> v.type == 'lock' ? console.log('sorry this is locked buy at 99.9$') : null} 

                        style={v.type == "unlock" && v.selected == true ? styles.PingPlayed : styles.PingUnlock && v.type == 'lock' ? styles.PingLock : styles.PingUnlock}
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


// const rendenText = () => {
//     return (
//         Pings.map((v, i) => {
//             return (
//                 <View style={styles.ping}
//                     key={i}
//                 >
                   

//                     {v.text == 'selfie challenge' ?
//                         <Text style={styles.secondText}>{v.text}</Text>
//                         :
//                         <Text></Text>
//                     }



//                 </View>
//             )
//         })
//     )

// }




// const renderPause = () => {

//     return(
//         <MaterialIcons style={{ alignItems: 'center', justifyContent: 'space-between', top: 15, }} name='play-arrow' size={hp('5%')} color="yellow" />
//     )
// }





export default function DateMode(props) {

  
    const [myArray, setMyArray] = useState([]);

    function onlclick() {




        let myLocalArray = []
        myLocalArray = Pings.splice(0, 1)
        setMyArray(myLocalArray)
console.log(myLocalArray)
    }







    const [count, setCount] = useState(30);
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






    return (
        <ScrollView>
            
            <LinearGradient
                colors={['#24202f', '#24202f', '#24202f']}
                style={styles.container}
            >
                <View>



                    <Text style={styles.CasualModeText}>Casual Date Mode</Text>

                </View>



                <View style={styles.ChallengeContainer}>

                    <Text style={styles.firstText}>
                        Ohhh..
                    </Text>
  
                    <Text style={styles.secondText}>
                        <View style={styles.ping}
                          
                        >
                            <View style={{alignSelf:'center'}}>

                            <Text style={styles.secondText}>{Pings[0].text}</Text>

                            </View>



                        </View>
                    </Text>

                    <Text style={styles.thirdText}>
                        Are You Ready?
                    </Text>

                    <ScrollView>
                        <View style={styles.InnerContainer}>

                        <Text style={styles.dareText}>
                               {Pings[0].Description}
                        </Text>

                        </View>
                    </ScrollView>


                </View>
                <ScrollView horizontal={true}>

                    {
                        rendenPing()
                    }
                </ScrollView>

                <View style={styles.BottomHeader}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('faqscreen')}>
                        <Text style={{ fontSize: 23, color: "white", alignSelf: "flex-start", margin: 20, fontFamily: "Poppins-Regular", marginLeft: 25, top:-5,}}> Faq</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => this.setModalVisible(true)}>


                        <ModalComponent
                        
                        style={{ alignItems: 'center', left: -10 }} navigation={props.navigation} >

                        </ModalComponent>

                    </TouchableOpacity>

                    <TouchableOpacity >

                        <MaterialIcons style={{ alignItems: 'center', justifyContent: 'space-between', top:12, left: -10 }} name='play-arrow' size={hp('5%')} color="#74FF82" />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={onlclick} >

                       
                        
                        {Pings[0].type == 'lock' ? <UnlockModal

                            style={{ alignItems: 'center', left: -10 ,  }} navigation={props.navigation} >

                        </UnlockModal> : <MaterialIcons style={{ alignItems: 'center', top: 18, left: 0 }} name='double-arrow' size={hp('4%')} color="#0379FF" /> }
                        
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPressIn={onPressIn}
                        onPress={onPress}
                        onPressOut={onPressOut}>
                        <Text style={styles.count}>{count}</Text>

                    </TouchableOpacity>
                </View>
                <Text style={{ color: 'white', fontSize: 10, bottom: 20, alignSelf: 'flex-end', marginRight: 53, }}>min</Text>
            </LinearGradient>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    dareText:{
        fontSize:12.7,
        fontFamily: "Poppins-Light",
        alignSelf:'center',
        margin:18,
        color:'#24202F',

    },
    InnerContainer:{
        height: scale(312),
        width: scale(250),
        backgroundColor:'#FFFFFF',
        borderRadius:17,
        alignSelf:'center'
    },
    thirdText: {
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        alignSelf: 'center',
        color: '#74FF82',
        top: 35,
        marginBottom:40

    },
    secondText: {
        fontSize: 30,
        fontFamily: "Poppins-SemiBold",
        alignSelf: 'center',
        color: '#74FF82',
        top: 20,
        justifyContent:'center',
        

    },
    firstText: {
        fontSize: 20,
        fontFamily: "Poppins-Regular",
        alignSelf: 'center',
        color: '#74FF82',
        top: 30,

    },
    count: {
        fontSize: 20,
        color: "white",
        alignSelf: 'center',
        marginRight: 50,
        margin: 15,

        fontFamily: "Poppins-Regular",
    },
    BottomHeader: {
        alignSelf: "center",
        height: scale(68.7),
        backgroundColor: 'black',
        width: scale(350),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        bottom: -14,

      
       


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

    PingUnlock: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#FF2B25",
        fontFamily: "Poppins-Regular",


    },
    ping: {
        flexDirection: "row",
        marginTop: 50,
        alignSelf: "center",
        marginBottom: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    PingPlayed: {
        width: 89,
        height: 90,
        borderRadius: 12,
        margin: 15,
        backgroundColor: "#1AC72B",
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
    PingText: {
        fontSize: 12,
        color: "white",
        alignSelf: "center",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 27,
        marginHorizontal: 6

    },
    ChallengeContainer: {

        alignSelf: 'center',
        width: scale(300),
        height: scale(501),
        backgroundColor: '#363143',
        borderColor: '#00B712',
        borderWidth: 2.5,
        borderRadius: 20,
        top: 20,
       
    },

    CasualModeText: {
        alignSelf: "center",
        fontSize: 20,
        color: "white",
        fontFamily: 'Poppins-Regular',

    },



    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 0,
        backgroundColor: '#ffff',

    },
})

