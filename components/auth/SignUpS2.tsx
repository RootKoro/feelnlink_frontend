import React from 'react'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '@/constants/GlobalStyle'

export default function SignUpS2({ setSteps }) {
    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, marginTop: 20 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Renseignez un email valide</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder='Votre pseudo' />
                </View>

            </View>

            <View style={{ flex: 1 }}>
                <Pressable onPress={() => setSteps(3)}>
                    <LinearGradient
                        colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                        style={styles.button}>
                        <Text style={{
                            fontSize: Texts.button.size,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            Suivant
                        </Text>
                        <Feather name="arrow-right" size={24} color="white" />
                    </LinearGradient>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    hPadding: {
        paddingHorizontal: Spacing.app.horizontalPadding,
    },

    button: {
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
})