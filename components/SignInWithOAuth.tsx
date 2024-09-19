import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import React, { useCallback } from "react";
import StyledButton from "./StyledButton";

const SignInWithOAuth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/(call)/", { scheme: "myapp" }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return <StyledButton title="Sign in with Google" onPress={onPress} />;
};
export default SignInWithOAuth;
