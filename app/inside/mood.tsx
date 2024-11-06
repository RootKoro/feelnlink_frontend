import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, SafeAreaView, ScrollView, Button, Pressable } from 'react-native';
import { moods } from '@/constants/CatMoods';
import { Spacing } from '@/constants/Spacing';
import { router } from 'expo-router';
import { setStatusBarStyle } from 'expo-status-bar';

const MoodItem = ({ name, emoji }) => (
    <View style={styles.item}>
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.name}>{name}</Text>
    </View>
);

export default function Mood() {


    return (
        <LinearGradient colors={[Colors.violetGradient.primary, Colors.violetGradient.secondary]} style={{ flex: 1, justifyContent: 'center' }}>
            <SafeAreaView>
                <View style={[styles.page, {
                    paddingHorizontal: Spacing.app.horizontalPadding,
                    flexDirection: 'column',
                    gap: 20,
                }]}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',

                    }}>Avant de poster choisissez une
                        catégorie pour votre post !</Text>

                    <FlatList
                        data={moods}
                        renderItem={({ item }) => (
                            <MoodItem name={item.name} emoji={item.emoji} />
                        )}
                        numColumns={3}
                        style={{
                            backgroundColor: 'rgba(247, 247, 247, 0.25)',
                            borderRadius: 20,
                            padding: 10,
                            maxHeight: "90%"
                        }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                {/* <ScrollView style={[styles.page, {
                    paddingHorizontal: Spacing.app.horizontalPadding,
                }]}>
                    {moods.map((mood) => (
                        <MoodItem key={mood.id} name={mood.name} emoji={mood.emoji} />
                    ))}
                </ScrollView> */}

            </SafeAreaView>
        </LinearGradient>



    );
}


const styles = StyleSheet.create({


    page: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        gap: 5,
    },
    item: {
        justifyContent: 'center',
        padding: 2,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        gap: 10,
        marginRight: 10,
        marginBottom: 10

    },
    emoji: {
        fontSize: 24,
        color: "white",

    },
    name: {
        marginTop: 5,
        fontSize: 16,
        color: "white",
        fontWeight: 'bold'

    },
});