import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import stackNavigator from "./stackNavigator";
import tabStack from "./bottomNavigator";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import navContainerGS from "../screens/screen3";
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: "#ffffff",
      }}
      drawerStyle={{
        backgroundColor: "#fca311",
        width: 250,
      }}
    >
      <Drawer.Screen
        name="Countries"
        component={stackNavigator}
        options={{
          drawerIcon: () => (
            <Ionicons name="md-flag" size={30} color="#14213d" />
          ),
        }}
      />
      <Drawer.Screen
        name="Summary"
        component={navContainerGS}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="collections" size={30} color="#14213d" />
          ),
        }}
      />
      <Drawer.Screen
        name="Continents"
        component={tabStack}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="landscape" size={30} color="#14213d" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
