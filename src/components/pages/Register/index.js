import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Card from '../../molecules/Card';
import Axios from 'axios';

const Register = () => {
  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://10.0.2.2:3004/users').then(res => setUsers(res.data));
  }, [users]);

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    Axios.post('http://10.0.2.2:3004/users', data);
  };

  return (
      <View>
        <TextInput
          value={firstName}
          label="First Name"
          placeholder="Masukan nama depan anda"
          onChangeText={e => setFirstName(e)}
        />
        <TextInput
          value={lastName}
          label="Last Name"
          placeholder="Masukan nama belakang anda"
          onChangeText={e => setLastName(e)}
        />
        <TextInput
          value={email}
          label="Email"
          placeholder="Masukan email anda"
          onChangeText={e => setEmail(e)}
        />
        <Button label="Submit" onSubmit={handleSubmit} />
      </View>
  );
};

export default Register;
