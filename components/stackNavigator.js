import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import APIDataScreen from "./screens/screen1";
import countryDetail from "./screens/screen2";

const Stack = createStackNavigator();
const Names = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};
const Names2 = () => {
  return (
    <View style={styles.container}>
      <Text> your app!</Text>
    </View>
  );
};

const stackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName={"One"}
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          <View style={{ paddingLeft: 10 }}>
            <Ionicons
              name="md-menu"
              size={32}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen name="Home" component={APIDataScreen} />
      <Stack.Screen name="Details" component={countryDetail} />
      {/* <Stack.Screen name="Three" component={Names} />
      <Stack.Screen name="Four" component={Names2} /> */}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default stackNavigator;
