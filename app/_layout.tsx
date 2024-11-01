import { Slot, Stack } from "expo-router";
import { SessionProvider } from "../context/ctx";

export default function RootLayout() {
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
