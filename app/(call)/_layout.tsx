import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CallRoutesLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          header: () => null,
          tabBarActiveTintColor: "#5F5DEC",
          tabBarStyle: { display: route.name === "[id]" ? "none" : "flex" },
          tabBarLabelStyle: {
            zIndex: 100,
            paddingBottom: 5,
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "All Calls",
            tabBarIcon: ({ color }) => (
              <Ionicons name="call-outline" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="join"
          options={{
            title: "Join Calls",
            headerTitle: "Enter the Room ID",
            tabBarIcon: ({ color }) => (
              <Ionicons name="enter-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
