import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import NotFoundScreen from "../screens/NotFoundScreen";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import ChatRoomScreen from "../screens/ChatRoomScreen";
import HomeScreen from "../screens/HomeScreen";
import UsersScreen from "../screens/UsersScreen";
//import SettingsScreen from "../screens/Settings";

import ChatRoomHeader from "./ChatRoomHeader";
import GroupInfoScreen from "../screens/GroupInfoScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          headerTitle: () => <ChatRoomHeader id={route.params?.id} />,
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen name="GroupInfoScreen" component={GroupInfoScreen} />
      <Stack.Screen
        name="UsersScreen"
        component={UsersScreen}
        options={{
          title: "Users",
        }}
      />
      {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 50,
          fontWeight: "bold",
        }}
      >
        Signal
      </Text>
     
        <Feather
          name="settings"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      <Pressable onPress={() => navigation.navigate("UsersScreen")}>
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      </Pressable>
    </View>
  );
};

// import {
//   NavigationContainer,
//   DefaultTheme,
//   DarkTheme,
//   useNavigation,
// } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import * as React from "react";
// import {
//   ColorSchemeName,
//   View,
//   Text,
//   Image,
//   useWindowDimensions,
//   Pressable,
// } from "react-native";
// import { Feather } from "@expo/vector-icons";

// import NotFoundScreen from "../screens/NotFoundScreen";
// import { RootStackParamList } from "../types";
// import LinkingConfiguration from "./LinkingConfiguration";

// import ChatRoomScreen from "../screens/ChatRoomScreen";
// import HomeScreen from "../screens/HomeScreen";
// import UsersScreen from "../screens/UsersScreen";
// import SettingsScreen from "../screens/Settings";

// import ChatRoomHeader from "./ChatRoomHeader";
// import GroupInfoScreen from "../screens/GroupInfoScreen";

// export default function Navigation({
//   colorScheme,
// }: {
//   colorScheme: ColorSchemeName;
// }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
//     >
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// // A root stack navigator is often used for displaying modals on top of all other content
// // Read more here: https://reactnavigation.org/docs/modal
// const Stack = createNativeStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{ headerTitle: HomeHeader }}
//       />
//       <Stack.Screen
//         name="ChatRoom"
//         component={ChatRoomScreen}
//         options={({ route }) => ({
//           headerTitle: () => <ChatRoomHeader id={route.params?.id} />,
//           headerBackTitleVisible: false,
//         })}
//       />
//       <Stack.Screen name="GroupInfoScreen" component={GroupInfoScreen} />
//       <Stack.Screen
//         name="UsersScreen"
//         component={UsersScreen}
//         options={{
//           title: "Users",
//         }}
//       />
//       <Stack.Screen name="Settings" component={SettingsScreen} />

//       <Stack.Screen
//         name="NotFound"
//         component={NotFoundScreen}
//         options={{ title: "Oops!" }}
//       />
//     </Stack.Navigator>
//   );
// }

// const HomeHeader = (props) => {
//   const { width } = useWindowDimensions();
//   const navigation = useNavigation();

//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//         width,
//         padding: 10,
//         alignItems: "center",
//       }}
//     >
//       <Image
//         source={{
//           uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
//         }}
//         style={{ width: 30, height: 30, borderRadius: 30 }}
//       />
//       <Text
//         style={{
//           flex: 1,
//           textAlign: "center",
//           marginLeft: 50,
//           fontWeight: "bold",
//         }}
//       >
//         Signal
//       </Text>
//       <Pressable onPress={() => navigation.navigate("Settings")}>
//         <Feather
//           name="settings"
//           size={24}
//           color="black"
//           style={{ marginHorizontal: 10 }}
//         />
//       </Pressable>
//       <Pressable onPress={() => navigation.navigate("UsersScreen")}>
//         <Feather
//           name="edit-2"
//           size={24}
//           color="black"
//           style={{ marginHorizontal: 10 }}
//         />
//       </Pressable>
//     </View>
//   );
// };