import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Final from "./src/Final/Final";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Final />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
