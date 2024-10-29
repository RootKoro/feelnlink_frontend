import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { Link } from 'expo-router'
import { globalStyles } from '@/constants/GlobalStyle'
import { OtpInput } from "react-native-otp-entry";

export default function SignUpS4({ setSteps }) {
    const [otp, setOtp] = useState('');
    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, marginTop: 20 }}>
                <View>
                    <Text style={{ fontWeight: 'normal', fontSize: 16, marginBottom: 16 }}>Nous avons envoyer un code pour la vérification au mail johndoe@mail.ex</Text>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor={Colors.violetGradient.primary}
                        theme={{
                            containerStyle: styles.pinViewContainer,
                            pinCodeContainerStyle: styles.pinCodeContainer,
                            pinCodeTextStyle: styles.pinCodeText,


                        }}
                        onTextChange={(text) => setOtp(text)} />
                </View>
            </View>

            {/* <View style={{ flex: 1 }}>
                <Pressable href={'/(tabs)'}>
                    <LinearGradient
                        colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                        style={styles.button}>
                        <Text style={{
                            fontSize: Texts.button.size,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            Vérifier
                        </Text>
                        <Feather name="arrow-right" size={24} color="white" />
                    </LinearGradient>
                </Pressable>
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    pinViewContainer: {
        gap: 10
    },

    pinCodeText: {
        fontWeight: 'bold',
        fontSize: 50
    },

    pinCodeContainer: {
        flexGrow: 1,
        height: 90
    },

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