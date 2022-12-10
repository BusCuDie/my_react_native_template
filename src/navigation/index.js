import React from 'react';
import MainStackNavigator from './MainStackNavigator';
import Toast from 'components/Toast';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default function index() {
  return (
    <SafeAreaProvider>
      <MainStackNavigator />
      <Toast />
    </SafeAreaProvider>
  );
}
