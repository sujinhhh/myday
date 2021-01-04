import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Platform,
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import produce from 'immer';

const index = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('todos')
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error.massage));
  }, []);

  const store = (newList) => {
    setTodos(newList);
    AsyncStorage.setItem('todos', JSON.stringify(newList));
  };

  return (
    <KeyboardAwareScrollView
      extraHeight={135}
      enabledOnAndroid={true}
      extraScrollHeight={70}
      style={styles.mainContainer}
      automaticallyAdjustContentInsets={true}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>오늘의 할일</Text>
      </View>
      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputTodo}
          placeholder="오늘 해야 할 일을 적어보삼"
          onChangeText={(value) => setInputTodo(value)}
        />
        <Button
          style={styles.todoItemBtn}
          title="추가"
          onPress={() => {
            if (inputTodo === '') {
              return;
            }
            const newItem = {
              id: new Date().getTime().toString(),
              todo: inputTodo,
              done: false,
            };
            store([...todos, newItem]);
            setInputTodo('');
          }}
        />
      </View>
      {/*  list  */}
      <View style={styles.contents}>
        <View>
          {todos.map((item) => {
            return (
              <View style={styles.list} key={item.id}>
                <TouchableOpacity
                  style={styles.listContents}
                  onPress={() => {
                    store(
                      produce(todos, (draft) => {
                        const index = todos.indexOf(item);
                        draft[index].done = !draft[index].done;
                      }),
                    );
                  }}>
                  {item.done ? (
                    <Image
                      style={styles.iconImage}
                      source={require('../../../assets/images/jin.png')}
                    />
                  ) : (
                    <Image
                      style={styles.iconImage}
                      source={require('../../../assets/images/chan.png')}
                    />
                  )}
                </TouchableOpacity>
                <Text style={styles.todoText}>{item.todo}</Text>
                <Button
                  style={styles.todoItemBtn}
                  color="#b388ff"
                  title=" 삭제 "
                  onPress={() => {
                    store(_.reject(todos, (element) => element.id === item.id));
                  }}
                />
              </View>
            );
          })}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contents: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 1,
  },
  header: {
    alignItems: 'center',
    marginVertical: 10,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  listContents: {
    // flex: 1,
  },
  todoText: {
    flex: 1,
    paddingLeft: 20,
  },
  todoItemBtn: {
    alignItems: 'flex-end',
  },
  iconImage: {
    width: 50,
    height: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  title: {
    fontSize: 25,
  },
});
