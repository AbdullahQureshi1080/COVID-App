import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default class CountryStatsScreen extends React.Component {
  constructor(props) {
    super(props);
    const slug = this.props.route.params;
    this.state = {
      countrySlug: slug,
      countryName: "",
      firstDayCases: "",
      firstDayDate: "",
      totalConfirmed: "",
      totalDeaths: "",
      totalRecovered: "",
      totalActive: "",
    };
  }

  componentDidMount() {
    this.getDataFirstDay();
    this.getDataTotal();
  }

  getDataFirstDay() {
    const slug = this.state.countrySlug.slug;
    console.log(slug);
    return fetch(
      "https://api.covid19api.com/dayone/country/" + slug + "/status/confirmed"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            firstDayCases: responseJson[0].Cases,
            countryName: responseJson[0].Country,
            firstDayDate: responseJson[0].Date.slice(0, 10),
          }
          // function() {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getDataTotal() {
    const slug = this.state.countrySlug.slug;
    return fetch("https://api.covid19api.com/country/" + slug)
      .then((response) => response.json())
      .then((responseJson) => {
        // const apiData = responseJSON
        this.setState(
          {
            totalConfirmed:
              responseJson[Object.keys(responseJson).length - 1].Confirmed,
            totalDeaths:
              responseJson[Object.keys(responseJson).length - 1].Deaths,
            totalRecovered:
              responseJson[Object.keys(responseJson).length - 1].Recovered,
            totalActive:
              responseJson[Object.keys(responseJson).length - 1].Active,
          }
          // function() {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
      <ScrollView style={{ paddingTop: 25, backgroundColor: "#e5e5e5" }}>
        <View style={styles.Card}>
          <Text style={styles.cardContainerText}>
            {this.state.countryName.toUpperCase()}
          </Text>
        </View>
        <Text
          style={{
            ...styles.cardContainerText,
            color: "black",
            fontWeight: "bold",
            paddingTop: 20,
            paddingBottom: 10,
            textAlign: "center",
          }}
        >
          First Day
        </Text>
        <View style={{ ...styles.Card, flexDirection: "row" }}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerText}>Cases</Text>
            <Text style={styles.cardContainerText}>Date</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerText}>:</Text>
            <Text style={styles.cardContainerText}>:</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerText}>
              {this.state.firstDayCases}
            </Text>
            <Text style={styles.cardContainerText}>
              {this.state.firstDayDate}
            </Text>
          </View>
        </View>
        <Text
          style={{
            ...styles.cardContainerText,
            color: "black",
            fontWeight: "bold",
            paddingTop: 20,
            textAlign: "center",
          }}
        >
          Total Statistics
        </Text>
        <View style={{ ...styles.Card, flexDirection: "row" }}>
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerText}>Total Confirmed</Text>
            <Text style={styles.cardContainerText}>Total Deaths </Text>
            <Text style={styles.cardContainerText}>Total Recovered</Text>
            <Text style={styles.cardContainerText}>Total Active </Text>
          </View>
          <View>
            <Text style={styles.cardContainerText}>:</Text>
            <Text style={styles.cardContainerText}>:</Text>
            <Text style={styles.cardContainerText}>:</Text>
            <Text style={styles.cardContainerText}>:</Text>
          </View>
          <View style={styles.cardContainer}>
            <Text style={styles.cardContainerText}>
              {this.state.totalConfirmed}
            </Text>
            <Text style={styles.cardContainerText}>
              {this.state.totalDeaths}
            </Text>
            <Text style={styles.cardContainerText}>
              {this.state.totalRecovered}
            </Text>
            <Text style={styles.cardContainerText}>
              {this.state.totalActive}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cardContainerText: {
    fontSize: 20,
    color: "#E5E5E5",
    // textAlign:"center",
  },
  cardContainer: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  Card: {
    // flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#14213D",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    // marginTop: Constants.statusBarHeight,
    // backgroundColor: 'lightgrey'
  },
});
