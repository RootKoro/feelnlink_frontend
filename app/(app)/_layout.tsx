import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../context/ctx';
import { setStatusBarStyle } from "expo-status-bar";



export default function AppLayout() {
    useEffect(() => {
        setTimeout(() => {
            setStatusBarStyle("dark");
        }, 0);
    }, []);

    const { session, isLoading } = useSession();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/authentication" />;
    }

    // This layout can be deferred because it's not the root layout.
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
    )
}
