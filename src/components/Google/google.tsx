import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Google: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.icon} source={require('@assets/icons/google.png')} />
    </TouchableOpacity>
  );
};

export default React.memo(Google);