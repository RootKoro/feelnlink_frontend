import React from 'react'
import { Text } from 'react-native'

export default function ScreenTitle({ title }) {
    return (
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
    )
}
