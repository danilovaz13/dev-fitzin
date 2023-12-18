import {Button as NativeBaseButton, IButtonProps, Text} from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
};

export function Button({title, variant = 'solid', ...rest}: Props) {
  return (
    <NativeBaseButton
      {...rest}
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.600'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="green.600"
      rounded="sm"
      _pressed={{bg: variant === 'outline' ? 'gray.500' : 'green.500'}}>
      <Text
        color={variant === 'outline' ? 'green.600' : 'white'}
        fontFamily="heading"
        fontSize="sm">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
