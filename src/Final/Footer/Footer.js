/**
 * Created by guillaumetran on 15/01/2018.
 */
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { EvilIcons, Ionicons, FontAwesome } from "@expo/vector-icons";

import Button from "./Button/Button";

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <Button
            color="white"
            size={80}
            animation={true}
            shadow={true}
            onPress={() => this.props.swipeLeft()}
          >
            <View style={styles.buttonView}>
              <EvilIcons name="close" color="rgb(255,59,48)" size={64} />
            </View>
          </Button>
          <Button
            color="white"
            animation={true}
            shadow={true}
            onPress={() => this.props.swipeUp()}
          >
            <View style={styles.buttonView}>
              <FontAwesome name="star" color="rgb(0,122,255)" size={30} />
            </View>
          </Button>
          <Button
            color="white"
            size={80}
            animation={true}
            shadow={true}
            onPress={() => this.props.swipeRight()}
          >
            <View style={styles.buttonView}>
              <Ionicons
                name="ios-checkmark"
                color="rgb(76,217,100)"
                size={80}
              />
            </View>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonRow: {
    flex: 0.75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  }
});
