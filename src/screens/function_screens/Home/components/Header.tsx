import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {
  TopNavigation,
  Text,
  useTheme,
  TopNavigationAction,
  Icon,
  Avatar,
} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@state_management/store/store';
import {toggleTheme} from '@state_management/slices/ThemeSlice';
type Props = {
  navigation: {
    navigate: Function;
  };
};
const Header = ({navigation}: Props) => {
  const isLight = useSelector((state: RootState) => state.ThemeSlice.isLight);
  const dispatch = useDispatch();
  const theme = useTheme();
  const renderLeft = () => (
    <TopNavigationAction
      icon={props => (
        <Pressable onPress={() => navigation.navigate('Setting')}>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
            }}
          />
        </Pressable>
      )}
    />
  );
  const renderRight = () => (
    <TopNavigationAction
      icon={props => (
        <Pressable onPress={() => dispatch(toggleTheme())} hitSlop={20}>
          <Icon
            {...props}
            name={isLight ? 'moon-outline' : 'sun-outline'}
            fill={theme['color-txt']}
          />
        </Pressable>
      )}
    />
  );
  return (
    <TopNavigation
      title={() => (
        <Text category="h4" style={{color: theme['color-title']}}>
          Home
        </Text>
      )}
      style={[
        styles.header,
        {
          backgroundColor: theme['color-background'],
        },
      ]}
      alignment="center"
      accessoryRight={renderRight}
      accessoryLeft={renderLeft}
    />
  );
};
const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
});
export default Header;
