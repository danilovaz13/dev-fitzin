declare module 'react-native-vector-icons/MaterialIcons' {
  import {ComponentType} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface MaterialIconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  }

  const MaterialIcons: ComponentType<MaterialIconProps>;
  export default MaterialIcons;
}
