import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const Button = ({label}) => {
    return (
        <TouchableOpacity style={styles.button}>
        <Text style={styles.labelbutton}>{label}</Text>
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#ffc93c',
        paddingVertical: 15,
        borderRadius: 10,
      },
      labelbutton:{
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontWeight: '700',    
      },
});

export default Button;