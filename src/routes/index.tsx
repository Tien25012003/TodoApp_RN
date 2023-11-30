import {Home, Setting, Login} from '@screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParams} from './params';
import {NavigationContainer} from '@react-navigation/native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import {RootState} from '@state_management/store/store';
import {useMemo} from 'react';
import {default as theme} from '../../theme.json';
const Stack = createNativeStackNavigator<StackParams>();
const AppRouter = () => {
  const isLight = useSelector((state: RootState) => state.ThemeSlice.isLight);
  const Theme = useMemo(() => (isLight ? 'light' : 'dark'), [isLight]);

  return (
    <ApplicationProvider {...eva} theme={{...eva[Theme], ...theme[Theme]}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  );
};
export default AppRouter;
