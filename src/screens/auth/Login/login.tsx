import React from 'react';
import {Text, View} from 'react-native';

import {AuthHeader, Button, Google, Input, Separator} from '@components';
import styles from './styles';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <AuthHeader style={{marginBottom: 30}} title='Sign In' />
      <Input
        label='E-mail'
        inputConfig={{placeholder: 'example@gmail.com'}}
      />
      <Input
        label='Password'
        inputConfig={{placeholder: '********'}}
        isPassword
      />
      <Button style={styles.button} label='Login' />
      <Separator text='Or sign up with' />
      <Google />
      <Text style={styles.footerText}>
        Don't have an account?
        <Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </View>
  );
};

export default React.memo(Login);