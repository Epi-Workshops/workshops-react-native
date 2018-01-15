/**
 * Created by guillaumetran on 15/01/2018.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards";
import Card from "./Card/Card";

const People = [
  {
    name: "Miaws",
    age: 20,
    image: require("../../assets/images/Profile1.jpg")
  },
  {
    name: "Miou",
    age: 23,
    image: require("../../assets/images/Profile2.jpg")
  },
  {
    name: "Bernard",
    age: 19,
    image: require("../../assets/images/Profile3.jpg")
  },
  {
    name: "Michel",
    age: 27,
    image: require("../../assets/images/Profile4.jpg")
  }
];

export default class Body extends React.Component {
  state = {
    loaded: false
  };

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 0.95, flexDirection: "row", justifyContent: "center" }}
        >
          <View style={{ flex: 0.9 }}>
            <SwipeCards
              ref={swiper => {
                if (!this.state.loaded) {
                  this.props.setSwiper(swiper);
                  this.setState({ loaded: true });
                }
              }}
              cards={People}
              renderCard={cardData => <Card person={cardData} />}
              renderNoMoreCards={() => (
                <Text style={{ color: "grey", fontSize: 18 }}>
                  Aucune personne à proximité.
                </Text>
              )}
              hasMaybeAction
              showYup={false}
              showNope={false}
              showMaybe={false}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  }
});
