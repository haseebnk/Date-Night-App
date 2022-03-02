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




export default function LoginScreen2(props) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    

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
                <View style={styles.tinyLogo}>
                    <Image style={styles.tinyLogo}

                        source={require('../assets/imglogo.png')}
                    /></View>

                <Text style={styles.loginText}>Please Sign into your account</Text>


                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../assets/pass.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{ flex: 1, color: 'white', }}

                        placeholder='Email'
                        placeholderTextColor='white'
                        autoCorrect={true}
                        autoCompleteType='email'
                        keyboardType='email-address'
                        textContentType='emailAddress'

                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image
                        source={require('../assets/email.png')} //Change your icon image here
                        style={styles.ImageStyle}
                    />
                    <TextInput
                        style={{ flex: 1, color: 'white', }}
                        placeholder="Password"
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        textContentType='password'
                    />
                </View>

                <TouchableOpacity>
                    <View style={styles.tog}>
                        <Switch

                            trackColor={{ false: "#363143", true: "#363143" }}
                            thumbColor={isEnabled ? "white" : "#00B712"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>
                    <Text style={{ color: 'white', fontSize: 12, marginLeft: 50, marginTop: 4, }}>Remember</Text>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={()=>  props.navigation.navigate("home")}>
                <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={['#FF7474', '#E20303']}
                    style={styles.linearGradient} >
                    <Text style={styles.loginButtonText}>
                        Sign In
                    </Text>
                </LinearGradient>
                </TouchableOpacity>
                <View style={styles.loginWithBar}>
                    <TouchableOpacity>

                    </TouchableOpacity>
                    <TouchableOpacity >

                    </TouchableOpacity>
                    <TouchableOpacity >

                    </TouchableOpacity>
                </View>
                <View style={styles.signUpTextView}>
                    <Text style={styles.signUpText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> props.navigation.navigate("signup")}>
                        <Text style={[styles.signUpText, { color: '#00A8FF' }]}>
                            {' Sign Up'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
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
        height: 70,

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
        backgroundColor: '#ffff'
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
        fontWeight: '500',
        color: '#fafafa',
        alignSelf: 'center',
    },
    loginWithBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
    },

    signUpTextView: {
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#2279ae',

    },
    signUpText: {
        color: '#ffff',
        fontSize: 16,
        fontWeight: '500',
    },
});