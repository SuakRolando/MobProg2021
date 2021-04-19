import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 11,
    backgroundColor: 'purple',
    paddingVertical: 15,
    borderRadius: 20,
    marginHorizontal: 24,
  },

  labelButton: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '700',
  },
});

export default Button;