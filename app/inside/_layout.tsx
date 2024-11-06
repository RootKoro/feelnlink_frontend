import { router, Stack } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import React from 'react'
import { Pressable, Text } from 'react-native'

export default function PostLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false,
            headerTransparent: true,
            headerLeft: () => (
                <Pressable onPress={() => router.back()} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ArrowLeft color={'white'} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Retour</Text>
                </Pressable>
            ),

        }}>
            <Stack.Screen name='(tabs)' />
            <Stack.Screen name='mood' options={{
                headerShown: true,
                headerTitle: ""

            }} />

        </Stack>
    )
}