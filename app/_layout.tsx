import "react-native-reanimated";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { Slot } from "expo-router";
import { tokenCache } from "@/lib/auth";
import { RootSiblingParent } from "react-native-root-siblings";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error(
    "Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env"
  );
}

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <RootSiblingParent>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Slot />
          </GestureHandlerRootView>
        </RootSiblingParent>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
