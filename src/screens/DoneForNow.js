import React, { useEffect, useState } from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


export default function DoneForNow(props) {

    return (
        <LinearGradient  
            colors={['#24202f', '#24202f', '#24202f']}
            style={styles.container}
        >
            <View>


               <Image  
               style={styles.imgLogo}
               source={(require('../assets/imglogo.png'))}
               ></Image>

                <Image
                    style={styles.winePic}
                    source={(require('../assets/wine.png'))}
                ></Image>

                <Text style={styles.YouAre}>You're all set!</Text>
                <Text style={styles.YourDate}>Your date is all planned out! We’ll send you a reminder 30 minutes before its time for your date to start.</Text>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#FFFF', '#FFFF']}
                    style={styles.linearGradient} >
                    <Text style={styles.DoneButton}>
                        Done For Now 
                    </Text>
                </LinearGradient>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("datemode")}>
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    colors={['#FF7474', '#E20303']}
                    style={styles.linearGradient} >
                    <Text style={styles.saveButtonText}>
                        Let's Start the Date Now
                    </Text>
                </LinearGradient>

            </TouchableOpacity>
        </LinearGradient>

    )
}


const styles = StyleSheet.create({
    DoneButton:{
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#E71717',
        alignSelf: 'center',
top:6
    },
    saveButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#fafafa',
        alignSelf: 'center',
        top:6
    },
    linearGradient: {

        marginTop: 26,
        width: 320,
        paddingVertical: 12,
        borderRadius: 11,
        marginTop: 20,
        alignSelf: 'center',
        height: 60,
    },
    YourDate:{
        alignSelf: "center",
        fontSize: 14,
        color: "#B7B7B7",
        fontFamily: 'Poppins-Regular',
        top: 50,
        textAlign:"center",
        margin:20,
        marginBottom:60
    },
    YouAre:{
        alignSelf:"center",
        fontSize:40,
        color:"white",
        fontFamily:'Poppins-SemiBold',
        top:70,
    },
    winePic: {
        top:30,
        height: 131.79,
        width: 85.03,
        alignSelf: "center"
    },

    imgLogo:{
        height: 85,
        width: 104,
        alignSelf:"center"
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#ffff'
    },
})

