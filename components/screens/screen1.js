
import * as React from "react";
import { Text,StyleSheet,View, ActivityIndicator,FlatList,TouchableOpacity,} from "react-native";
import { TextInput } from "react-native-paper";

export default class APIDataScreen extends React.Component {
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
      return fetch('https://api.covid19api.com/countries')
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

  handleSearch = search => {
    this.setState({ search }, () => {
        if ('' == search) {
            this.setState({
                dataSource: [...this.state.data]
            });
            return;
        }    
        this.state.dataSource = this.state.data.filter(function(item){
            return item.Country.includes(search);
          }).map(function({Country,Slug,ISO2}){
            return{Country,Slug,ISO2}
          })
    });
};

  header=()=>{
    return <TextInput 
    placeholder="Type Here..."
     onChangeText={this.handleSearch} 
     value = {this.state.search}/>;
  }

//  contains = (dataC, query) => {
//   //  console.log(item);
//   dataC = dataSource
//   const con = Country;
//    console.log(query);
//     if () {
//       return true;
//     }
//     return false;
//   };

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
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  // this.props.navigation.navigate({
                  //   routeName:"ItemDetails",
                  //   params: { item },
                  // })
                  this.props.navigation.navigate("CountryStats",{slug:item.Slug})
                }
                >
                <View style={styles.listContainer}>
                  {/* <Image
                    style={{ width: 40, height: 40 }}
                    source={{ uri: item.thumbnailUrl }}
                  /> */}
                  <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                    <Text>{item.Country}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            ListHeaderComponent={this.header}
            ListEmptyComponent={() => (
              <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                  <Text style={{fontSize: 20}}>No Country With This Name</Text>
              </View>
            )}
          />
        </View>
      );
    }
  }

  // const ItemDetailsScreen = props => {
  //   const item = props.navigation.getParam('itemObj');
  //   return (
  //     <View style={{ alignItems: 'center', paddingTop: 5 }}>
  //       {/* <Image
  //         style={{ width: '50%', height: '50%' }}
  //         source={{ uri: item.thumbnailUrl }}
  //       /> */}
  //       <Text style={{ textAlign: 'center' }}>{item.Country}</Text>
  //     </View>
  //   );
  // };

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
  