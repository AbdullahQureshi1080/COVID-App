import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator();

const globalSummary = () =>{
    return(
        <View style={styles.container}>
            <Text>Details ka rola ider karay gai</Text>
        </View>
    );
}

const navContainerGS = () =>{
    return(
        <Stack.Navigator 
            initialRouteName="Global Summary"
            screenOptions={({navigation})=>({
                headerLeft: () => (
                    <View style={{paddingLeft:10 }}>
                        <Ionicons 
                          name="md-arrow-back" 
                          size={32} 
                          color="black"
                          onPress={()=>navigation.goBack()}
                      />  
                    </View>    
                  ),
            })}
            >
            <Stack.Screen name = "Global Summary" component = {globalSummary}/>
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
export default navContainerGS;