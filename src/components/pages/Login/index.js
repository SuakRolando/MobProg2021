import React, {useState, useEffect} from 'react';          
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';


const App = () => {

  const [welcome, setWelcome] = useState('Haii');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Componen Did mount');
  }, []);

  useEffect(()=> {
    console.log('Componen did update');
  }, [welcome])

  const handleSubmit = () =>{
    setWelcome('Welcome');

    const data = {
      userName: userName,
      password: password,
    };
    console.log(data);
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{welcome}</Text>
      <Gap height={40} />
      <TextInput value= {userName} label="Username" placeholder="Masukan username anda" onChangeText={e => setUserName(e)} />
      <Gap height={24} />
      <TextInput value= {password} label="Password" placeholder="Masukan password anda" onChangeText={e => setPassword(e)} secureTextEntry={true} />
      <Gap height={48} />
      <Button label="Sign In" onSubmit={handleSubmit}/>
      
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
