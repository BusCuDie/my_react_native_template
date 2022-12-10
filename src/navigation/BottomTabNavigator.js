import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const BottomTab = createBottomTabNavigator();
export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Bookmarks"
        component={require('screens/BottomTab/HomeScreen').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Foundation
              name="home"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="ApplicantTab"
        component={require('screens/BottomTab/ApplicantTab').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <MaterialCommunityIcons
              name="account-check"
              color={focused ? '#49AC5A' : '#ccc'}
              size={26}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="JobScreen"
        component={require('screens/BottomTab/JobScreen').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <EntypoIcons
              name="suitcase"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
        Ï
      />
      <BottomTab.Screen
        name="Messages"
        component={require('screens/BottomTab/Messages').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <MaterialCommunityIcons
              name="message-text"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={require('screens/BottomTab/Settings').default}
        options={{
          tabBarIcon: ({focused, tintColor}) => (
            <Ionicons
              name="settings-sharp"
              color={focused ? '#49AC5A' : '#ccc'}
              size={24}
            />
          ),
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
