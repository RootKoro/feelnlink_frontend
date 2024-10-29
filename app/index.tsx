import { Texts } from '@/constants/Titles'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Spacing } from '@/constants/Spacing'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'
import Login from '@/components/auth/Login'
import SignUp from '@/components/auth/SignUp'

export default function index() {

    const [isLogin, setIsLogin] = useState(true);

    return (
        <View style={styles.container}>
            <LinearGradient colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                style={styles.gradientBox}>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image source={require('@/assets/images/app-logo.png')}
                        style={styles.logo} />
                    <View>
                        <Text style={styles.title}>{isLogin ? 'Connectez-vous' : 'Inscrivez-vous'} </Text>
                        <Text style={styles.normal}>Accédez à votre simplement et rapidement !</Text>
                    </View>
                </View>
            </LinearGradient>

            <View style={styles.hPadding}>
                <View style={{
                    backgroundColor: "rgba(103, 63, 105, 0.2)",
                    padding: 7,
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                }}>
                    <LinearGradient
                        colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}
                        style={{
                            height: '100%',
                            width: '50%',
                            position: 'absolute',
                            left: isLogin ? 6 : null,
                            right: !isLogin ? 6 : null,
                            top: 7,
                            borderRadius: 10
                        }}></LinearGradient>
                    <Pressable onPress={() => setIsLogin(true)} style={[styles.button, {
                        flexGrow: 1,
                    }]}>

                        <Text style={isLogin ? styles.tabText : styles.unactiveTabText}>
                            Connexion
                        </Text>

                    </Pressable>
                    <Pressable onPress={() => setIsLogin(false)} style={[styles.button, {
                        flexGrow: 1
                    }]}>

                        <Text style={!isLogin ? styles.tabText : styles.unactiveTabText}>
                            Inscription
                        </Text>
                    </Pressable>

                </View>
            </View>
            {
                isLogin ? <Login /> : <SignUp />
            }
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

    button: {
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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

    tabText: {
        fontSize: Texts.normal.size,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    unactiveTabText: {
        fontSize: Texts.normal.size,
        fontWeight: 'bold',
        color: '#673F69',
        textAlign: 'center',
    },

    hPadding: {
        paddingHorizontal: Spacing.app.horizontalPadding,
    }
})
