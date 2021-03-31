import React from 'react';
import {View, Text, StyleSheet, TextInput as Input} from 'react-native';

// const TextInput = props => {     //ambil props
const TextInput = ({label, placeholder}) => {
    return (
       <View>
            <Text style={styles.labelInput}>{label}</Text>
            <Input style={styles.input} placeholder={placeholder} />
       </View>
    );
};

const styles = StyleSheet.create({
    labelInput:{
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 15,
        paddingLeft: 15,
        paddingVertical: 15,
    },
});

export default TextInput;