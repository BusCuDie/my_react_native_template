import React, {useCallback, useEffect, useRef} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppState} from 'react-native';
import {updateUser} from 'store/user/service';
import {useSelector} from 'react-redux';
import get from 'lodash/get';
import dayjs from 'dayjs';

const MainStack = createNativeStackNavigator();
export default function MainStackNavigator() {
  const appState = useRef(AppState.currentState);
  const userId = useSelector(state => get(state, 'user.info._id'));

  const updateUserActive = useCallback(
    (data = {}) => {
      if (userId) {
        updateUser(userId, data);
      }
    },
    [userId],
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        updateUserActive({
          justNow: 'on',
        });
        console.log({
          status: 'on',
        });
      } else {
        console.log({
          status: 'off',
          userId,
        });
        updateUserActive({
          justNow: 'off',
          timeOff: dayjs().toISOString(),
        });
      }

      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, [updateUserActive, userId]);

  return (
    <MainStack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      {/* <MainStack.Screen
        name="AuthenticationStack"
        component={require('./AuthenticationStack').default}
      />
      <MainStack.Screen
        name="BottomTabNavigator"
        component={require('./BottomTabNavigator').default}
      /> */}
      <MainStack.Screen
        name="HomeScreen"
        component={require('screens/HomeScreen').default}
      />
    </MainStack.Navigator>
  );
}
