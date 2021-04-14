import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const AddToDo = ({addToDo}) => {
    const [value, setValue] = useState("");

    const pressHandler = () =>{
        if(value.trim()){
            {addToDo(value)}
            setValue("");
        }else{
            Alert.alert("Укажите название задачи")
        }
    }
    return(
        <View style = {styles.block}>
            <TextInput
                style = {styles.input}
                onChangeText = {setValue}
                value = {value}
                placeholder= "Напишите задачу"
            />
            <Button title ="Добавить" onPress = {pressHandler}/>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomColor: '#3949ab',
    }
});