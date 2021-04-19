import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Register from './components/pages/Register';

const App = () => {
  return (
    <View>
      <Text style={styles.Title}>Screen Register</Text>
      <Register />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 24,
    marginVertical: 18,
  },
});
