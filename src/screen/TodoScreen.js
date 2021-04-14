import React, { useState } from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import {AppCard} from "../components/ui/AppCart";
import {EditModal} from "../components/EditModal";

export const TodoScreen = ({goBack, todo, onRemove,updateToDo}) => {

    const [modal,setModal] = useState(false);

    const saveHandler = (title) => {
        updateToDo(todo.id, title);
        setModal(false);
    }

    return(
        <View>
            <EditModal updateToDo = {saveHandler} value = {todo.title} visible = {modal} onCancel = {goBack}/>
            <AppCard style = {styles.card}>
                <Text style = {styles.title}>{todo.title}</Text>
                <Button title = "Ред." onPress = {() => setModal(true)}/>
            </AppCard>
            <View style = {styles.buttons}>
                <View style = {styles.button}>
                    <Button title = "Назад" color = "#757575" onPress = {goBack}/>
                </View>
                <View style = {styles.button}>
                    <Button
                        title = "Удалить"
                        color = "#e53935"
                        onPress = {() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({

    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width:"40%"
    },
    title: {
        fontSize:20
    }
});