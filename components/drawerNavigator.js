import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import stackNavigator from "./stackNavigator";
// import {Ionicons} from '@expo/vector-icons';
import bottomTabs from "./bottomNavigator";
import { MaterialIcons,Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import navContainerGS from "./screens/screen3";
const Drawer = createDrawerNavigator();

const MyDrawer = () =>{
   return(
    <Drawer.Navigator>
        <Drawer.Screen 
            name = "Countries" 
            component={stackNavigator}
            options={{
                drawerIcon:()=> <Ionicons name="md-flag" size={30} color="crimson" />
            }}
        />
        <Drawer.Screen 
            name = "Summary" 
            component={navContainerGS}
            options={{
                drawerIcon:()=> <MaterialIcons name="collections" size={24} color="crimson" />
            }}
           />
        <Drawer.Screen 
            name = "Regions" 
            component={bottomTabs}
            options={{
                drawerIcon:()=> <MaterialIcons name="landscape" size={24} color="crimson" />
            }}
            />
    </Drawer.Navigator>
   );
}

export default MyDrawer;