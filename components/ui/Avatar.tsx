import { User } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'

export default function Avatar() {
    return (
        <View style={{ backgroundColor: '#2E94DC', width: 32, height: 32, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
            <User color={'#fff'} size={24} />
        </View>
    )
}
