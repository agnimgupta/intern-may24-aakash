import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Orders from '../../Screens/BottonTabNavigatorScreens/Orders';
import Store from '../../Screens/BottonTabNavigatorScreens/Store';
import Consult from '../../Screens/BottonTabNavigatorScreens/Consult';
import Routines from '../../Screens/BottonTabNavigatorScreens/Routines';
import ForumMainPage from '../../Screens/ForumMainPage';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle:{borderTopLeftRadius:29, borderTopRightRadius:29, backgroundColor:'white', height:75, paddingBottom:15, paddingTop:10, backgroundColor:"#3A643B"}, tabBarLabelStyle:{fontSize:10.42, fontFamily:'Nunito-Regular'}, tabBarActiveTintColor:'#9DB29D', tabBarInactiveTintColor:'#9DB29D'}}>
      <Tab.Screen
        name="Home"
        component={ForumMainPage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Store.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Consult"
        component={Consult}
        options={{
          tabBarLabel: 'Consult',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Consult.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Routines"
        component={Routines}
        options={{
          tabBarLabel: 'Routines',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Routines.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: () => (
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Images/Orders.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
