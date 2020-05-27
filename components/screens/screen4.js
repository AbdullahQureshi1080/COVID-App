import * as React from "react";
import { Text,StyleSheet,View, ActivityIndicator,FlatList,TouchableOpacity,} from "react-native";
// import { TextInput } from "react-native-paper";
// import {createStackNavigator} from "@react-navigation/stack";

// const Stack = createStackNavigator();
export class AsiaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true, 
        // query:"",
        // dataSource:[],
        // data:[],
        search:null,
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/asia')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
              data:responseJson,
              // dataSlugs:responseJson.Slug,
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
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
          {/* <TextInput placeholder="Search">
          </TextInput> */}
          <FlatList
            data={this.state.dataSource.countries}
            renderItem={({ item }) => (
                // console.log(item),
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   // this.props.navigation.navigate({
                //   //   routeName:"ItemDetails",
                //   //   params: { item },
                //   // })
                //   this.props.navigation.navigate("ItemDetails",{item})
                // }
                >
                <View style={styles.listContainer}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.cases}</Text>
                    <Text>{item.deaths}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // ListHeaderComponent={this.header}
          />
        </View>
      );
    }
  }

  export class SouthAmericaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true, 
        // query:"",
        // dataSource:[],
        // data:[],
        search:null,
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/south')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
              data:responseJson,
              // dataSlugs:responseJson.Slug,
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
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
          {/* <TextInput placeholder="Search">
          </TextInput> */}
          <FlatList
            data={this.state.dataSource.countries}
            renderItem={({ item }) => (
                // console.log(item),
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   // this.props.navigation.navigate({
                //   //   routeName:"ItemDetails",
                //   //   params: { item },
                //   // })
                //   this.props.navigation.navigate("ItemDetails",{item})
                // }
                >
                <View style={styles.listContainer}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.cases}</Text>
                    <Text>{item.deaths}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // ListHeaderComponent={this.header}
          />
        </View>
      );
    }
  }

  export class NorthAmericaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true, 
        // query:"",
        // dataSource:[],
        // data:[],
        search:null,
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/north')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
              data:responseJson,
              // dataSlugs:responseJson.Slug,
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
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
          {/* <TextInput placeholder="Search">
          </TextInput> */}
          <FlatList
            data={this.state.dataSource.countries}
            renderItem={({ item }) => (
                // console.log(item),
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   // this.props.navigation.navigate({
                //   //   routeName:"ItemDetails",
                //   //   params: { item },
                //   // })
                //   this.props.navigation.navigate("ItemDetails",{item})
                // }
                >
                <View style={styles.listContainer}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.cases}</Text>
                    <Text>{item.deaths}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // ListHeaderComponent={this.header}
          />
        </View>
      );
    }
  }

  export class AustraliaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true, 
        // query:"",
        // dataSource:[],
        // data:[],
        search:null,
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/australia')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
              data:responseJson,
              // dataSlugs:responseJson.Slug,
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
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
          {/* <TextInput placeholder="Search">
          </TextInput> */}
          <FlatList
            data={this.state.dataSource.countries}
            renderItem={({ item }) => (
                // console.log(item),
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   // this.props.navigation.navigate({
                //   //   routeName:"ItemDetails",
                //   //   params: { item },
                //   // })
                //   this.props.navigation.navigate("ItemDetails",{item})
                // }
                >
                <View style={styles.listContainer}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.cases}</Text>
                    <Text>{item.deaths}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // ListHeaderComponent={this.header}
          />
        </View>
      );
    }
  }

  
  export class AfricaApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true, 
        // query:"",
        // dataSource:[],
        // data:[],
        search:null,
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/africa')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
              data:responseJson,
              // dataSlugs:responseJson.Slug,
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
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
          {/* <TextInput placeholder="Search">
          </TextInput> */}
          <FlatList
            data={this.state.dataSource.countries}
            renderItem={({ item }) => (
                // console.log(item),
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   // this.props.navigation.navigate({
                //   //   routeName:"ItemDetails",
                //   //   params: { item },
                //   // })
                //   this.props.navigation.navigate("ItemDetails",{item})
                // }
                >
                <View style={styles.listContainer}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.cases}</Text>
                    <Text>{item.deaths}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // ListHeaderComponent={this.header}
          />
        </View>
      );
    }
  }

  
  export class EuropeApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        isLoading: true, 
        // query:"",
        // dataSource:[],
        // data:[],
        search:null,
      };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://covid19-update-api.herokuapp.com/api/v1/world/continent/europe')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
              data:responseJson,
              // dataSlugs:responseJson.Slug,
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
        return (
          <View style={{ flex: 1, padding: 20 }}>
            <ActivityIndicator size="large" />
            <Text>Loading Data from JSON Placeholder API ...</Text>
          </View>
        );
      }
  
      return (
        <View style={{ paddingTop: 5 }}>
          {/* <TextInput placeholder="Search">
          </TextInput> */}
          <FlatList
            data={this.state.dataSource.countries}
            renderItem={({ item }) => (
                // console.log(item),
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   // this.props.navigation.navigate({
                //   //   routeName:"ItemDetails",
                //   //   params: { item },
                //   // })
                //   this.props.navigation.navigate("ItemDetails",{item})
                // }
                >
                <View style={styles.listContainer}>
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.cases}</Text>
                    <Text>{item.deaths}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            // ListHeaderComponent={this.header}
          />
        </View>
      );
    }
  }

//   export const AsiaApiScreen = ()=>{
//       return(
//           <Stack.Navigator>
//               <Stack.Screen name="Asia" component={AsiaApi}/>
//           </Stack.Navigator>
//       );
//   }

  const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      //backgroundColor: 'lightgrey'
    },
  });