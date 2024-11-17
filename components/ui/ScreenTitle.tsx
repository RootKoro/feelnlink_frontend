import React from 'react'
import { Text } from 'react-native'

type ScreenTitleProps = {
    title: string
}

export default function ScreenTitle({ title }: ScreenTitleProps) {
    return (
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
    )
}
