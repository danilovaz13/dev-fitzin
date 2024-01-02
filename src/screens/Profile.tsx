import React from 'react';
import {ScreenHeader} from '@components/ScreenHeader';
import {UserPhoto} from '@components/UserPhoto';
import {Input} from '@components/Input';
import {Button} from '@components/Button';
import {
  Center,
  ScrollView,
  Skeleton,
  VStack,
  Text,
  Heading,
  useToast,
} from 'native-base';
import {TouchableOpacity, Alert} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
  CameraOptions,
  ImageLibraryOptions,
} from 'react-native-image-picker';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useForm, Controller} from 'react-hook-form';

import RNFS from 'react-native-fs';

const PHOTO_SIZE = 33;

type FormDataProps = {
  password_old: string;
  password: string;
  password_confirm: string;
};

const profileSchema = yup.object({
  password_old: yup.string().required('Informe sua senha antiga'),
  password: yup
    .string()
    .required('Informe uma nova senha')
    .min(6, 'A senha deve ter pelo menos 6 digitos.'),
  password_confirm: yup
    .string()
    .required('Confirme a nova senha.')
    .oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere'),
});

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = React.useState(false);
  const [userPhoto, setUserPhoto] = React.useState(
    'http://github.com/danilovaz13.png',
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormDataProps>({
    resolver: yupResolver(profileSchema),
  });

  const toast = useToast();

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
          const photoInfo: RNFS.StatResult = await RNFS.stat(
            result.assets[0].uri || '',
          );
          if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
            return toast.show({
              title: 'Essa imagem é muito grand. Escolha uma de até 5MB.',
              placement: 'top',
              bgColor: 'red.500',
            });
          } else {
            setUserPhoto(result.assets[0].uri || '');
          }
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

  function handleActualizar({
    password,
    password_confirm,
    password_old,
  }: FormDataProps) {
    console.log({password, password_confirm, password_old});
  }

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
            mt={12}
            fontFamily="heading">
            Alterar senha
          </Heading>

          <Controller
            control={control}
            name="password_old"
            render={({field: {onChange, value}}) => (
              <Input
                bg="gray.600"
                placeholder="Senha antiga"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_old?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value}}) => (
              <Input
                bg="gray.600"
                placeholder="Nova senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="password_confirm"
            render={({field: {onChange, value}}) => (
              <Input
                bg="gray.600"
                placeholder="Confirme a nova senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password_confirm?.message}
              />
            )}
          />

          <Button
            title="Atualizar"
            mt={4}
            onPress={handleSubmit(handleActualizar)}
          />
        </Center>
      </ScrollView>
    </VStack>
  );
}
