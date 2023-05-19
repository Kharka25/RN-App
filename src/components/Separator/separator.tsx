import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import styles from './styles';

interface SeparatorI {
  style?: StyleProp<ViewStyle>
  text?: string;
}

const Separator: React.FC<SeparatorI> = ({style, text}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line}></View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line}></View>
    </View>
  );
};

export default React.memo(Separator);