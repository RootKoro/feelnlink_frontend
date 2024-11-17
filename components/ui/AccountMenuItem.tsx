import { Texts } from '@/constants/Titles'
import { ChevronRight } from 'lucide-react-native'
import React from 'react'
import { View, Text } from 'react-native'

type AccountMenuItemProps = {
    label: string,
    icon: React.ReactNode
}

export default function AccountMenuItem({ label, icon }: AccountMenuItemProps) {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
        }}>
            <View style={{
                gap: 15, flexDirection: 'row',
                alignItems: 'center',
            }}>
                {icon}
                <Text style={{
                    fontSize: 16,
                    fontWeight: 600
                }}>
                    {label}
                </Text>
            </View>
            <ChevronRight color='black' />
        </View>
    )
}
