import {View, StyleSheet, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SettingProps} from '@routes/params';
import {
  useTheme,
  TopNavigation,
  Text,
  TopNavigationAction,
  Icon,
  Avatar,
  ListItem,
  Toggle,
} from '@ui-kitten/components';
import {WIDTH} from '@constants';
import {useDispatch, useSelector} from 'react-redux';
import {toggleTheme} from '@state_management/slices/ThemeSlice';
import {RootState} from '@state_management/store/store';
const Setting = ({navigation}: SettingProps) => {
  const dispatch = useDispatch();
  const isLight = useSelector((state: RootState) => state.ThemeSlice.isLight);
  const [on, setOn] = useState(true);
  const theme = useTheme();
  const renderLeft = () => (
    <TopNavigationAction
      icon={props => (
        <Pressable hitSlop={20} onPress={() => navigation.goBack()}>
          <Icon
            {...props}
            name="arrow-back-outline"
            fill={theme['color-txt']}
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
    <View
      style={[styles.container, {backgroundColor: theme['color-background']}]}>
      <TopNavigation
        title={() => (
          <Text category="h4" style={{color: theme['color-title']}}>
            Profile
          </Text>
        )}
        style={[
          styles.header,
          {
            backgroundColor: theme['color-background'],
          },
        ]}
        alignment="center"
        accessoryLeft={renderLeft}
        accessoryRight={renderRight}
      />

      <ScrollView>
        <View style={styles.view}>
          <Avatar
            source={{
              uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
            }}
            style={styles.avatar}
          />
        </View>
        <View style={{height: 50}} />

        <ListItem
          title={() => (
            <Text
              category="s1"
              style={{
                color: theme['color-txt'],
                marginLeft: 10,
              }}>
              Ema Smith
            </Text>
          )}
          accessoryLeft={
            <Icon name="person-outline" fill={theme['color-txt']} />
          }
          style={[styles.row, {backgroundColor: theme['color-background']}]}
        />
        <ListItem
          title={() => (
            <Text
              category="s1"
              style={{
                color: theme['color-txt'],
                marginLeft: 10,
              }}>
              ema1223@gmail.com
            </Text>
          )}
          accessoryLeft={
            <Icon name="email-outline" fill={theme['color-txt']} />
          }
          style={[styles.row, {backgroundColor: theme['color-background']}]}
        />
        <ListItem
          title={() => (
            <Text
              category="s1"
              style={{
                color: theme['color-txt'],
                marginLeft: 10,
              }}>
              Notification
            </Text>
          )}
          accessoryLeft={<Icon name="bell-outline" fill={theme['color-txt']} />}
          style={[styles.row, {backgroundColor: theme['color-background']}]}
          accessoryRight={<Toggle checked={on} onChange={setOn} />}
        />

        <ListItem
          title={() => (
            <Text
              category="s1"
              style={{
                color: theme['color-txt'],
                marginLeft: 10,
              }}>
              Logout
            </Text>
          )}
          accessoryLeft={
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Icon name="log-out-outline" fill={theme['color-txt']} />
            </Pressable>
          }
          style={[styles.row, {backgroundColor: theme['color-background']}]}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  avatar: {
    width: WIDTH * 0.4,
    height: WIDTH * 0.4,
  },
  row: {
    width: WIDTH * 0.8,
    alignSelf: 'center',
  },
});
export default Setting;
