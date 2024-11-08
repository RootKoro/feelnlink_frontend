import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../../context/ctx';
import { setStatusBarStyle } from "expo-status-bar";
import { Bell, Cog, House, Search, User2 } from "lucide-react-native";

import SpecialTabBtn from "@/components/ui/SpecialTabBtn";



export default function AppLayout() {
    useEffect(() => {
        setTimeout(() => {
            setStatusBarStyle("dark");
        }, 0);
    }, []);

    const { session, isLoading } = useSession();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <View>
            <ActivityIndicator />
        </View>;
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
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: 'white',
                tabBarBackground: () => (
                    <LinearGradient colors={['#FB6D48', '#FD8D47']} style={{ height: "100%", }} />
                )
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Accueil",
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => <House color={color} fill={focused ? '#FFC0AF' : 'none'} />,

                }} />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Recherche",
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => <Search color={color} fill={focused ? '#FFC0AF' : 'none'} />,

                }} />
            <Tabs.Screen
                name="new-post"
                options={{
                    title: "",
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <SpecialTabBtn />

                    ),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: "Notifications",
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => <Bell color={color} fill={focused ? '#FFC0AF' : 'none'} />,

                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: "Paramètres",
                    tabBarLabel: () => null,
                    tabBarIcon: ({ color, focused }) => <User2 color={color} fill={focused ? '#FFC0AF' : 'none'} />,

                }}
            />

        </Tabs>
    )
}
