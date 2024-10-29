import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { Texts } from '@/constants/Titles';
import { Spacing } from '@/constants/Spacing';
import { Pressable, StyleSheet, Text, View } from 'react-native'


export default function Steps({ steps, setSteps }) {

    return (
        <View style={[{ paddingHorizontal: Spacing.app.horizontalPadding, flexDirection: 'row', justifyContent: 'space-between' }]}>
            <Pressable onPress={() => setSteps(1)}>
                <LinearGradient
                    colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}
                    style={styles.activeStep}
                >
                    <Text style={{
                        fontSize: Texts.button.size,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                    }}>
                        1
                    </Text>
                </LinearGradient>
            </Pressable>

            {
                steps < 2 ?
                    <Pressable onPress={() => setSteps(2)} disabled={true} style={styles.inactiveStep}>

                        <Text style={styles.inactiveText}>
                            2
                        </Text>
                    </Pressable>
                    :
                    <Pressable onPress={() => setSteps(2)}>
                        <LinearGradient
                            colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}
                            style={styles.activeStep}
                        >
                            <Text style={{
                                fontSize: Texts.button.size,
                                fontWeight: 'bold',
                                color: 'white',
                                textAlign: 'center',
                            }}>
                                2
                            </Text>
                        </LinearGradient>
                    </Pressable>

            }


            {
                steps < 3 ?
                    <Pressable onPress={() => setSteps(2)} disabled={true} style={styles.inactiveStep}>

                        <Text style={styles.inactiveText}>
                            3
                        </Text>
                    </Pressable>
                    :
                    <Pressable onPress={() => setSteps(2)}>
                        <LinearGradient
                            colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}
                            style={styles.activeStep}
                        >
                            <Text style={styles.activeText}>
                                3
                            </Text>
                        </LinearGradient>
                    </Pressable>

            }

            {
                steps < 4 ?
                    <Pressable onPress={() => setSteps(2)} disabled={true} style={styles.inactiveStep}>

                        <Text style={styles.inactiveText}>
                            4
                        </Text>
                    </Pressable>
                    :
                    <Pressable onPress={() => setSteps(2)}>
                        <LinearGradient
                            colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]}
                            style={styles.activeStep}
                        >
                            <Text style={styles.activeText}>
                                4
                            </Text>
                        </LinearGradient>
                    </Pressable>

            }
        </View>
    )
}


const styles = StyleSheet.create({
    activeStep: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveStep: {
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(103, 63, 105, 0.2)'
    },

    activeText: {
        fontSize: Texts.button.size,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

    inactiveText: {
        fontSize: Texts.button.size,
        fontWeight: 'bold',
        color: '#673F69',
        textAlign: 'center',
    }


})
