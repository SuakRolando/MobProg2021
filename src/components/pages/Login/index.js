import React from 'react';          
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

/*Class base component
class App extends Component{
  render(){
    return (
      <View>                                    
        <Text>Hello World</Text>
      </View>
    )
  }
  
}
*/

const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Gap height={40} />
      <TextInput label="Username" placeholder="Masukan username anda"/>
      <Gap height={24} />
      <TextInput label="Password" placeholder="Masukan password anda"/>
      <Gap height={48} />
      <Button label="Sign In"/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    marginVertical: 20,
    borderStartColor: 'grey',
  },
  title:{
    fontSize: 35,
    fontWeight: '700',
  },

})

export default App;
