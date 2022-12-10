import React from 'react';
import {View, Text} from 'react-native';
import OpacityButton from 'components/OpacityButton';
export default function index() {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <OpacityButton>
        <Text>Mở</Text>
      </OpacityButton>
      <OpacityButton>
        <Text>Đóng</Text>
      </OpacityButton>
    </View>
  );
}
