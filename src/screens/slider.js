// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const SliderScreen = (props) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
   props.navigation.navigate("login")
  };
  const onSkip = () => {
    props.navigation.navigate("login")
  };

  const RenderItem = ({ item }) => {
    return (
      <View
     
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
          <Image
          style={{ height: 120, width:132}}
          source={(require("../assets/imglogo.png"))} ></Image>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip
              from any slide or Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default SliderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 150,
    height: 150,
  },
  introTextStyle: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
    marginBottom:20,
    fontFamily:"Poppins-Regular"
    
  },
  introTitleStyle: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily:"Poppins-ExtraBold"
 
  },
});

const slides = [
  {
    key: 's1',
    text: 'Create a profile',
    title: '',
    image: require('../assets/1.png'),
    backgroundColor: 'black',
    
    
  },
  {
    key: 's2',
    title: ' ',
    text: 'Plan the Date',
    image: require('../assets/2.png'),
    backgroundColor: 'black',
    height:300,
  },
  {
    key: 's3',
    title: ' ',
    text: 'Send the Invitation',
    image: require('../assets/3.png'),
    backgroundColor: 'black',
  },
  {
    key: 's4',
    title: ' ',
    text: 'Enjoy the Date',
    image: require('../assets/4.png'),
    backgroundColor: 'black',
  },
];