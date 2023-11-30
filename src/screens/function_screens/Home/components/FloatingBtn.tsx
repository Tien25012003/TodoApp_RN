import {View, StyleSheet, Pressable, Modal, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {WIDTH} from '@constants';
import {
  Icon,
  useTheme,
  Button,
  Text,
  Input,
  Calendar,
} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {addTodo} from '@state_management/slices/ToDoSlice';
const FloatingBtn = () => {
  const theme = useTheme();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const renderIcon = (props: any) => (
    <Pressable onPress={() => setOpenCalendar(true)}>
      <Icon {...props} name="calendar-outline" />
    </Pressable>
  );
  const onAdd = () => {
    dispatch(
      addTodo({
        title: title,
        subtitle: description,
        date: date,
        isComplete: false,
      }),
    );
    setOpenModal(false);
  };
  return (
    <View>
      <View style={styles.container}>
        <Button
          style={[
            styles.button,
            {
              backgroundColor: theme['color-title'],
              borderColor: theme['color-title'],
            },
          ]}
          accessoryLeft={props => (
            <Icon
              name="plus-outline"
              {...props}
              fill={theme['color-background']}
            />
          )}
          onPress={() => setOpenModal(true)}></Button>
      </View>
      <Modal
        visible={openModal}
        transparent
        onRequestClose={() => setOpenModal(false)}>
        <View style={styles.modal_container}>
          <Pressable
            style={[StyleSheet.absoluteFill, styles.backdrop]}
            onPress={() => setOpenModal(false)}
          />
          <View style={styles.modal}>
            <ScrollView>
              <Text category="h6" style={{color: '#000', textAlign: 'center'}}>
                Add New Todo
              </Text>
              <View style={{height: 10}} />
              <Text category="s1" style={styles.txt}>
                Title
              </Text>
              <Input
                value={title}
                onChangeText={setTitle}
                style={styles.input}
                size="large"
              />

              <Text category="s1" style={styles.txt}>
                Description
              </Text>
              <Input
                value={description}
                onChangeText={setDescription}
                style={styles.input}
                size="large"
              />

              <Text category="s1" style={styles.txt}>
                Date
              </Text>
              <Input
                value={date.toLocaleDateString('vi')}
                //onChangeText={()=>setDate()}
                style={styles.input}
                size="large"
                accessoryRight={renderIcon}
                disabled={true}
              />

              <Button style={styles.buttonAdd} onPress={onAdd}>
                Add
              </Button>
            </ScrollView>
            <View style={{position: 'absolute', backgroundColor: '#fff'}}>
              {openCalendar && (
                <Calendar
                  date={date}
                  onSelect={value => {
                    setDate(value);
                    setOpenCalendar(false);
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  button: {
    height: WIDTH * 0.15,
    width: WIDTH * 0.15,
    borderRadius: WIDTH * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdrop: {
    backgroundColor: '#00000099',
  },
  modal: {
    width: '100%',
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    alignItems: 'center',
  },
  input: {
    width: WIDTH * 0.85,
    backgroundColor: '#fff',
  },
  txt: {
    marginTop: 20,
    color: '#000',
  },
  buttonAdd: {
    marginTop: 30,
    backgroundColor: '#44C2F4',
    borderColor: '#44C2F4',
  },
  modal_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default FloatingBtn;
