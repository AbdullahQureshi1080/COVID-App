import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons, FontAwesome5, Entypo } from "@expo/vector-icons";
import {
  AsiaApi,
  SouthAmericaApi,
  NorthAmericaApi,
  AfricaApi,
  AustraliaApi,
  EuropeApi,
} from "../screens/screen4";
import { createStackNavigator } from "@react-navigation/stack";
import style from "../styles/allStyles";

const styles = style;

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const bottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Asia"}
      screenOptions={{ padding: 10 }}
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      shifting={true}
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Asia"
        component={AsiaApi}
        options={{
          tabBarColor: "#f5cb5c",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="globe-asia" size={24} color="yellow" />
          ),
        }}
      />
      <Tab.Screen
        name="SouthAmerica"
        component={SouthAmericaApi}
        options={{
          tabBarColor: "#D02760",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="globe-americas" size={24} color="red" />
          ),
        }}
      />
      <Tab.Screen
        name="North America"
        component={NorthAmericaApi}
        options={{
          tabBarColor: "#D02760",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="globe-americas" size={24} color="red" />
          ),
        }}
      />
      <Tab.Screen
        name="Europe"
        component={EuropeApi}
        options={{
          tabBarColor: "#0466c8",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="globe-europe" size={24} color="blue" />
          ),
        }}
      />
      <Tab.Screen
        name="Australia"
        component={AustraliaApi}
        options={{
          tabBarColor: "#40916c",
          tabBarIcon: ({ color }) => (
            <Entypo name="globe" size={24} color="green" />
          ),
        }}
      />
      <Tab.Screen
        name="Africa"
        component={AfricaApi}
        options={{
          tabBarColor: "#333533",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="globe-africa" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Continents"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: styles.listContainer.backgroundColor,
        },
        headerLeft: () => (
          <View style={{ paddingLeft: 20 }}>
            <Ionicons
              name="md-menu"
              size={32}
              color="#ffffff"
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen name="Continents" component={bottomTabs} />
    </Stack.Navigator>
  );
};

export default tabStack;
