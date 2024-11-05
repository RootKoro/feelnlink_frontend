import { User } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'

type AvatarProps = {
    color: string
}

export default function Avatar({ color }: AvatarProps) {
    return (
        <View style={{ backgroundColor: color, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
            <User color={'#fff'} size={24} />
        </View>
    )
}
