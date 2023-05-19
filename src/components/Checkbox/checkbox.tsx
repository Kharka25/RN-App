import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import styles from './styles';

interface CheckBoxI {
  onCheck: () => void;
  checked: Boolean;
}

const CheckBox: React.FC<CheckBoxI> = ({checked, onCheck}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={onCheck}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.checkIcon} source={require('@assets/icons/check.png')} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);