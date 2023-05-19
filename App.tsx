import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Login, Signup, Splash} from '@screens';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Splash /> */}
        {/* <Signup /> */}
        <Login />
      </View>
    </SafeAreaView>
  )
}

export default App;
