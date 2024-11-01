import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../context/ctx";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
    // <Stack>
    //   <Stack.Screen name="index" options={{ headerShown: false }} />
    //   <Stack.Screen name="auth" options={{ headerShown: false }} />
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    // </Stack>
  );
}
