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
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


// import SplashScreen from 'react-native-splash-screen';

export default function PersonalProfileDetails(props) {




    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return (

        <ScrollView>

            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >



                <LinearGradient
                    colors={['#24202f', '#24202f', '#24202f']}
                    style={styles.container}
                >
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>

                            <Image style={styles.imgClose}
                                source={require("../assets/close.png")}
                            ></Image>
                        </TouchableOpacity>
                        <Text style={styles.ProfileDetails}>Personal Profiles Details</Text>
                    </View>
                    <View style={styles.tinyLogo}>
                        <Image style={styles.tinyLogo}

                            source={require('../assets/profile.png')}
                        />
                    </View>
                    <Text style={styles.takePhoto}>Take a photo</Text>
                    <Text style={styles.uploadPhoto}>Upload Photo</Text>

                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 13, fontFamily: "Poppins-Regular", }}
                            placeholder="Full Name"
                            placeholderTextColor='white'

                            textContentType='password'
                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 13, fontFamily: "Poppins-Regular", }}
                            placeholder="Mobile Number"
                            placeholderTextColor='white'

                            textContentType='password'
                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 13, fontFamily: "Poppins-Regular", }}

                            placeholder='Email'
                            placeholderTextColor='white'
                            autoCorrect={true}
                            autoCompleteType='email'
                            keyboardType='email-address'
                            textContentType='emailAddress'

                        />
                    </View>
                    <View style={styles.sectionStyle}>

                        <TextInput
                            style={{ flex: 1, color: 'white', fontSize: 13, fontFamily: "Poppins-Regular", }}

                            placeholder='Date Of Birth'
                            placeholderTextColor='white'
                            autoCorrect={true}
                            autoCompleteType='email'
                            keyboardType='email-address'
                            textContentType='emailAddress'

                        />
                    </View>



                    <Text style={styles.profileText}>Profile Background Color</Text>


                    <View style={styles.backContainer} >
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#F11775', '#FB6580']}
                                style={styles.back1}>

                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#7AC9FD', '#0071BC']}
                                style={styles.back1}>

                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#7AFDD0', '#00BC89']}
                                style={styles.back1}>

                            </LinearGradient>

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#6617F1', '#8265FB']}
                                style={styles.back1}>

                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#F1D417', '#FBFB65']}
                                style={styles.back1}>

                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate("changepassword")}>

                        <Text style={styles.changePass} >

                            Change Password</Text>



                    </TouchableOpacity>



                    <View style={styles.Cont}>
                        <TouchableOpacity>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FF7474', '#E20303']}
                                style={styles.linearGradient} >
                                <Text style={styles.saveButtonText} >
                                    Save
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => props.navigation.goBack()}>

                            <Text style={styles.cancelButtonText}>
                                Cancel
                            </Text>

                        </TouchableOpacity>
                    </View>
                    {/* <TouchableOpacity style={styles.loginButton}>
             <Text style={styles.loginButtonText}>Sign in</Text>
         </TouchableOpacity> */}



                </LinearGradient>
            </TouchableWithoutFeedback>
        </ScrollView>

    );
}

const styles = StyleSheet.create({

    changePass: {
        color: '#0090FF',
        fontSize: 14,
        top: 30,
        marginBottom: 20,

        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: "Poppins-Regular",
    },
    cancelButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#fafafa',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 30
    },
    saveButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#fafafa',
        alignSelf: 'center',
    },
    Cont: {
        marginTop: 0,

    },
    imgClose: {
        height: 19,
        width: 19,
        marginTop: 5,
        marginLeft: 5,
    },

    ProfileDetails: {
        color: 'white',
        fontSize: 20,
        marginTop: 0,
        marginHorizontal: 65,
        marginBottom: 20,
        fontFamily: "Poppins-Regular",
        textAlign: 'center',


    },
    takePhoto: {
        color: '#0090FF',
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontFamily: "Poppins-Regular",
    },
    uploadPhoto: {
        color: '#fff',
        fontSize: 14,
        marginTop: 2,
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: "Poppins-Regular",

    },
    backContainer: {
        alignSelf: "center",
        flexDirection: "row",

    },
    back1: {
        height: 38,
        width: 38,
        borderRadius: 10,
        margin: 2,
        marginTop: 10,
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

    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    tog: {
        flex: 1,
        alignSelf: 'flex-start'
    },

    ImageStyle: {
        padding: 5,
        marginRight: 10,

        margin: 5,
        height: 20,
        width: 18,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    sectionStyle: {
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363143',
        borderRadius: 18,
        marginTop: 10,
        paddingHorizontal: 16,

        fontSize: 13,
        width: '80%',
        height: 60,

        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#ffff',

    },
    tinyLogo: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: "38%",
        marginRight: "50%",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        width: 100,


    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '900',
        color: '#fff',
        alignSelf: 'center',
    },
    loginText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 30,
        textAlign: 'center',
    },
    // input: {
    //   width: '100%',
    //   height: 60,
    //   backgroundColor: '#363143',
    //   borderRadius: 12,
    //   marginTop: 10,
    //   paddingHorizontal: 10,
    //   fontSize: 16,
    //   color: '#808e9b',
    // },
    fpText: {
        alignSelf: 'flex-end',
        color: '#00A8FF',
        fontSize: 14,
        fontWeight: '500',
        marginTop: -17,
        // marginBottom:50,
    },
    loginButton: {
        backgroundColor: '#ee3231',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 40,

    },
    loginButtonText: {
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        color: '#fafafa',
        alignSelf: 'center',
    },


    signUpTextView: {

        marginTop: -20,
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#2279ae',

    },
    signUpText: {
        color: '#ffff',
        fontSize: 16,
        fontFamily: "Poppins-Regular",
    },
    profileText: {
        color: '#ffff',
        fontSize: 16,
        fontFamily: "Poppins-Regular",
        alignSelf: "center",
    },
});