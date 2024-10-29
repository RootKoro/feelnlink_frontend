import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '@/constants/GlobalStyle'
import Checkbox from 'expo-checkbox'

export default function SignUpS3({ setSteps }) {
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, marginTop: 20 }}>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Mot de passe</Text>
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="•••••••••••"
                            secureTextEntry={showPassword}
                            returnKeyType="send"
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', top: 12, right: 12 }} >
                            {
                                showPassword ?
                                    <Feather name="eye" size={24} color="#A1A1A1" /> :
                                    <Feather name="eye-off" size={24} color="#A1A1A1" />

                            }
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Confirmer le mot de passe</Text>
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="•••••••••••"
                            secureTextEntry={showPassword}
                            returnKeyType="send"
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', top: 12, right: 12 }} >
                            {
                                showPassword ?
                                    <Feather name="eye" size={24} color="#A1A1A1" /> :
                                    <Feather name="eye-off" size={24} color="#A1A1A1" />

                            }
                        </Pressable>
                    </View>
                </View>

                <View style={styles.section}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? Colors.orangeGradient.primary : '#D9D9D9'}
                    />
                    <Text style={styles.paragraph}>J’accepte les conditions générales d’utilisation</Text>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <Pressable onPress={() => setSteps(4)}>
                    <LinearGradient
                        colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                        style={styles.button}>
                        <Text style={{
                            fontSize: Texts.button.size,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            Je m'inscris
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

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },

    paragraph: {
        fontSize: Texts.normal.size,
    },
    checkbox: {
        marginRight: 8,
    },
})