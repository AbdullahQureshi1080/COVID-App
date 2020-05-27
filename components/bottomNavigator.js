import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createMaterialBottomTabs,
  createMaterialBottomTabNavigator,
} from "@react-navigation/material-bottom-tabs";
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
// import {AsiaApiScreen} from "./screens/screen4";
import { AsiaApi, SouthAmericaApi, NorthAmericaApi,AfricaApi,AustraliaApi,EuropeApi} from "./screens/screen4";

const Tab = createMaterialBottomTabNavigator();

// const America = () => {
//   return (
//     <View>
//       <Text>America</Text>
//     </View>
//   );
// };

// const Asia = () => {
//   return (
//     <View>
//       <Text>Asia</Text>
//     </View>
//   );
// };

const bottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName={"Asia"} screenOptions={{ padding: 10 }}>
      <Tab.Screen name="Asia" component={AsiaApi} />
      <Tab.Screen name="South America" component={SouthAmericaApi} />
      <Tab.Screen name="North America" component={NorthAmericaApi} />
      <Tab.Screen name="Europe" component={EuropeApi} />
      <Tab.Screen name="Australia" component={AustraliaApi} />
      <Tab.Screen name="Africa" component={AfricaApi} />
    </Tab.Navigator>
  );
};

export default bottomTabs;
