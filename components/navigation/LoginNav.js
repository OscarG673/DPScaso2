import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import BtmNav from './BtmNav';
import SignUp from '../screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';


export default function LoginNav() {

    const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Main" component={BtmNav} options={{headerShown:false,gestureEnabled:false}}/>

    </Stack.Navigator>
    </NavigationContainer>
    
  )
}