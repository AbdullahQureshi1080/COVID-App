
import * as React from "react";
import { StyleSheet, Text, View, ActivityIndicator,FlatList,TouchableOpacity,Image } from "react-native";

export default class APIDataScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: true };
    }
  
    componentDidMount() {
      this.getData();
    }
  
    getData() {
      return fetch('https://api.covid19api.com/countries')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson,
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
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                // onPress={() =>
                //   this.props.navigation.navigate({
                //     routeName: 'ItemDetails',
                //     params: { itemObj: item },
                //   })
                // }
                >
                <View style={styles.listContainer}>
                  <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: item.thumbnailUrl }}
                  />
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.Country}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    listContainer: {
      flex: 1,
      flexDirection: 'row',
      padding: 3,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      //backgroundColor: 'lightgrey'
    },
  });