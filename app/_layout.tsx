import CustomBottomTab from "@/components/BottomTabs"
import { Tabs } from "expo-router"
import { StatusBar } from "expo-status-bar"
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
} from "react-native-safe-area-context"

export default function _layout() {
  return (
    <Tabs tabBar={(props) => <CustomBottomTab {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  )
}
