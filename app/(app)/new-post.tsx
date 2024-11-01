import ScreenTitle from '@/components/ui/ScreenTitle'
import { Spacing } from '@/constants/Spacing'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default function NewPostScreen() {
    return (
        <SafeAreaView>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding }}>
                <ScreenTitle title={'Créer un post'} />

            </View>
        </SafeAreaView>
    )
}
