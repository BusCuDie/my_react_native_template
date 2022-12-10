import React from 'react';
import {View, Text} from 'react-native';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import {WIDTH_RATIO} from 'themes/Dimens';
import styles from './styles';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FontistoIcons name="laughing" size={250 * WIDTH_RATIO} color="white" />
      <Text style={styles.txtSuccess}>Success!!!</Text>
      <View style={styles.footer}>
        <View style={styles.divider} />
      </View>
    </View>
  );
}
