import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {createStackNavigator} from "@react-navigation/stack";
// import stackNavigator from "./components/stackNavigator";
import MyDrawer from "./components/drawerNavigator";

// const Stack = createStackNavigator();
// const Names = () =>{   
//   return (
//     <View style={styles.container}>
//                 <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }
// const Names2 = () =>{   
//   return (
//     <View style={styles.container}>
//                 <Text> your app!</Text>
//     </View>
//   );
// }

class App extends React.Component {
  // state = {};
  render() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});


export default App;