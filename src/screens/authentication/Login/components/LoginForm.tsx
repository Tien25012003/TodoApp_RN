import {View, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Input, useTheme, Icon, Text, Button} from '@ui-kitten/components';
import {WIDTH} from '@constants';
import {useDispatch} from 'react-redux';
import {uploadTodo} from '@state_management/slices/ToDoSlice';
import {TODO} from '@constants/sample';
type Props = {
  navigation: {
    navigate: Function;
  };
};
const LoginForm = ({navigation}: Props) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [security, setSecurity] = useState(true);
  const [err, setErr] = useState(0);
  const dispatch = useDispatch();
  const onLogin = () => {
    if (email === '' || password === '') {
      if (email === '' && password === '') {
        setErr(3);
      } else {
        if (email === '') {
          setErr(1);
        } else {
          setErr(2);
        }
      }
    } else {
      setErr(0);
      setEmail('');
      setPassword('');
      dispatch(uploadTodo(TODO));
      navigation.navigate('Home');
    }
  };
  const renderIcon = (props: any): React.ReactElement => (
    <Pressable onPress={() => setSecurity(!security)}>
      <Icon {...props} name={security ? 'eye-off' : 'eye'} />
    </Pressable>
  );

  const renderCaptionEmail = () => (
    <Text category="s2" style={{color: 'red'}}>
      {err === 1 || err === 3 ? `Please fill in the field!` : ``}
    </Text>
  );

  const renderCaptionPassword = () => (
    <Text category="s2" style={{color: 'red'}}>
      {err === 2 || err === 3 ? `Please fill in the field!` : ``}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text category="s1" style={{color: theme['color-txt']}}>
        Email
      </Text>
      <Input
        style={[
          styles.input,
          {
            backgroundColor: theme['color-background'],
            borderColor: theme['border-color'],
          },
        ]}
        value={email}
        onChangeText={setEmail}
        size="large"
        caption={renderCaptionEmail}
      />

      <View style={{height: 10}} />
      <Text category="s1" style={{color: theme['color-txt']}}>
        Password
      </Text>
      <Input
        style={[
          styles.input,
          {
            backgroundColor: theme['color-background'],
            borderColor: theme['border-color'],
          },
        ]}
        value={password}
        onChangeText={setPassword}
        size="large"
        secureTextEntry={security}
        accessoryRight={renderIcon}
        caption={renderCaptionPassword}
      />
      <View style={{height: 40}} />
      <Button
        style={[
          styles.button,
          {
            backgroundColor: theme['color-primary-300'],
            borderColor: theme['color-primary-300'],
          },
        ]}
        size="large"
        onPress={onLogin}>
        Login
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: WIDTH * 0.85,
    marginVertical: 4,
    borderRadius: 10,
  },
  container: {
    marginVertical: 50,
  },
  button: {
    borderRadius: 10,
  },
});
export default LoginForm;
