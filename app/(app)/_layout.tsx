import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Text, View } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useSession } from '../../context/ctx';
import { setStatusBarStyle } from "expo-status-bar";
import { Bell, Cog, House, Search } from "lucide-react-native";
import Svg, { Defs, Path, Rect, Stop, LinearGradient as SvgLinearGradient } from "react-native-svg";



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
                    <LinearGradient colors={['#FB6D48', '#FD8D47']} style={{ height: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
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
                        <View style={{ alignItems: "center", justifyContent: "center", width: 24, height: 24 }}>
                            <Svg width="40" height="40" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect x="0.5" width="54" height="54" rx="10" fill="url(#paint0_linear_3311_3338)" />
                                <Path d="M23.7185 33.4171C23.5549 32.7827 23.2242 32.2037 22.7608 31.7403C22.2975 31.277 21.7185 30.9463 21.084 30.7826L9.83654 27.8823C9.64464 27.8278 9.47575 27.7123 9.35549 27.5531C9.23523 27.394 9.17017 27.1999 9.17017 27.0005C9.17017 26.801 9.23523 26.607 9.35549 26.4478C9.47575 26.2887 9.64464 26.1731 9.83654 26.1186L21.084 23.2165C21.7183 23.0529 22.2971 22.7225 22.7604 22.2595C23.2237 21.7966 23.5546 21.2179 23.7185 20.5838L26.6189 9.3363C26.6728 9.14365 26.7882 8.97392 26.9476 8.85302C27.107 8.73212 27.3016 8.66667 27.5016 8.66667C27.7017 8.66667 27.8962 8.73212 28.0556 8.85302C28.215 8.97392 28.3305 9.14365 28.3844 9.3363L31.2829 20.5838C31.4465 21.2183 31.7773 21.7973 32.2406 22.2606C32.7039 22.7239 33.2829 23.0546 33.9174 23.2183L45.1649 26.1168C45.3583 26.1701 45.5289 26.2855 45.6504 26.4451C45.772 26.6047 45.8378 26.7998 45.8378 27.0005C45.8378 27.2011 45.772 27.3962 45.6504 27.5558C45.5289 27.7154 45.3583 27.8308 45.1649 27.8841L33.9174 30.7826C33.2829 30.9463 32.7039 31.277 32.2406 31.7403C31.7773 32.2037 31.4465 32.7827 31.2829 33.4171L28.3825 44.6646C28.3286 44.8573 28.2132 45.027 28.0538 45.1479C27.8944 45.2688 27.6998 45.3343 27.4998 45.3343C27.2997 45.3343 27.1052 45.2688 26.9458 45.1479C26.7864 45.027 26.671 44.8573 26.617 44.6646L23.7185 33.4171Z" fill="white" />
                                <Defs>
                                    <SvgLinearGradient id="paint0_linear_3311_3338" x1="27.5" y1="0" x2="27.5" y2="54" gradientUnits="userSpaceOnUse">
                                        <Stop stopColor="#D74B76" />
                                        <Stop offset="1" stopColor="#673F69" />
                                    </SvgLinearGradient>
                                </Defs>
                            </Svg>
                        </View>


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
                    tabBarIcon: ({ color, focused }) => <Cog color={color} fill={focused ? '#FFC0AF' : 'none'} />,

                }}
            />

        </Tabs>
    )
}
