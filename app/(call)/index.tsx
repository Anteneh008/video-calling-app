import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View>
      <SignedIn>
        <Text>you are signed in</Text>
      </SignedIn>
      <SignedOut>
        <Text>you are signed out</Text>
      </SignedOut>
    </View>
  );
}
