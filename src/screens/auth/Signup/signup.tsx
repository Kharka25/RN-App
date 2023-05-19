import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';

import {AuthHeader, Button, CheckBox, Google, Input, Separator} from '@components';
import styles from './styles';

const Signup: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    Alert.alert('Sign In');
  }
  return (
    <View style={styles.container}>
      <AuthHeader style={{marginBottom: 30}} title='Sign Up' />
      <Input
        label='Name'
        inputConfig={{placeholder: 'John Doe'}}
      />
      <Input
        label='E-mail'
        inputConfig={{placeholder: 'example@gmail.com'}}
      />
      <Input
        label='Password'
        inputConfig={{placeholder: '********'}}
        isPassword
      />
      <View style={styles.footerContainer}>
        <CheckBox checked={checked} onCheck={() => setChecked(!checked)} />
        <Text style={styles.footerTxt}>
          I agree with
          <Text style={styles.footerTxtBold}> Terms</Text> and
          <Text style={styles.footerTxtBold}> Conditions</Text>
        </Text>
      </View>
      <Button style={styles.button} label='Sign Up' />
      <Separator text='Or sign up with' />
      <Google />
      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
      </Text>
    </View>
  );
};

export default React.memo(Signup);