import Avatar from '@/components/ui/Avatar'
import Post from '@/components/ui/Post'
import ScreenTitle from '@/components/ui/ScreenTitle'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { useSession } from '@/context/ctx'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
    const { signOut } = useSession()
    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <ScreenTitle title={'Publications'} />
                    <Avatar color={'#D74B76'} />
                </View>

                <ScrollView horizontal={true} style={{ marginBottom: 10, }} showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>

                        <Pressable>
                            <LinearGradient
                                colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                                style={styles.button}>
                                <Text style={{
                                    fontSize: Texts.normal.size,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    textAlign: 'center',
                                }}>
                                    Fil d'actualité
                                </Text>
                            </LinearGradient>
                        </Pressable>
                        <Pressable style={styles.buttonInactive}>

                            <Text style={styles.inactive}>
                                Dépression 😔
                            </Text>
                        </Pressable>
                        <Pressable style={styles.buttonInactive}>

                            <Text style={styles.inactive}>
                                Motivation 🔥
                            </Text>

                        </Pressable>
                        <Pressable style={styles.buttonInactive}>
                            <Text style={styles.inactive}>
                                Amour ❤️
                            </Text>
                        </Pressable>
                    </View>

                </ScrollView>
                <ScrollView style={{ height: '93%' }} showsVerticalScrollIndicator={false}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />

                </ScrollView>
                {/* <Pressable onPress={() => { signOut() }}>
                    <Text>Sign Out</Text>
                </Pressable> */}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    button: {
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    inactive: {
        fontSize: Texts.normal.size,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },

    buttonInactive: {
        backgroundColor: '#f3f3f3',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})