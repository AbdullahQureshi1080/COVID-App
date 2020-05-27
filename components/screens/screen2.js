
import * as React from "react";
import { Text,StyleSheet,View, ActivityIndicator,FlatList,TouchableOpacity,} from "react-native";
import { TextInput } from "react-native-paper";


export default class CountryStatsScreen extends React.Component {
    constructor(props) {
      super(props);
      const slug = this.props.route.params;
      // console.log(countrySlug)
      this.state = { 
        countrySlug: slug,
        countryName: '',
        firstDayCases: '',
        firstDayDate: '',
        totalConfirmed: '',
        totalDeaths: '',
        totalRecovered: '',
        totalActive: '',
      };
    }
  
    componentDidMount() {
      this.getDataFirstDay();
      this.getDataTotal();
    }
  
    getDataFirstDay() {
      const slug = this.state.countrySlug.slug;
      console.log(slug);
      return fetch('https://api.covid19api.com/dayone/country/' + slug + '/status/confirmed')
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              firstDayCases: responseJson[0].Cases,
              countryName: responseJson[0].Country,
              firstDayDate: responseJson[0].Date.slice(0,10),
            },
            // function() {}
          );
        })
        .catch(error => {
          console.error(error);
        });
    }
    getDataTotal() {
      const slug = this.state.countrySlug.slug
      return fetch('https://api.covid19api.com/country/' + slug)
        .then(response => response.json())
        .then(responseJson => {
          // const apiData = responseJSON
          this.setState(
            {
                    totalConfirmed: responseJson[Object.keys(responseJson).length - 1].Confirmed,
                    totalDeaths: responseJson[Object.keys(responseJson).length - 1].Deaths,
                    totalRecovered: responseJson[Object.keys(responseJson).length - 1].Recovered,
                    totalActive: responseJson[Object.keys(responseJson).length - 1].Active
            },
            // function() {}
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
          <View>
            <Text>{this.state.countryName}</Text>
          </View>
          <View>
          <Text>{this.state.firstDayCases}</Text>
          </View>
          <View>
          <Text>{this.state.firstDayDate}</Text>
          </View>
          <View>
          <Text>{this.state.totalConfirmed}</Text>
          </View>
          <View>
          <Text>{this.state.totalDeaths}</Text>
          </View>
          <View>
          <Text>{this.state.totalRecovered}</Text>
          </View>
          <View>
          <Text>{this.state.totalActive}</Text>
          </View>
        </View>
      );
    }
  }

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
  