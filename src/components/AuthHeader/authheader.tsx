import React from 'react';
import {Image, Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';

import styles from './styles';

interface AuthHeaderI {
  onPress?: () => void;
  title?: string;
  style?: StyleProp<ViewStyle>
}

const AuthHeader: React.FC<AuthHeaderI> = ({onPress, style, title}) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable hitSlop={20} onPress={onPress}>
        <Image style={styles.icon} source={require('@assets/icons/backicon.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default React.memo(AuthHeader);