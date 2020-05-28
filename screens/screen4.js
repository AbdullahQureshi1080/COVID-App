import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomView from "../components/listViewComponent";

export class AsiaApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch(
      "https://covid19-update-api.herokuapp.com/api/v1/world/continent/asia"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
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
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 5, backgroundColor: "#f5cb5c" }}>
        <FlatList
          data={this.state.dataSource.countries}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.listContainer}>
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <CustomView
                    name={item.name}
                    cases={item.cases}
                    deaths={item.deaths}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch(
      "https://covid19-update-api.herokuapp.com/api/v1/world/continent/south"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
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
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data from JSON Placeholder API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 5, backgroundColor: "#D02760" }}>
        <FlatList
          data={this.state.dataSource.countries}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.listContainer}>
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <CustomView
                    name={item.name}
                    cases={item.cases}
                    deaths={item.deaths}
                    color={"#e5e5e5"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch(
      "https://covid19-update-api.herokuapp.com/api/v1/world/continent/north"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
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
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 5, backgroundColor: "#D02760" }}>
        <FlatList
          data={this.state.dataSource.countries}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.listContainer}>
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <CustomView
                    name={item.name}
                    cases={item.cases}
                    deaths={item.deaths}
                    color={"#e5e5e5"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch(
      "https://covid19-update-api.herokuapp.com/api/v1/world/continent/australia"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
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
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data from JSON Placeholder API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 5, backgroundColor: "#40916c" }}>
        <FlatList
          data={this.state.dataSource.countries}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.listContainer}>
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <CustomView
                    name={item.name}
                    cases={item.cases}
                    deaths={item.deaths}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch(
      "https://covid19-update-api.herokuapp.com/api/v1/world/continent/africa"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
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
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 5, backgroundColor: "#333533" }}>
        <FlatList
          data={this.state.dataSource.countries}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.listContainer}>
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <CustomView
                    name={item.name}
                    cases={item.cases}
                    deaths={item.deaths}
                    color={"#e5e5e5"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
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
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    return fetch(
      "https://covid19-update-api.herokuapp.com/api/v1/world/continent/europe"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
            data: responseJson,
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
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator size="large" />
          <Text>Loading Data API ...</Text>
        </View>
      );
    }

    return (
      <View style={{ paddingTop: 5, backgroundColor: "#0466c8" }}>
        <FlatList
          data={this.state.dataSource.countries}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.listContainer}>
                <View style={{ paddingLeft: 5, paddingRight: 10 }}>
                  <CustomView
                    name={item.name}
                    cases={item.cases}
                    deaths={item.deaths}
                    color={"#e5e5e5"}
                  />
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
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
