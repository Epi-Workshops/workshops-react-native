/**
 * Created by guillaumetran on 15/01/2018.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

export default class Final extends React.Component {
  state = {
    swiperLoaded: true
  };

  setSwiper(value) {
    this.swiper = value;
    this.setState({ swiperLoaded: true });
  }

  swipeRight() {
    if (this.state.swiperLoaded) this.swiper._forceRightSwipe();
  }

  swipeLeft() {
    if (this.state.swiperLoaded) this.swiper._forceLeftSwipe();
  }

  swipeUp() {
    if (this.state.swiperLoaded) this.swiper._forceUpSwipe();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{ flex: 8 }}>
          <Body setSwiper={value => this.setSwiper(value)} />
        </View>
        <View style={{ flex: 2, backgroundColor: "transparent" }}>
          <Footer
            swipeRight={() => this.swipeRight()}
            swipeLeft={() => this.swipeLeft()}
            swipeUp={() => this.swipeUp()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
