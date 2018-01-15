/**
 * Created by guillaumetran on 15/01/2018.
 */
import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Logo = require("../../assets/images/Logo.png");

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ flex: 1, width: "30%" }}
          resizeMode="contain"
          source={Logo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { height: 10, width: 0 }
  }
});
