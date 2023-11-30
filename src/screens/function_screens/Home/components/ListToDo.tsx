import {StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {
  List,
  ListItem,
  useTheme,
  Text,
  Icon,
  CheckBox,
} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@state_management/store/store';
import {toggleTodo} from '@state_management/slices/ToDoSlice';

const ListToDo = () => {
  const theme = useTheme();
  const listToDo = useSelector((state: RootState) => state.ToDoSlice);
  const isLight = useSelector((state: RootState) => state.ThemeSlice.isLight);

  const dispatch = useDispatch();
  const handleCheckBox = (index: number) => {
    dispatch(toggleTodo(index));
  };
  const renderLeft = (props: any, isCheck: boolean, index: number) => (
    <CheckBox
      status="info"
      {...props}
      checked={isCheck}
      onChange={() => handleCheckBox(index)}
    />
  );
  const renderRight = (props: any, date: Date) => (
    <Text category="s2" style={{color: theme['color-subtitle']}}>
      {date.toLocaleDateString('vi')}
    </Text>
  );
  const renderToDo = useCallback(
    ({item, index}: {item: TToDo; index: number}) => {
      return (
        <ListItem
          key={index}
          title={() => <Text category="p1">{item.title}</Text>}
          description={() => (
            <Text category="s2" style={{color: theme['color-subtitle']}}>
              {item.subtitle}
            </Text>
          )}
          style={[
            styles.listItem,
            {
              backgroundColor: theme['color-background'],
              alignItems: 'flex-start',
            },
          ]}
          accessoryLeft={props => renderLeft(props, item.isComplete, index)}
          accessoryRight={props => renderRight(props, item.date)}
        />
      );
    },
    [listToDo, isLight],
  );
  return (
    <List
      data={listToDo}
      renderItem={renderToDo}
      style={{backgroundColor: theme['color-background']}}
    />
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderColor: 'gray',
    borderBottomWidth: 0.6,
    marginVertical: 1,
    paddingHorizontal: 10,
  },
});
export default ListToDo;
