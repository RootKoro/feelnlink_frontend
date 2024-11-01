import { Texts } from '@/constants/Titles'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable, Animated } from 'react-native'
import { Spacing } from '@/constants/Spacing'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'
import Login from '@/components/auth/Login'
import SignUp from '@/components/auth/SignUp'
import { globalStyles } from '@/constants/GlobalStyle'
import Steps from '@/components/auth/Steps'
import { useLocalSearchParams } from 'expo-router'

export default function Auth() {

    const { mode } = useLocalSearchParams();
    const [isLogin, setIsLogin] = useState(true);
    const [steps, setSteps] = useState(1);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const [tabWidth, setTabWidth] = useState(0);

    const [registerFormData, setRegisterFormData] = useState({
        pseudo: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        if (mode === 'signup') {
            setIsLogin(false);
            // Set the animation to the right position
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 0, // No duration for instant switch
                useNativeDriver: true,
            }).start();
        }
    }, [mode]);

    const translateX = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, tabWidth], // Use tabWidth for responsive layout
    });


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
                <View
                    style={styles.tabContainer}
                    onLayout={(event) => {
                        const width = event.nativeEvent.layout.width / 2; // Get half the width for each tab
                        setTabWidth(width); // Set the tab width
                    }}>
                    <Animated.View
                        style={{
                            height: '100%',
                            width: '50%',
                            position: 'absolute',
                            left: isLogin && 5,
                            right: !isLogin && 5,
                            transform: [{ translateX }],
                            borderRadius: 10,
                        }}
                    >
                        <LinearGradient
                            colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}
                            style={{ height: '100%', width: '100%', borderRadius: 10 }}
                        />
                    </Animated.View>
                    <Pressable onPress={() => {
                        setIsLogin(true)
                        Animated.timing(slideAnim, {
                            toValue: 0,
                            duration: 100,
                            useNativeDriver: true,
                        }).start();
                    }} style={[globalStyles.button, {
                        flexGrow: 1,
                    }]}>

                        <Text style={isLogin ? styles.tabText : styles.unactiveTabText}>
                            Connexion
                        </Text>

                    </Pressable>
                    <Pressable onPress={() => {
                        setIsLogin(false)
                        Animated.timing(slideAnim, {
                            toValue: 1,
                            duration: 100,
                            useNativeDriver: true,
                        }).start();
                    }} style={[globalStyles.button, {
                        flexGrow: 1
                    }]}>

                        <Text style={!isLogin ? styles.tabText : styles.unactiveTabText}>
                            Inscription
                        </Text>
                    </Pressable>

                </View>
            </View>
            <View style={{ flex: 7, marginTop: 30 }}>
                {
                    isLogin ?
                        <Login /> :
                        <>
                            <Steps steps={steps} setSteps={setSteps} />
                            <SignUp
                                steps={steps}
                                setSteps={setSteps}
                                setRegisterFormData={setRegisterFormData}
                                registerFormData={registerFormData}
                            />
                        </>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    tabContainer: {
        backgroundColor: "rgba(103, 63, 105, 0.2)",
        padding: 7,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align items to the left
        alignItems: 'center',
        position: 'relative',
        gap: 10,
    },

    gradientBox: {
        height: "25%",
        justifyContent: 'center',
        paddingTop: 70,
        paddingBottom: 30,
        marginBottom: 20,
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
