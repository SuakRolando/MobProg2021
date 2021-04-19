import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Axios from 'axios';
import Button from '../../atoms/Button';

const HomeScreen = () =>{
    const[users, setUsers] = useState([]);

    useEffect(() => {
        //Fetch
        //fetch('https://reqres.in/api/users').then(res => res.json()) .then(json => setUsers(json.data));

        //Axios
        Axios.get('http://localhost:8081/users').then(res => setUsers(res.data),);
    }, [users])

    const handleSubmit = () => {
        const data = {
            email : 'ando@gmail.com',
            first_name :'ando',
            last_name : 'suak',
            avatar : 'https://reqres.in/img/faces/12-image.jpg',
        };
        Axios.post('http://localhost:8081/users',data);
    };

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Home Screen</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Button label="Tambah" onSubmit={handleSubmit}/>
                {
                    users.map(item => (
                        <Card key={item.id} fullName={`${item.first_name} ${item.last_name}`} email={item.email} imageUrl={item.avatar} />
                    ))
                }
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: '700',
    },
    name:{
        fontSize: 18,
        fontWeight: '700',
    },
    email: {
        fontSize: 16,
        color: 'blue',
        marginTop: 10,
    },
    image: {
        height: 150,
        width: 150,
        marginTop: 10,
    },
    card: {
        marginTop: 15,
        alignItems: 'center',
    },
});