import { useSession } from '@/context/ctx'
import React from 'react'
import { Pressable, SafeAreaView, Text } from 'react-native'

export default function HomeScreen() {
    const { signOut } = useSession()
    return (
        <SafeAreaView>
            <Text>home</Text>
            <Pressable onPress={() => { signOut() }}>
                <Text>Sign Out</Text>
            </Pressable>
        </SafeAreaView>
    )
}
