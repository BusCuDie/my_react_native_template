import {Dimensions, Platform, StatusBar} from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

export const NORMAL_STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const extraHeight = ExtraDimensions.get('REAL_WINDOW_HEIGHT');
export const extraWidth = ExtraDimensions.get('REAL_WINDOW_WIDTH');

export const realHeight = Platform.select({
  android: ExtraDimensions.get('REAL_WINDOW_HEIGHT'),
  ios: Dimensions.get('window').height,
});
export const WIDTH_DEVICE = Dimensions.get('screen').width;
export const HEIGHT_DEVICE = Dimensions.get('screen').height;

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const baseWidth = 375;
export const baseHeight = 812;

export const WIDTH_RATIO = WIDTH_DEVICE / baseWidth;
export const HEIGHT_RATIO = HEIGHT_DEVICE / baseHeight;

export const ZEPLIN_RATIO = 375 / 414;
export const ZEPLIN_WIDTH_RATIO = ZEPLIN_RATIO * WIDTH_RATIO;
export const ZEPLIN_HEIGHT_RATIO = ZEPLIN_RATIO * HEIGHT_RATIO;
