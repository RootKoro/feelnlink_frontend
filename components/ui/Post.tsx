import React from 'react'
import { Text, View } from 'react-native'
import Avatar from './Avatar'
import { Bookmark, Ellipsis, MessageSquareText, SmilePlus } from 'lucide-react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Texts } from '@/constants/Titles'
import { Colors } from '@/constants/Colors'

export default function Post() {
    return (
        <View style={{ borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20, borderBottomColor: "#D9D9D9", gap: 15 }}>
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
                <Text style={{ fontSize: 18, fontWeight: 400, gap: 10 }}>
                    Parfois, je me demande si quelqu’un se soucie vraiment de ce que je ressens
                </Text>


                <LinearGradient
                    colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                    style={{ width: 90, paddingHorizontal: 5, paddingVertical: 2, borderRadius: 5, }}>
                    <Text style={{ color: 'white', textAlign: "center" }}>Dépression</Text>
                </LinearGradient>

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
