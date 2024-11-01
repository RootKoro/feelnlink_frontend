import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default function NotFoundScreen() {
    return (
        <SafeAreaView>
            <Text>404 Error - page not found</Text>
            <Link href="/">Retour à l'accueil</Link>
        </SafeAreaView>
    )
}
