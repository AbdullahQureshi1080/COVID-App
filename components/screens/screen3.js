import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View,ActivityIndicator ,FlatList,TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Stack = createStackNavigator();

// const globalSummary = () =>{
//     return(
//         <View style={styles.container}>
//             <Text>Details ka rola ider karay gai</Text>
//         </View>
//     );
// }

 class globalSummary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        // isLoading: true, 
        // // query:"",
        // // dataSource:[],
        // // data:[],
        // search:null,
            newConfirmed: '',
            totalConfirmed: '',
            newDeaths: '',
            totalDeaths: '',
            newRecovered: '',
            totalRecovered: '',
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
            //   isLoading: false,
            //   dataSource: responseJson,
            //   data:responseJson,
            //   // dataSlugs:responseJson.Slug,
            newConfirmed: responseJson.Global.NewConfirmed,
            totalConfirmed: responseJson.Global.TotalConfirmed,
            newDeaths: responseJson.Global.NewDeaths,
            totalDeaths: responseJson.Global.TotalDeaths,
            newRecovered: responseJson.Global.NewRecovered,
            totalRecovered: responseJson.Global.TotalRecovered,
            },
            function() {}
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
     render() {
      if (this.state.isLoading) {
        console.log(this.state.dataSource)
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
            <View>
                <Text>NewConfirmed : {this.state.newConfirmed}</Text>
            </View>
            <View>
                <Text>totalConfirmed : {this.state.totalConfirmed}</Text>
            </View>
            <View>
                <Text>newDeaths : {this.state.newDeaths}</Text>
            </View>
            <View>
                <Text>totalDeaths : {this.state.totalDeaths}</Text>
            </View>
            <View>
                <Text>newRecovered : {this.state.newRecovered}</Text>
            </View>
            <View>
                <Text>totalRecovered : {this.state.totalRecovered}</Text>
            </View>
        </View>
      );
    }
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
                          onPress={()=>navigation.goBack("Home")}
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
    //   backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  
export default navContainerGS;