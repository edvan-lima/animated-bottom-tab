import { View, Text } from "react-native"
import React from "react"
import ColorList from "@/components/ColorList"
import { StatusBar } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function Home() {
  return (
    <View>
      <ColorList color="#0891b2" />
    </View>
  )
}
