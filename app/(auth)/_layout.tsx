import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthRoutesLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }

  if (isSignedIn) {
    return <Redirect href="/(call)" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#5F5DEC" }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Sign In to get started",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            title: "Create In a new account",
            headerBackTitle: "Sign In",
            headerStyle: { backgroundColor: "#5F5DEC" },
            headerTintColor: "white",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
}
