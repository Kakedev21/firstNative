import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Forms from "./src/Forms";
import Logs from "./src/Logs";
import MainScreen from "./src/MainScreen";

const Drawer = createDrawerNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = "#fff";
navTheme.colors.text = "#000";

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator
        initialRouteName="App"
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 240,
          },
          sceneContainerStyle: {
            marginTop: -20,
          },
          headerStyle: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={MainScreen}
          options={styles.nav}
        />
        <Drawer.Screen name="Forms" component={Forms} />
        <Drawer.Screen name="Logs" component={Logs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    marginTop: -56,
  },
});
