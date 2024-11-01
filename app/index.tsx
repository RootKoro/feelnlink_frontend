import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/constants/GlobalStyle'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function index() {
    return (
        <LinearGradient
            style={{ flex: 1, padding: Spacing.app.horizontalPadding, gap: 20 }}
            colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}>
            <View style={{ flex: 5, justifyContent: 'flex-end' }}>
                <Text style={{ color: 'white', fontWeight: 900, fontSize: 55 }}>Partagez vos pensées en toute liberté !</Text>
                <Text style={{ color: 'white', fontSize: Texts.normal.size }}>Connectez-vous ou inscrivez-vous pour rejoindre la communauté.</Text>
            </View>
            <View style={{ flex: 1, gap: 10 }}>
                <LinearGradient
                    colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]} style={{
                        borderRadius: 10,

                    }}>
                    <Link href={'/authentication?mode=login'} style={[globalStyles.button, { width: '100%' }]}>
                        <Text style={{
                            fontSize: Texts.button.size,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign: 'center',
                        }}>
                            Se connecter
                        </Text>
                    </Link>
                </LinearGradient>

                <Link href={'/authentication?mode=signup'} style={[globalStyles.button2, { width: '100%' }]}>
                    <Text style={{
                        fontSize: Texts.button.size,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        S'inscrire
                    </Text>
                </Link>
            </View>
        </LinearGradient>

    )
}
