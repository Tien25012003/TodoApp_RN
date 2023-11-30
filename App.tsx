import {StatusBar} from 'react-native';
import React from 'react';
import {default as theme} from './theme.json';
import AppRouter from '@routes';
import {Provider} from 'react-redux';
import {store} from '@state_management/store/store';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {IconRegistry} from '@ui-kitten/components';
const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <AppRouter />
    </Provider>
  );
};

export default App;
