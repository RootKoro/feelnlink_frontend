import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function NotFoundScreen() {
    return (
        <View>
            <Text>404 Error - page not found</Text>
            <Link href="/">Retour à l'accueil</Link>
        </View>
    )
}
