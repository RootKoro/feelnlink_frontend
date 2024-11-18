import ScreenTitle from '@/components/ui/ScreenTitle'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, router } from 'expo-router'
import { ArrowLeft, Globe, Lock } from 'lucide-react-native'
import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'

export default function NewPostScreen() {
    const [postStatus, setPostStatus] = useState()
    const [selectedOption, setSelectedOption] = useState("public")


    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>

            <Pressable onPress={() => router.back()} style={{ paddingHorizontal: Spacing.app.horizontalPadding, flexDirection: 'row', alignItems: 'center' }}>
                <ArrowLeft color={'black'} />
                <ScreenTitle title={'Créer un post'} />
            </Pressable>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust for iOS and Android
                >

                    <View style={{ paddingHorizontal: Spacing.app.horizontalPadding, gap: 20, height: '100%' }}>


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

                        <ScrollView style={{
                            backgroundColor: "#f3f3f3",
                            borderRadius: 10,

                        }}>
                            <TextInput
                                multiline={true}
                                placeholder='Exprimez ce que vous ressentez ici...'
                                placeholderTextColor={'#727272'}
                                style={{
                                    fontSize: 16,
                                    backgroundColor: "#F3F3F3",
                                    borderRadius: 10,
                                    padding: 10,
                                }} />
                        </ScrollView>

                        <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Link href={'/inside/categories'}
                                    style={{
                                        backgroundColor: 'black',
                                        padding: 5,
                                        borderRadius: 5,
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, }}>
                                        Catégories
                                    </Text>
                                </Link>

                                <Link href={'/inside/mood'}
                                    style={{ backgroundColor: 'black', padding: 5, borderRadius: 5, overflow: 'hidden' }}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, }}>
                                        Mood
                                    </Text>
                                </Link>

                            </View>

                            <Pressable>
                                <LinearGradient
                                    colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                                    style={styles.button}>

                                    <Feather name="arrow-right" size={24} color="white" />
                                </LinearGradient>
                            </Pressable>
                        </View>
                    </View>

                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>

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


    button: {
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});