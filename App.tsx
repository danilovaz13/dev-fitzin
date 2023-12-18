import React from 'react';
import {StatusBar} from 'react-native';
import {Box, NativeBaseProvider} from 'native-base';

import {THEME} from './src/theme';
import {Loading} from '@components/Loading';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Loading />
      <Box>HELOO</Box>
    </NativeBaseProvider>
  );
}
