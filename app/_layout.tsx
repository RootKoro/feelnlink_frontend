import { router, Slot, Stack } from "expo-router";
import { SessionProvider } from "../context/ctx";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";

export default function RootLayout() {

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);

    // have to remove next line when u done
    router.replace('/(app)')
  }, []);



  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
