import { Texts } from '@/constants/Titles'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Spacing } from '@/constants/Spacing'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'

export default function index() {

    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                style={styles.gradientBox}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={require('@/assets/images/app-logo.png')}
                        style={styles.logo} />
                    <View>
                        <Text style={styles.title}>Connectez-vous</Text>
                        <Text style={styles.normal}>Accédez à votre simplement et rapidement !</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={[styles.hPadding, { flex: 7 }]}>
                <View>

                </View>
            </View>

            <View style={[[styles.hPadding], { flex: 1 }]}>
                <Pressable>
                    <LinearGradient
                        colors={['#FB6D48', '#FD8D47']}
                        style={{
                            paddingVertical: 10,
                            borderRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{
                            fontSize: Texts.button.size,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            Se connecter
                        </Text>
                        <Feather name="arrow-right" size={24} color="white" />
                    </LinearGradient>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    gradientBox: {
        height: "25%",
        justifyContent: 'center',
        paddingTop: 70,
        paddingBottom: 30,
        marginBottom: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: Spacing.app.horizontalPadding,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20
    },

    title: {
        fontSize: Texts.bigTitle.size,
        color: 'white',
        fontWeight: '900'
    },

    normal: {
        color: "white",
        fontSize: Texts.normal.size

    },

    logo: {
        width: 50,
        height: 50
    },

    hPadding: {
        paddingHorizontal: Spacing.app.horizontalPadding,
    }
})
