import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function (props) {
    const { friend, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: friend.picture.thumbnail }} />
                <View style={styles.info}>
                    <Text style={styles.text}>{friend.name.first} {friend.name.last}</Text>
                    <Text style={styles.smalltext}>{friend.email}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row'
    },
    info: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 10
    },
    text: {
        fontSize: 20
    },
    smalltext: {
        fontSize: 16,
        fontWeight: '100'
    }
})
