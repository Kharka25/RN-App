import React, {useState} from 'react';
import {Image, Pressable, StyleProp, Text, TextInput, TextInputProps, View, ViewStyle} from 'react-native';

import styles from './styles';

interface TxtInputI {
  isPassword?: boolean;
  inputConfig?: TextInputProps;
  label?: string;
  style?: {};
}

const Input: React.FC<TxtInputI> = ({isPassword, label, inputConfig}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSecurePassword = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !passwordVisible} style={styles.input} {...inputConfig} />
        {isPassword ? (
          <Pressable onPress={onSecurePassword}>
            <Image
              style={styles.eye}
              source={passwordVisible ? require('@assets/images/eye.png') : require('@assets/images/eyesclosed.png')}
            />
          </Pressable>
        ): null}
      </View>
    </View>
  );
}

export default React.memo(Input);