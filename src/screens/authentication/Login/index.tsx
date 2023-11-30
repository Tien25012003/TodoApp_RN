import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {LoginProps} from '@routes/params';
import {useTheme, Text} from '@ui-kitten/components';
import {Image} from 'react-native';
import {WIDTH} from '@constants';
import LoginForm from './components/LoginForm';
const Login = ({navigation}: LoginProps) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme['color-background']}]}>
      <ScrollView>
        <View style={styles.view}>
          <Image
            source={require('@assets/images/logo.png')}
            style={styles.image}
          />
          <Text category="h3" style={{color: theme['color-primary-400']}}>
            Welcome !
          </Text>
          <LoginForm navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    paddingTop: 20,
    alignItems: 'center',
  },
  image: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
    marginVertical: 20,
  },
});
export default Login;
