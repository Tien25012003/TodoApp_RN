import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {HomeProps} from '@routes/params';
import {useTheme} from '@ui-kitten/components';

import {FloatingBtn, Header, ListToDo} from './components';
const Home = ({navigation}: HomeProps) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, {backgroundColor: theme['color-background']}]}>
      <Header navigation={navigation} />
      <ListToDo />
      <FloatingBtn />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
  },
});
export default Home;
