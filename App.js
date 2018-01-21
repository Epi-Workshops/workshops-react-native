import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Final from "./src/Final/Final";
import Workshop from "./src/Workshop-1/Workshop";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Workshop />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
