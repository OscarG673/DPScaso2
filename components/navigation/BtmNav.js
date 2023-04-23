import * as React from 'react';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

 const TabBar=createBottomTabNavigator();

export default function TabBar_Navigation({navigation}){ 

  
  return(
    <TabBar.Navigator  
      screenOptions={({route})=>({
        tabBarStyle:{position:'absolute'},
        tabBarIcon:({focused,color,size})=>{
          let iconName

          switch(route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                  break;
              case 'Profile':
                iconName = focused ? 'person' : 'person-outline'
                  break;
          }
          size= focused ? 32 : 18;
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerTintColor:'#fff',
        headerStyle:{
          backgroundColor: "black",
        },
        tabBarActiveTintColor:  "blue",
        tabBarInactiveTintColor: "black",
      })}>
      <TabBar.Screen name={'Home'} component={Home}/>
      <TabBar.Screen name={'Profile'} component={Profile}/>
    </TabBar.Navigator>
  )
  
}