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
import * as Animatable from 'react-native-animatable';


export default function Splashing(props) {


  useEffect(() => {
    setTimeout(() => props.navigation.navigate("slider") , 2000);
  }, []);


  return (
    <TouchableWithoutFeedback onPress={this.fadeup} style={styles.container}>
      <View style={styles.container}>
        <Animatable.Text style={styles.welcome} animation="slideInDown" iterationCount={1} direction="alternate">welcome to</Animatable.Text>
        <Animatable.Text style={styles.datenight} animation="slideInDown" iterationCount={1} direction="alternate">Date Night</Animatable.Text>
        <Animatable.Text style={styles.datingText} animation="slideInDown" iterationCount={1} direction="alternate">Dating just got fun again!</Animatable.Text>

        <Animatable.Image style={styles.img} source={require('../assets/imglogo.png')}
        >
          {/* <Image
            style={styles.tinyLogo}
            source={require('./src/imglogo.png')}
          /> */}
        </Animatable.Image>

        <Animatable.Text style={styles.getStarted} animation="slideInUp" iterationCount={1} direction="alternate">Get started in just</Animatable.Text>
        <Animatable.Text style={styles.steps} animation="slideInUp" iterationCount={1} direction="alternate">4 simple steps...</Animatable.Text>
      </View>

    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    marginTop: 70,
    alignSelf: "center",

  },
  steps: {
    color: 'white',
    fontSize: 23,
    fontFamily: 'Poppins',

    // marginTop: 180,
    // marginBottom: 10,
    alignSelf: "center",
    alignContent: "center",
    flexDirection: "row",

    justifyContent: "flex-end",

  },
  getStarted: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 23,
    marginTop: 120,
    // marginBottom: -230,
    alignSelf: "center",
    alignItems: "flex-end",
    justifyContent: "flex-end",

  },
  container: {
    flex: 1,
    backgroundColor: "black",

  },
  welcome: {
    color: 'white',
    fontFamily: "Poppins-Regular", 

    fontSize: 23,
    marginTop: 3,
    marginBottom: 3,
    alignSelf: "center",
    alignContent: "center",
    flexDirection: "row",

  },
  datenight: {
    color: '#FF2B25',
    fontSize: 63,
    
    fontFamily: "Poppins-Bold", 
    marginTop: 3,
    marginBottom: 3,
    alignSelf: "center",
    alignContent: "center",
    flexDirection: "row",

  },
  datingText: {
    color: '#A5A5A5',
    fontSize: 23,
    fontFamily: "Poppins", 
    marginTop: 3,
    marginBottom: 3,
    alignSelf: "center",
    alignContent: "center",
    flexDirection: "row",

  }

});