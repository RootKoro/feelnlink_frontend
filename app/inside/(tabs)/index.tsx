import Avatar from '@/components/ui/Avatar'
import Post from '@/components/ui/Post'
import ScreenTitle from '@/components/ui/ScreenTitle'
import { Spacing } from '@/constants/Spacing'
import { useSession } from '@/context/ctx'
import React from 'react'
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'

export default function HomeScreen() {
    const { signOut } = useSession()
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <ScreenTitle title={'Publications'} />
                    <Avatar color={'#D74B76'} />
                </View>
                <ScrollView style={{ height: '93%' }} showsVerticalScrollIndicator={false}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />

                </ScrollView>
                {/* <Pressable onPress={() => { signOut() }}>
                    <Text>Sign Out</Text>
                </Pressable> */}
            </View>
        </SafeAreaView>
    )
}
