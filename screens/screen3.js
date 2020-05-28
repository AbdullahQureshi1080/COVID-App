import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import style from "../styles/allStyles";

const styles = style;

const Stack = createStackNavigator();

class globalSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newConfirmed: "",
      totalConfirmed: "",
      newDeaths: "",
      totalDeaths: "",
      newRecovered: "",
      totalRecovered: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            newConfirmed: responseJson.Global.NewConfirmed,
            totalConfirmed: responseJson.Global.TotalConfirmed,
            newDeaths: responseJson.Global.NewDeaths,
            totalDeaths: responseJson.Global.TotalDeaths,
            newRecovered: responseJson.Global.NewRecovered,
            totalRecovered: responseJson.Global.TotalRecovered,
          },
          function () {}
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      console.log(this.state.dataSource);
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data API ...</Text>
        </View>
      );
    }

    return (
      <ScrollView style={{ paddingTop: 65, backgroundColor: "#e5e5e5" }}>
        <View style={{ paddingBottom: 30 }}>
          <View style={{ ...styles.Card, backgroundColor: "#e5e5e5" }}>
            <View
              style={{
                ...styles.Card,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                New Confirmed
              </Text>
              <Text style={{ ...styles.cardContainerText }}>:</Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                {this.state.newConfirmed}
              </Text>
            </View>
            <View
              style={{
                ...styles.Card,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                Total Confirmed
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                :
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                {this.state.totalConfirmed}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 30 }}>
          <View style={{ ...styles.Card, backgroundColor: "#e5e5e5" }}>
            <View
              style={{
                ...styles.Card,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                New Deaths
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                :
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                {this.state.newDeaths}
              </Text>
            </View>
            <View
              style={{
                ...styles.Card,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                Total Deaths
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                :
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                {this.state.totalDeaths}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ paddingBottom: 30 }}>
          <View style={{ ...styles.Card, backgroundColor: "#e5e5e5" }}>
            <View
              style={{
                ...styles.Card,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                New Recovered
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                :
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                {this.state.newRecovered}
              </Text>
            </View>
            <View
              style={{
                ...styles.Card,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                Total Recovered
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                :
              </Text>
              <Text style={{ ...styles.cardContainerText, fontSize: 22 }}>
                {this.state.totalRecovered}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const navContainerGS = () => {
  return (
    <Stack.Navigator
      initialRouteName="Global Summary"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: "center",
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: styles.listContainer.backgroundColor,
        },
        headerLeft: () => (
          <View style={{ paddingLeft: 20 }}>
            <Ionicons
              name="md-menu"
              size={32}
              color="#ffffff"
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
        ),
      })}
    >
      <Stack.Screen name="Global Summary" component={globalSummary} />
    </Stack.Navigator>
  );
};

export default navContainerGS;
