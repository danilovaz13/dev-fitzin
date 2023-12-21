import {HStack, Heading, Text, VStack, Icon} from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {UserPhoto} from './UserPhoto';
import {TouchableOpacity} from 'react-native';

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{uri: 'https://github.com/danilovaz13.png'}}
        alt="Imagem do usúario"
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Danilo
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcon} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
