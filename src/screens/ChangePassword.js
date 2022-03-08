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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




export default function ChangePassword(props) {

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >


            <LinearGradient
                colors={['#24202f', '#24202f', '#24202f']}
                style={styles.container}
            >

                <View  style={styles.viewStyle}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}> 

                        <Image style={styles.imgClose}
                            source={require("../assets/close.png")}
                        ></Image>
                    </TouchableOpacity>
                   
                    <Text style={styles.changePassHeading}>Change password</Text>
                </View>

                <View style={styles.sectionStyle}>

                    <TextInput
                        style={{ flex: 1, color: 'white', fontFamily: "Poppins-Regular", fontSize: 16}}
                        placeholder="New Password"
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        textContentType='password'
                    />
                </View>

                <View style={styles.sectionStyle}>

                    <TextInput
                        style={{ flex: 1, color: 'white', fontFamily: "Poppins-Regular", fontSize: 16 }}
                        placeholder="Confirm Password"
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        textContentType='password'
                    />
                </View>
                <View style={styles.Cont}>
                    <TouchableOpacity onPress={() => props.navigation.navigate("home")}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FF7474', '#E20303']}
                            style={styles.linearGradient} >
                            <Text style={styles.saveButtonText}>
                                Save
                            </Text>
                        </LinearGradient>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => props.navigation.navigate("forgotpassword")}>

                        <Text style={styles.cancelButtonText}>
                            Cancel
                        </Text>


                    </TouchableOpacity>
                </View>
            </LinearGradient>


        </TouchableWithoutFeedback>
    )

}



const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
    },
    imgClose:{
height:19,
width:19,
marginTop:5,
marginLeft:5,
    },
    Cont: {
        marginTop: 200,

    },
    cancelButtonText: {
        fontSize: 16,
        
        color: '#fafafa',
        alignSelf: 'center',
        marginTop: 22,
        fontFamily: "Poppins-Regular",
    },
    saveButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#fafafa',
        alignSelf: 'center',
    },
    linearGradient: {

        marginTop: 26,
        width: 350,
        paddingVertical: 12,
        borderRadius: 11,
        marginTop: 40,
        alignSelf: 'center',
        height: 48,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
        paddingHorizontal: 16,
        marginRight: 40,
        fontSize: 16,
        width: '95%',
        height: 76,

        margin: 10,
    },
    changePassHeading: {
        color: '#fff',
        fontSize: 20,
        fontFamily: "Poppins-Regular", 

        marginTop: 2,
        marginBottom: 30,
        textAlign: 'center',
        marginHorizontal:80,
    },

    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#ffff'
    },
})



