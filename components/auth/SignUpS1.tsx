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

export default function SignUpS1({ setSteps, setRegisterFormData }) {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            pseudo: "",
        },
    })
    const onSubmit = (data: any) => {
        setSteps(2)
        setRegisterFormData(prev => ({ ...prev, pseudo: data.pseudo }))

    }

    return (
        <View style={[styles.hPadding, { flex: 7 }]}>
            <View style={{ flex: 7, marginTop: 20, gap: 20 }}>

                {(errors.pseudo) && <Error message={errors.pseudo.message} />}

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Choisissez un pseudo anonyme</Text>

                    <Controller
                        control={control}
                        rules={{
                            required: 'Veuillez saisir un pseudo',
                            minLength: {
                                value: 3,
                                message: 'Le pseudo doit comporter au moins 3 caractères',
                            },
                            pattern: {
                                value: /^[A-Za-z0-9@_-]+$/,
                                message: 'Le pseudo ne peut contenir que des lettres, chiffres, et caractères spéciaux (@, _, -)',
                            },
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
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