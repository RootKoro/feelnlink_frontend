import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/constants/GlobalStyle'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, router } from 'expo-router'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { useForm, Controller } from "react-hook-form"
import Error from '../validation/Error'
import { useSession } from '@/context/ctx'

export default function Login() {
    const [showPassword, setShowPassword] = useState(true);
    const { signIn } = useSession()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            pseudo: "",
            password: "",
        },
    })
    const onSubmit = (data: any) => {
        signIn()
        return router.replace('/(app)')
    }

    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, gap: 20 }}>
                {(errors.pseudo || errors.password) && <Error message={'Pseudo ou mot de passe incorrect'} />}

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Pseudonyme</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: false,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                focusable={true}
                                style={globalStyles.input}
                                placeholder='Votre pseudo'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="pseudo"
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Mot de passe</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: false,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="•••••••••••"
                                    secureTextEntry={showPassword}
                                    returnKeyType="send"
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                <Pressable onPress={() => setShowPassword(!showPassword)} style={{ position: 'absolute', top: 12, right: 12 }} >
                                    {
                                        showPassword ?
                                            <Feather name="eye" size={24} color="#A1A1A1" /> :
                                            <Feather name="eye-off" size={24} color="#A1A1A1" />

                                    }
                                </Pressable>
                            </View>

                        )}
                        name="password"
                    />
                </View>

                <Link href={'/(app)'} style={{ textAlign: 'right', fontWeight: 'bold', fontSize: Texts.normal.size }}>Mot de passe oublié ?</Link>

            </View>

            <View style={{ flex: 1 }}>
                <Pressable onPress={handleSubmit(onSubmit)}>
                    <LinearGradient
                        colors={[Colors.orangeGradient.primary, Colors.orangeGradient.secondary]}
                        style={styles.button}>
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
        </View >
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

    hPadding: {
        paddingHorizontal: Spacing.app.horizontalPadding,
    }
})