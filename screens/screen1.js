import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import style from "../styles/allStyles";

const styles = style;
export default class APIDataScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      // query:"",
      // dataSource:[],
      // data:[],
      search: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch("https://api.covid19api.com/countries")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
            // dataSlugs:responseJson.Slug,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleSearch = (search) => {
    this.setState({ search }, () => {
      if ("" == search) {
        this.setState({
          dataSource: [...this.state.data],
        });
        return;
      }
      this.state.dataSource = this.state.data
        .filter(function (item) {
          return item.Country.includes(search);
        })
        .map(function ({ Country, Slug, ISO2 }) {
          return { Country, Slug, ISO2 };
        });
    });
  };

  header = () => {
    return (
      <TextInput
        placeholder="Search by name..."
        onChangeText={this.handleSearch}
        value={this.state.search}
        style={styles.search}
      />
    );
    //  style={styles.search};
  };

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
          <Text>Loading Data API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ ...styles.listContainer, backgroundColor: "#e5e5e5" }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                this.props.navigation.navigate("CountryStats", {
                  slug: item.Slug,
                })
              }
            >
              <View style={styles.Card}>
                <View style={styles.cardContainer}>
                  <Text style={styles.cardContainerText}>{item.Country}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListHeaderComponent={this.header}
          ListEmptyComponent={() => (
            <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
              <Text style={{ fontSize: 20 }}>No Country With This Name</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
