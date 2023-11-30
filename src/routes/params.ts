import {NativeStackScreenProps} from '@react-navigation/native-stack';
type StackParams = {
  Home: undefined;
  Setting: undefined;
  Login: undefined;
};
type LoginProps = NativeStackScreenProps<StackParams, 'Login'>;
type HomeProps = NativeStackScreenProps<StackParams, 'Home'>;
type SettingProps = NativeStackScreenProps<StackParams, 'Setting'>;
export type {StackParams, SettingProps, LoginProps, HomeProps};
