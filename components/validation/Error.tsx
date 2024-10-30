import React from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'


export default function Error({ message }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <MaterialIcons name="error" size={24} color="red" />
            <Text style={{ color: 'red', fontWeight: 'normal', flexShrink: 1 }}>
                {message}
            </Text>
        </View>
    )
}
