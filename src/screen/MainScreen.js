import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import {AddToDo} from "../components/AddToDo";
import {Todo} from "../components/ToDo";

export const MainScreen = ({addToDo, todos, removeTodo, openTodo}) => {

    return(
        <View>
            <AddToDo addToDo = {addToDo}/>
            <FlatList
                keyExtractor = {item => item.id.toString()}
                data = {todos}
                renderItem = {({item}) => (
                    <Todo todo = {item} onRemove = {removeTodo} onOpen = {openTodo}/>
                )}
            />
        </View>
    );
;}

const styles = StyleSheet.create({});