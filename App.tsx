import React from 'react';
import {StatusBar} from 'react-native';
import {Box, Text, NativeBaseProvider} from 'native-base';

import {THEME} from './src/theme';
import {Loading} from '@components/Loading';
import {SignIn} from '@screens/SignIn';

const test = 'testeando';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {test ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
