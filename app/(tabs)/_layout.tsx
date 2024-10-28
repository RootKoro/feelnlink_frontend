import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarInactiveTintColor: '#111',
                tabBarActiveTintColor: 'white',
                tabBarBackground: () => (
                    <LinearGradient colors={['#FB6D48', '#FD8D47']} style={{ height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                )
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Accueil",
                    tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,

                }} />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Recherche",
                    tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,

                }} />
            <Tabs.Screen
                name="new-post"
                options={{
                    title: "Post",
                    tabBarIcon: ({ color }) => <Feather name="plus-square" size={34} color={color} />,
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: "Notifications",
                    tabBarIcon: ({ color }) => <Feather name="bell" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Paramètres",
                    tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} />,
                }}
            />

        </Tabs>
    );
}
