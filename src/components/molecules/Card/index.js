import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import UserList from '../../pages/User_List'

const Card = ({name, username, email, address, phone}) => {
    return (
        <View>
            <View style={styles.card}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.userName}>{username}</Text>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.phone}>{phone}</Text>
                
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        alignItems: 'center',
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
})