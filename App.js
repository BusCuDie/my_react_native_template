import React, {useRef} from 'react';
import {LogBox, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
import store, {persistedStore} from 'store/reduxStore';
import MainStackNavigator from 'navigation/MainStackNavigator';
import codePush from 'react-native-code-push';
import Toast from 'react-native-toast-message';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import GlobalStyle from './GlobalStyle';
import {WIDTH_RATIO} from 'themes/Dimens';
import get from 'lodash/get';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESTART,
};

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested',
  'Require cycle',
  'Cannot update',
  "Can't update",
  'react-native-extra-dimensions-android is only available on Android',
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

let originalTextRender = Text.render;
let originalTextInputRender = TextInput.render;

Text.render = function (...args) {
  let origin = originalTextRender.call(this, ...args);
  let children = origin.props.children;

  return React.cloneElement(
    origin,
    {
      style: [
        {
          fontFamily: 'Roboto-Regular',
          color: 'black',
        },
        origin.props.style,
      ],
    },
    children,
  );
};

TextInput.render = function (...args) {
  let origin = originalTextInputRender.call(this, ...args);
  let children = origin.props.children;
  return React.cloneElement(
    origin,
    {
      style: [
        {
          fontFamily: 'Roboto-Regular',
        },
        origin.props.style,
      ],
    },
    children,
  );
};

const toastConfig = {
  failed: props => {
    return (
      <View style={GlobalStyle.toastContainer}>
        <View style={[GlobalStyle.toastIconWrapper, GlobalStyle.toastFailed]}>
          <AntDesignIcon name="close" size={30 * WIDTH_RATIO} color="white" />
        </View>
        <View style={GlobalStyle.toastInfoWrapper}>
          <Text style={GlobalStyle.toastTitle}>
            {get(props, 'text1', 'Error')}
          </Text>
          <Text style={GlobalStyle.toastContent}>
            {get(props, 'text2', 'Can not continue')}
          </Text>
        </View>
      </View>
    );
  },
  done: props => {
    return (
      <View style={GlobalStyle.toastContainer}>
        <View style={[GlobalStyle.toastIconWrapper, GlobalStyle.toastDone]}>
          <AntDesignIcon name="check" size={30 * WIDTH_RATIO} color="white" />
        </View>
        <View style={GlobalStyle.toastInfoWrapper}>
          <Text style={GlobalStyle.toastTitle}>
            {get(props, 'text1', 'Success')}
          </Text>
          <Text style={GlobalStyle.toastContent}>
            {get(props, 'text2', 'Huraa!!! Success')}
          </Text>
        </View>
      </View>
    );
  },
};
const RootComponent = () => {
  const navigationRef = useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <RootComponent />
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
