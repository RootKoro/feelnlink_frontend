import ScreenTitle from '@/components/ui/ScreenTitle'
import { Spacing } from '@/constants/Spacing'
import { Link, router } from 'expo-router'
import { Globe, Lock } from 'lucide-react-native'
import React, { useState } from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'

export default function NewPostScreen() {
    const [postStatus, setPostStatus] = useState()
    const [selectedOption, setSelectedOption] = useState("public")


    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding }}>
                <ScreenTitle title={'Créer un post'} />
            </View>

            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding, gap: 20 }}>


                <View style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
                    <Pressable
                        onPress={() => setSelectedOption('public')}
                        style={[
                            styles.option,
                            selectedOption === 'public' && styles.selectedOption
                        ]}
                    >
                        <Text style={[
                            styles.optionText,
                            selectedOption === 'public' && styles.selectedText
                        ]}>
                            Public
                        </Text>
                        <Globe size={16} color={selectedOption === 'public' ? 'white' : 'black'} />
                    </Pressable>

                    <Pressable
                        onPress={() => setSelectedOption('private')}
                        style={[
                            styles.option,
                            selectedOption === 'private' && styles.selectedOption
                        ]}
                    >
                        <Text style={[
                            styles.optionText,
                            selectedOption === 'private' && styles.selectedText
                        ]}>
                            Privé
                        </Text>
                        <Lock size={16} color={selectedOption === 'private' ? 'white' : 'black'} />
                    </Pressable>
                </View>

                <View>
                    <TextInput
                        multiline={true}
                        placeholder='Exprimez ce que vous ressentez ici...'
                        style={{
                            fontSize: 22,
                        }} />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, gap: 10 }}>
                    <Link href={'/inside/categories'}
                        style={{ backgroundColor: 'black', padding: 5, borderRadius: 5, overflow: 'hidden' }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Catégories
                        </Text>
                    </Link>

                    <Link href={'/inside/mood'}
                        style={{ backgroundColor: 'black', padding: 5, borderRadius: 5, overflow: 'hidden' }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Mood
                        </Text>
                    </Link>

                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    option: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 5,
        backgroundColor: '#ececec',  // Couleur de fond par défaut
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    selectedOption: {
        backgroundColor: '#000',  // Couleur de fond pour l'option sélectionnée
    },
    optionText: {
        color: '#000',
        fontWeight: 'bold',
    },
    selectedText: {
        color: '#fff',  // Texte blanc pour l'option sélectionnée
    },
});