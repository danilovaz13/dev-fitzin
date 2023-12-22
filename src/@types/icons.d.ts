// types/react-native-vector-icons.d.ts

declare module 'react-native-vector-icons/Entypo' {
  import {ComponentType} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  }

  interface IconComponent extends ComponentType<IconProps> {}

  const Entypo: IconComponent;

  export default Entypo;
}

declare module 'react-native-vector-icons/MaterialIcons' {
  import {ComponentType} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  }

  interface IconComponent extends ComponentType<IconProps> {}

  const MaterialIcons: IconComponent;

  export default MaterialIcons;
}

declare module 'react-native-vector-icons/Feather' {
  import {ComponentType} from 'react';
  import {StyleProp, ViewStyle} from 'react-native';

  interface IconProps {
    name: string;
    size?: number;
    color?: string;
    style?: StyleProp<ViewStyle>;
  }

  interface IconComponent extends ComponentType<IconProps> {}

  const Feather: IconComponent;

  export default Feather;
}
