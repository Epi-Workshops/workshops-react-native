/**
 * Created by guillaumetran on 15/01/2018.
 */
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");

export default class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            borderRadius: 20,
            overflow: "hidden"
          }}
        >
          <ImageBackground style={{ flex: 1 }} source={this.props.person.image}>
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <View
                style={{
                  flex: 0.15,
                  paddingLeft: "5%",
                  backgroundColor: "rgba(0,0,0,.6)",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.text}>
                  {this.props.person.name}, {this.props.person.age} ans
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { height: 5, width: 0 },
    elevation: 10
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  }
});
