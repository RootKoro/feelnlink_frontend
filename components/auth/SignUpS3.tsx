import React, { useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '@/constants/GlobalStyle'
import Checkbox from 'expo-checkbox'
import { Link, router } from 'expo-router'
import { useForm, Controller } from "react-hook-form"
import Error from '../validation/Error'


export default function SignUpS3({ setSteps, setRegisterFormData }) {
    const [showPassword, setShowPassword] = useState(true);
    const [isChecked, setChecked] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
        getValues
    } = useForm({
        defaultValues: {
            password: "",
            confirmPassword: "",
            acceptGCU: false
        },
    })

    const onSubmit = (data: any) => {
        setSteps(4)
        setRegisterFormData(prev => ({ ...prev, password: data.password }))

    }

    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, marginTop: 20, gap: 20 }}>
                <View>
                    {(errors.password) && <Error message={errors.password.message} />}
                    {(errors.confirmPassword) && <Error message={errors.confirmPassword.message} />}
                    {(errors.acceptGCU) && <Error message={errors.acceptGCU.message} />}

                </View>


                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Mot de passe</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Veuillez saisir un mot de passe',
                            minLength: {
                                value: 8,
                                message: 'Le mot de passe doit comporter au moins 8 caractères',
                            },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                message: 'Le mot de passe doit contenir une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial',
                            },
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

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Confirmer le mot de passe</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: 'Veuillez confirmer le mot de passe',
                            validate: value =>
                                value === getValues('password') || 'Les mots de passe ne correspondent pas',
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

                            </View>

                        )}
                        name="confirmPassword"
                    />

                </View>

                <Controller
                    control={control}
                    rules={{
                        required: "Veuillez accepter les conditions générales d'utilisation"
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.section}>
                            <Checkbox
                                style={styles.checkbox}
                                value={value} // Bind checkbox state to Controller's value
                                onValueChange={(checked) => {
                                    setChecked(checked); // Update local state
                                    onChange(checked); // Update form state
                                }}
                                color={value ? Colors.orangeGradient.primary : '#D9D9D9'}
                            />
                            <Text style={styles.paragraph}>
                                J’accepte les <Link href={'/gcu'} style={{ fontWeight: 'bold' }}>conditions générales d’utilisation</Link>
                            </Text>
                        </View>

                    )}

                    name='acceptGCU'
                />

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