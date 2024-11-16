import { router, Slot, Stack } from "expo-router";
import { SessionProvider } from "../context/ctx";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";
import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  // const [loaded, error] = useFonts({
  //   'Montserrat': require('@/assets/fonts/Montserrat-Variable.ttf'),
  // });

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);

    // have to remove next line when u done
    // router.replace('/inside/(tabs)')
  }, []);





  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
