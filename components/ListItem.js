import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default ({title, onPress}) => {
    return (
        <TouchableOpacity  onPress={onPress} style={styles.container}>
            <Text style={styles.texto}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 65,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingHorizontal: 20,
    },
    texto: {
        fontSize: 18,
    }
});
