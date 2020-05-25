import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createMaterialBottomTabs, createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import { MaterialIcons,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

const America = ()=>{
   return(
    <View>
        <Text>America</Text>
    </View>
   );
}

const Asia = ()=>{
   return(
    <View>
         <Text>Asia</Text>
    </View>
   );   
}

const bottomTabs = () => {
    return(
        <Tab.Navigator
        initialRouteName={"Asia"}
        >
            <Tab.Screen name = "Asia" component={Asia}/>
            <Tab.Screen name ="America" component={America}/>
        </Tab.Navigator>
    );
}

export default bottomTabs;