import React from 'react';
import {ScreenHeader} from '@components/ScreenHeader';
import {UserPhoto} from '@components/UserPhoto';
import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {Center, ScrollView, Skeleton, VStack, Text, Heading} from 'native-base';
import {TouchableOpacity, Alert} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = React.useState(false);
  const [userPhoto, setUserPhoto] = React.useState(
    'http://github.com/danilovaz13.png',
  );

  const handleChoosePhoto = () => {
    Alert.alert(
      'Selecione',
      'Informe de onde você quer pegar a foto',
      [
        {
          text: 'Galeria',
          onPress: () => pickImageFromGallery(),
          style: 'default',
        },
        {
          text: 'Camera',
          onPress: () => pickImageFromCamera(),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('tratar depois...'),
      },
    );

    const pickImageFromGallery = async () => {
      setPhotoIsLoading(true);
      const options: ImageLibraryOptions = {
        mediaType: 'photo',
      };

      try {
        const result: ImagePickerResponse = await launchImageLibrary(options);

        if (result.assets && result.assets.length > 0 && !result.didCancel) {
          setUserPhoto(result.assets[0].uri || '');
        }
      } catch (error) {
        console.error('Erro ao escolher a imagem:', error);
      } finally {
        setPhotoIsLoading(false);
      }
    };

    const pickImageFromCamera = async () => {
      const options: CameraOptions = {
        mediaType: 'photo',
        saveToPhotos: false,
        cameraType: 'front',
        quality: 1,
      };
      try {
        const result = await launchCamera(options);
        // Lógica para lidar com o resultado da câmera, se necessário
      } catch (error) {
        console.error('Erro ao escolher a imagem da câmera:', error);
      }
    };
  };

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView contentContainerStyle={{paddingBottom: 36}}>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.500"
              endColor="gray.400"
            />
          ) : (
            <UserPhoto
              source={{uri: userPhoto}}
              alt="Foto do usuário"
              size={PHOTO_SIZE}
            />
          )}

          <TouchableOpacity onPress={handleChoosePhoto}>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize="md"
              mt={2}
              mb={8}>
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg="gray.600" />
          <Input value="E-mail" bg="gray.600" isDisabled />

          <Heading
            color="gray.200"
            fontSize="md"
            mb={2}
            alignSelf="flex-start"
            mt={12}>
            Alterar senha
          </Heading>

          <Input bg="gray.600" placeholder="Senha antiga" secureTextEntry />
          <Input bg="gray.600" placeholder="Nova senha" secureTextEntry />
          <Input
            bg="gray.600"
            placeholder="Confirme a nova senha"
            secureTextEntry
          />
          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  );
}
