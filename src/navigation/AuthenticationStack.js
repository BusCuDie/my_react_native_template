import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator();
export default function AuthenticationStack() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name="LoginScreen"
        component={require('screens/Auth/LoginScreen').default}
      />
      <AuthStack.Screen
        name="EnterEmailScreen"
        component={require('screens/Auth/EnterEmailScreen').default}
      />
      <AuthStack.Screen
        name="VerifyEmailScreen"
        component={require('screens/Auth/VerifyEmailScreen').default}
      />
      <AuthStack.Screen
        name="EnterPasswordScreen"
        component={require('screens/Auth/EnterPasswordScreen').default}
      />
      <AuthStack.Screen
        name="RegisterInfoScreen"
        component={require('screens/Auth/RegisterInfoScreen').default}
      />
    </AuthStack.Navigator>
  );
}
