import { User } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'

type AvatarProps = {
    color: string,
    size?: number,
    boxSize?: number,
    borderRadius?: number
}

export default function Avatar({ color, size, boxSize, borderRadius }: AvatarProps) {
    return (
        <View style={{
            backgroundColor: color,
            width: boxSize ?? 40,
            height: boxSize ?? 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: borderRadius ?? 15
        }}>
            <User color={'#fff'} size={size ?? 24} />
        </View>
    )
}
