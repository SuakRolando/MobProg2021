import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'
import Card from '../../molecules/Card';
import Axios from 'axios';


const UserList = () => {
    const[users, setUsers] = useState([]);
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/users').then(res => setUsers(res.data.data),);
    }, [])


    return (
        <View>
            <Text style={styles.title}>User List</Text>
            <TextInput style={styles.place} placeholder= {
                users.map(item => (
                    <Card key={item.id} name={item.name} email={email} address={item.address} phone={item.phone} />
                ))
            } />
   
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 36,
        fontWeight: '700',
        fontFamily: 'Roboto',
        width: 163,
        height:42,
        marginTop: 24,
        marginLeft: 24,
        marginBottom:31,
    },
    place: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 12,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginLeft: 25,
        marginRight:22,
        paddingTop: 14,
        paddingBottom: 11,
        paddingLeft: 10, 
    },
})

export default UserList
