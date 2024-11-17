import ScreenTitle from '@/components/ui/ScreenTitle'
import { Spacing } from '@/constants/Spacing'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const notifications = [
    {
        user: 'rema',
        label: 'rema a aimé une photo que vous avez publié',
        seen: false
    },
    {
        user: 'doe',
        label: 'rema a aimé une photo que vous avez publié',
        seen: true
    },
]
export default function NotificationsScreen() {
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding }}>
                <ScreenTitle title={'Notifications'} />

            </View>
        </SafeAreaView>
    )
}
