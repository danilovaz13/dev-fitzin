import React from 'react';
import {StatusBar} from 'react-native';
import {NativeBaseProvider} from 'native-base';

import {THEME} from './src/theme';

import {Loading} from '@components/Loading';
import {Routes} from './src/routes';

import {AuthContext} from '@contexts/AuthContext';
// import {Home} from '@screens/Home';

const test = 'testeando';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider
        value={{
          user: {
            id: '1',
            name: 'Danilo',
            email: 'danilo@gmail.com',
            avatar: 'danilo.png',
          },
        }}>
        {test ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
