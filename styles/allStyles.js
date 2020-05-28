import * as React from "react";
import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
  search: {
    backgroundColor: "#fca311",
    borderRadius: 10,
    color: "#000000",
  },
  cardContainerText: {
    fontSize: 18,
    color: "#E5E5E5",
  },
  cardContainer: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  Card: {
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "#14213D",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    backgroundColor: "#03071e",
  },
});
