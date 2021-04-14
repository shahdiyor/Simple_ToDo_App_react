import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import {NavBar} from './src/components/NavBar';
import {MainScreen} from "./src/screen/MainScreen";
import {TodoScreen} from "./src/screen/TodoScreen";

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    {id:"1", title: "Hello world!"},
    {id:"2", title: "Лаба 2"},
    {id:"3", title: "Выполнил Мунавваров!"}
  ]);

  const addTodo = title =>{
    setTodos(prev =>[
      ...prev,
      {
        id: Date.now().toString(),
        title: title
      }
    ]);
  };


  const removeTodo = id =>{
    const todo = todos.find(t => t.id === id);
    Alert.alert(
      "Удаление элементы",
      'Вы уверены, что хотите удалить '+todo.title,
      [
        {
          text: "Отмена",
          style: "cancel"
        },
        {
          text: "Удалить",
          onPress: () =>{
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id!==id));
          }
        }
      ],
      {cancelable: false}
    );
  };

  const updateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if(todo.id ===id){
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos = {todos}
      addToDo = {addTodo}
      removeTodo = {removeTodo}
      openTodo = {setTodoId}
    />
  );

  if(todoId){
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        goBack = {() => {
          setTodoId(null);
        }} 
        todo = {selectedTodo}
        updateToDo = {updateTodo}
        onRemove={removeTodo}
      />
    );
  }

  return (
    <View style={styles.container}>
      <NavBar title = 'Задачи'/>
      <View style = {styles.container}>
          {content}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
