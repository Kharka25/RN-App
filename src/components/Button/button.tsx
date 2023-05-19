import React from 'react';
import {StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle} from 'react-native';
import styles from './styles';

interface BtnI {
  btnConfig?: TouchableOpacityProps;
  label?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>
}

const Button: React.FC<BtnI> = ({btnConfig, label, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress} {...btnConfig}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
};

export default React.memo(Button);