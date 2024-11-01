import Avatar from '@/components/ui/Avatar'
import ScreenTitle from '@/components/ui/ScreenTitle'
import { Spacing } from '@/constants/Spacing'
import { useSession } from '@/context/ctx'
import React from 'react'
import { Pressable, SafeAreaView, Text, View } from 'react-native'

export default function HomeScreen() {
    const { signOut } = useSession()
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <ScreenTitle title={'Feed'} />
                    <Avatar />
                </View>
                <Pressable onPress={() => { signOut() }}>
                    <Text>Sign Out</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
