import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';

import {Button} from '@components';
import styles from './styles';

const Splash: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.image} source={require('@assets/images/splash.png')} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.innerTitle, styles.title]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button btnConfig={{activeOpacity: 0.8}} style={{marginBottom: 30, marginTop: 55, width: '100%'}} label='Sign Up' />
      <Pressable>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
}

export default Splash;