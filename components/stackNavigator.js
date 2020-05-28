import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FetchAPIData from "../screens/screen1";
import CountryStatsScreen from "../screens/screen2";

const Stack = createStackNavigator();

const stackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#14213D",
        },
        headerLeft: () => (
          <View style={{ paddingLeft: 20 }}>
            <Ionicons
              name="md-menu"
              size={32}
              color="white"
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen name="Home" component={FetchAPIData} />
      <Stack.Screen
        name="CountryStats"
        component={CountryStatsScreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons
                name="md-arrow-back"
                size={32}
                color="white"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default stackNavigator;
