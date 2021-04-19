import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = ({fullName, email, imageUrl}) => {
    return (
            <View style={styles.card}>
                <Image style={styles.image} sources={{url: `${imageUrl}`}} />
                <View style={styles.cardRapper}>
                    <Text style={styles.name}>{fullName}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </View>
    );
};

export default Card

const styles = StyleSheet.create({
    card: {
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
    },
    card : {
        marginLeft: 10,
        justifyContent: 'center',
    },
    name:{
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        marginLeft: 26,
        marginTop: 13,
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 16,
        marginLeft: 26,
        marginBottom: 5,
    },
    image: {
        height: 100,
        width: 100,
        marginTop: 10,
        borderRadius: 100,
    },
})
