import React from 'react'
import { Text, View } from 'react-native'
import Avatar from './Avatar'
import { Bookmark, Ellipsis, MessageSquareText, SmilePlus } from 'lucide-react-native'

export default function Post() {
    return (
        <View style={{ borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20, borderBottomColor: "#D9D9D9", gap: 10 }}>
            {/* post header */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                    <Avatar color={'#2E94DC'} />
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>doedo</Text>
                            <Text>est triste 😔</Text>
                        </View>
                        <Text style={{ fontSize: 12 }}>il y a 2 minutes</Text>
                    </View>
                </View>
                <Ellipsis color={'black'} />
            </View>

            {/* post text */}
            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 400, gap: 10 }}>
                    Parfois, je me demande si quelqu’un se soucie vraiment de ce que je ressens
                </Text>

                <Text>Dépression</Text>
            </View>

            {/* reacts */}

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Text style={{ fontSize: 18 }}>20</Text>
                        <SmilePlus color={'black'} size={20} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
                        <Text style={{ fontSize: 18, }}>20</Text>
                        <MessageSquareText color={'black'} size={20} />
                    </View>

                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                        <Bookmark color={'black'} size={20} />
                    </View>
                </View>
            </View>
        </View>
    )
}
