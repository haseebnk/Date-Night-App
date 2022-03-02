import React from 'react';
// import { createAppContainer } from 'react-navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import LoginScreen2 from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import Slider from './src/screens/Slider';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen'
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="splash">
      <Stack.Screen name="splash" options={{ headerShown: false }} component={Splash} />
      <Stack.Screen name="login" options={{ headerShown: false }} component={LoginScreen2} />
      <Stack.Screen name="signup" options={{ headerShown: false }} component={SignupScreen} />
      <Stack.Screen name="slider" options={{ headerShown: false }} component={Slider} />
        <Stack.Screen name="home" options={{ headerShown: false }} component={HomeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default MyStack;