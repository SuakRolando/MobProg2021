import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({firstName, email, lastName}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{firstName}</Text>
      <Text email={styles.email}>{email}</Text>
      <Text lastName={styles.name}>{lastName}</Text>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginHorizontal: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'purple',
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'blue',
  },
});