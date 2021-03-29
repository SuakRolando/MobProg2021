import React, { Component } from 'react';          
import {Text, View, StyleSheet} from 'react-native';
import Title from './components/Welcome';


//Class base component
class App extends Component{
  render(){
    return (
      <View style={styles.container}>                                    
        <Title />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
  },
});

export default App;