import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import FetchAPIData from "./screens/screen1";
import CountryStatsScreen from "./screens/screen2";
// import navContainerGS from "./screens/screen3";

const Stack = createStackNavigator();


const stackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName={"/"}
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
      <Stack.Screen name="Home" component={FetchAPIData} />
      <Stack.Screen 
      name="CountryStats" 
      component={CountryStatsScreen} 
      options={({navigation})=>({
        headerLeft:()=>
          (
            <View style={{ paddingLeft: 10 }}>
              <Ionicons
                name="md-arrow-back"
                size={32}
                color="black"
                onPress={() => navigation.goBack()}
              />
            </View>
          ),
      })}/>
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
