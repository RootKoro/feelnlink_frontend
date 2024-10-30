import React from 'react'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '@/constants/GlobalStyle'
import { useForm, Controller } from "react-hook-form"
import Error from '../validation/Error'

export default function SignUpS2({ setSteps, setRegisterFormData }) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
        },
    })
    const onSubmit = (data: any) => {
        setSteps(3)
        setRegisterFormData(prev => ({ ...prev, email: data.email }))

    }
    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, marginTop: 20, gap: 20 }}>
                {(errors.email) && <Error message={errors.email.message} />}

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Renseignez un email valide</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: 'Veuillez saisir un email',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Veuillez saisir un email valide',
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Votre email'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                    />
                </View>

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