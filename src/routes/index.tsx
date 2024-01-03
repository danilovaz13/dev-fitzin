import {useContext} from 'react';
import {useTheme, Box} from 'native-base';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import {AuthRoutes} from './auth.routes';
import {AppRoutes} from './app.routes';

import {AuthContext} from '@contexts/AuthContext';

export function Routes() {
  const {colors} = useTheme();

  const contextoData = useContext(AuthContext);
  console.log(contextoData);

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[600];
  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
