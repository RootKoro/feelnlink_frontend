import AccountMenuItem from '@/components/ui/AccountMenuItem'
import Avatar from '@/components/ui/Avatar'
import ScreenTitle from '@/components/ui/ScreenTitle'
import { Colors } from '@/constants/Colors'
import { Spacing } from '@/constants/Spacing'
import { Texts } from '@/constants/Titles'
import { Link } from 'expo-router'
import { Bookmark, ChevronRight, HandHelping, KeyRound, LogOut, SendHorizonal } from 'lucide-react-native'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ViewStyle, ScrollView } from 'react-native'

export default function SettingsScreen() {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1, }}>
            <View style={{ paddingHorizontal: Spacing.app.horizontalPadding, }}>
                <ScreenTitle title={'Mon Compte'} />
            </View>
            <ScrollView style={{ paddingHorizontal: Spacing.app.horizontalPadding, flex: 1, marginTop: 30 }}>
                <View style={{ gap: 30 }}>

                    <Link href="/inside/(my-account)/user-profile" style={{
                        backgroundColor: "#F3F3F3",
                        padding: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <Avatar
                            color={'orange'}
                            size={40}
                            boxSize={80}
                            borderRadius={20}
                        />

                        <View style={{ gap: 5 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 23 }}>johndoe</Text>
                            <Text style={{ fontSize: 14, color: Colors.orangeGradient.primary, borderBottomWidth: 1, borderColor: Colors.orangeGradient.primary }}>Voir mon profil</Text>
                        </View>
                    </Link>

                    <View style={styles.containerBox}>
                        <AccountMenuItem label={'Mes Publications'} icon={<SendHorizonal color={Colors.orangeGradient.primary} />} />
                        <Seperator />
                        <AccountMenuItem label={'Mes Favoris'} icon={<Bookmark color={Colors.orangeGradient.primary} />} />
                    </View>

                    <View style={styles.containerBox}>
                        <AccountMenuItem label={'FAQ'} icon={<HandHelping color={Colors.orangeGradient.primary} />} />
                    </View>

                    <View style={styles.containerBox}>
                        <AccountMenuItem label={'À propos'} icon={<KeyRound color={Colors.orangeGradient.primary} />} />
                    </View>

                    <View style={styles.containerBox}>
                        <AccountMenuItem label={'Se déconnecter'} icon={<LogOut color={Colors.orangeGradient.primary} />} />
                    </View>
                </View>

            </ScrollView>


        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    containerBox: {
        backgroundColor: "#F3F3F3",
        padding: 10,
        borderRadius: 10,
        gap: 10
    }
})

const seperatorStyles: ViewStyle = {
    height: 1, width: '100%', backgroundColor: "#D9D9D9"
}

const Seperator = () => <View style={seperatorStyles} />;